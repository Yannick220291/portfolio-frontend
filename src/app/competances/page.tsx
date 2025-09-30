'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const skills = [
  {
    category: "Technologies Web",
    items: [
      { name: "ReactJs", src: "/skills/react.svg" },
      { name: "HTML5", src: "/skills/html.svg" },
      { name: "CSS3", src: "/skills/css.svg" },
      { name: "NodeJs", src: "/skills/node.svg" },
      { name: "JavaScript", src: "/skills/javascript.svg" },
      { name: "Tailwind CSS", src: "/skills/tailwind.svg" },
    ],
  },
  {
    category: "Langages de Programmation",
    items: [
      { name: "C", src: "/skills/c.svg" },
      { name: "C#", src: "/skills/csharp.svg" },
      { name: "Python", src: "/skills/python.svg" },
      { name: "Java", src: "/skills/java.svg" },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "NextJs", src: "/skills/next.svg" },
      { name: "Spring Boot", src: "/skills/spring.svg" },
      { name: "Laravel", src: "/skills/laravel.svg" },
      { name: "Flutter", src: "/skills/flutter.svg" },
    ],
  },
  {
    category: "Outils",
    items: [
      { name: "Git", src: "/skills/git.svg" },
      { name: "GitHub", src: "/skills/github.svg" },
      { name: "PostgreSQL", src: "/skills/postgresql.svg" },
      { name: "MySQL", src: "/skills/mysql.svg" },
    ],
  },
];

export default function CompetencesPage() {
  return (
    <section
      id="competences"
      style={{
        minHeight: "100vh",
        padding: "60px 20px",
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
        transition: "0.3s",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: "1200px", display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
        {skills.map((section) => (
          <div key={section.category} style={{ width: "100%" }}>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ textAlign: "center", fontSize: "1.8rem", marginBottom: "30px" }}
            >
              {section.category}
            </motion.h3>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                gap: "20px",
                justifyItems: "center",
                alignItems: "center",
                padding: "0 50px",
              }}
            >
              {section.items.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.1, boxShadow: "0 8px 20px rgba(0,0,0,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.5 }}
                  style={{
                    width: "140px",
                    height: "100px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "2px",
                    borderRadius: "15px",
                    background: "rgba(87, 83, 83, 0.24)",
                    backdropFilter: "blur(15px)",
                    WebkitBackdropFilter: "blur(15px)",
                    padding: "10px",
                    transition: "0.3s",

                  }}
                >
                  <Image
                    src={skill.src}
                    alt={skill.name}
                    width={60}
                    height={60}
                    style={{ objectFit: "contain" }}
                  />
                  <span style={{ fontSize: "1rem", textAlign: "center" }}>{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}


