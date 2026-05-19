import React, { useState } from "react";

const ROUTINES = {
  "Öppning Inne": {
    color: "#F59E0B",
    sections: {
      "Kök": [
        "Ta bort all ren disk",
        "Sätt på ölen",
        "Starta glassmaskinen",
        "Sätt i påsar i sopptunnorna",
      ],
      "Baren": [
        "Fyll på dryckeskylskåpet",
        "Torka rent barens ytor",
        "Plocka i ordning i baren",
        "Tänd ljusslinga och lampor",
        "Sätt på musiken",
        "Testa systemet",
        "Fyll på ölglas",
      ],
      "Restaurangen": [
        "Fyll på servetter och våtservetter",
        "Fyll på gafflar",
        "Fyll på vattenkaraffer",
        "Torka alla bord",
        "Koppla in ljusslingan",
        "Öppna alla dörrar",
        "Tänd alla batteriljus",
        "Ställ ut uteserveringen",
        "Sätt upp öppningsskyltar",
      ],
      "Disken": [
        "Slå på strömmen till båda maskiner",
        "Starta diskmaskinen",
        "Fyll en skål med vatten och diskmedel för bestick",
      ],
    },
  },
  "Stängning Inne (vardag)": {
    color: "#6366F1",
    sections: {
      "Kök": [
        "Torka rent alla bänkar",
        "Torka golvet",
        "Rengör golvbrunnen",
        "Rengör handfatet och ytan runtomkring",
        "Släng alla sopor",
        "Stäng av ölen",
        "Stäng av glassmaskinen",
        "Stäng av kaffemaskinen",
      ],
      "Baren": [
        "Fyll på dryckeskylskåpet",
        "Diska droppfatet under öltappen",
        "Torka rent barens ytor",
        "Plocka i ordning i baren",
        "Släck ljusslingan och lamporna",
        "Stäng av musiken",
      ],
      "Restaurangen": [
        "Fyll på servetter och våtservetter",
        "Fyll på gafflar",
        "Diska vattenkaraferna",
        "Torka alla bord",
        "Koppla ur ljusslingan",
        "Lås alla dörrar",
        "Släck alla batteriljus",
        "Ta in allt från uteserveringen",
      ],
      "Disken": [
        "Diska rent allt",
        "Torka av diskbänken och ytor runtomkring",
        "Rengör vattenlås och golvbrunn samt under bänken",
        "Tvätta filtret i diskmaskinen",
        "Släng gamla disktrasor och disksvampar",
        "Släng soporna",
        "Släng tomglasen",
        "Skura golvet",
        "Rengör diskmaskinen noga",
        "Slå av strömmen till båda diskmaskinerna",
      ],
    },
  },
  "Stängning Inne (söndag)": {
    color: "#EC4899",
    sections: {
      "Kök": [
        "Torka rent alla bänkar",
        "Torka golvet extra noggrant",
        "Torka av kylarnas och frysets utsidor",
        "Torka kylarna invändigt, inklusive alla hyllplan",
        "Torka av hyllorna i köket",
        "Rengör golvbrunn och vattenlås",
        "Rengör handfatet och ytan runtomkring",
        "Släng alla sopor",
        "Rengör och stäng av kaffebryggaren",
        "Stäng av ölen",
        "Stäng av glassmaskinen",
        "Ta hand om maten från vagnen",
        "Ställ in smöret i kylen",
        "Kontrollera att alla kylar är stängda",
      ],
      "Baren": [
        "Fyll på dryckeskylskåpet",
        "Diska droppfatet under öltappen",
        "Torka rent barens ytor",
        "Plocka i ordning i baren",
        "Inventera läsk och alkohol",
        "Släck ljusslingan och lamporna",
        "Stäng av musiken",
        "Stäng av walkie-talkin",
        "Dra ur laddare till högtalare och lampor",
      ],
      "Restaurangen": [
        "Fyll på servetter och våtservetter",
        "Fyll på gafflar",
        "Diska vattenkaraferna noga",
        "Torka alla bord",
        "Dammsug restaurangen",
        "Skura golvet i restaurangen",
        "Koppla ur ljusslingan",
        "Lås alla dörrar",
        "Släck alla batteriljus",
        "Ta in allt från uteserveringen",
      ],
      "Disken": [
        "Diska rent allt",
        "Torka av diskbänken och ytor runtomkring",
        "Rengör vattenlås och golvbrunn samt under bänken",
        "Tvätta filtret i diskmaskinen",
        "Släng gamla disktrasor och disksvampar",
        "Släng soporna",
        "Släng tomglasen",
        "Skura golvet",
        "Rengör diskmaskinen noga",
      ],
    },
  },
  "Öppning Vagnen": {
    color: "#10B981",
    sections: {
      "Pommesstationen": [
        "Fyll fritöserna med olja (ny olja i höger, gammal i vänster)",
        "Starta höger fritös på 190 °C – 30 min innan öppning",
        "Starta vänster fritös på 170 °C – 30 min innan öppning",
        "Fyll 14 L-plastlådan med pommes frites",
        "Ta fram en låda majs",
        "Ta fram jalapeñomayo",
        "Plocka ut pommes frites-påsar ur kartongen och lägg i stor plastlåda",
        "Kontrollera redskap: 2 fritöskorgar, skål för corn ribs, skål för pommes frites",
        "Kontrollera redskap: 3 skedar, 6 st 1/6-kantiner, sax, moussé, take away-lådor",
        "Fyll 1/6-kantinerna med: lök, örter, riven ost, hackad gurka, corn ribs-krydda",
      ],
      "Brödstationen": [
        "Starta brödvärmarbordet ca 30 min innan öppning",
        "Fyll den stora plastlådan med bröd",
        "Kontrollera mat: smör 4 flaskor, hamburgerbröd 2 kartonger, glutenfritt bröd 2 paket",
        "Kontrollera mat: korvbröd 3–4 paket, vegansk ost 2 paket",
      ],
      "Stekbordsstationen": [
        "Starta stekborden 30 min innan öppning",
        "Fyll på pepparkvarnar och saltströare",
        "Kontrollera redskap: 2 droppkoppar, 2 smältkupoler, stekspade, skrapa",
        "Kontrollera redskap: smash-spade, 1/4-kantin, aluminiumfolie, tryckknappar",
      ],
      "Luckan": [
        "Kontrollera att båda kylarna är påslagna",
        "Starta värmelampan 30 min innan öppning",
        "Öppna luckan",
        "Tänd ljusslingan",
        "Sätt i gasoltuberna",
        "Starta surfplattan",
        "Starta walkie-talkiesarna",
        "Kontrollera mat: cheddar 6 paket, extra lök, extra vegansk ost, extra hackad gurka",
        "Kontrollera mat: extra örter, extra riven ost, ketchup, bönkorv, korv, kött",
        "Kontrollera redskap: sprayflaska med vatten, brickor, påsar, hamburgerlådor, hamburgerfickor",
      ],
    },
  },
};

