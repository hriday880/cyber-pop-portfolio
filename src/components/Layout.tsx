import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/work', label: 'Work' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-[#111318] text-[#191c1d] dark:text-[#e2e2e8] transition-colors duration-300">
      {/* Atmospheric background blobs - dark mode only */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 hidden dark:block">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-[#00dbe9]/10 blur-[120px] rounded-full"></div>
        <div className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] bg-[#ff24e4]/5 blur-[100px] rounded-full"></div>
      </div>

      {/* TOP NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-[#111318]/80 backdrop-blur-xl border-b border-white/20 dark:border-[#00dbe9]/20 shadow-sm dark:shadow-[0_0_15px_rgba(0,219,233,0.1)]">
        <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-[1280px] mx-auto">
          {/* Logo */}
          <Link to="/" className="font-['Space_Grotesk'] text-[24px] font-bold tracking-tighter text-[#006877] dark:text-[#7df4ff] hover:opacity-80 transition-opacity">
            CREATIVE.TECH
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`font-['JetBrains_Mono'] text-[12px] uppercase tracking-widest transition-all duration-200 ${
                  isActive(to)
                    ? 'text-[#006877] dark:text-[#7df4ff] font-bold border-b-2 border-[#006877] dark:border-[#7df4ff] pb-0.5'
                    : 'text-[#3b494c] dark:text-[#b9cacb] hover:text-[#006877] dark:hover:text-[#7df4ff]'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right side: Dark mode toggle + CTA */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#bac9cd] dark:border-[#3b494b] hover:bg-[#edeeef] dark:hover:bg-[#1e2024] transition-all duration-200 group"
              aria-label="Toggle dark mode"
            >
              <span className="material-symbols-outlined text-[20px] text-[#006877] dark:text-[#7df4ff] group-hover:scale-110 transition-transform">
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="hidden sm:block bg-[#191c1d] dark:bg-[#00dbe9] text-white dark:text-[#002022] px-5 py-2.5 font-['JetBrains_Mono'] text-[12px] uppercase tracking-widest hover:opacity-80 transition-all active:scale-95"
            >
              Let's Talk
            </Link>

            {/* Mobile hamburger placeholder */}
            <button className="md:hidden p-2 text-[#191c1d] dark:text-[#e2e2e8]">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="relative z-10 pt-[72px]">
        <Outlet />
      </main>

      {/* MOBILE BOTTOM NAV */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 h-[72px] bg-[#f8f9fa]/80 dark:bg-[#0c0e12]/70 backdrop-blur-2xl border-t border-[#bac9cd]/30 dark:border-white/10 shadow-[0_-8px_32px_0_rgba(0,0,0,0.1)] dark:shadow-[0_-8px_32px_0_rgba(0,0,0,0.8)] md:hidden z-50">
        {[
          { to: '/', icon: 'home', label: 'HOME' },
          { to: '/about', icon: 'person', label: 'ABOUT' },
          { to: '/work', icon: 'grid_view', label: 'WORK' },
          { to: '/contact', icon: 'alternate_email', label: 'CONTACT' },
        ].map(({ to, icon, label }) => (
          <Link
            key={to}
            to={to}
            className={`flex flex-col items-center justify-center pt-1 transition-all active:translate-y-[-2px] duration-200 ${
              isActive(to)
                ? 'text-[#006877] dark:text-[#7df4ff] light-bar-active'
                : 'text-[#6b7a7d] dark:text-[#849495]/60 hover:text-[#006877] dark:hover:text-[#79ff5b]'
            }`}
          >
            <span className="material-symbols-outlined text-[24px]">{icon}</span>
            <span className="font-['JetBrains_Mono'] text-[10px] mt-1">{label}</span>
          </Link>
        ))}
      </nav>

      {/* FOOTER */}
      <footer className="w-full py-10 bg-[#f3f4f5] dark:bg-[#0c0e12] border-t border-[#bac9cd]/30 dark:border-white/10 pb-24 md:pb-10">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-[1280px] mx-auto gap-4">
          <div className="font-['Space_Grotesk'] text-[28px] font-bold text-[#006877] dark:text-[#7df4ff] tracking-tighter">
            CREATIVE.TECH
          </div>
          <div className="font-['JetBrains_Mono'] text-[11px] text-[#6b7a7d] dark:text-[#849495] flex gap-6 uppercase tracking-widest">
            <a className="hover:text-[#a90097] dark:hover:text-[#fface8] hover:underline transition-all" href="#">GitHub</a>
            <a className="hover:text-[#a90097] dark:hover:text-[#fface8] hover:underline transition-all" href="#">LinkedIn</a>
            <a className="hover:text-[#a90097] dark:hover:text-[#fface8] hover:underline transition-all" href="#">Twitter</a>
          </div>
          <div className="font-['JetBrains_Mono'] text-[11px] text-[#6b7a7d] dark:text-[#849495] uppercase">
            © 2024 Creative Technologist. Built for the future.
          </div>
        </div>
      </footer>
    </div>
  );
}
