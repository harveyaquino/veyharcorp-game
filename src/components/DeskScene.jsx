import { useState } from "react";

// SVG desk scenes per floor theme
function DeskScene({ theme, accentColor, objects, solvedObjects, activeObject, onObjectClick }) {
  const scenes = { reception, meeting, projects, director, ceo };
  const SceneComponent = scenes[theme] || reception;
  return (
    <div className="desk-scene-wrap">
      <SceneComponent accent={accentColor} />
      {/* Clickable hotspots overlaid on the scene */}
      {objects.map(obj => {
        const solved = solvedObjects.includes(obj.id);
        const active = activeObject === obj.id;
        return (
          <button
            key={obj.id}
            className={`desk-hotspot ${solved ? "hs-solved" : active ? "hs-active" : "hs-idle"}`}
            style={{ left: `${obj.x}%`, top: `${obj.y}%`, "--ac": accentColor }}
            onClick={() => !solved && onObjectClick(obj.id)}
            disabled={solved}
            title={solved ? "Resuelto ✓" : obj.hint}
          >
            <span className="hs-icon">{obj.icon}</span>
            <span className="hs-label">{solved ? "✓" : obj.label}</span>
            {!solved && !active && <span className="hs-pulse" style={{ background: accentColor }} />}
          </button>
        );
      })}
    </div>
  );
}

// ── RECEPTION ─────────────────────────────────────────────────
function reception({ accent }) {
  return (
    <svg viewBox="0 0 900 420" xmlns="http://www.w3.org/2000/svg" className="desk-svg">
      {/* Room */}
      <rect width="900" height="420" fill="#06090f"/>
      {/* Back wall */}
      <rect x="0" y="0" width="900" height="260" fill="#080c16"/>
      {/* Floor */}
      <rect x="0" y="260" width="900" height="160" fill="#060810"/>
      <line x1="0" y1="260" x2="900" y2="260" stroke={accent} strokeWidth="1" opacity="0.3"/>
      {/* Wall grid */}
      {[150,300,450,600,750].map(x=><line key={x} x1={x} y1="0" x2={x} y2="260" stroke="#0e1525" strokeWidth="1"/>)}
      {[65,130,195].map(y=><line key={y} x1="0" y1={y} x2="900" y2={y} stroke="#0e1525" strokeWidth="1"/>)}
      {/* VeyharCorp sign */}
      <rect x="330" y="20" width="240" height="60" rx="6" fill="#0f1624" stroke={accent} strokeWidth="1.5" opacity="0.9"/>
      <text x="450" y="45" textAnchor="middle" fill={accent} fontSize="14" fontWeight="700" fontFamily="monospace">VEYHARCORP</text>
      <text x="450" y="65" textAnchor="middle" fill="#3a4a60" fontSize="9" fontFamily="monospace">TRANSFORMACIÓN DIGITAL</text>
      {/* Ceiling lights */}
      {[180,450,720].map(x=>(
        <g key={x}>
          <line x1={x} y1="0" x2={x} y2="18" stroke="#1a2030" strokeWidth="2"/>
          <rect x={x-30} y="16" width="60" height="10" rx="4" fill="#1a2030"/>
          <rect x={x-28} y="18" width="56" height="6" rx="3" fill={accent} opacity="0.35"/>
          <ellipse cx={x} cy="260" rx="80" ry="20" fill={accent} opacity="0.04"/>
        </g>
      ))}
      {/* Reception desk */}
      <rect x="250" y="190" width="400" height="70" rx="6" fill="#0f1624" stroke={accent} strokeWidth="1.5" opacity="0.9"/>
      <rect x="255" y="193" width="390" height="12" rx="3" fill={accent} opacity="0.07"/>
      {/* Monitor on desk */}
      <rect x="390" y="155" width="80" height="58" rx="4" fill="#060a10" stroke={accent} strokeWidth="1" opacity="0.9"/>
      <rect x="394" y="159" width="72" height="42" rx="2" fill="#030508"/>
      <rect x="397" y="162" width="66" height="35" rx="1" fill={accent} opacity="0.1"/>
      {[168,174,180,186].map((y,i)=><line key={i} x1="400" y1={y} x2={400+[55,40,50,35][i]} y2={y} stroke={accent} strokeWidth="0.8" opacity="0.4"/>)}
      <rect x="426" y="213" width="10" height="12" rx="1" fill="#0f1624"/>
      <rect x="418" y="225" width="26" height="3" rx="1" fill="#0f1624"/>
      {/* Keyboard */}
      <rect x="375" y="225" width="90" height="22" rx="3" fill="#0a0f1a" stroke="#1a2535" strokeWidth="1"/>
      {[0,1,2,3,4,5,6,7,8,9,10].map(k=><rect key={k} x={379+k*8} y="229" width="6" height="6" rx="1" fill="#0f1624"/>)}
      {/* Plants */}
      <ellipse cx="130" cy="258" rx="28" ry="10" fill="#0a1510"/>
      <path d="M130 258 Q112 220 118 195 Q124 215 130 230 Q136 215 142 195 Q148 220 130 258" fill="#14532d" opacity="0.8"/>
      <path d="M130 258 Q105 235 100 208 Q116 222 130 248" fill="#166534" opacity="0.5"/>
      <ellipse cx="770" cy="258" rx="28" ry="10" fill="#0a1510"/>
      <path d="M770 258 Q752 220 758 195 Q764 215 770 230 Q776 215 782 195 Q788 220 770 258" fill="#14532d" opacity="0.8"/>
      {/* Chairs */}
      <rect x="170" y="225" width="50" height="35" rx="5" fill="#0f1624" stroke="#1a2535" strokeWidth="1"/>
      <rect x="680" y="225" width="50" height="35" rx="5" fill="#0f1624" stroke="#1a2535" strokeWidth="1"/>
      {/* Floor tiles */}
      {[0,1,2,3,4,5,6,7,8].map(x=>[0,1,2].map(y=>(
        <rect key={`${x}-${y}`} x={x*112} y={260+y*53} width="110" height="52" fill="none" stroke="#0c1220" strokeWidth="0.5"/>
      )))}
    </svg>
  );
}

