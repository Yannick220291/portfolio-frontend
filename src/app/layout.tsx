import './globals.css';
import Navbar from './Navbar'; // ton Navbar (Client Component)

export const metadata = {
  title: 'Portfolio Hasinirina',
  description: 'Mon portfolio',
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, minHeight: '100vh' }}>
        {/* Navbar fixe */}
        <header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
          <Navbar activeSection="" /> {/* activeSection sera mis à jour dans page.tsx */}
        </header>

        {/* Contenu principal */}
        <main style={{ paddingTop: '80px' }}>{children}</main>
      </body>
    </html>
  );
}
