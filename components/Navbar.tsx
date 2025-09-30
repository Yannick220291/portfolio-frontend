import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '10px', borderBottom: '1px solid #ccc' }}>
      <Link href="/">Accueil</Link>
      <Link href="/about">À propos</Link>
      <Link href="/projects">Projets</Link>
      <Link href="/competances">Compétances</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