// ── MEETING ROOM ───────────────────────────────────────────────
function meeting({ accent }) {
  return (
    <svg viewBox="0 0 900 420" xmlns="http://www.w3.org/2000/svg" className="desk-svg">
      <rect width="900" height="420" fill="#06090f"/>
      <rect x="0" y="0" width="900" height="260" fill="#07090e"/>
      <rect x="0" y="260" width="900" height="160" fill="#050709"/>
      <line x1="0" y1="260" x2="900" y2="260" stroke={accent} strokeWidth="1" opacity="0.25"/>
      {[150,300,450,600,750].map(x=><line key={x} x1={x} y1="0" x2={x} y2="260" stroke="#0d1018" strokeWidth="1"/>)}
      {/* Projector screen */}
      <rect x="310" y="15" width="280" height="155" rx="3" fill="#030507" stroke={accent} strokeWidth="2" opacity="0.9"/>
      <rect x="314" y="19" width="272" height="147" rx="1" fill="#020406"/>
      <rect x="318" y="23" width="264" height="18" rx="2" fill={accent} opacity="0.18"/>
      <text x="450" y="36" textAnchor="middle" fill={accent} fontSize="10" fontWeight="700" fontFamily="monospace">AI STRATEGY DASHBOARD</text>
      {[5,4,6,3,5,4].map((h,i)=>(
        <rect key={i} x={325+i*40} y={110-h*8} width="30" height={h*8} rx="1" fill={accent} opacity={0.15+i*0.05}/>
      ))}
      <line x1="318" y1="110" x2="582" y2="110" stroke="#1a2030" strokeWidth="0.5"/>
      {[65,80,90,100].map((y,i)=><rect key={i} x="320" y={y} width={[230,180,210,160][i]} height="6" rx="2" fill="#141c28" opacity="0.8"/>)}
      {/* Projector */}
      <rect x="414" y="0" width="72" height="26" rx="4" fill="#0f1624" stroke="#1a2535" strokeWidth="1"/>
      <circle cx="450" cy="13" r="7" fill="#060a10" stroke={accent} strokeWidth="1" opacity="0.8"/>
      <line x1="450" y1="26" x2="450" y2="15" stroke="#1a2535" strokeWidth="1"/>
      {/* Conference table */}
      <rect x="120" y="185" width="660" height="80" rx="8" fill="#0f1624" stroke={accent} strokeWidth="1.5" opacity="0.9"/>
      <rect x="125" y="188" width="650" height="14" rx="4" fill={accent} opacity="0.06"/>
      {/* Chairs */}
      {[155,285,415,545,675].map((x,i)=>(
        <g key={i}>
          <rect x={x} y="160" width="44" height="22" rx="5" fill="#0c1220" stroke="#1a2535" strokeWidth="1"/>
          <rect x={x} y="268" width="44" height="22" rx="5" fill="#0c1220" stroke="#1a2535" strokeWidth="1"/>
        </g>
      ))}
      {/* Laptops on table */}
      {[165,430,640].map((x,i)=>(
        <g key={i}>
          <rect x={x} y="178" width="55" height="36" rx="3" fill="#060a10" stroke={accent} strokeWidth="0.8" opacity="0.85"/>
          <rect x={x+3} y="181" width="49" height="27" rx="1" fill={accent} opacity={0.08+i*0.04}/>
          {[0,1,2].map(j=><line key={j} x1={x+6} y1={188+j*6} x2={x+6+[40,32,38][j]} y2={188+j*6} stroke={accent} strokeWidth="0.8" opacity="0.35"/>)}
        </g>
      ))}
      {/* Water glasses */}
      {[340,550].map((x,i)=>(
        <path key={i} d={`M${x} 196 L${x+5} 215 L${x+19} 215 L${x+24} 196 Z`} fill="#081520" stroke={accent} strokeWidth="0.8" opacity="0.6"/>
      ))}
      {/* Floor */}
      {[0,1,2,3,4,5,6,7,8].map(x=>[0,1,2].map(y=>(
        <rect key={`${x}-${y}`} x={x*112} y={260+y*53} width="110" height="52" fill="none" stroke="#0b0d12" strokeWidth="0.5"/>
      )))}
    </svg>
  );
}

