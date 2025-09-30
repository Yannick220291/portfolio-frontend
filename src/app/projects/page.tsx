'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  tech: string[];
  screenshots: string[];
  github?: string;
}

const projects: Project[] = [
  {
    title: 'Cosmétique E-commerce',
    description: 'Une plateforme e-commerce pour produits cosmétiques.',
    tech: ['Spring Boot', 'PostgreSQL', 'ReactJs', 'Tailwind CSS'],
    screenshots: ['/projects/12.png', '/projects/13.png'],
    github: 'https://github.com/Yannick220291/cosmetique',
  },
  {
    title: 'Application mobile Quiz Battle',
    description: 'Application mobile pour jouer à un quiz géolocalisé entre amis. Possèdent des questions variées, des défis en temps réel contre vos amis.',
    tech: ['Flutter', 'Supabase', 'Socket.io'],
    screenshots: ['/projects/16.png'],
    github: 'https://github.com/Yannick220291/quiz_gamifie',
  },
];

export default function ProjectsPage() {
  const [animate, setAnimate] = useState(false);
  const [currentSlideLeft, setCurrentSlideLeft] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setAnimate(true);
    const interval = setInterval(() => cycleSlide(), 3000);
    return () => clearInterval(interval);
  }, []);

  const cycleSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlideLeft((prev) => (prev + 1) % projects[0].screenshots.length);
      setFade(true);
    }, 500);
  };

  const renderTechText = (techs: string[]) => (
    <div style={{
      display: 'flex',
      gap: '30px',
      marginTop: '20px',
      backgroundColor:'rgba(47, 55, 71, 0.86)',
      backdropFilter: "blur(10px)",
      boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
      width:'0px',
    }}>
      {techs.map((tech) => (
        <span key={tech} style={{ fontWeight: 'bold', color: '#17f', fontSize: '0.9rem' }}>
          {tech}
        </span>
      ))}
    </div>
  );

  return (
    <section
      id="projects"
      style={{
        minHeight: '100vh',
        padding: '60px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'var(--bg-color)',
        color: 'var(--text-color)',
        transition: '0.3s',
        gap: '40px',
      }}
    >
      <h2
        style={{
          fontSize: '2.5rem',
          marginBottom: '40px',
          opacity: animate ? 1 : 0,
          transform: animate ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        Mes Projets
      </h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row', // mode desktop: côte à côte
          gap: '50px',
          width: '100%',
          maxWidth: '1200px',

          /* Responsive: passer en colonne sur petit écran */
          flexWrap: 'wrap', // permet le retour à la ligne
        }}
      >
        {/* Projet 1 - gauche */}
        <div
          style={{
            flex: 1,
            padding: '20px',
            borderRadius: '20px',
            overflow: 'hidden',
            transition: 'transform 0.3s',
            backgroundColor:'rgba(255,255,255,0.05)',
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            position: 'relative',

            /* Responsive: pleine largeur si écran petit */
            minWidth: '300px', // largeur minimale pour flex
            maxWidth: '100%', // prend toute la largeur si réduit
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          {projects[0].github && (
            <a
              href={projects[0].github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ position: 'absolute', bottom: '10px', right: '10px', color: '#17f' }}
            >
              <FaGithub size={24} />
            </a>
          )}

          <Image
            key={projects[0].screenshots[currentSlideLeft]}
            src={projects[0].screenshots[currentSlideLeft]}
            alt={projects[0].title}
            width={350}
            height={200}
            style={{
              borderRadius: '20px',
              objectFit: 'cover',
              width: '100%',
              maxHeight: '200px',
              opacity: fade ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
            }}
          />

          <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginTop: '15px' }}>
            {projects[0].title}
          </h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.5' }}>{projects[0].description}</p>
          {renderTechText(projects[0].tech)}
        </div>

        {/* Projet 2 - droite */}
        <div
          style={{
            flex: 1,
            position: 'relative',
            padding: '20px',
            borderRadius: '20px',
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            overflow: 'hidden',
            transition: 'transform 0.3s',
            backgroundColor:'rgba(255,255,255,0.05)',

            /* Responsive: pleine largeur si écran petit */
            minWidth: '300px', // largeur minimale
            maxWidth: '100%',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <Image
            src={projects[1].screenshots[0]}
            alt={projects[1].title}
            width={350}
            height={200}
            style={{
              borderRadius: '20px',
              objectFit: 'cover',
              width: '100%',
              maxHeight: '200px',
              transition: 'transform 0.5s ease',
            }}
          />

          <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginTop: '15px' }}>
            {projects[1].title}
            {projects[1].github && (
              <a
                href={projects[1].github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ position: 'absolute', bottom: '10px', right: '10px', color: '#17f',}}
              >
                <FaGithub size={20} />
              </a>
            )}
          </h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.5' }}>{projects[1].description}</p>
          {renderTechText(projects[1].tech)}
          <a style={{ marginLeft:'-20px', color:'#17f',}}
          href="https://quizgame-site-production.up.railway.app">
            https://quizgame-site-production.up.railway.app</a>
        </div>
        
      </div>
    </section>
  );
}
