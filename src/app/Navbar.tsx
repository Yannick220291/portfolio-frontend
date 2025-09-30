'use client';
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion"; // <- import Framer Motion
import ThemeToggle from "./components/ThemeToggle";

interface NavbarProps {
  activeSection: string;
}

const navItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#apropos" },
  { label: "Projets", href: "#projets" },
  { label: "Compétences", href: "#competances" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ activeSection }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Détecter la taille de l'écran
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}  // animation d'entrée
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "var(--bg-color)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        zIndex: 1000,
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
      }}
    >
      {/* Nom */}
      <div style={{ fontWeight: "bold", fontSize: "1.2rem", color: "var(--text-color)", paddingLeft: "20px" }}>
        HASINIRINA Jean de Dieu
      </div>

      {/* Liens + Toggle */}
      {!isMobile ? (
        <div style={{ display: "flex", alignItems: "center", gap: "20px", paddingRight: "20px" }}>
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <motion.a
                key={item.href}
                href={item.href}
                style={{
                  color: isActive ? "#17f" : "var(--text-color)",
                  fontWeight: isActive ? "bold" : "normal",
                  textDecoration: "none",
                  padding: "6px 10px",
                  borderRadius: "6px",
                  fontFamily: "cursive",
                  cursor: "pointer",
                }}
                whileHover={{ scale: 1.1 }} // animation au survol
                animate={{ color: isActive ? "#17f" : "var(--text-color)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.label}
              </motion.a>
            );
          })}
          <ThemeToggle />
        </div>
      ) : (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <ThemeToggle />
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer" }}>
            {menuOpen ? <X color="#fff" size={28} /> : <Menu color="#fff" size={28} />}
          </button>
        </div>
      )}

      {/* Menu mobile déroulant */}
      {menuOpen && isMobile && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            backgroundColor: "var(--btn-bg-color)",
            display: "flex",
            flexDirection: "column",
            padding: "15px",
            gap: "10px",
          }}
        >
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: activeSection === sectionId ? "#17f" : "var(--text-color)",
                  fontWeight: activeSection === sectionId ? "bold" : "normal",
                  textDecoration: "none",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                {item.label}
              </a>
            );
          })}
        </motion.div>
      )}
    </motion.nav>
  );
}
