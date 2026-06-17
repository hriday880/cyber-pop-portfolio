import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const glassCardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Shimmer effect on glass cards
    const cards = glassCardRefs.current;
    const handlers: Array<(e: MouseEvent) => void> = [];

    cards.forEach((card, i) => {
      if (!card) return;
      const handler = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      };
      handlers[i] = handler;
      card.addEventListener('mousemove', handler as EventListener);
    });

    // Scroll reveal for manifesto panel
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-6');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-6');
      observer.observe(el);
    });

    return () => {
      cards.forEach((card, i) => {
        if (card && handlers[i]) card.removeEventListener('mousemove', handlers[i] as EventListener);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* ==============================
          HERO SECTION
      ============================== */}
      <section className="relative min-h-[calc(100vh-72px)] flex items-center overflow-hidden mesh-gradient">
        <div className="absolute inset-0 pixel-grid opacity-20 pointer-events-none"></div>

        <div className="max-w-[1280px] mx-auto px-6 md:px-8 w-full relative z-10 grid grid-cols-12 gap-6 py-16 md:py-0">
          {/* Left: Hero Text */}
          <div className="col-span-12 md:col-span-7 flex flex-col justify-center text-center md:text-left items-center md:items-start">
            {/* System status pill */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#00e0ff]/30 dark:border-[#00dbe9]/30 bg-[#00e0ff]/5 dark:bg-[#00dbe9]/10">
              <span className="w-2.5 h-2.5 rounded-full bg-[#24ec00] dark:bg-[#2ae500] animate-pulse"></span>
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-[#006877] dark:text-[#00dbe9]">
                System Online: v2.04
              </span>
            </div>

            {/* Main heading */}
            <h1 className="font-['Space_Grotesk'] font-bold leading-[1.05] mb-6 text-[#191c1d] dark:text-[#e2e2e8]"
              style={{ fontSize: 'clamp(48px, 7vw, 80px)', letterSpacing: '-0.04em' }}>
              Code,{' '}
              <br className="hidden sm:block" />
              <span className="italic text-[#006877] dark:text-[#7df4ff]">Creativity,</span>
              <br className="hidden sm:block" />
              &amp; Automation.
            </h1>

            <p className="font-['Geist',sans-serif] text-[16px] text-[#3b494c] dark:text-[#b9cacb] max-w-lg mb-10 leading-relaxed">
              Architecting high-fidelity digital experiences at the intersection of technical precision and artistic expression.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                to="/work"
                className="bg-[#191c1d] dark:bg-[#00f0ff] text-[#7df4ff] dark:text-[#00363a] font-['JetBrains_Mono'] text-[13px] px-10 py-4 uppercase tracking-widest border-b-2 border-[#00e0ff] dark:border-transparent hover:bg-[#00e0ff] hover:text-[#001f25] dark:hover:opacity-90 active:scale-95 transition-all duration-300 text-center neon-glow-primary dark:shadow-[0_0_15px_rgba(0,219,233,0.4)]"
              >
                View Work
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border border-[#bac9cd] dark:border-[#7df4ff]/30 text-[#191c1d] dark:text-[#e2e2e8] font-['JetBrains_Mono'] text-[13px] px-10 py-4 uppercase tracking-widest hover:bg-[#edeeef] dark:hover:bg-white/5 active:scale-95 transition-all duration-300 text-center"
              >
                Hire Me
              </Link>
            </div>
          </div>

          {/* Right: Abstract terminal widget */}
          <div className="hidden md:flex col-span-5 justify-center items-center relative">
            <div
              ref={(el) => { if (el) glassCardRefs.current[0] = el; }}
              className="glass-card w-full aspect-square flex items-center justify-center relative overflow-hidden group"
            >
              {/* Neon corner accent */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#00e0ff] dark:border-[#00dbe9] opacity-60"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#d300bd] dark:border-[#ff24e4] opacity-60"></div>

              <div className="z-20 text-center p-6 w-full">
                <div className="font-['JetBrains_Mono'] text-[11px] text-[#006877] dark:text-[#00dbe9] mb-3 uppercase tracking-[0.2em]">PROCESS_STREAM</div>
                <div className="w-full h-px bg-[#bac9cd] dark:bg-[#3b494b] mb-4"></div>
                <div className="flex flex-col gap-2 font-['JetBrains_Mono'] text-[11px] text-[#6b7a7d] dark:text-[#849495] text-left px-4">
                  <div className="flex justify-between">
                    <span className="text-[#24ec00] dark:text-[#2ae500]">LOG:</span>
                    <span>RUNNING_KERNEL</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#a90097] dark:text-[#fface8]">LATENCY:</span>
                    <span>12ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#006877] dark:text-[#7df4ff]">STATUS:</span>
                    <span className="text-[#24ec00] dark:text-[#2ae500]">OPTIMIZED ✓</span>
                  </div>
                </div>
                {/* Animated pulse bar */}
                <div className="mt-6 h-1 w-full bg-[#edeeef] dark:bg-[#1e2024] overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#006877] via-[#00e0ff] to-[#24ec00] dark:from-[#00dbe9] dark:via-[#7df4ff] dark:to-[#2ae500] animate-pulse" style={{ width: '72%' }}></div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 p-3 font-['JetBrains_Mono'] text-[9px] text-[#bac9cd] dark:text-[#3b494b] uppercase">
                Visual ID: 99x-Lab
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================
          SERVICES / CAPABILITIES SECTION
      ============================== */}
      <section className="py-16 md:py-24 bg-white dark:bg-[#1e2024] border-t border-[#e1e3e4] dark:border-[#3b494b]/50 relative">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#a90097] dark:text-[#fface8] uppercase tracking-widest mb-2 block">Capabilities</span>
              <h2 className="font-['Space_Grotesk'] text-[36px] md:text-[40px] font-semibold text-[#191c1d] dark:text-[#e2e2e8]" style={{ letterSpacing: '-0.02em' }}>
                Engineered Solutions
              </h2>
            </div>
            <p className="max-w-sm text-[#3b494c] dark:text-[#b9cacb] font-['Geist',sans-serif] text-[15px] opacity-80 border-l-2 border-[#bac9cd] dark:border-[#3b494b] pl-4">
              Modular services bridging complex backend architecture with fluid frontend interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e1e3e4] dark:divide-[#3b494b] border border-[#e1e3e4] dark:border-[#3b494b]">
            {[
              {
                icon: 'terminal',
                color: 'bg-[#00e0ff] dark:bg-[#00dbe9]/20',
                iconColor: 'text-[#005f6d] dark:text-[#00dbe9]',
                linkColor: 'text-[#006877] dark:text-[#7df4ff] group-hover:gap-4',
                title: 'Workflow Automation',
                desc: 'Developing custom CI/CD pipelines and backend logic that remove friction from creative production and data management.',
                cta: 'EXPLORE CORE',
              },
              {
                icon: 'rocket_launch',
                color: 'bg-[#ffd7f0] dark:bg-[#ff24e4]/10',
                iconColor: 'text-[#a90097] dark:text-[#fface8]',
                linkColor: 'text-[#a90097] dark:text-[#fface8] group-hover:gap-4',
                title: 'Frontend Development',
                desc: 'Building hyper-performant, responsive interfaces using modern frameworks. Focused on motion design and state synchronization.',
                cta: 'VIEW COMPONENTS',
              },
              {
                icon: 'architecture',
                color: 'bg-[#78ff5d]/20 dark:bg-[#2ae500]/10',
                iconColor: 'text-[#0c6e00] dark:text-[#79ff5b]',
                linkColor: 'text-[#0c6e00] dark:text-[#79ff5b] group-hover:gap-4',
                title: 'Technical Direction',
                desc: 'Strategic oversight for complex digital projects. Mapping out technical stacks that scale with your artistic vision.',
                cta: 'READ CASE STUDIES',
              },
            ].map((service, i) => (
              <div key={i} className="p-7 hover:bg-[#f3f4f5] dark:hover:bg-[#282a2e] transition-colors group">
                <div className={`mb-6 inline-flex p-3 ${service.color}`}>
                  <span className={`material-symbols-outlined text-[32px] ${service.iconColor}`}>{service.icon}</span>
                </div>
                <h3 className="font-['Space_Grotesk'] text-[22px] font-bold uppercase tracking-tight mb-3 text-[#191c1d] dark:text-[#e2e2e8]">
                  {service.title}
                </h3>
                <p className="font-['Geist',sans-serif] text-[15px] text-[#3b494c] dark:text-[#b9cacb] mb-8 leading-relaxed">
                  {service.desc}
                </p>
                <div className={`flex items-center gap-2 font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${service.linkColor}`}>
                  <span>{service.cta}</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================
          FEATURED IMAGE / MANIFESTO SECTION
      ============================== */}
      <section className="py-16 md:py-24 mesh-gradient border-t border-[#e1e3e4] dark:border-[#3b494b]/30">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="reveal-on-scroll glass-card dark:glass-card bg-white/60 dark:bg-transparent p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 border border-white dark:border-white/10">
            <div className="w-full md:w-1/2 relative group overflow-hidden">
              <img
                alt="Laboratory Visual"
                className="w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 shadow-xl border border-white/50 dark:border-white/10 aspect-[4/3]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE0ygHOFIlRf01k9v-RwDvgf_jQeDkmKzdk9sxUaK61WbLHWms9aXiAm8VGNzi-EXVc29GhBnLbuj9m06nYwgauNHFxD_LPrfQSgIG8hGGSWcI3LggygWJc4AmT19avpcKH2KO7bXA7wlosfoinQiWNPSSsttYYcgFaLkAzZt1M5u_FdBzZ8IowdUPot6JnyWXxoCeVX-aefoUgzNwkW2nWdTd_1cVg1U925CzwtPl1DcAu3pLbnGmCOv3mxGAs72ClB0iAR5aqKoN"
              />
              {/* Hover reveal bar */}
              <div className="absolute bottom-0 left-0 w-full py-3 px-4 bg-[#111318]/70 dark:bg-[#0c0e12]/80 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-['JetBrains_Mono'] text-[10px] text-[#00dbe9] uppercase">ACCESS_GRANTED // LAB_VISUAL</p>
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-5">
              <div className="inline-block bg-[#006877] dark:bg-[#00dbe9] text-white dark:text-[#002022] font-['JetBrains_Mono'] text-[10px] px-3 py-1 uppercase tracking-widest">
                Manifesto
              </div>
              <h3 className="font-['Space_Grotesk'] text-[32px] font-semibold text-[#191c1d] dark:text-[#e2e2e8] leading-tight" style={{ letterSpacing: '-0.02em' }}>
                The Lab approach to<br />digital craftsmanship.
              </h3>
              <p className="font-['Geist',sans-serif] text-[15px] text-[#3b494c] dark:text-[#b9cacb] leading-relaxed">
                We believe that code is just as expressive as a paintbrush. Every line written is a deliberate choice toward achieving a balance between brutalist efficiency and human-centric design.
              </p>
              <ul className="space-y-3 pt-2">
                {['PERFORMANCE FIRST MINDSET', 'SCALABLE SYSTEM ARCHITECTURE', 'REACTIVE UI FOUNDATIONS'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-6 h-px bg-[#006877] dark:bg-[#00dbe9] flex-shrink-0"></span>
                    <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest text-[#3b494c] dark:text-[#b9cacb]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================
          MOBILE: Featured Insight Card (dark style from mobile zip)
      ============================== */}
      <section className="md:hidden px-5 pb-8 bg-[#111318] dark:bg-transparent">
        <div className="relative rounded-2xl overflow-hidden aspect-[4/5] flex items-end">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            alt="The Future of Creative Tech"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE8q8NoLm5I_avTxQwMb3XhaR5te8_szoDn_gt7Zyby0ZI1kn25EWx3C3Y_cj3IO3In2CjRywORGhfdDC_83vvc2l8zhoy7jb5HDx8hVCLvDMMbvFWQKMZnpaBO8Pl3yLjZjiGbT5PAs3U0xIauRx1NTZIxeG_W7j0udV3dyrvvuROYOJXUcI71hfpLrh32ndNaWWG37utDc3ce9i48d_LkZIg6gn9TArq5RxTnat_mAkBw-NuxGB4WsAfyelaf1VhqaQ9YzamlUKv"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-[#111318]/40 to-transparent"></div>
          <div className="relative z-10 p-6">
            <h4 className="font-['Space_Grotesk'] text-[28px] font-bold text-white mb-2 leading-tight">
              THE FUTURE OF<br />CREATIVE TECH
            </h4>
            <p className="font-['Geist',sans-serif] text-white/70 mb-5 text-[14px]">
              Latest thoughts on AI and human-centered design.
            </p>
            <a className="font-['JetBrains_Mono'] text-[#7df4ff] text-[12px] border-b border-[#7df4ff] pb-1 uppercase tracking-widest" href="#">
              READ DISPATCH_08
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
