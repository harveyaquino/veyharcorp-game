import { useState, useEffect } from "react";
import { LEVELS, TITLES, MIN_CORRECT, pickOnePerObject } from "./data/gameData";
import { IntroScreen, LevelResultScreen, FinalResultScreen } from "./components/Screens";
import { DeskScene } from "./components/DeskScene";
import { ChallengeModal } from "./components/ChallengeModal";
import { Tutorial, HelpButton } from "./components/Tutorial";
import "./App.css";

const PHASE = { INTRO:"intro", DESK:"desk", CHALLENGE:"challenge", LEVEL_RESULT:"level_result", FINAL:"final" };

const apiCall = async (system, content, maxTokens=150) => {
  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method:"POST",
      headers:{"Content-Type":"application/json","x-api-key":import.meta.env.VITE_ANTHROPIC_API_KEY,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},
      body: JSON.stringify({ model:"claude-sonnet-4-20250514", max_tokens:maxTokens, system, messages:[{role:"user",content}] }),
    });
    const data = await res.json();
    return data.content?.[0]?.text || null;
  } catch { return null; }
};

const THEME_MAP = { 1:"reception", 2:"meeting", 3:"projects", 4:"director", 5:"ceo" };

export default function App() {
  const [phase, setPhase]           = useState(PHASE.INTRO);
  const [showTutorial, setShowTutorial] = useState(false);
  const [levelIdx, setLevelIdx]     = useState(0);
  const [challenges, setChallenges] = useState([]);       // one per object
  const [solvedObjects, setSolvedObjects] = useState([]); // object ids solved
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [levelScores, setLevelScores] = useState([0,0,0,0,0]);
  const [levelFeedback, setLevelFeedback] = useState("");
  const [passed, setPassed]         = useState(false);
  const [finalMsg, setFinalMsg]     = useState(null);

  const level    = LEVELS[levelIdx];
  const maxScore = LEVELS.reduce((a,l) => a + pickOnePerObject(l.challengePool).reduce((b,c) => b+c.points, 0), 0);

  const getTitle = score => {
    const pct = maxScore > 0 ? (score/maxScore)*100 : 0;
    return TITLES.find(t => pct >= t.min) || TITLES[TITLES.length-1];
  };

  const loadLevel = idx => {
    const picked = pickOnePerObject(LEVELS[idx].challengePool);
    setChallenges(picked);
    setSolvedObjects([]);
    setActiveChallenge(null);
    setCorrectCount(0);
    setLevelFeedback("");
  };

  const handleStart = () => {
    setLevelIdx(0);
    setTotalScore(0);
    setLevelScores([0,0,0,0,0]);
    setFinalMsg(null);
    loadLevel(0);
    setPhase(PHASE.DESK);
  };

  const handleObjectClick = objectId => {
    const ch = challenges.find(c => c.objectId === objectId);
    if (ch) { setActiveChallenge(ch); setPhase(PHASE.CHALLENGE); }
  };

  const handleModalClose = () => setPhase(PHASE.DESK);

  const handleSolved = async ({ isCorrect, points }) => {
    const obj = activeChallenge.objectId;
    const newSolved  = [...solvedObjects, obj];
    const newCorrect = correctCount + (isCorrect ? 1 : 0);
    const newTotal   = totalScore + points;
    const newLS      = [...levelScores];
    newLS[levelIdx]  = (newLS[levelIdx]||0) + points;

    setSolvedObjects(newSolved);
    setCorrectCount(newCorrect);
    setTotalScore(newTotal);
    setLevelScores(newLS);
    setActiveChallenge(null);

    const allDone = newSolved.length === level.objects.length;
    if (allDone) {
      const levelPassed = newCorrect >= MIN_CORRECT;
      setPassed(levelPassed);
      const levelPossible = challenges.reduce((a,c) => a+c.points, 0);
      const fb = await apiCall(
        `Eres el Director de VeyharCorp. ${levelPassed?"Tono empoderador, celebra.":"Tono motivador, anima a intentarlo de nuevo."} Español. 2 oraciones + emoji.`,
        `Consultor ${levelPassed?"PASÓ":"NO pasó"} el nivel "${level.title}". Correctas: ${newCorrect}/${level.objects.length}. Puntos: ${newLS[levelIdx]}/${levelPossible}.`
      );
      setLevelFeedback(fb || (levelPassed
        ? "💼 ¡Nivel superado! El siguiente piso te espera."
        : "💪 Casi lo logras — el siguiente intento será diferente."));
      setPhase(PHASE.LEVEL_RESULT);
    } else {
      setPhase(PHASE.DESK);
    }
  };

  const handleContinue = async () => {
    const isLast = levelIdx === LEVELS.length - 1;
    if (isLast) {
      const title = getTitle(totalScore);
      const pct   = maxScore > 0 ? Math.round((totalScore/maxScore)*100) : 0;
      const msg   = await apiCall(
        "Eres el CEO de VeyharCorp. Tono: épico, motivador. Español. 3 oraciones.",
        `Consultor completó todos los niveles. Score: ${totalScore}/${maxScore} (${pct}%). Título: "${title.title}".`,
        250
      );
      setFinalMsg(msg || "🏆 Has demostrado que el criterio en IA Generativa no se improvisa — se construye exactamente como tú lo hiciste hoy.");
      setPhase(PHASE.FINAL);
    } else {
      const nextIdx = levelIdx + 1;
      setLevelIdx(nextIdx);
      loadLevel(nextIdx);
      setPhase(PHASE.DESK);
    }
  };

  const handleRetry = () => {
    const newLS = [...levelScores]; newLS[levelIdx] = 0;
    setLevelScores(newLS);
    loadLevel(levelIdx);
    setPhase(PHASE.DESK);
  };

  const handleRestart = () => { setPhase(PHASE.INTRO); setFinalMsg(null); };

  // Tutorial auto on first visit
  useEffect(() => {
    if (phase === PHASE.INTRO && !sessionStorage.getItem("tut_seen")) {
      setShowTutorial(true);
      sessionStorage.setItem("tut_seen","1");
    }
  }, [phase]);

  if (phase === PHASE.INTRO) return (
    <>
      <IntroScreen onStart={handleStart} onTutorial={() => setShowTutorial(true)} />
      {showTutorial && <Tutorial onClose={() => setShowTutorial(false)} />}
    </>
  );

  if (phase === PHASE.LEVEL_RESULT) return (
    <LevelResultScreen level={level} correctCount={correctCount} totalChallenges={level.objects.length}
      levelScore={levelScores[levelIdx]} feedbackText={levelFeedback} passed={passed}
      onContinue={handleContinue} onRetry={handleRetry} />
  );

  if (phase === PHASE.FINAL) return (
    <FinalResultScreen totalScore={totalScore} maxScore={maxScore} levelScores={levelScores}
      title={getTitle(totalScore)} finalMessage={finalMsg} onRestart={handleRestart} />
  );

  // DESK + CHALLENGE
  return (
    <div className="game-shell" style={{ "--lc": level?.accentColor || "#6366f1" }}>
      {showTutorial && <Tutorial onClose={() => setShowTutorial(false)} />}

      <header className="hud">
        <span className="hud-logo">VeyharCorp</span>
        <div className="hud-center">
          <span className="hud-floor">🏢 {level?.floor}</span>
          <div className="hud-progress">
            {level?.objects.map(obj => (
              <span key={obj.id} className={`hud-obj-dot ${solvedObjects.includes(obj.id) ? "dot-done" : "dot-idle"}`}
                style={{ "--lc": level.accentColor }} title={obj.label}>
                {solvedObjects.includes(obj.id) ? "✓" : obj.icon}
              </span>
            ))}
          </div>
        </div>
        <div className="hud-right">
          <HelpButton onClick={() => setShowTutorial(true)} />
          <div className="hud-score">
            <span className="hud-score-label">Score</span>
            <span className="hud-score-val">{String(totalScore)}</span>
          </div>
        </div>
      </header>

      <div className="floor-nav">
        {LEVELS.map((l, i) => (
          <div key={l.id} className={`fnav-pip ${i<levelIdx?"pip-done":i===levelIdx?"pip-active":"pip-idle"}`}
            style={{ "--pc": l.accentColor }}>
            <span>{l.id}</span>
          </div>
        ))}
      </div>

      <main className="desk-main">
        <div className="desk-instruction">
          <span className="desk-inst-icon">👆</span>
          <span>Haz clic en los objetos del escritorio para recibir un reto del Director</span>
          <span className="desk-counter">{solvedObjects.length}/{level?.objects.length} resueltos</span>
        </div>

        <DeskScene
          theme={THEME_MAP[level?.id]}
          accentColor={level?.accentColor}
          objects={level?.objects || []}
          solvedObjects={solvedObjects}
          activeObject={activeChallenge?.objectId}
          onObjectClick={handleObjectClick}
        />
      </main>

      {phase === PHASE.CHALLENGE && activeChallenge && (
        <ChallengeModal
          challenge={activeChallenge}
          level={level}
          onClose={handleModalClose}
          onSolved={handleSolved}
        />
      )}
    </div>
  );
}