function getTodayKey(routineName) {
  const today = new Date().toISOString().slice(0, 10);
  return `checklist:${routineName.replace(/\s+/g, "_")}:${today}`;
}

function buildInitialState(sections) {
  const init = {};
  Object.entries(sections).forEach(([sec, items]) => {
    items.forEach((_, i) => { init[`${sec}-${i}`] = false; });
  });
  return init;
}

function useChecklist(routineName, sections) {
  const totalItems = Object.values(sections).flat().length;
  const storageKey = getTodayKey(routineName);

  const [checked, setChecked] = useState(() => {
    const base = buildInitialState(sections);
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) return { ...base, ...JSON.parse(saved) };
    } catch (_) {}
    return base;
  });

  const save = (next) => {
    try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch (_) {}
  };

  const toggle = (key) => setChecked(prev => {
    const next = { ...prev, [key]: !prev[key] };
    save(next);
    return next;
  });

  const reset = () => setChecked(() => {
    const next = buildInitialState(sections);
    save(next);
    return next;
  });

  const doneCount = Object.values(checked).filter(Boolean).length;
  const progress = totalItems > 0 ? Math.round((doneCount / totalItems) * 100) : 0;

  return { checked, toggle, reset, doneCount, totalItems, progress, loaded: true };
}

function RoutineView({ name, routine, onBack }) {
  const { checked, toggle, reset, doneCount, totalItems, progress, loaded } = useChecklist(name, routine.sections);
  const done = progress === 100;
  const doneColor = "#10B981";

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
        {/* Color accent bar instead of icon */}
        <div style={{
          width: 4, height: 32, borderRadius: 99,
          background: routine.color,
          flexShrink: 0,
        }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 17, letterSpacing: "-0.02em" }}>{name}</div>
          <div style={{ fontSize: 12, color: "#666", marginTop: 2 }}>
            {loaded ? `${doneCount}/${totalItems} klara` : "Laddar…"}
          </div>
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
          <span style={{ color: done ? doneColor : routine.color, fontWeight: 700 }}>{progress}%</span>
        </div>
        <div style={{ height: 6, background: "#2a2a2a", borderRadius: 99, overflow: "hidden" }}>
          <div style={{
            height: "100%",
            width: `${progress}%`,
            background: done ? doneColor : routine.color,
            borderRadius: 99,
            transition: "width 0.4s ease",
          }} />
        </div>
        {done && (
          <div style={{
            marginTop: 10, background: "#10B98115", border: "1px solid #10B98140",
            borderRadius: 8, padding: "8px 14px", fontSize: 13, color: doneColor,
            textAlign: "center", fontWeight: 600,
          }}>
            Alla uppgifter klara!
          </div>
        )}
      </div>

      {/* Sections */}
      <div style={{ padding: "16px 16px 40px" }}>
        {Object.entries(routine.sections).map(([section, items]) => {
          const sectionDone = items.filter((_, i) => checked[`${section}-${i}`]).length;
          const allDone = sectionDone === items.length;
          return (
            <div key={section} style={{ marginBottom: 16 }}>
              <div style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "10px 14px",
                background: "#1a1a1a",
                borderRadius: "10px 10px 0 0",
                borderBottom: "1px solid #2a2a2a",
                borderLeft: `3px solid ${allDone ? doneColor : routine.color}`,
              }}>
                <span style={{ fontWeight: 700, fontSize: 14, letterSpacing: "-0.01em", flex: 1 }}>{section}</span>
                <span style={{
                  fontSize: 11, color: allDone ? doneColor : "#555",
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
                        {isChecked && (
                          <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                            <path d="M1 4L4 7.5L10 1" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
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
                borderLeft: `4px solid ${routine.color}`,
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
              onMouseEnter={e => { e.currentTarget.style.background = "#1e1e1e"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#171717"; }}
            >
              {/* Color swatch block instead of icon */}
              <div style={{
                width: 10, height: 40, borderRadius: 4,
                background: routine.color,
                flexShrink: 0,
                opacity: 0.85,
              }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 16, letterSpacing: "-0.02em", marginBottom: 4 }}>{name}</div>
                <div style={{ fontSize: 12, color: "#555" }}>
                  {sectionCount} avsnitt · {total} uppgifter
                </div>
              </div>
              <div style={{ color: "#444", fontSize: 18 }}>›</div>
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
