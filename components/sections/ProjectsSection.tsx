"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id:          1,
    island:      "Island of Cognition",
    title:       "Query-Aware RAG Assistant",
    description: "A production-grade Retrieval Augmented Generation system with hybrid search combining FAISS vector search and BM25 keyword search. Features trust metrics including groundedness scoring and hallucination detection.",
    tech:        ["LangChain", "FAISS", "BM25", "Groq LLaMA 3.1", "Gemini", "Streamlit", "Python"],
    icon:        "🧠",
    color:       "#6C4A8A",
    glow:        "rgba(108,74,138,0.4)",
    border:      "rgba(108,74,138,0.3)",
    github:      "https://github.com/rachel-d-07/-Query-Aware-RAG",
    live:        "",
    status:      "Completed",
    highlight:   "Hybrid Search + Trust Metrics",
  },
  {
    id:          2,
    island:      "Island of Connections",
    title:       "AI Resume-to-Job Matching Agent",
    description: "An intelligent multi-agent system that analyzes resumes against job descriptions using Gemini 2.5 Flash. Integrates with the Adzuna API to fetch real job listings and provides match scores with actionable feedback.",
    tech:        ["FastAPI", "Next.js", "Gemini 2.5 Flash", "Adzuna API", "TypeScript", "Python"],
    icon:        "🎯",
    color:       "#3A9E8F",
    glow:        "rgba(58,158,143,0.4)",
    border:      "rgba(58,158,143,0.3)",
    github:      "https://github.com/rachel-d-07",
    live:        "",
    status:      "In Progress",
    highlight:   "Multi-Agent + Real Job Data",
  },
  {
    id:          3,
    island:      "Island of Memory",
    title:       "LRU Cache System",
    description: "A fully implemented Least Recently Used cache system in Python featuring O(1) time complexity for all operations using a doubly linked list and hash map. Built as a combined DSA and portfolio project.",
    tech:        ["Python", "Data Structures", "Algorithms", "OOP", "Unit Testing"],
    icon:        "⚡",
    color:       "#E8B830",
    glow:        "rgba(232,184,48,0.4)",
    border:      "rgba(232,184,48,0.3)",
    github:      "https://github.com/rachel-d-07",
    live:        "",
    status:      "Completed",
    highlight:   "O(1) Time Complexity",
  },
  {
    id:          4,
    island:      "Island of Navigation",
    title:       "LogPose Portfolio",
    description: "This very portfolio — built from scratch with Next.js 16, Tailwind CSS v4, and custom animations. A One Piece inspired AI engineer portfolio featuring 8 themed sections and a complete Grand Line design system.",
    tech:        ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Framer Motion", "CSS Animations"],
    icon:        "🧭",
    color:       "#4A90D9",
    glow:        "rgba(74,144,217,0.4)",
    border:      "rgba(74,144,217,0.3)",
    github:      "https://github.com/rachel-d-07/logpose-portfolio",
    live:        "https://logpose-portfolio.vercel.app",
    status:      "In Progress",
    highlight:   "You are looking at it!",
  },
];

