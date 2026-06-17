import { Link } from 'react-router-dom';

export default function Dispatch() {
  return (
    <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-16 pb-32 md:pb-16">
      {/* BACK NAV */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest text-[#006877] dark:text-[#00dbe9] hover:gap-4 transition-all duration-300 mb-12 group"
      >
        <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
        BACK TO STUDIO
      </Link>

      {/* METADATA */}
      <div className="flex flex-wrap gap-4 items-center mb-6">
        <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest text-[#a90097] dark:text-[#fface8]">DISPATCH_08</span>
        <span className="w-1 h-1 rounded-full bg-[#bac9cd] dark:bg-[#3b494b]"></span>
        <span className="font-['JetBrains_Mono'] text-[11px] text-[#6b7a7d] dark:text-[#849495] uppercase">2024.03.15</span>
        <span className="w-1 h-1 rounded-full bg-[#bac9cd] dark:bg-[#3b494b]"></span>
        <span className="font-['JetBrains_Mono'] text-[11px] text-[#6b7a7d] dark:text-[#849495] uppercase">8 MIN READ</span>
      </div>

      {/* HERO HEADING */}
      <h1
        className="font-['Space_Grotesk'] font-bold text-[#191c1d] dark:text-[#e2e2e8] mb-8 leading-[1.05]"
        style={{ fontSize: 'clamp(36px, 5vw, 60px)', letterSpacing: '-0.04em' }}
      >
        The Future of{' '}
        <span className="text-[#006877] dark:text-[#7df4ff] italic">Creative Tech</span>
      </h1>

      {/* HERO IMAGE */}
      <div className="relative w-full aspect-[16/7] overflow-hidden mb-10 group">
        <img
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          alt="Future of Creative Tech"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE8q8NoLm5I_avTxQwMb3XhaR5te8_szoDn_gt7Zyby0ZI1kn25EWx3C3Y_cj3IO3In2CjRywORGhfdDC_83vvc2l8zhoy7jb5HDx8hVCLvDMMbvFWQKMZnpaBO8Pl3yLjZjiGbT5PAs3U0xIauRx1NTZIxeG_W7j0udV3dyrvvuROYOJXUcI71hfpLrh32ndNaWWG37utDc3ce9i48d_LkZIg6gn9TArq5RxTnat_mAkBw-NuxGB4WsAfyelaf1VhqaQ9YzamlUKv"
        />
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#f8f9fa] dark:from-[#111318] to-transparent"></div>
        <div className="absolute top-4 right-4 px-3 py-1 bg-[#191c1d]/70 dark:bg-[#0c0e12]/80 backdrop-blur-sm">
          <span className="font-['JetBrains_Mono'] text-[10px] text-[#00dbe9] uppercase">ACCESS_GRANTED</span>
        </div>
      </div>

      {/* ARTICLE BODY */}
      <article className="prose prose-lg max-w-none space-y-8">
        {/* Intro */}
        <p className="font-['Geist',sans-serif] text-[17px] text-[#3b494c] dark:text-[#b9cacb] leading-[1.8] font-medium">
          We are living through a quiet revolution. The tools that once required a team of 20 engineers to build are now accessible to a single developer with a clear vision. Generative AI hasn't replaced creativity — it has compressed the distance between imagination and execution.
        </p>

        {/* Section 1 */}
        <div className="border-l-4 border-[#00e0ff] dark:border-[#00dbe9] pl-6 py-2">
          <h2 className="font-['Space_Grotesk'] text-[28px] font-semibold text-[#191c1d] dark:text-[#e2e2e8] mb-3" style={{ letterSpacing: '-0.02em' }}>
            01 // The Collapse of the Stack
          </h2>
          <p className="font-['Geist',sans-serif] text-[16px] text-[#3b494c] dark:text-[#b9cacb] leading-[1.8]">
            Five years ago, "full-stack" meant React on the front, Node on the back, and a prayer for the database. Today it means weaving together LLM APIs, vector databases, real-time websockets, edge functions, and a UI that can respond to a 50ms change in user intent. The stack has collapsed into a single, fluid layer of orchestration.
          </p>
        </div>

        {/* Callout box */}
        <div className="bg-[#f3f4f5] dark:bg-[#1e2024] border border-[#e1e3e4] dark:border-[#3b494b] p-6 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#006877] via-[#00e0ff] to-[#24ec00] dark:from-[#00dbe9] dark:via-[#7df4ff] dark:to-[#2ae500]"></div>
          <p className="font-['JetBrains_Mono'] text-[13px] text-[#191c1d] dark:text-[#e2e2e8] leading-relaxed">
            "The most dangerous assumption in tech is that the tools we use today are the tools we'll use tomorrow. Adaptability is the only moat."
          </p>
          <p className="font-['JetBrains_Mono'] text-[11px] text-[#6b7a7d] dark:text-[#849495] mt-3 uppercase tracking-widest">— CREATIVE_TECH LAB PRINCIPLE_07</p>
        </div>

        {/* Section 2 */}
        <div className="border-l-4 border-[#a90097] dark:border-[#ff24e4] pl-6 py-2">
          <h2 className="font-['Space_Grotesk'] text-[28px] font-semibold text-[#191c1d] dark:text-[#e2e2e8] mb-3" style={{ letterSpacing: '-0.02em' }}>
            02 // Human-Centered AI Design
          </h2>
          <p className="font-['Geist',sans-serif] text-[16px] text-[#3b494c] dark:text-[#b9cacb] leading-[1.8]">
            The interfaces of tomorrow won't be menus and modals. They'll be conversations, gestures, and contextual signals. The role of the designer is shifting from "arranger of components" to "orchestrator of intent." We must design not for what users click, but for what they feel when they interact.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { value: '340%', label: 'Increase in LLM API calls YoY', color: 'text-[#006877] dark:text-[#7df4ff]' },
            { value: '12ms', label: 'Avg. inference latency on edge', color: 'text-[#a90097] dark:text-[#fface8]' },
            { value: '94%', label: 'Dev satisfaction w/ AI tools', color: 'text-[#0c6e00] dark:text-[#79ff5b]' },
          ].map(({ value, label, color }) => (
            <div key={value} className="border border-[#e1e3e4] dark:border-[#3b494b] p-4 text-center hover:bg-[#edeeef] dark:hover:bg-[#282a2e] transition-colors">
              <div className={`font-['Space_Grotesk'] text-[32px] font-bold ${color} leading-none`} style={{ letterSpacing: '-0.04em' }}>{value}</div>
              <div className="font-['JetBrains_Mono'] text-[10px] text-[#6b7a7d] dark:text-[#849495] uppercase mt-2 leading-tight">{label}</div>
            </div>
          ))}
        </div>

        {/* Section 3 */}
        <div className="border-l-4 border-[#24ec00] dark:border-[#2ae500] pl-6 py-2">
          <h2 className="font-['Space_Grotesk'] text-[28px] font-semibold text-[#191c1d] dark:text-[#e2e2e8] mb-3" style={{ letterSpacing: '-0.02em' }}>
            03 // The Automation Renaissance
          </h2>
          <p className="font-['Geist',sans-serif] text-[16px] text-[#3b494c] dark:text-[#b9cacb] leading-[1.8]">
            Automation was once the domain of enterprise IT. Now, a solo creative technologist can build workflows that rival the output of an entire team — scheduling content, processing data, generating visual assets, and deploying code, all while they sleep. This isn't a threat to creativity; it's the final liberation of it.
          </p>
        </div>
      </article>

      {/* DIVIDER */}
      <div className="flex items-center gap-4 my-12">
        <div className="h-px flex-grow bg-[#e1e3e4] dark:bg-[#3b494b]"></div>
        <span className="font-['JetBrains_Mono'] text-[11px] text-[#bac9cd] dark:text-[#3b494b] uppercase">END_OF_DISPATCH</span>
        <div className="h-px flex-grow bg-[#e1e3e4] dark:bg-[#3b494b]"></div>
      </div>

      {/* FOOTER CTA */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest text-[#6b7a7d] dark:text-[#849495] hover:text-[#006877] dark:hover:text-[#7df4ff] transition-colors group"
        >
          <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Back to Studio
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-[#191c1d] dark:bg-[#00dbe9] text-white dark:text-[#002022] font-['JetBrains_Mono'] text-[11px] px-6 py-3 uppercase tracking-widest hover:opacity-80 active:scale-95 transition-all"
        >
          Discuss This
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}
