"use client";

import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMounted,  setIsMounted]  = useState(false);

  useEffect(() => { setIsMounted(true); }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const stats = [
    { value: "2+",   label: "Years Experience", icon: "⚔️" },
    { value: "10+",  label: "Projects Built",   icon: "🏝️" },
    { value: "MSc",  label: "AI & ML Degree",   icon: "🎓" },
    { value: "Open", label: "Source Contributor",icon: "🌊" },
  ];

  const details = [
    { icon: "🎓", label: "Degree",      value: "MSc AI & ML — MIT-ADT University"   },
    { icon: "📍", label: "Location",    value: "Pune, Maharashtra, India"            },
    { icon: "🌊", label: "Focus",       value: "LLMs, RAG Systems, AI Engineering"  },
    { icon: "⚔️", label: "Status",      value: "Seeking AI Internships"             },
    { icon: "🏴‍☠️", label: "Open Source", value: "GSSoC 2026 Contributor"           },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        minHeight:  "100vh",
        background: "linear-gradient(180deg, #0B1120 0%, #0D1B2A 50%, #0B1120 100%)",
        padding:    "120px 24px",
        position:   "relative",
        overflow:   "hidden",
      }}
    >
      {/* ── Animated background orbs ── */}
      {/* ── Animated background orbs ── */}
    {typeof window !== "undefined" && (
      <>
      <div style={{
        position: "absolute",
        top:      "20%",
        left:     "10%",
        width:    "400px",
        height:   "400px",
        background: "radial-gradient(circle, rgba(245,200,66,0.04) 0%, transparent 70%)",
        transform: `translate(${mousePos.x * 0.01}px, ${mousePos.y * 0.01}px)`,
        transition: "transform 0.5s ease",
        pointerEvents: "none",
        }} />
      <div style={{
        position: "absolute",
        bottom:   "20%",
        right:    "10%",
        width:    "300px",
        height:   "300px",
        background: "radial-gradient(circle, rgba(58,158,143,0.06) 0%, transparent 70%)",
        transform: `translate(${mousePos.x * -0.015}px, ${mousePos.y * -0.015}px)`,
        transition: "transform 0.5s ease",
        pointerEvents: "none",
        }} />
  </>
)}
      {/* ── Decorative compass rose ── */}
      <div style={{
        position:  "absolute",
        right:     "5%",
        top:       "50%",
        transform: "translateY(-50%)",
        width:     "300px",
        height:    "300px",
        opacity:   0.03,
        fontSize:  "300px",
        lineHeight: 1,
        pointerEvents: "none",
        userSelect: "none",
      }}>
        🧭
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>

        {/* ── Section Header ── */}
        <div style={{
          textAlign:    "center",
          marginBottom: "80px",
          opacity:      isVisible ? 1 : 0,
          transform:    isVisible ? "translateY(0)" : "translateY(40px)",
          transition:   "opacity 0.9s ease, transform 0.9s ease",
        }}>
          <p style={{
            fontFamily:    "'Inter', sans-serif",
            fontSize:      "11px",
            fontWeight:    700,
            letterSpacing: "0.3em",
            color:         "#3A9E8F",
            textTransform: "uppercase",
            marginBottom:  "16px",
            display:       "flex",
            alignItems:    "center",
            justifyContent:"center",
            gap:           "8px",
          }}>
            <span style={{ display: "inline-block", animation: "spin 8s linear infinite" }}>🧭</span>
            Captain's Log
          </p>
          <h2 style={{
            fontFamily:   "'Cinzel', serif",
            fontSize:     "clamp(2rem, 5vw, 3.5rem)",
            fontWeight:   700,
            color:        "#F0EAD6",
            marginBottom: "20px",
            textShadow:   "0 0 60px rgba(245,200,66,0.1)",
          }}>
            The Navigator's Story
          </h2>
          {/* Animated gold divider */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
            <div style={{
              height:     "1px",
              width:      isVisible ? "80px" : "0px",
              background: "linear-gradient(90deg, transparent, #F5C842)",
              transition: "width 1s ease 0.5s",
            }} />
            <span style={{ color: "#F5C842", fontSize: "16px" }}>⚓</span>
            <div style={{
              height:     "1px",
              width:      isVisible ? "80px" : "0px",
              background: "linear-gradient(90deg, #F5C842, transparent)",
              transition: "width 1s ease 0.5s",
            }} />
          </div>
        </div>

        {/* ── Main Grid ── */}
        <div
          className="about-grid"
          style={{
            display:             "grid",
            gridTemplateColumns: "1fr 1fr",
            gap:                 "48px",
            alignItems:          "start",
          }}
        >
          {/* ── LEFT: Journal Card ── */}
          <div style={{
            opacity:    isVisible ? 1 : 0,
            transform:  isVisible ? "translateX(0) rotateY(0deg)" : "translateX(-60px) rotateY(-5deg)",
            transition: "opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s",
          }}>
            <div
              className="journal-card"
              style={{
                background:    "linear-gradient(135deg, #0F1E35 0%, #1A2744 100%)",
                border:        "1px solid rgba(245,200,66,0.2)",
                borderRadius:  "16px",
                padding:       "40px",
                position:      "relative",
                overflow:      "hidden",
                transition:    "transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease",
                cursor:        "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform   = "translateY(-6px)";
                el.style.boxShadow   = "0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(245,200,66,0.08)";
                el.style.borderColor = "rgba(245,200,66,0.4)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform   = "translateY(0)";
                el.style.boxShadow   = "none";
                el.style.borderColor = "rgba(245,200,66,0.2)";
              }}
            >
              {/* Top shimmer line */}
              <div style={{
                position:   "absolute",
                top:        0,
                left:       0,
                right:      0,
                height:     "2px",
                background: "linear-gradient(90deg, transparent, #F5C842, transparent)",
                animation:  "shimmerLine 3s ease-in-out infinite",
              }} />

              {/* Corner decoration */}
              <div style={{
                position:   "absolute",
                top:        0,
                right:      0,
                width:      "100px",
                height:     "100px",
                background: "linear-gradient(225deg, rgba(245,200,66,0.06) 0%, transparent 60%)",
                borderRadius:"0 16px 0 0",
              }} />

              {/* Log header */}
              <div style={{
                display:       "flex",
                alignItems:    "center",
                gap:           "12px",
                marginBottom:  "28px",
                paddingBottom: "20px",
                borderBottom:  "1px solid rgba(245,200,66,0.12)",
              }}>
                <div style={{
                  width:          "44px",
                  height:         "44px",
                  borderRadius:   "50%",
                  background:     "linear-gradient(135deg, rgba(245,200,66,0.2), rgba(245,200,66,0.05))",
                  border:         "1px solid rgba(245,200,66,0.3)",
                  display:        "flex",
                  alignItems:     "center",
                  justifyContent: "center",
                  fontSize:       "20px",
                  animation:      "float 4s ease-in-out infinite",
                }}>
                  📖
                </div>
                <div>
                  <p style={{
                    fontFamily:    "'Inter', sans-serif",
                    fontSize:      "10px",
                    color:         "#8A8070",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginBottom:  "2px",
                  }}>
                    Captain's Log — Entry 001
                  </p>
                  <p style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize:   "15px",
                    color:      "#F5C842",
                    fontWeight: 600,
                  }}>
                    Rachel D'Souza
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div style={{
                borderLeft:  "3px solid rgba(245,200,66,0.4)",
                paddingLeft: "20px",
                marginBottom:"24px",
              }}>
                <p style={{
                  fontFamily: "'Lora', serif",
                  fontSize:   "14px",
                  color:      "#C8C0A8",
                  lineHeight: 1.9,
                  fontStyle:  "italic",
                }}>
                  "The Grand Line was said to be impossible to navigate.
                  They called it the world's most dangerous sea. But every
                  great navigator knows — the impossible is just uncharted
                  territory waiting to be mapped."
                </p>
              </div>

              {[
                "I am an MSc Artificial Intelligence & Machine Learning student at MIT-ADT University, building AI systems that turn complex problems into intelligent solutions.",
                "My voyage has taken me through RAG systems, LLM APIs, FastAPI backends, and Next.js frontends. Each project is a new island discovered — each bug fixed is a storm weathered.",
                "Currently contributing to open source via GSSoC 2026 and actively seeking AI engineering internships where I can bring both technical depth and creative thinking.",
              ].map((text, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily:   "'Inter', sans-serif",
                    fontSize:     "14px",
                    color:        "#C8C0A8",
                    lineHeight:   1.85,
                    marginBottom: "16px",
                    opacity:      isVisible ? 1 : 0,
                    transform:    isVisible ? "translateY(0)" : "translateY(20px)",
                    transition:   `opacity 0.6s ease ${0.5 + i * 0.15}s, transform 0.6s ease ${0.5 + i * 0.15}s`,
                  }}
                >
                  {text}
                </p>
              ))}

              {/* Signature */}
              <div style={{
                marginTop:  "28px",
                paddingTop: "20px",
                borderTop:  "1px solid rgba(245,200,66,0.12)",
                display:    "flex",
                alignItems: "center",
                gap:        "12px",
              }}>
                <div style={{
                  width:          "40px",
                  height:         "40px",
                  borderRadius:   "50%",
                  background:     "linear-gradient(135deg, #F5C842, #E8B830)",
                  display:        "flex",
                  alignItems:     "center",
                  justifyContent: "center",
                  fontSize:       "16px",
                  boxShadow:      "0 0 20px rgba(245,200,66,0.3)",
                }}>
                  ⚓
                </div>
                <div>
                  <p style={{ fontFamily:"'Cinzel',serif", fontSize:"13px", color:"#F0EAD6", fontWeight:600 }}>
                    Rachel D'Souza
                  </p>
                  <p style={{ fontFamily:"'Inter',sans-serif", fontSize:"11px", color:"#8A8070" }}>
                    AI Navigator · MSc Student
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Stats + Details ── */}
          <div style={{
            opacity:    isVisible ? 1 : 0,
            transform:  isVisible ? "translateX(0)" : "translateX(60px)",
            transition: "opacity 0.9s ease 0.5s, transform 0.9s ease 0.5s",
          }}>
            {/* Stats grid */}
            <div style={{
              display:             "grid",
              gridTemplateColumns: "1fr 1fr",
              gap:                 "12px",
              marginBottom:        "28px",
            }}>
              {stats.map((stat, i) => (
                <div
                  key={i}
                  style={{
                    background:   "linear-gradient(135deg, #0F1E35, #1A2744)",
                    border:       "1px solid rgba(245,200,66,0.12)",
                    borderRadius: "12px",
                    padding:      "24px 16px",
                    textAlign:    "center",
                    transition:   "all 0.3s ease",
                    cursor:       "default",
                    opacity:      isVisible ? 1 : 0,
                    transform:    isVisible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
                    transitionDelay: `${0.6 + i * 0.1}s`,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform   = "translateY(-4px) scale(1.02)";
                    el.style.borderColor = "rgba(245,200,66,0.4)";
                    el.style.boxShadow   = "0 8px 30px rgba(0,0,0,0.3), 0 0 20px rgba(245,200,66,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform   = "translateY(0) scale(1)";
                    el.style.borderColor = "rgba(245,200,66,0.12)";
                    el.style.boxShadow   = "none";
                  }}
                >
                  <div style={{ fontSize: "22px", marginBottom: "8px" }}>{stat.icon}</div>
                  <p style={{
                    fontFamily:   "'Cinzel', serif",
                    fontSize:     "26px",
                    fontWeight:   700,
                    color:        "#F5C842",
                    marginBottom: "6px",
                    textShadow:   "0 0 20px rgba(245,200,66,0.3)",
                  }}>
                    {stat.value}
                  </p>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize:   "10px",
                    color:      "#8A8070",
                    lineHeight: 1.4,
                    letterSpacing: "0.03em",
                  }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Details list */}
            <div style={{
              background:   "linear-gradient(135deg, #0F1E35, #1A2744)",
              border:       "1px solid rgba(245,200,66,0.12)",
              borderRadius: "12px",
              padding:      "8px 0",
              marginBottom: "24px",
            }}>
              {details.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display:    "flex",
                    alignItems: "center",
                    gap:        "16px",
                    padding:    "14px 24px",
                    borderBottom: i < details.length - 1
                      ? "1px solid rgba(255,255,255,0.04)"
                      : "none",
                    transition: "background 0.2s ease",
                    opacity:    isVisible ? 1 : 0,
                    transform:  isVisible ? "translateX(0)" : "translateX(20px)",
                    transitionDelay: `${0.7 + i * 0.08}s`,
                    cursor:     "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(245,200,66,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                >
                  <span style={{ fontSize: "16px", minWidth: "20px" }}>{item.icon}</span>
                  <span style={{
                    fontFamily:    "'Inter', sans-serif",
                    fontSize:      "10px",
                    color:         "#4A4438",
                    minWidth:      "80px",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontWeight:    600,
                  }}>
                    {item.label}
                  </span>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize:   "13px",
                    color:      "#C8C0A8",
                    fontWeight: 500,
                  }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              style={{
                display:        "inline-flex",
                alignItems:     "center",
                gap:            "8px",
                padding:        "14px 32px",
                background:     "linear-gradient(135deg, #F5C842, #E8B830)",
                color:          "#0B1120",
                fontFamily:     "'Inter', sans-serif",
                fontWeight:     700,
                fontSize:       "13px",
                borderRadius:   "8px",
                textDecoration: "none",
                letterSpacing:  "0.05em",
                transition:     "all 0.3s ease",
                boxShadow:      "0 4px 20px rgba(245,200,66,0.2)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform  = "translateY(-3px)";
                el.style.boxShadow  = "0 8px 30px rgba(245,200,66,0.4)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 4px 20px rgba(245,200,66,0.2)";
              }}
            >
              📄 Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg);   }
          to   { transform: rotate(360deg); }
        }
        @keyframes shimmerLine {
          0%, 100% { opacity: 0.4; transform: scaleX(0.3); }
          50%       { opacity: 1;   transform: scaleX(1);   }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px);  }
          50%       { transform: translateY(-6px); }
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}