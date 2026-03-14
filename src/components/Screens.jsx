import { useState, useEffect } from "react";
import { LEVELS, MIN_CORRECT } from "../data/gameData";

export function IntroScreen({ onStart, onTutorial }) {
  const [vis, setVis] = useState(false);
  useEffect(() => { setTimeout(() => setVis(true), 80); }, []);
  return (
    <div className={`screen intro-screen ${vis ? "visible" : ""}`}>
      <div className="intro-grid" />
      <div className="intro-layout">
        <div className="intro-copy">
          <div className="intro-badge"><span className="badge-pulse" />VeyharCorp — Transformación Digital</div>
          <h1 className="intro-title"><span className="title-ai">AI</span><br /><span className="title-rest">Consultant</span></h1>
          <p className="intro-sub">¿Tienes el criterio para escalar hasta la Sala del CEO?</p>
          <p className="intro-desc">5 pisos. 15 retos interactivos. Haz clic en los objetos del escritorio, recibe el briefing del Director y demuestra tu criterio en IA Generativa.</p>
          <div className="intro-rule"><span>🎯</span><span>Mínimo <strong>{MIN_CORRECT} de 3</strong> correctos para subir de piso</span></div>
          <div className="intro-btns">
            <button className="btn-start" onClick={onStart}>Iniciar carrera en VeyharCorp <span>→</span></button>
            <button className="btn-tutorial" onClick={onTutorial}>¿Cómo se juega?</button>
          </div>
        </div>
        <div className="intro-building">
          {[...LEVELS].reverse().map((l, i) => (
            <div key={l.id} className="ib-floor" style={{ "--fc": l.accentColor, animationDelay: `${i * 0.09}s` }}>
              <div className="ib-wins">{[0,1,2,3].map(w => <div key={w} className="ib-win" style={{ animationDelay: `${w*0.2+i*0.1}s` }}/>)}</div>
              <div className="ib-label"><span>{l.floorIcon}</span><span className="ib-name" style={{ color: l.accentColor }}>{l.floor}</span></div>
            </div>
          ))}
          <div className="ib-base" />
        </div>
      </div>
    </div>
  );
}

export function LevelResultScreen({ level, correctCount, totalChallenges, levelScore, feedbackText, passed, onContinue, onRetry }) {
  const [vis, setVis] = useState(false);
  useEffect(() => { setTimeout(() => setVis(true), 80); }, []);
  return (
    <div className={`screen level-result ${vis ? "visible" : ""}`} style={{ "--lc": level.accentColor }}>
      <div className="lr-content">
        <div className={`lr-badge ${passed ? "lr-pass" : "lr-fail"}`}>
          {passed ? `✓ PISO ${level.id} SUPERADO` : `✗ PISO ${level.id} — REPITE`}
        </div>
        <h2 className="lr-floor">{level.floor}</h2>
        <p className="lr-concept">Concepto: <strong>{level.concept}</strong></p>
        <div className="lr-scores">
          <div className="lr-score-box"><span className="lrs-label">Correctas</span><span className="lrs-val" style={{ color: passed ? "var(--green)" : "var(--red)" }}>{correctCount}/{totalChallenges}</span></div>
          <div className="lr-score-box"><span className="lrs-label">Puntos</span><span className="lrs-val" style={{ color: level.accentColor }}>{levelScore}</span></div>
          <div className="lr-score-box"><span className="lrs-label">Mínimo</span><span className="lrs-val" style={{ color: "var(--muted)" }}>{MIN_CORRECT}/{totalChallenges}</span></div>
        </div>
        {feedbackText && (
          <div className="lr-feedback"><span className="lr-from">👔 Director · VeyharCorp</span><p>{feedbackText}</p></div>
        )}
        {passed ? (
          <button className="btn-continue" style={{ background: level.accentColor }} onClick={onContinue}>
            Subir al siguiente piso →
          </button>
        ) : (
          <div className="lr-retry">
            <p>¡Las preguntas serán diferentes en el siguiente intento!</p>
            <button className="btn-retry" onClick={onRetry}>🔄 Repetir nivel con nuevas preguntas</button>
          </div>
        )}
      </div>
    </div>
  );
}

export function FinalResultScreen({ totalScore, maxScore, levelScores, title, finalMessage, onRestart }) {
  const [vis, setVis] = useState(false);
  const pct = Math.round((totalScore / maxScore) * 100);
  useEffect(() => { setTimeout(() => setVis(true), 80); }, []);
  const shareText = `🏢 Completé VeyharCorp AI Consultant!\n🏆 "${title.title}" — ${pct}% de aciertos\n¿Puedes superarme? 👉 ${window.location.href}`;
  return (
    <div className={`screen final-screen ${vis ? "visible" : ""}`}>
      <div className="final-glow" />
      <div className="final-content">
        <div className="final-building">
          {[...LEVELS].reverse().map((l, i) => (
            <div key={l.id} className="ib-floor ib-done" style={{ "--fc": l.accentColor }}>
              <div className="ib-wins">{[0,1,2,3].map(w => <div key={w} className="ib-win ib-win-lit" style={{ "--fc": l.accentColor, animationDelay: `${w*0.15}s` }}/>)}</div>
              <div className="ib-label"><span>{l.floorIcon}</span><span className="ib-name" style={{ color: l.accentColor }}>{l.floor}</span></div>
            </div>
          ))}
          <div className="ib-base" />
        </div>
        <div className="final-emoji">{title.emoji}</div>
        <h2 className="final-title">{title.title}</h2>
        <p className="final-sub">{title.subtitle}</p>
        <div className="score-ring-wrap">
          <svg viewBox="0 0 120 120" className="score-ring-svg">
            <circle cx="60" cy="60" r="50" fill="none" stroke="#1e293b" strokeWidth="8"/>
            <circle cx="60" cy="60" r="50" fill="none" stroke="#A855F7" strokeWidth="8"
              strokeDasharray={`${2*Math.PI*50}`}
              strokeDashoffset={`${2*Math.PI*50*(1-pct/100)}`}
              strokeLinecap="round"
              style={{transform:"rotate(-90deg)",transformOrigin:"60px 60px",transition:"stroke-dashoffset 1.8s ease 0.3s"}}/>
          </svg>
          <div className="score-ring-inner"><span className="ring-pct">{pct}%</span><span className="ring-pts">{totalScore}/{maxScore} pts</span></div>
        </div>
        <div className="level-breakdown">
          {LEVELS.map((l, i) => (
            <div key={l.id} className="lb-row">
              <span>{l.floorIcon}</span>
              <span className="lb-name">{l.floor}</span>
              <span style={{ color: l.accentColor, fontWeight: 700, fontFamily: "monospace" }}>{levelScores[i] || 0} pts</span>
            </div>
          ))}
        </div>
        {finalMessage && <div className="final-message"><p>{finalMessage}</p></div>}
        <div className="final-actions">
          <button className="btn-whatsapp" onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, "_blank")}>📲 Compartir en WhatsApp</button>
          <button className="btn-restart" onClick={onRestart}>Volver a intentarlo</button>
        </div>
      </div>
    </div>
  );
}
