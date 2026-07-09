"use client";

import { useEffect, useRef, useState } from "react";

const devilFruits = [
  {
    category: "AI & Machine Learning",
    fruitName: "Thinker-Thinker Fruit",
    icon: "🧠",
    color: "#6C4A8A",
    glow: "rgba(108,74,138,0.4)",
    border: "rgba(108,74,138,0.3)",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Keras", "OpenCV", "Hugging Face"],
  },
  {
    category: "Large Language Models",
    fruitName: "Oracle-Oracle Fruit",
    icon: "🔮",
    color: "#3A9E8F",
    glow: "rgba(58,158,143,0.4)",
    border: "rgba(58,158,143,0.3)",
    skills: ["LangChain", "LlamaIndex", "Gemini API", "Groq", "RAG Systems", "Prompt Engineering"],
  },
  {
    category: "Backend Engineering",
    fruitName: "Build-Build Fruit",
    icon: "⚙️",
    color: "#E8B830",
    glow: "rgba(232,184,48,0.4)",
    border: "rgba(232,184,48,0.3)",
    skills: ["FastAPI", "Python", "REST APIs", "PostgreSQL", "Redis", "Docker"],
  },
  {
    category: "Frontend Development",
    fruitName: "Craft-Craft Fruit",
    icon: "🎨",
    color: "#4A90D9",
    glow: "rgba(74,144,217,0.4)",
    border: "rgba(74,144,217,0.3)",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
  },
  {
    category: "Data & Vector Search",
    fruitName: "Index-Index Fruit",
    icon: "📊",
    color: "#C0392B",
    glow: "rgba(192,57,43,0.4)",
    border: "rgba(192,57,43,0.3)",
    skills: ["FAISS", "Pinecone", "Pandas", "NumPy", "Matplotlib", "Streamlit"],
  },
  {
    category: "Dev Tools & Cloud",
    fruitName: "Navigator-Navigator Fruit",
    icon: "🧭",
    color: "#2A7C6F",
    glow: "rgba(42,124,111,0.4)",
    border: "rgba(42,124,111,0.3)",
    skills: ["Git", "GitHub", "Vercel", "VS Code", "Jupyter", "Linux"],
  },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible]   = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{
        minHeight:  "100vh",
        background: "linear-gradient(180deg, #0B1120 0%, #0E1829 50%, #0B1120 100%)",
        padding:    "120px 24px",
        position:   "relative",
        overflow:   "hidden",
      }}
    >
      {/* ── Background decoration ── */}
      <div style={{
        position:   "absolute",
        top:        "50%",
        left:       "50%",
        transform:  "translate(-50%, -50%)",
        width:      "800px",
        height:     "800px",
        background: "radial-gradient(circle, rgba(108,74,138,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>

        {/* ── Section Header ── */}
        <div style={{
          textAlign:    "center",
          marginBottom: "80px",
          opacity:      isVisible ? 1 : 0,
          transform:    isVisible ? "translateY(0)" : "translateY(40px)",
          transition:   "all 0.9s ease",
        }}>
          <p style={{
            fontFamily:    "'Inter', sans-serif",
            fontSize:      "11px",
            fontWeight:    700,
            letterSpacing: "0.3em",
            color:         "#6C4A8A",
            textTransform: "uppercase",
            marginBottom:  "16px",
          }}>
            🍎 Devil Fruit Powers
          </p>
          <h2 style={{
            fontFamily:   "'Cinzel', serif",
            fontSize:     "clamp(2rem, 5vw, 3.5rem)",
            fontWeight:   700,
            color:        "#F0EAD6",
            marginBottom: "20px",
          }}>
            Abilities Acquired
          </h2>
          <p style={{
            fontFamily: "'Lora', serif",
            fontSize:   "16px",
            color:      "#8A8070",
            fontStyle:  "italic",
            marginBottom: "24px",
          }}>
            "Each fruit consumed grants a unique power — mastered through countless hours at sea"
          </p>
          {/* Animated divider */}
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"12px" }}>
            <div style={{
              height:     "1px",
              width:      isVisible ? "80px" : "0px",
              background: "linear-gradient(90deg, transparent, #6C4A8A)",
              transition: "width 1s ease 0.5s",
            }} />
            <span style={{ color: "#6C4A8A", fontSize: "16px" }}>🍎</span>
            <div style={{
              height:     "1px",
              width:      isVisible ? "80px" : "0px",
              background: "linear-gradient(90deg, #6C4A8A, transparent)",
              transition: "width 1s ease 0.5s",
            }} />
          </div>
        </div>

        {/* ── Fruit Cards Grid ── */}
        <div
          className="skills-grid"
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap:                 "24px",
          }}
        >
          {devilFruits.map((fruit, i) => (
            <div
              key={i}
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(null)}
              style={{
                opacity:    isVisible ? 1 : 0,
                transform:  isVisible
                  ? activeCard === i
                    ? "translateY(-8px) scale(1.02)"
                    : "translateY(0) scale(1)"
                  : "translateY(40px) scale(0.95)",
                transition: `
                  opacity   0.6s ease ${0.1 + i * 0.1}s,
                  transform 0.4s ease
                `,
                background:   "linear-gradient(135deg, #0F1E35 0%, #1A2744 100%)",
                border:       `1px solid ${activeCard === i ? fruit.border : "rgba(255,255,255,0.06)"}`,
                borderRadius: "16px",
                padding:      "32px",
                cursor:       "default",
                position:     "relative",
                overflow:     "hidden",
                boxShadow:    activeCard === i
                  ? `0 20px 60px rgba(0,0,0,0.4), 0 0 40px ${fruit.glow}`
                  : "0 4px 20px rgba(0,0,0,0.2)",
              }}
            >
              {/* Top glow line */}
              <div style={{
                position:   "absolute",
                top:        0,
                left:       0,
                right:      0,
                height:     "2px",
                background: `linear-gradient(90deg, transparent, ${fruit.color}, transparent)`,
                opacity:    activeCard === i ? 1 : 0.3,
                transition: "opacity 0.3s ease",
              }} />

              {/* Background glow on hover */}
              <div style={{
                position:   "absolute",
                top:        "-50%",
                right:      "-50%",
                width:      "200px",
                height:     "200px",
                background: `radial-gradient(circle, ${fruit.glow} 0%, transparent 70%)`,
                opacity:    activeCard === i ? 0.3 : 0,
                transition: "opacity 0.4s ease",
                pointerEvents: "none",
              }} />

              {/* Fruit icon */}
              <div style={{
                width:          "56px",
                height:         "56px",
                borderRadius:   "50%",
                background:     `linear-gradient(135deg, ${fruit.color}33, ${fruit.color}11)`,
                border:         `1px solid ${fruit.border}`,
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
                fontSize:       "24px",
                marginBottom:   "20px",
                animation:      `float${i % 3} ${3 + i * 0.3}s ease-in-out infinite`,
                boxShadow:      activeCard === i ? `0 0 20px ${fruit.glow}` : "none",
                transition:     "box-shadow 0.3s ease",
              }}>
                {fruit.icon}
              </div>

              {/* Fruit name badge */}
              <p style={{
                fontFamily:    "'Inter', sans-serif",
                fontSize:      "10px",
                fontWeight:    600,
                letterSpacing: "0.12em",
                color:         fruit.color,
                textTransform: "uppercase",
                marginBottom:  "6px",
              }}>
                {fruit.fruitName}
              </p>

              {/* Category */}
              <h3 style={{
                fontFamily:   "'Cinzel', serif",
                fontSize:     "15px",
                fontWeight:   600,
                color:        "#F0EAD6",
                marginBottom: "20px",
                lineHeight:   1.3,
              }}>
                {fruit.category}
              </h3>

              {/* Skills pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {fruit.skills.map((skill, j) => (
                  <span
                    key={j}
                    style={{
                      display:       "inline-block",
                      padding:       "5px 12px",
                      background:    activeCard === i
                        ? `${fruit.color}22`
                        : "rgba(255,255,255,0.04)",
                      border:        `1px solid ${activeCard === i ? fruit.border : "rgba(255,255,255,0.08)"}`,
                      borderRadius:  "99px",
                      fontFamily:    "'Inter', sans-serif",
                      fontSize:      "11px",
                      color:         activeCard === i ? "#F0EAD6" : "#8A8070",
                      transition:    `all 0.3s ease ${j * 0.03}s`,
                      fontWeight:    500,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom note ── */}
        <div style={{
          textAlign:  "center",
          marginTop:  "60px",
          opacity:    isVisible ? 1 : 0,
          transition: "opacity 0.9s ease 0.8s",
        }}>
          <p style={{
            fontFamily: "'Lora', serif",
            fontSize:   "14px",
            color:      "#4A4438",
            fontStyle:  "italic",
          }}>
            "The sea of knowledge has no end — new islands are always on the horizon"
          </p>
        </div>
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes float0 {
          0%,100% { transform: translateY(0px);  }
          50%      { transform: translateY(-8px); }
        }
        @keyframes float1 {
          0%,100% { transform: translateY(0px);   }
          50%      { transform: translateY(-10px); }
        }
        @keyframes float2 {
          0%,100% { transform: translateY(0px);  }
          50%      { transform: translateY(-6px); }
        }
        @media (max-width: 900px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}