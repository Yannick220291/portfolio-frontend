'use client';
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.style.setProperty('--bg-color', '#030b1aff');      // fond bleu foncé
      root.style.setProperty('--text-color', '#fff');        // texte blanc
      root.style.setProperty('--btn-bg-color', '#00bfff');   // bouton bleu ciel
      root.style.setProperty('--btn-text-color', '#fff');    // texte bouton
    } else {
      root.style.setProperty('--bg-color', '#f5f5f5');      // fond clair
      root.style.setProperty('--text-color', '#030b1aff');    // texte bleu foncé
      root.style.setProperty('--btn-bg-color', '#030b1aff');  // bouton bleu foncé
      root.style.setProperty('--btn-text-color', '#fff');   // texte bouton
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      style={{
        background: 'transparent',         
        border: 'none',            
        cursor: 'pointer',
        fontSize: '1.5rem',
        color: 'var(--text-color)',
        padding: 0,                
      }}
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
}



