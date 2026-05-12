import { useState } from "react";

const ROUTINES = {
  "Öppning Inne": {
    icon: "🏠",
    color: "#F59E0B",
    sections: {
      "Kök": [
        "Ta bort all ren disk",
        "Sätt på ölen",
        "Starta glassmaskin",
        "Sätt i påsar i sopptunnor",
      ],
      "Baren": [
        "Fylla dryckeskylen",
        "Torka rent barens ytor",
        "Plocka i ordning bland allt som ligger i baren",
        "Tända ljusslinga / en lampa",
        "Sätta på musiken",
        "Testa systemet",
        "Fyll på ölglas",
      ],
      "Restaurangen": [
        "Fyll på servetter/våtservetter",
        "Fyll på gafflar",
        "Fylla upp vattenkaraffer",
        "Torka alla borden",
        "Sätta i ljusslingan",
        "Öppna alla dörrar",
        "Tända alla batteriljus",
        "Ställ ut uteserveringen",
        "Häng upp öppningskyltar",
      ],
      "Disken": [
        "Sätt på elen till båda maskiner",
        "Starta diskmaskinen",
        "Fyll en skål med vatten och Yes för bestik",
      ],
    },
  },
  "Stängning Inne (vardag)": {
    icon: "🔒",
    color: "#6366F1",
    sections: {
      "Kök": [
        "Torka rent alla bänkar",
        "Torka golv",
        "Tvätta golvbrunnen",
        "Städa rent handfaten / runt om handfaten",
        "Slänga alla sopor",
        "Stänga av öl",
        "Stänga av glassmaskinen",
        "Stänga av kaffemaskinen",
      ],
      "Baren": [
        "Fylla dryckeskylen",
        "Diska rent droppfat från ölen",
        "Torka rent barens ytor",
        "Plocka i ordning bland allt som ligger i baren",
        "Släcka ljusslinga / en lampa",
        "Stänga av musiken",
      ],
      "Restaurangen": [
        "Fyll på servetter/våtservetter",
        "Fyll på gafflar",
        "Diska rent vattenkaraffer",
        "Torka alla borden",
        "Dra ut ljusslingan",
        "Lås alla dörrar",
        "Släcka alla batteriljus",
        "Ta in allt från uteserveringen",
      ],
      "Disken": [
        "Diska rent allt",
        "Torka av diskbänk + ytor runt omkring",
        "Gör rent vattenlås/brun samt under bänken",
        "Tvätta rent filter i diskmaskin",
        "Släng gamla disktrasor + disksvampar",
        "Slänga sopor",
        "Slänga tomglas",
        "Skura golv",
        "Gör rent i diskmaskinen noga",
        "Stäng av elen till båda diskmaskinerna",
      ],
    },
  },
  "Stängning Inne (söndag)": {
    icon: "⭐",
    color: "#EC4899",
    sections: {
      "Kök": [
        "Torka rent alla bänkar",
        "Torka golv, extra noggrant",
        "Torka kylar/frys på utsidan (extra rent)",
        "Torka kylarna invändigt + alla hyllplan",
        "Torka av hyllor i köket",
        "Tvätta golvbrunnen/vattenlås",
        "Städa rent handfaten / runt om handfaten",
        "Slänga alla sopor",
        "Gör rent/stäng av kaffebryggare",
        "Stänga av öl",
        "Stänga av glassmaskinen",
        "Ta hand om maten från vagnen",
        "Ställa in smör i kyl",
        "Kolla så att kylarna är stängda",
      ],
      "Baren": [
        "Fylla dryckeskylen",
        "Diska droppfat från ölen",
        "Torka rent barens ytor",
        "Plocka i ordning bland allt som ligger i baren",
        "Inventera läsk/alkohol",
        "Släcka ljusslinga / en lampa",
        "Stänga av musiken",
        "Stäng av woki toki",
        "Dra ur laddare till högtalare/lampor",
      ],
      "Restaurangen": [
        "Fyll på servetter/våtservetter",
        "Fyll på gafflar",
        "Diska rent vattenkaraffer noga",
        "Torka alla borden",
        "Dammsuga i restaurangen",
        "Skura golvet i restaurangen",
        "Dra ut ljusslingan",
        "Lås alla dörrar",
        "Släcka alla batteriljus",
        "Ta in allt från uteserveringen",
      ],
      "Disken": [
        "Diska rent allt",
        "Torka av diskbänk + ytor runt omkring",
        "Gör rent vattenlås/brun samt under bänken",
        "Tvätta rent filter i diskmaskin",
        "Släng gamla disktrasor + disksvampar",
        "Slänga sopor",
        "Slänga tomglas",
        "Skura golv",
        "Gör rent i diskmaskinen noga",
      ],
    },
  },
  "Öppning Vagnen": {
    icon: "🚚",
    color: "#10B981",
    sections: {
      "Pommes Station": [
        "Fyll fritöserna med olja (ny i höger, gammal i vänster)",
        "Starta höger fritös på 190°C – 30 min innan öppning",
        "Starta vänster fritös på 170°C – 30 min innan öppning",
        "Fyll 14L plastlådan med pommes",
        "Ta fram en låda majs",
        "Ta fram jalla mayo",
        "Plocka ut pommes-påsar ur kartong, lägg i stor plastlåda",
        "Kolla redskap: 2 fritöskorgar, corn ribs-skål, pommes-skål",
        "Kolla redskap: 3 skedar, 6 st ⅙ kantin, sax, mostrå, TA-lådor",
      ],
      "Bröd Station": [
        "Starta brödbordet ca 30 min innan öppning",
        "Fyll upp stora plastlådan med bröd",
        "Kolla mat: smör 4 flaskor, HB-bröd 2 kartonger, glutenfritt bröd 2 paket",
        "Kolla mat: korvbröd 3–4 paket, VEG-ost 2 paket",
      ],
      "Steckbord Station": [
        "Starta steckborden 30 min innan öppning",
        "Fyll på pepparströare",
        "Kolla redskap: 2 droppkoppar, 2 smältkupoler, flippskrapa, skrapa",
        "Kolla redskap: smash-spade, ¼ kantin, aluminiumfolie, knappar",
      ],
      "Luckan": [
        "Starta värmelampan 30 min innan öppning",
        "Öppna luckan",
        "Tänd ljusslinga",
        "Sätt i gasoltuberna",
        "Starta iPaden",
        "Starta hokitokisarna",
        "Kolla mat: HB-cheddar 6 paket, extra lök, extra VEG-ost",
        "Kolla mat: extra örter, extra riven ost, B-ketchup, B-korv, korv, kött",
        "Kolla redskap: pipflaksa med vatten, brickor, påsar, hamburgelådor, hamburgefickor",
      ],
    },
  },
};

