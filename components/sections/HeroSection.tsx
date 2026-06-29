"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }[] = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.6 + 0.2,
      });
    }

    let animationFrameId = 0;

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 200, 66, ${p.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background:
          "linear-gradient(160deg, #0B1120 0%, #14213D 40%, #1C2E4A 70%, #0B1120 100%)",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
      />

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(245,200,66,0.08) 0%, transparent 70%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: "800px",
        }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            color: "#3A9E8F",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          MSc Artificial Intelligence and Machine Learning
        </p>

        <h1
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: "8px",
            color: "#F0EAD6",
          }}
        >
          The Grand Line
        </h1>

        <h2
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(1.5rem, 5vw, 3rem)",
            fontWeight: 400,
            background: "linear-gradient(135deg, #F5C842, #FFD97D, #E8B830)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "32px",
          }}
        >
          of Artificial Intelligence
        </h2>

        <p
          style={{
            fontFamily: "'Lora', serif",
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            color: "#C8C0A8",
            lineHeight: 1.8,
            maxWidth: "600px",
            margin: "0 auto 48px",
          }}
        >
          Every great navigator needs a Log Pose. Mine points toward
          the intersection of intelligence and discovery.
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#projects"
            style={{
              display: "inline-block",
              padding: "14px 32px",
              background: "linear-gradient(135deg, #F5C842, #E8B830)",
              color: "#0B1120",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            View Projects
          </a>

          <a
            href="#contact"
            style={{
              display: "inline-block",
              padding: "14px 32px",
              background: "transparent",
              color: "#F5C842",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              borderRadius: "8px",
              border: "1px solid rgba(245,200,66,0.4)",
              textDecoration: "none",
            }}
          >
            Contact Me
          </a>
        </div>

        <div
          style={{
            marginTop: "80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.15em",
              color: "#8A8070",
              textTransform: "uppercase",
            }}
          >
            Scroll to explore
          </p>
          <div
            style={{
              width: "1px",
              height: "40px",
              background: "linear-gradient(to bottom, #F5C842, transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
