'use client';
import { useEffect, useState } from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';

// Importer tes composants
import Navbar from './Navbar';
import Apropos from './about/page';
import Projets from './projects/page';
import Competances from './competances/page';
import Contact from './contact/page';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("accueil");

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["accueil", "apropos", "projets", "competances", "contact"];
      let current = "accueil";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />

      {/* Accueil */}
      <section
        id="accueil"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 20px",
          backgroundColor: "var(--bg-color)",
          color: "var(--text-color)",
          transition: "0.3s",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            maxWidth: "900px",
          }}
        >
          <Image
            src="/profil.jpg"
            alt="Hasinirina Jean de Dieu"
            width={140}
            height={140}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "top",
              border: "4px solid #00bfff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}
            priority
          />

          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{ fontSize: "2.5rem", marginBottom: "20px" }}
            >
              Bonjour, je suis Hasinirina Jean de Dieu développeur web
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              style={{ fontSize: "1.2rem", marginBottom: "30px" }}
            >
              Étudiant en informatique Générale à l&apos;ENI Fianarantsoa
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              style={{ fontSize: "1.2rem", marginBottom: "20px" }}
            >
              Passionné par le développement web.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <ClientButton />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* À propos */}
      <section id="apropos">
        <Apropos />
      </section>

      {/* Projets */}
      <section id="projets">
        <Projets />
      </section>

      {/* Compétances */}
      <section id="competances">
        <Competances />
      </section>

      {/* Contact */}
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

// Bouton CV
function ClientButton() {
  return (
    <a
      href="/cv/cvhasinirina.pdf"
      download
      className="cv-button"
      style={{
        padding: "12px 25px",
        backgroundColor: "var(--btn-bg-color)",
        color: "var(--btn-text-color)",
        borderRadius: "20px",
        fontWeight: "bold",
        textDecoration: "none",
        transition: "0.3s",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
      }}
    >
      Télécharger mon CV
    </a>
  );
}
