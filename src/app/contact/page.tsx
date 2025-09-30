'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const contactLinks = [
  { name: "Email", src: "/icons/email.png", href: "mailto:jeandedieuhasinirina82@gmail.com" },
  { name: "GitHub", src: "/icons/github.png", href: "https://github.com/Yannick220291" },
  { name: "Facebook", src: "/icons/facebook.png", href: "https://www.facebook.com/jean.de.dieu.hasina.2025" },
];

export default function ContactPage() {
  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        transition: "0.3s",
        padding: "60px 20px",
        color: "var(--text-color)", // couleur adaptative
        fontFamily: "sans-serif",
        backgroundColor: "var(--bg-color)", // adaptatif au mode clair/sombre
      }}
    >
      {/* Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "800px",
          padding: "30px",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        {/* Titre */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            fontSize: "2.2rem",
            marginBottom: "20px",
            color: "var(--text-color)", // adaptatif
          }}
        >
          Contactez-moi
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.6",
            color: "var(--text-color)", // adaptatif
          }}
        >
          N’hésitez pas à me contacter pour discuter de vos projets ou opportunités de collaboration !
        </motion.p>

        {/* Logos */}
        <motion.div
          className="contact-logos"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {contactLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                textDecoration: "none",
                color: "var(--text-color)", // adaptatif
                marginBottom: "10px",
              }}
            >
              <Image
                src={link.src}
                alt={link.name}
                width={40}
                height={40}
              />
              <span style={{ fontSize: "1rem", marginLeft: "8px" }}>{link.name}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          style={{
            width: "100%",
            textAlign: "center",
            padding: "20px",
            color: "var(--text-color)", // adaptatif
          }}
        >
          <p>© 2025 HASINIRINA Jean de Dieu</p>
        </motion.footer>
      </motion.div>
    </section>
  );
}

