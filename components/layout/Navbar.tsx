"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home",       href: "#hero"      },
  { label: "About",      href: "#about"     },
  { label: "Skills",     href: "#skills"    },
  { label: "Projects",   href: "#projects"  },
  { label: "Journey",    href: "#journey"   },
  { label: "Achievements", href: "#achievements" },
  { label: "GitHub",     href: "#github"    },
  { label: "Contact",    href: "#contact"   },
];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [activeLink,   setActiveLink]   = useState("#hero");

  /* ── Detect scroll to change navbar style ── */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Close mobile menu on resize ── */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ── Handle smooth scroll on link click ── */
  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        style={{
          position:   "fixed",
          top:        0,
          left:       0,
          right:      0,
          zIndex:     1000,
          transition: "all 0.3s ease",
          background: scrolled
            ? "rgba(11, 17, 32, 0.92)"
            : "transparent",
          backdropFilter:         scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter:   scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(245, 200, 66, 0.15)"
            : "none",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            maxWidth:       "1200px",
            margin:         "0 auto",
            height:         "64px",
            display:        "flex",
            alignItems:     "center",
            justifyContent: "space-between",
          }}
        >
          {/* ── Logo ── */}
          <button
            onClick={() => handleLinkClick("#hero")}
            style={{
              background:  "none",
              border:      "none",
              cursor:      "pointer",
              display:     "flex",
              alignItems:  "center",
              gap:         "8px",
              padding:     0,
            }}
          >
            <span
              style={{
                fontSize:   "20px",
                lineHeight: 1,
              }}
            >
              🧭
            </span>
            <span
              style={{
                fontFamily:    "'Cinzel', serif",
                fontSize:      "16px",
                fontWeight:    700,
                color:         "#F5C842",
                letterSpacing: "0.05em",
              }}
            >
              LogPose
            </span>
          </button>

          {/* ── Desktop Links ── */}
          <div
            style={{
              display:    "flex",
              alignItems: "center",
              gap:        "4px",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                style={{
                  background:    "none",
                  border:        "none",
                  cursor:        "pointer",
                  padding:       "8px 12px",
                  fontFamily:    "'Inter', sans-serif",
                  fontSize:      "13px",
                  fontWeight:    500,
                  color:         activeLink === link.href
                    ? "#F5C842"
                    : "#C8C0A8",
                  letterSpacing: "0.03em",
                  position:      "relative",
                  transition:    "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  if (activeLink !== link.href) {
                    (e.target as HTMLElement).style.color = "#F0EAD6";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeLink !== link.href) {
                    (e.target as HTMLElement).style.color = "#C8C0A8";
                  }
                }}
              >
                {link.label}
                {/* Gold underline for active link */}
                {activeLink === link.href && (
                  <span
                    style={{
                      position:   "absolute",
                      bottom:     "2px",
                      left:       "12px",
                      right:      "12px",
                      height:     "2px",
                      background: "linear-gradient(90deg, #F5C842, #FFD97D)",
                      borderRadius: "1px",
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* ── Hamburger Button (mobile) ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger-btn"
            style={{
              background:  "none",
              border:      "1px solid rgba(245,200,66,0.3)",
              borderRadius: "6px",
              cursor:      "pointer",
              padding:     "8px",
              display:     "none",
              flexDirection: "column",
              gap:         "4px",
            }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display:      "block",
                  width:        "20px",
                  height:       "2px",
                  background:   "#F5C842",
                  borderRadius: "1px",
                  transition:   "all 0.3s ease",
                  transform:
                    menuOpen && i === 0 ? "rotate(45deg) translate(4px, 4px)"
                    : menuOpen && i === 1 ? "opacity 0"
                    : menuOpen && i === 2 ? "rotate(-45deg) translate(4px, -4px)"
                    : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        {menuOpen && (
          <div
            style={{
              background:   "rgba(11, 17, 32, 0.98)",
              borderTop:    "1px solid rgba(245,200,66,0.15)",
              padding:      "16px 24px 24px",
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                style={{
                  display:    "block",
                  width:      "100%",
                  textAlign:  "left",
                  background: "none",
                  border:     "none",
                  cursor:     "pointer",
                  padding:    "12px 0",
                  fontFamily: "'Inter', sans-serif",
                  fontSize:   "15px",
                  fontWeight: 500,
                  color:      activeLink === link.href
                    ? "#F5C842"
                    : "#C8C0A8",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── Responsive CSS ── */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .hamburger-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}