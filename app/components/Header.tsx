'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="main-header">
      <nav className="main-nav">
        <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
          Home
        </Link>
        <Link href="/how-to-play" className={`nav-link ${pathname === '/how-to-play' ? 'active' : ''}`}>
          How to Play
        </Link>
      </nav>
    </header>
  );
}