function ProjectCard({
  project,
  index,
  isVisible,
}: {
  project: (typeof projects)[0];
  index:   number;
  isVisible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity:    isVisible ? 1 : 0,
        transform:  isVisible
          ? hovered
            ? "translateY(-10px) scale(1.01)"
            : "translateY(0) scale(1)"
          : "translateY(60px) scale(0.95)",
        transition: `
          opacity   0.7s ease ${index * 0.15}s,
          transform 0.4s ease
        `,
        background:   "linear-gradient(135deg, #0F1E35 0%, #1A2744 100%)",
        border:       `1px solid ${hovered ? project.border : "rgba(255,255,255,0.06)"}`,
        borderRadius: "20px",
        overflow:     "hidden",
        position:     "relative",
        boxShadow:    hovered
          ? `0 24px 80px rgba(0,0,0,0.5), 0 0 60px ${project.glow}`
          : "0 4px 20px rgba(0,0,0,0.2)",
        cursor: "default",
      }}
    >
      {/* Top accent line */}
      <div style={{
        height:     "3px",
        background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
        opacity:    hovered ? 1 : 0.4,
        transition: "opacity 0.3s ease",
      }} />

      {/* Fog overlay that lifts on hover */}
      <div style={{
        position:   "absolute",
        inset:      0,
        background: `radial-gradient(ellipse at top right, ${project.glow} 0%, transparent 60%)`,
        opacity:    hovered ? 0.15 : 0,
        transition: "opacity 0.4s ease",
        pointerEvents: "none",
      }} />

      <div style={{ padding: "32px" }}>

        {/* Header row */}
        <div style={{
          display:        "flex",
          alignItems:     "flex-start",
          justifyContent: "space-between",
          marginBottom:   "20px",
          gap:            "16px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            {/* Icon */}
            <div style={{
              width:          "52px",
              height:         "52px",
              borderRadius:   "14px",
              background:     `linear-gradient(135deg, ${project.color}33, ${project.color}11)`,
              border:         `1px solid ${project.border}`,
              display:        "flex",
              alignItems:     "center",
              justifyContent: "center",
              fontSize:       "22px",
              flexShrink:     0,
              transition:     "transform 0.3s ease",
              transform:      hovered ? "rotate(-5deg) scale(1.1)" : "none",
            }}>
              {project.icon}
            </div>
            <div>
              <p style={{
                fontFamily:    "'Inter', sans-serif",
                fontSize:      "10px",
                color:         project.color,
                fontWeight:    600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom:  "4px",
              }}>
                {project.island}
              </p>
              <h3 style={{
                fontFamily: "'Cinzel', serif",
                fontSize:   "16px",
                fontWeight: 600,
                color:      "#F0EAD6",
                lineHeight: 1.3,
              }}>
                {project.title}
              </h3>
            </div>
          </div>

          {/* Status badge */}
          <span style={{
            display:       "inline-block",
            padding:       "4px 10px",
            borderRadius:  "99px",
            fontSize:      "10px",
            fontFamily:    "'Inter', sans-serif",
            fontWeight:    600,
            flexShrink:    0,
            background:    project.status === "Completed"
              ? "rgba(42,124,111,0.2)"
              : "rgba(232,184,48,0.2)",
            color:         project.status === "Completed"
              ? "#3A9E8F"
              : "#E8B830",
            border:        `1px solid ${project.status === "Completed"
              ? "rgba(42,124,111,0.3)"
              : "rgba(232,184,48,0.3)"}`,
          }}>
            {project.status === "Completed" ? "✓ " : "⚡ "}
            {project.status}
          </span>
        </div>

        {/* Highlight badge */}
        <div style={{
          display:      "inline-flex",
          alignItems:   "center",
          gap:          "6px",
          padding:      "6px 14px",
          background:   `${project.color}15`,
          border:       `1px solid ${project.border}`,
          borderRadius: "8px",
          marginBottom: "16px",
        }}>
          <span style={{ fontSize: "10px" }}>⭐</span>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize:   "11px",
            color:      project.color,
            fontWeight: 600,
          }}>
            {project.highlight}
          </span>
        </div>

        {/* Description */}
        <p style={{
          fontFamily:   "'Inter', sans-serif",
          fontSize:     "13px",
          color:        "#8A8070",
          lineHeight:   1.8,
          marginBottom: "24px",
        }}>
          {project.description}
        </p>

        {/* Tech stack */}
        <div style={{
          display:      "flex",
          flexWrap:     "wrap",
          gap:          "6px",
          marginBottom: "28px",
        }}>
          {project.tech.map((t, i) => (
            <span
              key={i}
              style={{
                padding:      "4px 10px",
                background:   hovered
                  ? `${project.color}18`
                  : "rgba(255,255,255,0.04)",
                border:       `1px solid ${hovered
                  ? project.border
                  : "rgba(255,255,255,0.08)"}`,
                borderRadius: "6px",
                fontFamily:   "'JetBrains Mono', monospace",
                fontSize:     "10px",
                color:        hovered ? "#C8C0A8" : "#4A4438",
                transition:   `all 0.3s ease ${i * 0.02}s`,
                fontWeight:   500,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display:        "inline-flex",
              alignItems:     "center",
              gap:            "6px",
              padding:        "10px 20px",
              background:     "rgba(255,255,255,0.04)",
              border:         "1px solid rgba(255,255,255,0.1)",
              borderRadius:   "8px",
              fontFamily:     "'Inter', sans-serif",
              fontSize:       "12px",
              fontWeight:     600,
              color:          "#C8C0A8",
              textDecoration: "none",
              transition:     "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background   = "rgba(255,255,255,0.08)";
              el.style.borderColor  = "rgba(255,255,255,0.2)";
              el.style.color        = "#F0EAD6";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background  = "rgba(255,255,255,0.04)";
              el.style.borderColor = "rgba(255,255,255,0.1)";
              el.style.color       = "#C8C0A8";
            }}
          >
            🐙 GitHub
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display:        "inline-flex",
                alignItems:     "center",
                gap:            "6px",
                padding:        "10px 20px",
                background:     `linear-gradient(135deg, ${project.color}33, ${project.color}11)`,
                border:         `1px solid ${project.border}`,
                borderRadius:   "8px",
                fontFamily:     "'Inter', sans-serif",
                fontSize:       "12px",
                fontWeight:     600,
                color:          project.color,
                textDecoration: "none",
                transition:     "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = `${project.color}33`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = `${project.color}11`;
              }}
            >
              🌐 Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      id="projects"
      ref={sectionRef}
      style={{
        minHeight:  "100vh",
        background: "linear-gradient(180deg, #0B1120 0%, #0E1829 50%, #0B1120 100%)",
        padding:    "120px 24px",
        position:   "relative",
        overflow:   "hidden",
      }}
    >
      {/* Background decoration */}
      <div style={{
        position:      "absolute",
        top:           "50%",
        left:          "50%",
        transform:     "translate(-50%, -50%)",
        width:         "900px",
        height:        "900px",
        background:    "radial-gradient(circle, rgba(74,144,217,0.03) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>

        {/* Section Header */}
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
            color:         "#4A90D9",
            textTransform: "uppercase",
            marginBottom:  "16px",
          }}>
            🏝️ Project Islands
          </p>
          <h2 style={{
            fontFamily:   "'Cinzel', serif",
            fontSize:     "clamp(2rem, 5vw, 3.5rem)",
            fontWeight:   700,
            color:        "#F0EAD6",
            marginBottom: "20px",
          }}>
            Islands Discovered
          </h2>
          <p style={{
            fontFamily:   "'Lora', serif",
            fontSize:     "16px",
            color:        "#8A8070",
            fontStyle:    "italic",
            marginBottom: "24px",
          }}>
            "Each project is a new island — emerging from the fog as you sail closer"
          </p>
          <div style={{
            display:        "flex",
            alignItems:     "center",
            justifyContent: "center",
            gap:            "12px",
          }}>
            <div style={{
              height:     "1px",
              width:      isVisible ? "80px" : "0px",
              background: "linear-gradient(90deg, transparent, #4A90D9)",
              transition: "width 1s ease 0.5s",
            }} />
            <span style={{ color: "#4A90D9", fontSize: "16px" }}>🏝️</span>
            <div style={{
              height:     "1px",
              width:      isVisible ? "80px" : "0px",
              background: "linear-gradient(90deg, #4A90D9, transparent)",
              transition: "width 1s ease 0.5s",
            }} />
          </div>
        </div>

        {/* Projects Grid */}
        <div
          className="projects-grid"
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap:                 "24px",
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          textAlign:  "center",
          marginTop:  "60px",
          opacity:    isVisible ? 1 : 0,
          transition: "opacity 0.9s ease 0.8s",
        }}>
          <p style={{
            fontFamily:   "'Lora', serif",
            fontSize:     "14px",
            color:        "#4A4438",
            fontStyle:    "italic",
            marginBottom: "20px",
          }}>
            "More islands await on the horizon"
          </p>
          
          <a
            href="https://github.com/rachel-d-07"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display:        "inline-flex",
              alignItems:     "center",
              gap:            "8px",
              padding:        "12px 28px",
              background:     "transparent",
              border:         "1px solid rgba(245,200,66,0.3)",
              borderRadius:   "8px",
              fontFamily:     "'Inter', sans-serif",
              fontSize:       "13px",
              fontWeight:     600,
              color:          "#F5C842",
              textDecoration: "none",
              transition:     "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background   = "rgba(245,200,66,0.08)";
              el.style.borderColor  = "rgba(245,200,66,0.6)";
              el.style.transform    = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background  = "transparent";
              el.style.borderColor = "rgba(245,200,66,0.3)";
              el.style.transform   = "translateY(0)";
            }}
          >
            🐙 View All on GitHub
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}