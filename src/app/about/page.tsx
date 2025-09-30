'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const aboutRef = useRef<HTMLDivElement>(null);

  // Scroll automatique si on arrive avec #about
  useEffect(() => {
    if (window.location.hash === '#about' && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section
      ref={aboutRef}
      id="about"
      style={{
        minHeight: '100vh',
        padding: '60px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'var(--bg-color)',
        color: 'var(--text-color)',
        transition: '0.3s',
      }}
    >
      {/* Container glass pour le texte avec animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          maxWidth: '900px',
          padding: '30px',
          borderRadius: '20px',
          backgroundColor: 'rgba(255,255,255,0.1)', // fond glass léger
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ fontSize: '2.5rem', marginBottom: '20px' }}
        >
          À propos de moi
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{
            fontSize: '1.2rem',
            marginBottom: '30px',
            lineHeight: '1.6',
          }}
        >
          Je suis HASINIRINA Jean de Dieu, étudiant en 3ᵉ année de Licence en Informatique à
          l&apos;Université Ecole Nationale d&apos;Informatique Fianarantsoa (ENI). Passionné par le
          développement web et le développement d&apos;applications mobiles, j&apos;utilise des
          technologies modernes comme React et Next.js et le framework Flutter pour créer des
          applications performantes et intuitives. Je continue en apprendre Git et GitHub pour la gestion de
          version et le travail collaboratif. Compétent en bureautique (Word, PowerPoint, Excel), je
          communique couramment en français et je continue aussi de perfectionner mon anglais. Curieux et
          créatif, je m&apos;inspire de mes loisirs tels que les mangas, les animes et la musique.
        </motion.p>

        {/* Citation en bleu ciel, gras et fixe */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{
            fontStyle: 'italic',
            fontWeight: 'bold',
            maxWidth: '700px',
            lineHeight: '1.5',
            borderLeft: '4px solid #00bfff',
            paddingLeft: '15px',
            color: '#00bfff', // couleur fixe
          }}
        >
          « Il n’y a qu’une façon d’échouer, c’est d’abandonner avant d’avoir réussi. » – Georges Clémenceau
        </motion.blockquote>
      </motion.div>
    </section>
  );
}




