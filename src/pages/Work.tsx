import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('ALL_SYSTEMS');

  const filters = [
    { id: 'ALL_SYSTEMS', label: 'ALL_SYSTEMS' },
    { id: 'react', label: 'React & Python' },
    { id: 'n8n', label: 'n8n Automations' },
    { id: 'hardware', label: 'Hardware/Arduino' },
    { id: 'creative', label: 'Screenplays/Creative' },
  ];

  return (
    <div className="px-6 md:px-8 max-w-[1280px] mx-auto pt-8 pb-32 md:pb-16">
      {/* ==============================
          INTRO SECTION
      ============================== */}
      <section className="mb-12 pt-8">
        <div className="flex flex-col gap-2 mb-4">
          <span className="font-['JetBrains_Mono'] text-[11px] text-[#006877] dark:text-[#00dbe9] tracking-widest uppercase flex items-center gap-2">
            <span className="w-8 h-px bg-[#006877] dark:bg-[#00dbe9]"></span> [DIRECTORY_V1.0]
          </span>
          <h1
            className="font-['Space_Grotesk'] font-bold text-[#191c1d] dark:text-[#e2e2e8] leading-none"
            style={{ fontSize: 'clamp(48px, 7vw, 72px)', letterSpacing: '-0.04em' }}
          >
            THE PROOF.
          </h1>
        </div>
        <p className="font-['Geist',sans-serif] text-[15px] text-[#3b494c] dark:text-[#b9cacb] max-w-2xl">
          A non-linear archive of engineering curiosities, creative experiments, and automated systems. Each tile represents a verified milestone in full-stack exploration.
        </p>
      </section>

      {/* FILTERS */}
      <section className="mb-10 flex flex-wrap gap-2">
        {filters.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setActiveFilter(id)}
            className={`px-5 py-2 font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest transition-all duration-200 active:scale-95 ${
              activeFilter === id
                ? 'bg-[#006877] dark:bg-[#00dbe9] text-white dark:text-[#002022] border border-[#006877] dark:border-[#00dbe9]'
                : 'bg-[#edeeef] dark:bg-[#1e2024] border border-[#e1e3e4] dark:border-[#3b494b] text-[#3b494c] dark:text-[#b9cacb] hover:border-[#006877] dark:hover:border-[#00dbe9]'
            }`}
          >
            {label}
          </button>
        ))}
      </section>

      {/* ==============================
          BENTO GRID
      ============================== */}
      <div className="grid grid-cols-12 gap-5">
        {/* FEATURED CARD (Wide) - DOTSLASH */}
        <Link to="/work/dotslash" className="col-span-12 md:col-span-8 group relative bg-white dark:bg-[#1a1c20] border border-[#e1e3e4] dark:border-[#3b494b] hover:border-[#006877] dark:hover:border-[#00dbe9] transition-all overflow-hidden h-[400px] block">
          <div
            className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 opacity-20 group-hover:opacity-100"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBOhPyBBJ5Foa8xx7PlsdKz5Jx_dzy-yEbn2sa4npI6Zz--U1AB9m98Fmdv_ThYTV5hxUgtpykBX6C6J3rLugyGchFZfZoIJCqWrgIyWiIEetWTHXhC7nQzQXKEi7z6Jp3o1dnzI9T5keFzzQ3Ubl4Zn9X__GAYlqCaInFanob6NXrMX20TkTu9tluxi2c9F_a-553Z6Phwnnp7dR3xw9ryY_q3S3ZJpG4TpJgATsQ6ZPP4staOmBtgV50iuEYSNZ-4nLtJtkrU81lf')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#1a1c20] via-transparent to-transparent opacity-90"></div>
          <div className="relative h-full flex flex-col justify-end p-6">
            <div className="flex gap-2 mb-3">
              <span className="bg-[#edeeef] dark:bg-[#282a2e] px-2 py-1 font-['JetBrains_Mono'] text-[10px] border-l-4 border-[#006877] dark:border-[#00dbe9] text-[#191c1d] dark:text-[#e2e2e8]">REACT_NEXTJS</span>
              <span className="bg-[#edeeef] dark:bg-[#282a2e] px-2 py-1 font-['JetBrains_Mono'] text-[10px] border-l-4 border-[#a90097] dark:border-[#ff24e4] text-[#191c1d] dark:text-[#e2e2e8]">PYTHON_AI</span>
            </div>
            <h3 className="font-['Space_Grotesk'] text-[32px] font-semibold text-[#191c1d] dark:text-[#e2e2e8] mb-1" style={{ letterSpacing: '-0.02em' }}>
              DOTSLASH_V4
            </h3>
            <p className="font-['Geist',sans-serif] text-[14px] text-[#3b494c] dark:text-[#b9cacb] max-w-md">
              Automated technical auditing platform built with Next.js and high-concurrency Python workers.
            </p>
            <div className="mt-4 flex gap-3 items-center">
              <span className="material-symbols-outlined text-[#006877] dark:text-[#00dbe9]">arrow_right_alt</span>
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase text-[#006877] dark:text-[#00dbe9] font-bold tracking-widest">Launch Interface</span>
            </div>
          </div>
        </Link>

        {/* HARDWARE CARD */}
        <Link to="/work/lie-detector" className="col-span-12 md:col-span-4 group relative bg-[#edeeef] dark:bg-[#1e2024] border border-[#e1e3e4] dark:border-[#3b494b] hover:border-[#a90097] dark:hover:border-[#ff24e4] transition-all overflow-hidden h-[400px] block">
          <div className="p-6 flex flex-col h-full">
            <div className="mb-auto">
              <span className="material-symbols-outlined text-[#a90097] dark:text-[#fface8] text-[48px]" style={{ fontVariationSettings: "'FILL' 1" }}>biotech</span>
            </div>
            <div>
              <div className="flex gap-2 mb-3">
                <span className="bg-white dark:bg-[#282a2e] px-2 py-1 font-['JetBrains_Mono'] text-[10px] border-l-4 border-[#a90097] dark:border-[#ff24e4] text-[#191c1d] dark:text-[#e2e2e8]">HARDWARE</span>
              </div>
              <h3 className="font-['Space_Grotesk'] text-[28px] font-semibold text-[#191c1d] dark:text-[#e2e2e8] mb-2" style={{ letterSpacing: '-0.02em' }}>LIE_DETECTOR_X</h3>
              <p className="font-['Geist',sans-serif] text-[13px] text-[#3b494c] dark:text-[#b9cacb]">Arduino-based galvanic skin response system with real-time SVG visualizers.</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 p-3 transform translate-x-12 -translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300">
            <div className="w-20 h-20 border-t-2 border-r-2 border-[#a90097] dark:border-[#ff24e4]"></div>
          </div>
        </Link>

        {/* AUTOMATION (Vertical tall) */}
        <div className="col-span-12 md:col-span-4 group bg-white dark:bg-[#1a1c20] border border-[#e1e3e4] dark:border-[#3b494b] hover:border-[#24ec00] dark:hover:border-[#2ae500] transition-all overflow-hidden h-[500px]">
          <div className="h-[55%] overflow-hidden">
            <img
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDVQqn3bF_OMEk5AUqKWCufwrZpzA4effT6pQ3_gt3a3oxLE-AOogfOL7qanXIDKvcWCXeWffqB0Xy7Rtlw0o_XZnRSXT6EFxNJEj06gdxF8VhFqxr9lq3EsyZFh1ISxpoY5vUx8_ViIMlx6dw67u48JiBDloTmOMO_FFS6mmKuOGMRZMhqhEpyQ2QvI7arAdre30AZvwtwdBOTv8xfTYflxCSjeys0Xv8LLyiM4M9Fo_oRL_z6S3JeiiTQAdm7gWNhfTdpd2cIe7I"
              alt="Automation"
            />
          </div>
          <div className="p-5 flex flex-col h-[45%] justify-between">
            <div>
              <div className="flex gap-2 mb-2">
                <span className="bg-[#edeeef] dark:bg-[#282a2e] px-2 py-1 font-['JetBrains_Mono'] text-[10px] border-l-4 border-[#24ec00] dark:border-[#2ae500] text-[#191c1d] dark:text-[#e2e2e8]">AUTOMATION</span>
              </div>
              <h3 className="font-['Space_Grotesk'] text-[24px] font-semibold text-[#191c1d] dark:text-[#e2e2e8]" style={{ letterSpacing: '-0.02em' }}>SYNC_N8N</h3>
            </div>
            <p className="font-['Geist',sans-serif] text-[13px] text-[#3b494c] dark:text-[#b9cacb]">Complex orchestration of 40+ microservices for autonomous content generation.</p>
          <Link to="/work/n8n" className="w-full block bg-[#191c1d] dark:bg-black text-[#79ff5b] dark:text-[#79ff5b] py-2 font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest text-center border-b-2 border-[#24ec00] dark:border-[#2ae500] group-hover:bg-[#0c6e00] dark:group-hover:bg-[#0c6e00] group-hover:text-white transition-all">
              View Flowchart
            </Link>
          </div>
        </div>

        {/* SCREENPLAY GEN */}
        <Link to="/work/screenplay" className="col-span-12 md:col-span-8 group bg-[#f3f4f5] dark:bg-[#1e2024] border border-[#e1e3e4] dark:border-[#3b494b] p-6 relative h-[500px] hover:border-[#006877] dark:hover:border-[#00dbe9] transition-all block">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-start mb-8">
              <div className="flex flex-col">
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#006877] dark:text-[#00dbe9] mb-2 uppercase tracking-widest">PROJECT_STATUS: ARCHIVED</span>
                <h3 className="font-['Space_Grotesk'] text-[36px] font-semibold text-[#191c1d] dark:text-[#e2e2e8]" style={{ letterSpacing: '-0.02em' }}>
                  SCREENPLAY_GEN
                </h3>
              </div>
              <span className="material-symbols-outlined text-[36px] text-[#bac9cd] dark:text-[#3b494b]">description</span>
            </div>
            <div className="grid grid-cols-2 gap-6 flex-grow">
              <div className="border-l-2 border-[#e1e3e4] dark:border-[#3b494b] pl-4">
                <h4 className="font-['JetBrains_Mono'] text-[11px] uppercase text-[#191c1d] dark:text-[#e2e2e8] font-bold mb-2 tracking-widest">Creative Intent</h4>
                <p className="font-['Geist',sans-serif] text-[13px] text-[#3b494c] dark:text-[#b9cacb]">Exploring the intersection of LLM tokens and narrative arc structures in Noir cinema.</p>
              </div>
              <div className="border-l-2 border-[#e1e3e4] dark:border-[#3b494b] pl-4">
                <h4 className="font-['JetBrains_Mono'] text-[11px] uppercase text-[#191c1d] dark:text-[#e2e2e8] font-bold mb-2 tracking-widest">Stack</h4>
                <ul className="font-['JetBrains_Mono'] text-[11px] text-[#3b494c] dark:text-[#b9cacb] flex flex-col gap-1.5">
                  <li>&gt; OPENAI_API_V3</li>
                  <li>&gt; LANGCHAIN</li>
                  <li>&gt; STREAMLIT_GUI</li>
                </ul>
              </div>
            </div>
            <div className="mt-auto pt-5 border-t border-[#e1e3e4] dark:border-[#3b494b] flex justify-between items-center">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full border-2 border-white dark:border-[#1e2024] bg-[#006877] dark:bg-[#00dbe9]"></div>
                <div className="w-7 h-7 rounded-full border-2 border-white dark:border-[#1e2024] bg-[#a90097] dark:bg-[#ff24e4]"></div>
              </div>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#6b7a7d] dark:text-[#849495]">STARS: 124</span>
            </div>
          </div>
        </Link>

        <div className="col-span-12 md:col-span-4 group bg-[#191c1d] dark:bg-[#0c0e12] p-6 flex flex-col justify-center items-center text-center gap-4 h-[240px] border border-[#191c1d] dark:border-[#3b494b]">
          <span className="material-symbols-outlined text-[#00e0ff] dark:text-[#00dbe9] text-[48px]">cloud_done</span>
          <h4 className="font-['JetBrains_Mono'] text-white dark:text-[#e2e2e8] tracking-[0.2em] text-[12px] uppercase">ALL_SYSTEMS_OPERATIONAL</h4>
          <div className="w-10 h-1 bg-[#00e0ff] dark:bg-[#00dbe9]"></div>
        </div>

        {/* PROCESS CARD */}
        <Link to="/about" className="col-span-12 md:col-span-4 group bg-white dark:bg-[#1a1c20] border border-[#e1e3e4] dark:border-[#3b494b] p-6 h-[240px] flex flex-col justify-between hover:bg-[#f3f4f5] dark:hover:bg-[#282a2e] hover:border-[#006877] dark:hover:border-[#00dbe9] transition-all block">
          <span className="font-['JetBrains_Mono'] text-[11px] text-[#006877] dark:text-[#00dbe9] uppercase tracking-widest">01 // PROCESS</span>
          <p className="font-['Geist',sans-serif] text-[14px] text-[#191c1d] dark:text-[#e2e2e8]">Our methodology centers on rigorous testing and brutalist simplicity.</p>
          <div className="flex justify-end">
            <span className="material-symbols-outlined text-[#191c1d] dark:text-[#e2e2e8] group-hover:translate-x-2 transition-transform duration-300">east</span>
          </div>
        </Link>

        {/* QUICK CONTACT */}
        <div className="col-span-12 md:col-span-4 group bg-[#e1e3e4] dark:bg-[#333539] border border-[#e1e3e4] dark:border-[#3b494b] p-6 h-[240px] flex flex-col justify-between overflow-hidden relative">
          <h3 className="font-['Space_Grotesk'] text-[52px] font-bold opacity-10 absolute -bottom-3 -left-3 text-[#191c1d] dark:text-[#e2e2e8] leading-none pointer-events-none">LAB</h3>
          <span className="font-['JetBrains_Mono'] text-[11px] uppercase text-[#6b7a7d] dark:text-[#849495] tracking-widest z-10">Quick Contact</span>
          <div className="flex flex-col gap-2 z-10">
            <a className="font-['JetBrains_Mono'] text-[11px] text-[#191c1d] dark:text-[#e2e2e8] hover:text-[#006877] dark:hover:text-[#7df4ff] underline tracking-widest transition-colors" href="https://github.com/hriday880" target="_blank" rel="noopener noreferrer">GITHUB_REPO</a>
            <Link className="font-['JetBrains_Mono'] text-[11px] text-[#191c1d] dark:text-[#e2e2e8] hover:text-[#006877] dark:hover:text-[#7df4ff] underline tracking-widest transition-colors" to="/dispatch">DOCUMENTATION</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