// ── OPEN OFFICE / PROJECTS ─────────────────────────────────────
function projects({ accent }) {
  return (
    <svg viewBox="0 0 900 420" xmlns="http://www.w3.org/2000/svg" className="desk-svg">
      <rect width="900" height="420" fill="#06090f"/>
      <rect x="0" y="0" width="900" height="260" fill="#070a10"/>
      <rect x="0" y="260" width="900" height="160" fill="#050709"/>
      <line x1="0" y1="260" x2="900" y2="260" stroke={accent} strokeWidth="1" opacity="0.25"/>
      {/* Whiteboard */}
      <rect x="30" y="20" width="220" height="160" rx="4" fill="#080c14" stroke={accent} strokeWidth="1.5" opacity="0.9"/>
      <rect x="34" y="24" width="212" height="152" rx="2" fill="#040609"/>
      <text x="140" y="48" textAnchor="middle" fill={accent} fontSize="9" fontFamily="monospace" opacity="0.7">SPRINT BOARD</text>
      {["TODO","IN PROG","DONE"].map((label,i)=>(
        <g key={i}>
          <rect x={38+i*68} y="55" width="60" height="14" rx="2" fill="#0f1624"/>
          <text x={68+i*68} y="65" textAnchor="middle" fill={accent} fontSize="7" fontFamily="monospace" opacity="0.6">{label}</text>
          {[75,92,109,126].map((y,j)=>(
            <rect key={j} x={38+i*68} y={y} width="60" height="12" rx="2" fill={["#22c55e","#3b82f6","#a855f7"][i]} opacity={j===0?0.25:0.1}/>
          ))}
        </g>
      ))}
      {/* Sticky notes */}
      {[[270,30,"#F59E0B"],[310,18,"#3B82F6"],[340,38,"#22C55E"],[290,58,"#EF4444"],[325,55,"#A855F7"]].map(([x,y,c],i)=>(
        <rect key={i} x={x} y={y} width="38" height="34" rx="2" fill={c} opacity="0.18" stroke={c} strokeWidth="0.5"/>
      ))}
      {/* 3 desks */}
      {[120,390,650].map((x,i)=>(
        <g key={i}>
          <rect x={x} y="170" width="175" height="90" rx="4" fill="#0f1624" stroke="#1a2535" strokeWidth="1"/>
          <rect x={x+40} y="135" width="90" height="60" rx="4" fill="#060a10" stroke={accent} strokeWidth="1" opacity="0.9"/>
          <rect x={x+44} y="139" width="82" height="42" rx="2" fill="#030508"/>
          <rect x={x+47} y="142" width="76" height="36" rx="1" fill={accent} opacity={0.07+i*0.03}/>
          {[148,155,162].map((y,j)=><line key={j} x1={x+50} y1={y} x2={x+50+[60,45,55][j]} y2={y} stroke={accent} strokeWidth="0.8" opacity="0.35"/>)}
          <rect x={x+81} y="195" width="14" height="15" rx="1" fill="#0f1624"/>
          <rect x={x+60} y="218" width="56" height="18" rx="3" fill="#0a0f1a" stroke="#1a2535" strokeWidth="1"/>
          {[0,1,2,3,4,5,6].map(k=><rect key={k} x={x+63+k*7} y="222" width="5" height="5" rx="1" fill="#0f1624"/>)}
          <path d={`M${x+145} 186 L${x+149} 200 L${x+161} 200 L${x+165} 186 Z`} fill="#081520" stroke={accent} strokeWidth="0.8" opacity="0.7"/>
        </g>
      ))}
      {/* Ceiling lights */}
      {[225,450,675].map(x=>(
        <g key={x}>
          <line x1={x} y1="0" x2={x} y2="15" stroke="#1a2030" strokeWidth="2"/>
          <rect x={x-35} y="13" width="70" height="8" rx="4" fill="#1a2030"/>
          <rect x={x-33} y="15" width="66" height="4" rx="2" fill={accent} opacity="0.3"/>
        </g>
      ))}
      {[0,1,2,3,4,5,6,7,8].map(x=>[0,1,2].map(y=>(
        <rect key={`${x}-${y}`} x={x*112} y={260+y*53} width="110" height="52" fill="none" stroke="#0b0d12" strokeWidth="0.5"/>
      )))}
    </svg>
  );
}

