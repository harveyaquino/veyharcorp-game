import { useState, useEffect } from "react";

const API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY;

async function fetchNarrative(situation, chosenName, correctName, isCorrect) {
  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
        "anthropic-version": "2023-06-01",
        "anthropic-dangerous-direct-browser-access": "true",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 150,
        system: `Eres el Director de VeyharCorp comentando la decisión. Tono: corporativo, empoderador, directo. Español. EXACTAMENTE 2 oraciones + 1 emoji al inicio.`,
        messages: [{ role: "user", content: `Situación: "${situation}" | Eligió: "${chosenName}" | Correcto: "${correctName}" | ¿Acertó? ${isCorrect ? "SÍ" : "NO"}` }],
      }),
    });
    const data = await res.json();
    return data.content?.[0]?.text || null;
  } catch {
    return isCorrect
      ? "✅ ¡Criterio impecable! Eso es exactamente lo que VeyharCorp espera."
      : "💡 No era la opción óptima — pero así se forja el criterio de un consultor experto.";
  }
}

export function ChallengeModal({ challenge, level, onClose, onSolved }) {
  const [selected, setSelected]     = useState(null);
  const [revealed, setRevealed]     = useState(false);
  const [narrative, setNarrative]   = useState(null);
  const [loading, setLoading]       = useState(false);
  const [animIn, setAnimIn]         = useState(false);

  useEffect(() => { setTimeout(() => setAnimIn(true), 30); }, []);

  const handleSelect = async (optId) => {
    if (revealed) return;
    const isCorrect = optId === challenge.correct;
    const chosen  = challenge.options.find(o => o.id === optId);
    const correct = challenge.options.find(o => o.id === challenge.correct);
    setSelected(optId);
    setRevealed(true);
    setLoading(true);
    const text = await fetchNarrative(challenge.situation, chosen?.name, correct?.name, isCorrect);
    setNarrative(text);
    setLoading(false);
  };

  const handleContinue = () => {
    onSolved({ isCorrect: selected === challenge.correct, points: selected === challenge.correct ? challenge.points : 0 });
  };

  const getState = (id) => {
    if (!revealed) return "idle";
    if (id === challenge.correct) return "correct";
    if (id === selected) return "wrong";
    return "dim";
  };

  return (
    <div className={`modal-backdrop ${animIn ? "modal-in" : ""}`} onClick={e => { if (e.target === e.currentTarget && !revealed) onClose(); }}>
      <div className="challenge-modal" style={{ "--lc": level.accentColor }}>
        {/* Top accent bar */}
        <div className="modal-bar" style={{ background: level.accentColor }} />

        {/* Header */}
        <div className="modal-header">
          <div className="modal-director">
            <div className="modal-avatar" style={{ borderColor: level.accentColor }}>👔</div>
            <div>
              <div className="modal-director-label">DIRECTOR · VEYHARCORP</div>
              <div className="modal-floor-tag" style={{ color: level.accentColor }}>{level.floor}</div>
            </div>
          </div>
          <div className="modal-pts-badge" style={{ borderColor: level.accentColor, color: level.accentColor }}>
            +{challenge.points} pts
          </div>
        </div>

        {/* Situation */}
        <p className="modal-situation">{challenge.situation}</p>

        {/* Options */}
        <p className="modal-options-label">¿Cuál es tu recomendación?</p>
        <div className={`modal-options g${challenge.options.length}`}>
          {challenge.options.map(opt => {
            const st = getState(opt.id);
            return (
              <button key={opt.id} className={`modal-opt st-${st}`}
                style={{ "--oc": opt.color }} onClick={() => handleSelect(opt.id)} disabled={revealed}>
                <span className="mopt-icon">{opt.icon}</span>
                <div className="mopt-body">
                  <span className="mopt-name">{opt.name}</span>
                  <span className="mopt-desc">{opt.desc}</span>
                </div>
                {st === "correct" && <span className="mopt-mark ok">✓</span>}
                {st === "wrong"   && <span className="mopt-mark no">✗</span>}
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {revealed && (
          <div className={`modal-feedback ${selected === challenge.correct ? "fb-ok" : "fb-no"}`}>
            <div className="modal-reaction">
              {loading
                ? <div className="modal-loading"><span className="ld"/><span className="ld"/><span className="ld"/><span>El Director evalúa...</span></div>
                : <p className="modal-narrative">{narrative}</p>
              }
              <span className="modal-pts" style={{ color: selected === challenge.correct ? "var(--green)" : "var(--red)" }}>
                {selected === challenge.correct ? `+${challenge.points}` : "+0"} pts
              </span>
            </div>
            <div className="modal-explanation">
              <span className="modal-exp-label">📚 ¿Por qué esta respuesta?</span>
              <p className="modal-exp-text">{challenge.explanation}</p>
            </div>
            <button className="modal-btn-continue" style={{ background: level.accentColor }} onClick={handleContinue}>
              Volver al escritorio →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
