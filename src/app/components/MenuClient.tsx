'use client';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function MenuClient() {
  const pathname = usePathname();
  const [bounce, setBounce] = useState(false);

  const navItems = [
    { label: 'Accueil', href: '/' },
    { label: 'À propos', href: '/about' },
    { label: 'Projets', href: '/projects' },
    { label: 'Compétances', href: '/competances' },
    { label: 'Contact', href: '/contact' },
  ];

  // Déclenche l'animation bounce au montage
  useEffect(() => {
    setBounce(true);
    const timer = setTimeout(() => setBounce(false), 800); // durée de l'animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 20px',
      }}
    >
      {/* Logo animé avec effet bounce */}
      <div
        style={{
          fontWeight: 'bold',
          fontSize: '22px',
          color: 'var(--text-color)',
          display: 'inline-block',
          transform: bounce ? 'translateY(-10px)' : 'translateY(0)',
          transition: 'transform 0.4s ease-in-out',
        }}
      >
        HASINIRINA Jean de Dieu
      </div>

      {/* Menu */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            style={{
              color: pathname === item.href ? '#00bfff' : 'var(--text-color)',
              fontWeight: pathname === item.href ? 'bold' : 'normal',
              textDecoration: 'none',
              transition: '0.3s',
            }}
          >
            {item.label}
          </Link>
        ))}

        <div style={{ marginLeft: '20px' }}>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