const sectionIcons = {
  "Kök": "👨‍🍳",
  "Baren": "🍺",
  "Restaurangen": "🍽️",
  "Disken": "🫧",
  "Pommes Station": "🍟",
  "Bröd Station": "🍞",
  "Steckbord Station": "🔥",
  "Luckan": "🪟",
};

function useChecklist(routineName, sections) {
  const totalItems = Object.values(sections).flat().length;
  const [checked, setChecked] = useState(() => {
    const init = {};
    Object.entries(sections).forEach(([sec, items]) => {
      items.forEach((_, i) => { init[`${sec}-${i}`] = false; });
    });
    return init;
  });

  const toggle = (key) => setChecked(prev => ({ ...prev, [key]: !prev[key] }));
  const reset = () => setChecked(prev => {
    const next = {};
    Object.keys(prev).forEach(k => { next[k] = false; });
    return next;
  });

  const doneCount = Object.values(checked).filter(Boolean).length;
  const progress = totalItems > 0 ? Math.round((doneCount / totalItems) * 100) : 0;

  return { checked, toggle, reset, doneCount, totalItems, progress };
}

function RoutineView({ name, routine, onBack }) {
  const { checked, toggle, reset, doneCount, totalItems, progress } = useChecklist(name, routine.sections);
  const done = progress === 100;

  return (
    <div style={{ minHeight: "100vh", background: "#0f0f0f", color: "#f5f5f5", fontFamily: "'DM Sans', sans-serif" }}>
      {/* Header */}
      <div style={{
        background: "#171717",
        borderBottom: "1px solid #2a2a2a",
        padding: "16px 20px",
        display: "flex",
        alignItems: "center",
        gap: 12,
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}>
        <button onClick={onBack} style={{
          background: "none", border: "none", color: "#aaa", cursor: "pointer",
          fontSize: 22, lineHeight: 1, padding: "4px 8px", borderRadius: 6,
          display: "flex", alignItems: "center",
        }}>←</button>
        <span style={{ fontSize: 22 }}>{routine.icon}</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 17, letterSpacing: "-0.02em" }}>{name}</div>
          <div style={{ fontSize: 12, color: "#666", marginTop: 2 }}>{doneCount}/{totalItems} klara</div>
        </div>
        <button onClick={reset} style={{
          background: "#2a2a2a", border: "none", color: "#aaa", cursor: "pointer",
          fontSize: 12, padding: "6px 14px", borderRadius: 20, fontFamily: "inherit",
          letterSpacing: "0.02em",
        }}>Återställ</button>
      </div>

      {/* Progress bar */}
      <div style={{ background: "#1a1a1a", padding: "12px 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 12, color: "#666" }}>
          <span>Framsteg</span>
          <span style={{ color: done ? "#10B981" : routine.color, fontWeight: 700 }}>{progress}%</span>
        </div>
        <div style={{ height: 6, background: "#2a2a2a", borderRadius: 99, overflow: "hidden" }}>
          <div style={{
            height: "100%",
            width: `${progress}%`,
            background: done ? "#10B981" : routine.color,
            borderRadius: 99,
            transition: "width 0.4s ease",
          }} />
        </div>
        {done && (
          <div style={{
            marginTop: 10, background: "#10B98115", border: "1px solid #10B98140",
            borderRadius: 8, padding: "8px 14px", fontSize: 13, color: "#10B981",
            textAlign: "center", fontWeight: 600,
          }}>
            ✅ Alla uppgifter klara!
          </div>
        )}
      </div>

      {/* Sections */}
      <div style={{ padding: "16px 16px 40px" }}>
        {Object.entries(routine.sections).map(([section, items]) => {
          const sectionDone = items.filter((_, i) => checked[`${section}-${i}`]).length;
          return (
            <div key={section} style={{ marginBottom: 16 }}>
              <div style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "10px 14px",
                background: "#1a1a1a",
                borderRadius: "10px 10px 0 0",
                borderBottom: "1px solid #2a2a2a",
              }}>
                <span style={{ fontSize: 16 }}>{sectionIcons[section] || "📋"}</span>
                <span style={{ fontWeight: 700, fontSize: 14, letterSpacing: "-0.01em", flex: 1 }}>{section}</span>
                <span style={{
                  fontSize: 11, color: sectionDone === items.length ? "#10B981" : "#555",
                  fontWeight: 600,
                }}>{sectionDone}/{items.length}</span>
              </div>
              <div style={{ background: "#1a1a1a", borderRadius: "0 0 10px 10px", overflow: "hidden" }}>
                {items.map((item, i) => {
                  const key = `${section}-${i}`;
                  const isChecked = checked[key];
                  return (
                    <button
                      key={key}
                      onClick={() => toggle(key)}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "13px 14px",
                        background: isChecked ? "#10B98108" : "transparent",
                        border: "none",
                        borderTop: "1px solid #252525",
                        cursor: "pointer",
                        textAlign: "left",
                        transition: "background 0.15s",
                        color: "inherit",
                        fontFamily: "inherit",
                      }}
                    >
                      <div style={{
                        width: 22, height: 22, borderRadius: 6,
                        border: isChecked ? `2px solid ${routine.color}` : "2px solid #3a3a3a",
                        background: isChecked ? routine.color : "transparent",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                        transition: "all 0.15s",
                      }}>
                        {isChecked && <span style={{ fontSize: 12, color: "#fff", lineHeight: 1 }}>✓</span>}
                      </div>
                      <span style={{
                        fontSize: 14,
                        color: isChecked ? "#555" : "#e0e0e0",
                        textDecoration: isChecked ? "line-through" : "none",
                        lineHeight: 1.4,
                        transition: "color 0.15s",
                      }}>{item}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState(null);

  if (active) {
    return <RoutineView name={active} routine={ROUTINES[active]} onBack={() => setActive(null)} />;
  }

  return (
    <div style={{ minHeight: "100vh", background: "#0f0f0f", color: "#f5f5f5", fontFamily: "'DM Sans', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* Hero */}
      <div style={{
        padding: "40px 20px 28px",
        borderBottom: "1px solid #1e1e1e",
      }}>
        <div style={{ fontSize: 28, marginBottom: 8 }}>📋</div>
        <h1 style={{
          fontSize: 28, fontWeight: 800, margin: 0,
          letterSpacing: "-0.04em", lineHeight: 1.1,
        }}>
          Rutiner
        </h1>
        <p style={{ color: "#555", fontSize: 14, marginTop: 6, marginBottom: 0 }}>
          Välj en rutin för att börja bocka av
        </p>
      </div>

      {/* Routine cards */}
      <div style={{ padding: "20px 16px 40px", display: "flex", flexDirection: "column", gap: 12 }}>
        {Object.entries(ROUTINES).map(([name, routine]) => {
          const total = Object.values(routine.sections).flat().length;
          const sectionCount = Object.keys(routine.sections).length;
          return (
            <button
              key={name}
              onClick={() => setActive(name)}
              style={{
                background: "#171717",
                border: "1px solid #222",
                borderRadius: 14,
                padding: "18px 20px",
                cursor: "pointer",
                textAlign: "left",
                color: "inherit",
                fontFamily: "inherit",
                display: "flex",
                alignItems: "center",
                gap: 16,
                transition: "background 0.15s, border-color 0.15s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#1e1e1e"; e.currentTarget.style.borderColor = "#333"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#171717"; e.currentTarget.style.borderColor = "#222"; }}
            >
              {/* Color dot */}
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: `${routine.color}20`,
                border: `1.5px solid ${routine.color}50`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22, flexShrink: 0,
              }}>
                {routine.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 16, letterSpacing: "-0.02em", marginBottom: 4 }}>{name}</div>
                <div style={{ fontSize: 12, color: "#555" }}>
                  {sectionCount} avsnitt · {total} uppgifter
                </div>
              </div>
              <div style={{ color: "#333", fontSize: 18 }}>›</div>
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div style={{ textAlign: "center", padding: "0 20px 30px", color: "#333", fontSize: 11, letterSpacing: "0.05em" }}>
        RESTAURANG & FOODTRUCK RUTINER
      </div>
    </div>
  );
}