export default function About() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-8 pt-8 pb-32 md:pb-16">
      {/* ==============================
          HERO HEADER
      ============================== */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end mb-20 pt-8">
        <div className="md:col-span-8">
          <div className="inline-block py-1 px-3 mb-4 bg-[#edeeef] dark:bg-[#1e2024] border-l-4 border-[#006877] dark:border-[#00dbe9]">
            <span className="font-['JetBrains_Mono'] text-[11px] text-[#006877] dark:text-[#00dbe9] uppercase tracking-widest">Identity_Module.v1</span>
          </div>
          <h1 className="font-['Space_Grotesk'] font-bold text-[#191c1d] dark:text-[#e2e2e8] mb-5 leading-tight"
            style={{ fontSize: 'clamp(40px, 6vw, 72px)', letterSpacing: '-0.04em' }}>
            Architecting the{' '}
            <span className="text-[#006877] dark:text-[#7df4ff] italic">Digital Frontier</span>.
          </h1>
          <p className="font-['Geist',sans-serif] text-[16px] text-[#3b494c] dark:text-[#b9cacb] max-w-2xl leading-relaxed">
            Creative technologist and robotics architect focused on the intersection of human intuition and machine precision.
            Currently building future-proof interfaces at the speed of thought.
          </p>
        </div>
        <div className="md:col-span-4 flex justify-start md:justify-end">
          <div className="font-['JetBrains_Mono'] text-[11px] text-[#bac9cd] dark:text-[#3b494b] space-y-2">
            <div className="flex gap-2"><span className="text-[#a90097] dark:text-[#fface8]">[STATUS]</span> <span className="text-[#191c1d] dark:text-[#e2e2e8]">ACTIVE_DEVELOPMENT</span></div>
            <div className="flex gap-2"><span className="text-[#a90097] dark:text-[#fface8]">[LOC]</span> <span className="text-[#191c1d] dark:text-[#e2e2e8]">NEO_TOKYO_HUB</span></div>
            <div className="flex gap-2"><span className="text-[#a90097] dark:text-[#fface8]">[SYNC]</span> <span className="text-[#191c1d] dark:text-[#e2e2e8]">100_PERCENT_UPTIME</span></div>
          </div>
        </div>
      </section>

      {/* ==============================
          BIO & PROFILE (Asymmetrical)
      ============================== */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-24">
        {/* Profile image */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative group overflow-hidden border border-[#e1e3e4] dark:border-[#3b494b]/50 scanline">
            <img
              alt="Profile"
              className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAurazuGzz6mAEg3oYcYUuV1rIoG2E7CCQ-DAKF5j0sEwrFkcxqK8AK3uza25cTV6pC-ljepnuQ2RtSB9fpxATOz8bTBXtnaDw_MO63RgU9YoJXf-yycWKrjH2B-AfrKFQKKXHZJgyjww8L4n_hIYLCoaaz4FXis9h9fB_Y5OmkeoB1EY_TKAcwOFnAUxZJg1PjGhSZWcuvuEJVIAA_zpQvYqxUS8KqxMnEt7dqse4AHrJoktCOJ6pnpOWmZbA4YiQmK8y-ZjEwCN9T"
            />
            <div className="absolute bottom-0 left-0 w-full py-3 px-5 bg-white/80 dark:bg-[#111318]/80 backdrop-blur-md border-t border-[#e1e3e4] dark:border-[#3b494b] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p className="font-['JetBrains_Mono'] text-[11px] text-[#006877] dark:text-[#00dbe9]">ACCESS_GRANTED // BIO_OVERRIDE</p>
            </div>
          </div>
        </div>

        {/* Narrative text */}
        <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2 space-y-6">
          <div className="border-y border-[#e1e3e4] dark:border-[#3b494b] py-8">
            <h3 className="font-['Space_Grotesk'] text-[36px] font-semibold text-[#191c1d] dark:text-[#e2e2e8] mb-5" style={{ letterSpacing: '-0.02em' }}>
              THE_NARRATIVE
            </h3>
            <div className="space-y-4 text-[#3b494c] dark:text-[#b9cacb] font-['Geist',sans-serif] text-[15px] max-w-prose leading-relaxed">
              <p>
                My journey began at the terminal, where code wasn't just logic—it was a medium for expression. From my early days leading distributed engineering teams to my deep-dive into autonomous systems at{' '}
                <span className="text-[#006877] dark:text-[#7df4ff] font-bold">Build Space Robotics</span>, I've consistently sought the edge of what's technically possible.
              </p>
              <p>
                I believe that the best technology is invisible. It should empower human creativity rather than constrain it. This philosophy drives every pixel I place and every line of code I deploy.
              </p>
            </div>
          </div>

          {/* Skill cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: 'biotech', color: 'text-[#a90097] dark:text-[#fface8]', title: 'Systems', desc: 'Robotics, Neural Nets, Real-time Data processing.' },
              { icon: 'deployed_code', color: 'text-[#006877] dark:text-[#7df4ff]', title: 'Interfaces', desc: 'Cyber-minimalism, Generative UI, Haptics.' },
            ].map(({ icon, color, title, desc }) => (
              <div key={title} className="p-5 border border-[#e1e3e4] dark:border-[#3b494b]/50 bg-white dark:bg-[#1a1c20] hover:border-[#006877] dark:hover:border-[#00dbe9]/50 transition-colors">
                <span className={`material-symbols-outlined text-[28px] mb-3 ${color}`}>{icon}</span>
                <h4 className="font-['JetBrains_Mono'] text-[11px] text-[#191c1d] dark:text-[#e2e2e8] font-bold uppercase mb-1.5">{title}</h4>
                <p className="font-['JetBrains_Mono'] text-[11px] text-[#6b7a7d] dark:text-[#849495]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================
          MILESTONES TIMELINE
      ============================== */}
      <section className="mb-24">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-['Space_Grotesk'] text-[32px] md:text-[40px] font-semibold text-[#191c1d] dark:text-[#e2e2e8] whitespace-nowrap" style={{ letterSpacing: '-0.02em' }}>
            MILESTONES_LOG
          </h2>
          <div className="h-px flex-grow bg-[#e1e3e4] dark:bg-[#3b494b]"></div>
        </div>

        <div className="relative space-y-12">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#e1e3e4] dark:bg-[#3b494b] -translate-x-1/2 hidden md:block"></div>

          {[
            {
              year: '2024.Q1',
              side: 'left',
              color: 'bg-[#006877] dark:bg-[#00dbe9]',
              title: 'BUILD_SPACE_HEAD',
              desc: 'Lead Architect for the Delta-9 Robotics project. Orchestrated the fusion of computer vision and tactile feedback systems.',
              tag: 'PROJECT_ALPHA',
              tagColor: 'text-[#a90097] dark:text-[#fface8]',
              note: 'Autonomous movement precision improved by 40%.',
              accent: 'border-l-[3px] border-[#24ec00] dark:border-[#2ae500]',
            },
            {
              year: '2023.Q3',
              side: 'right',
              color: 'bg-[#a90097] dark:bg-[#ff24e4]',
              title: 'GLOBAL_TECH_SUMMIT',
              desc: 'Keynote Speaker on "The Ethics of Generative Architecture." Reaching over 15,000 developers worldwide.',
              tag: 'SPEAKER_LOG',
              tagColor: 'text-[#a90097] dark:text-[#fface8]',
              note: 'Voted Top 5 most influential sessions of the year.',
              accent: 'border-r-[3px] border-[#a90097] dark:border-[#ff24e4]',
            },
            {
              year: '2022.Q2',
              side: 'left',
              color: 'bg-[#0c6e00] dark:bg-[#2ae500]',
              title: 'LAB.TECH_FOUNDING',
              desc: 'Launched the boutique creative agency focusing on experimental digital tools and high-energy branding.',
              tag: 'ORIGIN_POINT',
              tagColor: 'text-[#a90097] dark:text-[#fface8]',
              note: 'First client: Global Quantum Computing Consortium.',
              accent: 'border-l-[3px] border-[#0c6e00] dark:border-[#2ae500]',
            },
          ].map((event, i) => (
            <div key={i} className={`relative flex flex-col ${event.side === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-4 md:gap-0 items-start md:items-center group`}>
              {/* Text side */}
              <div className={`md:w-1/2 ${event.side === 'left' ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}>
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#006877] dark:text-[#00dbe9] uppercase tracking-widest">{event.year}</span>
                <h4 className="font-['Space_Grotesk'] text-[24px] md:text-[32px] font-semibold text-[#191c1d] dark:text-[#e2e2e8] mt-1 mb-2" style={{ letterSpacing: '-0.02em' }}>
                  {event.title}
                </h4>
                <p className="font-['Geist',sans-serif] text-[14px] text-[#3b494c] dark:text-[#b9cacb]">{event.desc}</p>
              </div>

              {/* Node */}
              <div className={`absolute left-0 md:left-1/2 w-4 h-4 ${event.color} border-4 border-[#f8f9fa] dark:border-[#111318] -translate-x-1/2 z-10 hidden md:block group-hover:scale-150 transition-transform duration-300`}></div>

              {/* Tag card */}
              <div className={`md:w-1/2 ${event.side === 'left' ? 'md:pl-10' : 'md:pr-10'}`}>
                <div className={`p-4 bg-[#f3f4f5] dark:bg-[#1a1c20] border border-[#e1e3e4] dark:border-[#3b494b] ${event.accent}`}>
                  <span className={`font-['JetBrains_Mono'] text-[11px] font-bold ${event.tagColor}`}>{event.tag}</span>
                  <p className="font-['JetBrains_Mono'] text-[11px] italic mt-1 text-[#6b7a7d] dark:text-[#849495]">{event.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==============================
          LAB STATS GRID
      ============================== */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { value: '12k', label: 'Commits', color: 'text-[#006877] dark:text-[#7df4ff]' },
          { value: '85', label: 'Deployments', color: 'text-[#a90097] dark:text-[#fface8]' },
          { value: '04', label: 'Robotics_Awards', color: 'text-[#0c6e00] dark:text-[#79ff5b]' },
          { value: '99%', label: 'Efficiency', color: 'text-[#191c1d] dark:text-[#e2e2e8]' },
        ].map(({ value, label, color }) => (
          <div key={label} className="py-10 px-4 border border-[#e1e3e4] dark:border-[#3b494b] flex flex-col items-center justify-center text-center hover:bg-[#edeeef] dark:hover:bg-[#282a2e] transition-colors group">
            <span className={`font-['Space_Grotesk'] font-bold text-[52px] leading-none ${color} group-hover:scale-105 transition-transform duration-300`} style={{ letterSpacing: '-0.04em' }}>
              {value}
            </span>
            <span className="font-['JetBrains_Mono'] text-[10px] text-[#6b7a7d] dark:text-[#849495] uppercase tracking-widest mt-3">{label}</span>
          </div>
        ))}
      </section>
    </div>
  );
}