// ── DIRECTOR OFFICE ────────────────────────────────────────────
function director({ accent }) {
  return (
    <svg viewBox="0 0 900 420" xmlns="http://www.w3.org/2000/svg" className="desk-svg">
      <rect width="900" height="420" fill="#06090f"/>
      <rect x="0" y="0" width="900" height="260" fill="#070810"/>
      <rect x="0" y="260" width="900" height="160" fill="#050609"/>
      <line x1="0" y1="260" x2="900" y2="260" stroke={accent} strokeWidth="1.5" opacity="0.3"/>
      {/* Window with city */}
      <rect x="15" y="15" width="200" height="200" rx="4" fill="#040810" stroke="#1a2535" strokeWidth="2"/>
      {[30,65,100,130,155,175].map((x,i)=>(
        <rect key={i} x={x} y={60+[40,20,60,35,50,25][i]} width={[25,20,30,22,18,24][i]} height={[150,170,140,165,145,175][i]} rx="1" fill="#060c18" stroke="#0e1828" strokeWidth="0.5"/>
      ))}
      {[35,70,105,135,160,180].map((x,i)=>[0,1,2,3].map(j=>(
        <rect key={`${i}-${j}`} x={x+4} y={75+[40,20,60,35,50,25][i]+j*18} width="4" height="4" rx="0.5" fill={accent} opacity={Math.random()>0.4?0.4:0.1}/>
      )))}
      <rect x="15" y="15" width="200" height="18" rx="2" fill="#0f1624"/>
      {/* Premium desk */}
      <rect x="220" y="175" width="550" height="85" rx="8" fill="#0f1624" stroke={accent} strokeWidth="2" opacity="0.95"/>
      <rect x="225" y="178" width="540" height="16" rx="4" fill={accent} opacity="0.07"/>
      {/* Large monitor */}
      <rect x="340" y="100" width="220" height="100" rx="5" fill="#060a10" stroke={accent} strokeWidth="2" opacity="0.95"/>
      <rect x="345" y="105" width="210" height="84" rx="2" fill="#030508"/>
      <rect x="348" y="108" width="204" height="16" rx="2" fill={accent} opacity="0.18"/>
      <text x="450" y="120" textAnchor="middle" fill={accent} fontSize="9" fontWeight="700" fontFamily="monospace">GOVERNANCE DASHBOARD</text>
      {[4,6,3,7,5,4].map((h,i)=><rect key={i} x={352+i*30} y={162-h*5} width="22" height={h*5} rx="1" fill={accent} opacity={0.18+i*0.04}/>)}
      <line x1="348" y1="162" x2="548" y2="162" stroke="#1a2030" strokeWidth="0.5"/>
      <rect x="446" y="200" width="18" height="24" rx="1" fill="#0f1624"/>
      <rect x="432" y="224" width="46" height="5" rx="2" fill="#0f1624"/>
      {/* Bookshelf */}
      <rect x="760" y="60" width="120" height="200" rx="3" fill="#0c1218" stroke="#1a2535" strokeWidth="1"/>
      {["#EF4444","#3B82F6","#F59E0B","#22C55E","#A855F7","#0EA5E9","#EC4899"].map((c,i)=>(
        <rect key={i} x={765+i*15} y={70+[0,5,2,8,3,6,1][i]} width="12" height={[120,110,125,105,115,108,122][i]} rx="1" fill={c} opacity="0.4"/>
      ))}
      {/* Trophy */}
      <path d="M700 175 L708 155 L720 140 L732 155 L740 175 Z" fill={accent} opacity="0.45"/>
      <rect x="706" y="175" width="28" height="12" rx="1" fill={accent} opacity="0.3"/>
      <rect x="700" y="187" width="40" height="5" rx="1" fill={accent} opacity="0.2"/>
      {/* Name plate */}
      <rect x="340" y="228" width="220" height="28" rx="4" fill="#151e30" stroke={accent} strokeWidth="1" opacity="0.9"/>
      <text x="450" y="244" textAnchor="middle" fill={accent} fontSize="9" fontWeight="700" fontFamily="monospace">DIRECTOR GENERAL</text>
      {/* Chair */}
      <ellipse cx="450" cy="285" rx="65" ry="20" fill="#0a0f1a" stroke="#1a2535" strokeWidth="1"/>
      <rect x="418" y="265" width="64" height="30" rx="8" fill="#0c1018" stroke="#1a2535" strokeWidth="1"/>
      {[0,1,2,3,4,5,6,7,8].map(x=>[0,1,2].map(y=>(
        <rect key={`${x}-${y}`} x={x*112} y={260+y*53} width="110" height="52" fill="none" stroke="#0b0d12" strokeWidth="0.5"/>
      )))}
    </svg>
  );
}

