import { useState } from "react";

const STEPS = [
  {
    icon: "🏢",
    title: "Estás en VeyharCorp",
    text: "Eres un consultor que debe escalar los 5 pisos de la empresa demostrando criterio en IA Generativa.",
    visual: "building",
  },
  {
    icon: "🖱️",
    title: "Haz clic en los objetos del escritorio",
    text: "Cada escritorio tiene 3 objetos interactivos. Al hacer clic en uno, el Director te lanzará un reto corporativo.",
    visual: "click",
  },
  {
    icon: "🎯",
    title: "Necesitas 2 de 3 para subir de piso",
    text: "Elige la herramienta correcta para cada situación. Si fallas, repites el nivel con preguntas nuevas.",
    visual: "score",
  },
];

export function Tutorial({ onClose }) {
  const [step, setStep] = useState(0);
  const current = STEPS[step];
  const isLast = step === STEPS.length - 1;

  return (
    <div className="tutorial-overlay">
      <div className="tutorial-box">
        <div className="tutorial-steps-dots">
          {STEPS.map((_, i) => (
            <span key={i} className={`tut-dot ${i === step ? "tut-dot-active" : i < step ? "tut-dot-done" : ""}`} />
          ))}
        </div>

        <div className="tutorial-visual">
          {current.visual === "building" && (
            <div className="tut-visual-building">
              {["👑","🎯","⚡","📊","🚪"].map((icon, i) => (
                <div key={i} className="tut-floor" style={{ animationDelay: `${i * 0.08}s` }}>
                  <span>{icon}</span>
                  <div className="tut-floor-wins">
                    {[0,1,2,3].map(w => <div key={w} className="tut-win" />)}
                  </div>
                </div>
              ))}
            </div>
          )}
          {current.visual === "click" && (
            <div className="tut-visual-click">
              <div className="tut-desk-preview">
                <div className="tut-desk-surface" />
                {[
                  { icon:"📧", x:"30%", y:"45%" },
                  { icon:"📞", x:"58%", y:"52%" },
                  { icon:"📋", x:"45%", y:"36%" },
                ].map((obj, i) => (
                  <div key={i} className="tut-hotspot-preview" style={{ left: obj.x, top: obj.y, animationDelay: `${i * 0.3}s` }}>
                    <span>{obj.icon}</span>
                    <div className="tut-hs-pulse" />
                  </div>
                ))}
              </div>
              <p className="tut-click-hint">👆 Los objetos que brillan son clickeables</p>
            </div>
          )}
          {current.visual === "score" && (
            <div className="tut-visual-score">
              <div className="tut-score-demo">
                {[true, false, true].map((correct, i) => (
                  <div key={i} className={`tut-score-dot ${correct ? "tut-correct" : "tut-wrong"}`}>
                    {correct ? "✓" : "✗"}
                  </div>
                ))}
              </div>
              <p className="tut-score-label">2 de 3 = ✅ Subes de piso</p>
              <div className="tut-score-demo">
                {[false, true, false].map((correct, i) => (
                  <div key={i} className={`tut-score-dot ${correct ? "tut-correct" : "tut-wrong"}`}>
                    {correct ? "✓" : "✗"}
                  </div>
                ))}
              </div>
              <p className="tut-score-label tut-score-fail">1 de 3 = 🔄 Repites con nuevas preguntas</p>
            </div>
          )}
        </div>

        <div className="tutorial-text-area">
          <div className="tutorial-icon">{current.icon}</div>
          <h3 className="tutorial-title">{current.title}</h3>
          <p className="tutorial-text">{current.text}</p>
        </div>

        <div className="tutorial-actions">
          {step > 0 && (
            <button className="tut-btn-back" onClick={() => setStep(s => s - 1)}>
              ← Anterior
            </button>
          )}
          <button className="tut-btn-next" onClick={() => isLast ? onClose() : setStep(s => s + 1)}>
            {isLast ? "¡Empezar! →" : "Siguiente →"}
          </button>
        </div>

        <button className="tut-skip" onClick={onClose}>Saltar tutorial</button>
      </div>
    </div>
  );
}

export function HelpButton({ onClick }) {
  return (
    <button className="help-btn" onClick={onClick} title="¿Cómo se juega?">
      ?
    </button>
  );
}
