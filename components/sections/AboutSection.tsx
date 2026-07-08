"use client";

import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  /* ── Trigger animation when section enters viewport ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "2+",   label: "Years of AI/ML Experience" },
    { value: "10+",  label: "Projects Built"             },
    { value: "MSc",  label: "AI & ML Degree"             },
    { value: "Open", label: "Source Contributor"         },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        minHeight:   "100vh",
        background:  "linear-gradient(180deg, #0B1120 0%, #0E1829 50%, #0B1120 100%)",
        padding:     "120px 24px",
        display:     "flex",
        alignItems:  "center",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>

        {/* ── Section Header ── */}
        <div
          style={{
            textAlign:   "center",
            marginBottom: "80px",
            opacity:      isVisible ? 1 : 0,
            transform:    isVisible ? "translateY(0)" : "translateY(30px)",
            transition:   "all 0.8s ease",
          }}
        >
          <p
            style={{
              fontFamily:    "'Inter', sans-serif",
              fontSize:      "12px",
              fontWeight:    600,
              letterSpacing: "0.2em",
              color:         "#3A9E8F",
              textTransform: "uppercase",
              marginBottom:  "12px",
            }}
          >
            ⚓ Captain's Log
          </p>
          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize:   "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color:      "#F0EAD6",
              marginBottom: "16px",
            }}
          >
            The Navigator's Story
          </h2>
          <div
            style={{
              width:      "60px",
              height:     "2px",
              background: "linear-gradient(90deg, #F5C842, #FFD97D)",
              margin:     "0 auto",
            }}
          />
        </div>

        {/* ── Main Content ── */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "1fr 1fr",
            gap:                 "60px",
            alignItems:          "start",
          }}
          className="about-grid"
        >
          {/* ── Left: Journal Entry ── */}
          <div
            style={{
              opacity:    isVisible ? 1 : 0,
              transform:  isVisible ? "translateX(0)" : "translateX(-40px)",
              transition: "all 0.8s ease 0.2s",
            }}
          >
            {/* Journal card */}
            <div
              style={{
                background:   "linear-gradient(135deg, #111827, #1A2640)",
                border:       "1px solid rgba(245,200,66,0.2)",
                borderRadius: "12px",
                padding:      "40px",
                position:     "relative",
                overflow:     "hidden",
              }}
            >
              {/* Decorative corner */}
              <div
                style={{
                  position:     "absolute",
                  top:          0,
                  right:        0,
                  width:        "80px",
                  height:       "80px",
                  background:   "linear-gradient(135deg, transparent 50%, rgba(245,200,66,0.08) 50%)",
                }}
              />

              {/* Log entry header */}
              <div
                style={{
                  display:      "flex",
                  alignItems:   "center",
                  gap:          "12px",
                  marginBottom: "24px",
                  paddingBottom:"16px",
                  borderBottom: "1px solid rgba(245,200,66,0.15)",
                }}
              >
                <span style={{ fontSize: "24px" }}>📖</span>
                <div>
                  <p
                    style={{
                      fontFamily:    "'Inter', sans-serif",
                      fontSize:      "11px",
                      color:         "#8A8070",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    Captain's Log — Entry 001
                  </p>
                  <p
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize:   "14px",
                      color:      "#F5C842",
                    }}
                  >
                    Rachel D'Souza
                  </p>
                </div>
              </div>

              {/* Journal text */}
              <p
                style={{
                  fontFamily:   "'Lora', serif",
                  fontSize:     "15px",
                  color:        "#C8C0A8",
                  lineHeight:   1.9,
                  marginBottom: "20px",
                  fontStyle:    "italic",
                }}
              >
                "The Grand Line was said to be impossible to navigate.
                They called it the world's most dangerous sea. But every
                great navigator knows — the impossible is just uncharted
                territory waiting to be mapped."
              </p>

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize:   "14px",
                  color:      "#C8C0A8",
                  lineHeight: 1.8,
                  marginBottom:"16px",
                }}
              >
                I am an MSc Artificial Intelligence & Machine Learning
                student at MIT-ADT University, building AI systems that
                turn complex problems into intelligent solutions.
              </p>

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize:   "14px",
                  color:      "#C8C0A8",
                  lineHeight: 1.8,
                  marginBottom:"16px",
                }}
              >
                My voyage has taken me through RAG systems, LLM APIs,
                FastAPI backends, and Next.js frontends. Each project
                is a new island discovered — each bug fixed is a storm
                weathered.
              </p>

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize:   "14px",
                  color:      "#C8C0A8",
                  lineHeight: 1.8,
                }}
              >
                Currently contributing to open source via GSSoC 2026
                and actively seeking AI engineering internships where I
                can bring both technical depth and creative thinking.
              </p>

              {/* Signature */}
              <div
                style={{
                  marginTop:   "32px",
                  paddingTop:  "20px",
                  borderTop:   "1px solid rgba(245,200,66,0.15)",
                  display:     "flex",
                  alignItems:  "center",
                  gap:         "12px",
                }}
              >
                <div
                  style={{
                    width:        "40px",
                    height:       "40px",
                    borderRadius: "50%",
                    background:   "linear-gradient(135deg, #F5C842, #E8B830)",
                    display:      "flex",
                    alignItems:   "center",
                    justifyContent:"center",
                    fontSize:     "18px",
                  }}
                >
                  ⚓
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize:   "14px",
                      color:      "#F0EAD6",
                      fontWeight: 600,
                    }}
                  >
                    Rachel D'Souza
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize:   "12px",
                      color:      "#8A8070",
                    }}
                  >
                    AI Navigator · MSc Student
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Stats + Details ── */}
          <div
            style={{
              opacity:    isVisible ? 1 : 0,
              transform:  isVisible ? "translateX(0)" : "translateX(40px)",
              transition: "all 0.8s ease 0.4s",
            }}
          >
            {/* Stats grid */}
            <div
              style={{
                display:             "grid",
                gridTemplateColumns: "1fr 1fr",
                gap:                 "16px",
                marginBottom:        "32px",
              }}
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  style={{
                    background:   "linear-gradient(135deg, #111827, #1A2640)",
                    border:       "1px solid rgba(245,200,66,0.15)",
                    borderRadius: "12px",
                    padding:      "24px",
                    textAlign:    "center",
                    transition:   "border-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(245,200,66,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(245,200,66,0.15)";
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize:   "28px",
                      fontWeight: 700,
                      color:      "#F5C842",
                      marginBottom:"4px",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize:   "11px",
                      color:      "#8A8070",
                      lineHeight: 1.4,
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Details list */}
            {[
              { icon: "🎓", label: "Degree",     value: "MSc AI & ML — MIT-ADT University"  },
              { icon: "📍", label: "Location",   value: "Pune, Maharashtra, India"           },
              { icon: "🌊", label: "Focus",      value: "LLMs, RAG Systems, AI Engineering" },
              { icon: "⚔️", label: "Status",     value: "Seeking AI Engineering Internships" },
              { icon: "🏴‍☠️", label: "Open Source", value: "GSSoC 2026 Contributor"          },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display:      "flex",
                  alignItems:   "center",
                  gap:          "16px",
                  padding:      "14px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <span style={{ fontSize: "18px", minWidth: "24px" }}>
                  {item.icon}
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize:   "12px",
                    color:      "#8A8070",
                    minWidth:   "80px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize:   "13px",
                    color:      "#C8C0A8",
                    fontWeight: 500,
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}

            {/* CTA */}
            <div style={{ marginTop: "32px" }}>
              <a
                href="/resume.pdf"
                target="_blank"
                style={{
                  display:       "inline-flex",
                  alignItems:    "center",
                  gap:           "8px",
                  padding:       "12px 28px",
                  background:    "linear-gradient(135deg, #F5C842, #E8B830)",
                  color:         "#0B1120",
                  fontFamily:    "'Inter', sans-serif",
                  fontWeight:    700,
                  fontSize:      "13px",
                  borderRadius:  "8px",
                  textDecoration:"none",
                  letterSpacing: "0.05em",
                }}
              >
                📄 Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Responsive CSS ── */}
      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}