// ── CEO OFFICE ─────────────────────────────────────────────────
function ceo({ accent }) {
  return (
    <svg viewBox="0 0 900 420" xmlns="http://www.w3.org/2000/svg" className="desk-svg">
      <rect width="900" height="420" fill="#06090f"/>
      {/* Panoramic window wall */}
      <rect x="0" y="0" width="900" height="200" fill="#030610"/>
      {/* City skyline */}
      {[20,80,140,200,260,320,380,440,500,560,620,680,740,800,850].map((x,i)=>(
        <rect key={i} x={x} y={[60,40,80,50,70,35,90,55,65,45,75,55,85,40,70][i]} width={[45,60,35,55,40,65,30,50,45,58,38,52,42,60,35][i]}
          height={[140,160,120,150,130,165,110,145,135,155,125,145,115,160,130][i]}
          rx="1" fill="#070b14" stroke="#0e1528" strokeWidth="0.5"/>
      ))}
      {[25,85,145,205,265,325,385,445].map((x,i)=>[0,1,2,3,4].map(j=>(
        <rect key={`${i}-${j}`} x={x+8} y={80+j*20} width="5" height="5" rx="0.5" fill={accent} opacity={Math.random()>0.35?0.35:0.08}/>
      )))}
      <rect x="0" y="200" width="900" height="60" fill="#050810"/>
      <rect x="0" y="260" width="900" height="160" fill="#040609"/>
      <line x1="0" y1="260" x2="900" y2="260" stroke={accent} strokeWidth="2" opacity="0.4"/>
      {/* Triple monitor setup */}
      <rect x="220" y="100" width="460" height="115" rx="5" fill="#040810" stroke={accent} strokeWidth="2" opacity="0.95"/>
      <rect x="225" y="105" width="450" height="100" rx="2" fill="#020508"/>
      <rect x="228" y="108" width="444" height="18" rx="2" fill={accent} opacity="0.2"/>
      <text x="450" y="122" textAnchor="middle" fill={accent} fontSize="10" fontWeight="700" fontFamily="monospace">VEYHARCORP — AI PERFORMANCE CENTER</text>
      {[0,1,2].map(i=>(
        <g key={i}>
          <rect x={232+i*146} y="130" width="138" height="68" rx="2" fill="#030608"/>
          {[0,1,2,3,4].map(j=>(
            <rect key={j} x={238+i*146+j*23} y={170-[4,6,3,7,5][j]*5} width="18" height={[4,6,3,7,5][j]*5} rx="1" fill={[accent,"#818cf8","#22c55e"][i]} opacity={0.18+j*0.05}/>
          ))}
          <line x1={232+i*146} y1="170" x2={370+i*146} y2="170" stroke="#1a2030" strokeWidth="0.5"/>
        </g>
      ))}
      <rect x="440" y="215" width="20" height="26" rx="1" fill="#0f1624"/>
      <rect x="424" y="241" width="52" height="6" rx="3" fill="#0f1624"/>
      {/* Premium desk */}
      <rect x="160" y="178" width="580" height="82" rx="8" fill="#0f1624" stroke={accent} strokeWidth="2" opacity="0.98"/>
      <rect x="165" y="181" width="570" height="18" rx="4" fill={accent} opacity="0.09"/>
      {/* Side monitors */}
      <rect x="55" y="110" width="145" height="95" rx="3" fill="#040810" stroke="#1a2535" strokeWidth="1.5" opacity="0.85"/>
      <rect x="59" y="114" width="137" height="79" rx="1" fill="#020406"/>
      {[0,1,2,3,4].map(i=><line key={i} x1="63" y1={122+i*13} x2={63+[100,75,88,60,92][i]} y2={122+i*13} stroke="#1a2535" strokeWidth="1" opacity="0.7"/>)}
      <rect x="700" y="110" width="145" height="95" rx="3" fill="#040810" stroke="#1a2535" strokeWidth="1.5" opacity="0.85"/>
      <rect x="704" y="114" width="137" height="79" rx="1" fill="#020406"/>
      {[4,6,3,7,5].map((h,i)=><rect key={i} x={708+i*24} y={172-h*6} width="18" height={h*6} rx="1" fill={accent} opacity="0.22"/>)}
      {/* CEO nameplate */}
      <rect x="330" y="232" width="240" height="24" rx="4" fill="#151e30" stroke={accent} strokeWidth="1.5" opacity="0.95"/>
      <text x="450" y="244" textAnchor="middle" fill={accent} fontSize="9" fontWeight="700" fontFamily="monospace" letterSpacing="2">CHIEF EXECUTIVE OFFICER</text>
      {[0,1,2,3,4,5,6,7,8].map(x=>[0,1,2].map(y=>(
        <rect key={`${x}-${y}`} x={x*112} y={260+y*53} width="110" height="52" fill="none" stroke="#0a0c10" strokeWidth="0.5"/>
      )))}
    </svg>
  );
}

export { DeskScene };
