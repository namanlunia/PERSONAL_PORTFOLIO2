import type { Metadata, Viewport } from 'next';
import '@fontsource/chakra-petch/latin-500.css';
import '@fontsource/chakra-petch/latin-600.css';
import '@fontsource/ibm-plex-sans/latin-400.css';
import '@fontsource/ibm-plex-sans/latin-500.css';
import './globals.css';
import { HudFrame } from '@/components/hud/Frame';
import { StickyNav } from '@/components/hud/StickyNav';

export const metadata: Metadata = {
  title: 'Naman Lunia // Player Profile & Portfolio',
  description:
    'First-year Computer Science student building real projects and working toward a career in game development. B.Tech CSE AI & ML at Newton School of Technology.',
  keywords: [
    'Naman Lunia',
    'Game Developer',
    'Computer Science',
    'Portfolio',
    'Newton School of Technology',
    'AI and ML',
    'Robotics',
  ],
  authors: [{ name: 'Naman Lunia' }],
  metadataBase: new URL('https://namanlunia.com'),
  openGraph: {
    title: 'Naman Lunia // Player Profile & Portfolio',
    description:
      'First-year Computer Science student building real projects and working toward a career in game development.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Naman Lunia Portfolio',
  },
};

export const viewport: Viewport = {
  themeColor: '#0F1214',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
    >
      <body className="min-h-screen bg-bg text-text selection:bg-accent selection:text-bg">
        {/* Skip to Content link for keyboard accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] bg-accent text-bg px-4 py-2 font-heading font-semibold text-xs uppercase"
        >
          Skip to content
        </a>

        {/* Mat Frame Layer with 20px amber brackets & mat strip readouts */}
        <HudFrame />

        {/* Fixed Header Nav with Wordmark NL, Nav Links, & Mobile Drawer */}
        <StickyNav />

        {/* Main Content Area: offset to start right below the fixed header */}
        <main
          id="main-content"
          tabIndex={-1}
          className="focus:outline-none pt-[calc(var(--frame-gap)+var(--header-height))] pb-[var(--frame-gap)]"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
