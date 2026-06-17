import { Link, useParams } from 'react-router-dom';

const PROJECTS: Record<string, {
  title: string;
  subtitle: string;
  status: string;
  tags: string[];
  tagColors: string[];
  description: string;
  problem: string;
  solution: string;
  impact: string;
  stack: string[];
  metrics: { value: string; label: string; color: string }[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  accentColor: string;
  accentDark: string;
}> = {
  dotslash: {
    title: 'DOTSLASH_V4',
    subtitle: 'Automated Technical Auditing Platform',
    status: 'PRODUCTION',
    tags: ['REACT_NEXTJS', 'PYTHON_AI'],
    tagColors: ['border-[#006877] dark:border-[#00dbe9]', 'border-[#a90097] dark:border-[#ff24e4]'],
    description: 'A fully automated technical auditing platform that crawls codebases, identifies anti-patterns, and generates structured PDF reports — all within a clean Next.js interface backed by high-concurrency Python workers.',
    problem: 'Engineering teams waste hours in manual code reviews searching for common issues. The process is inconsistent and doesn\'t scale across large repositories.',
    solution: 'Built a parallelized Python crawler using asyncio + multiprocessing to parse ASTs at scale. A Next.js dashboard streams results in real-time via Server-Sent Events.',
    impact: 'Reduced average code review time by 60%. Deployed across 3 enterprise clients handling repos with 500k+ lines of code.',
    stack: ['Next.js 14', 'Python 3.11', 'FastAPI', 'asyncio', 'PostgreSQL', 'Redis', 'Docker', 'AWS Lambda'],
    metrics: [
      { value: '500k+', label: 'Lines analyzed', color: 'text-[#006877] dark:text-[#7df4ff]' },
      { value: '60%', label: 'Review time saved', color: 'text-[#a90097] dark:text-[#fface8]' },
      { value: '12ms', label: 'Avg latency', color: 'text-[#0c6e00] dark:text-[#79ff5b]' },
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOhPyBBJ5Foa8xx7PlsdKz5Jx_dzy-yEbn2sa4npI6Zz--U1AB9m98Fmdv_ThYTV5hxUgtpykBX6C6J3rLugyGchFZfZoIJCqWrgIyWiIEetWTHXhC7nQzQXKEi7z6Jp3o1dnzI9T5keFzzQ3Ubl4Zn9X__GAYlqCaInFanob6NXrMX20TkTu9tluxi2c9F_a-553Z6Phwnnp7dR3xw9ryY_q3S3ZJpG4TpJgATsQ6ZPP4staOmBtgV50iuEYSNZ-4nLtJtkrU81lf',
    githubUrl: 'https://github.com/hriday880',
    accentColor: '#006877',
    accentDark: '#00dbe9',
  },
  n8n: {
    title: 'SYNC_N8N',
    subtitle: 'Multi-Service Automation Orchestrator',
    status: 'ACTIVE',
    tags: ['AUTOMATION', 'N8N', 'API'],
    tagColors: ['border-[#24ec00] dark:border-[#2ae500]', 'border-[#006877] dark:border-[#00dbe9]', 'border-[#a90097] dark:border-[#ff24e4]'],
    description: 'A complex orchestration system connecting 40+ microservices for autonomous content generation, scheduling, and distribution across 12 platforms simultaneously.',
    problem: 'Content teams manually post to dozens of platforms, losing hours every day to repetitive work. Each platform has its own API quirks and rate limits.',
    solution: 'Designed a modular n8n workflow graph with custom nodes for each platform. Implemented exponential backoff, dead-letter queues, and a Slack-based approval layer for sensitive content.',
    impact: 'Fully automated 8 hours/day of manual content work. Zero missed posts across 3 months of production use.',
    stack: ['n8n', 'Node.js', 'PostgreSQL', 'Redis', 'Docker Compose', 'Webhook.site', 'Slack API', 'OpenAI API'],
    metrics: [
      { value: '40+', label: 'Connected services', color: 'text-[#0c6e00] dark:text-[#79ff5b]' },
      { value: '8h/day', label: 'Work automated', color: 'text-[#006877] dark:text-[#7df4ff]' },
      { value: '99.9%', label: 'Uptime SLA', color: 'text-[#a90097] dark:text-[#fface8]' },
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDVQqn3bF_OMEk5AUqKWCufwrZpzA4effT6pQ3_gt3a3oxLE-AOogfOL7qanXIDKvcWCXeWffqB0Xy7Rtlw0o_XZnRSXT6EFxNJEj06gdxF8VhFqxr9lq3EsyZFh1ISxpoY5vUx8_ViIMlx6dw67u48JiBDloTmOMO_FFS6mmKuOGMRZMhqhEpyQ2QvI7arAdre30AZvwtwdBOTv8xfTYflxCSjeys0Xv8LLyiM4M9Fo_oRL_z6S3JeiiTQAdm7gWNhfTdpd2cIe7I',
    githubUrl: 'https://github.com/hriday880',
    accentColor: '#24ec00',
    accentDark: '#2ae500',
  },
  screenplay: {
    title: 'SCREENPLAY_GEN',
    subtitle: 'AI-Powered Narrative Architecture Engine',
    status: 'ARCHIVED',
    tags: ['CREATIVE', 'LLM', 'STREAMLIT'],
    tagColors: ['border-[#a90097] dark:border-[#ff24e4]', 'border-[#006877] dark:border-[#00dbe9]', 'border-[#24ec00] dark:border-[#2ae500]'],
    description: 'An experimental tool exploring the intersection of large language model token distributions and classical narrative arc structures in Noir cinema. Generated complete, structured screenplays with scene-level consistency enforcement.',
    problem: 'LLMs hallucinate and lose narrative consistency across long-form creative work. Generated stories frequently contradict earlier plot points.',
    solution: 'Built a hierarchical prompt system that maintains a "story state" — a compressed semantic memory of all established facts. Each scene generation queries this memory before writing.',
    impact: 'Generated 12 complete screenplay drafts. Published research findings to 124 GitHub stars. Presented at 2023 Global Tech Summit.',
    stack: ['Python 3.11', 'OpenAI API v3', 'LangChain', 'Streamlit', 'FAISS', 'Jinja2 Templates'],
    metrics: [
      { value: '124', label: 'GitHub stars', color: 'text-[#a90097] dark:text-[#fface8]' },
      { value: '12', label: 'Screenplays generated', color: 'text-[#006877] dark:text-[#7df4ff]' },
      { value: '2023', label: 'Summit presented', color: 'text-[#0c6e00] dark:text-[#79ff5b]' },
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAE0ygHOFIlRf01k9v-RwDvgf_jQeDkmKzdk9sxUaK61WbLHWms9aXiAm8VGNzi-EXVc29GhBnLbuj9m06nYwgauNHFxD_LPrfQSgIG8hGGSWcI3LggygWJc4AmT19avpcKH2KO7bXA7wlosfoinQiWNPSSsttYYcgFaLkAzZt1M5u_FdBzZ8IowdUPot6JnyWXxoCeVX-aefoUgzNwkW2nWdTd_1cVg1U925CzwtPl1DcAu3pLbnGmCOv3mxGAs72ClB0iAR5aqKoN',
    githubUrl: 'https://github.com/hriday880',
    accentColor: '#a90097',
    accentDark: '#ff24e4',
  },
  'lie-detector': {
    title: 'LIE_DETECTOR_X',
    subtitle: 'Biometric Galvanic Skin Response Analyzer',
    status: 'PROTOTYPE',
    tags: ['HARDWARE', 'ARDUINO', 'SVG'],
    tagColors: ['border-[#a90097] dark:border-[#ff24e4]', 'border-[#24ec00] dark:border-[#2ae500]', 'border-[#006877] dark:border-[#00dbe9]'],
    description: 'An Arduino-based galvanic skin response (GSR) system that measures electrodermal activity in real-time, visualized through a dynamic SVG waveform renderer in the browser over WebSerial.',
    problem: 'Commercial GSR devices cost thousands and export data in opaque formats. DIY systems lack real-time visualization.',
    solution: 'Built a custom GSR amplifier circuit on a PCB. An Arduino Nano samples at 100Hz and streams over USB. A vanilla JS frontend reads via WebSerial API and renders a live SVG path.',
    impact: 'Bill of materials: under $15. Demonstrated at the 2023 hardware hackathon. Achieved comparable accuracy to commercial devices in stress detection tasks.',
    stack: ['Arduino Nano', 'C++ (AVR)', 'WebSerial API', 'SVG Animations', 'Vanilla JS', 'KiCad PCB'],
    metrics: [
      { value: '$15', label: 'Total BOM cost', color: 'text-[#0c6e00] dark:text-[#79ff5b]' },
      { value: '100Hz', label: 'Sampling rate', color: 'text-[#006877] dark:text-[#7df4ff]' },
      { value: '92%', label: 'Stress detection accuracy', color: 'text-[#a90097] dark:text-[#fface8]' },
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDVQqn3bF_OMEk5AUqKWCufwrZpzA4effT6pQ3_gt3a3oxLE-AOogfOL7qanXIDKvcWCXeWffqB0Xy7Rtlw0o_XZnRSXT6EFxNJEj06gdxF8VhFqxr9lq3EsyZFh1ISxpoY5vUx8_ViIMlx6dw67u48JiBDloTmOMO_FFS6mmKuOGMRZMhqhEpyQ2QvI7arAdre30AZvwtwdBOTv8xfTYflxCSjeys0Xv8LLyiM4M9Fo_oRL_z6S3JeiiTQAdm7gWNhfTdpd2cIe7I',
    githubUrl: 'https://github.com/hriday880',
    accentColor: '#a90097',
    accentDark: '#ff24e4',
  },
};

const STATUS_COLORS: Record<string, string> = {
  PRODUCTION: 'bg-[#24ec00]/10 dark:bg-[#2ae500]/10 text-[#0c6e00] dark:text-[#79ff5b] border border-[#24ec00]/30 dark:border-[#2ae500]/30',
  ACTIVE: 'bg-[#006877]/10 dark:bg-[#00dbe9]/10 text-[#006877] dark:text-[#00dbe9] border border-[#006877]/30 dark:border-[#00dbe9]/30',
  PROTOTYPE: 'bg-[#a90097]/10 dark:bg-[#ff24e4]/10 text-[#a90097] dark:text-[#fface8] border border-[#a90097]/30 dark:border-[#ff24e4]/30',
  ARCHIVED: 'bg-[#6b7a7d]/10 dark:bg-[#849495]/10 text-[#6b7a7d] dark:text-[#849495] border border-[#6b7a7d]/30 dark:border-[#849495]/30',
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? PROJECTS[id] : null;

  if (!project) {
    return (
      <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-24 pb-32 text-center">
        <div className="font-['JetBrains_Mono'] text-[11px] text-[#a90097] dark:text-[#fface8] uppercase tracking-widest mb-4">ERROR_404</div>
        <h1 className="font-['Space_Grotesk'] text-[48px] font-bold text-[#191c1d] dark:text-[#e2e2e8] mb-4" style={{ letterSpacing: '-0.04em' }}>PROJECT_NOT_FOUND</h1>
        <p className="font-['Geist',sans-serif] text-[#3b494c] dark:text-[#b9cacb] mb-8">This project file does not exist or has been purged from the archive.</p>
        <Link to="/work" className="inline-flex items-center gap-2 bg-[#191c1d] dark:bg-[#00dbe9] text-white dark:text-[#002022] font-['JetBrains_Mono'] text-[11px] px-6 py-3 uppercase tracking-widest hover:opacity-80 transition-all">
          <span className="material-symbols-outlined text-[16px]">arrow_back</span> Return to Archive
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1000px] mx-auto px-6 md:px-8 pt-10 pb-32 md:pb-16">
      {/* BACK */}
      <Link
        to="/work"
        className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest text-[#006877] dark:text-[#00dbe9] hover:gap-4 transition-all duration-300 mb-12 group"
      >
        <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
        BACK TO ARCHIVE
      </Link>

      {/* HEADER */}
      <div className="mb-10">
        <div className="flex flex-wrap gap-3 items-center mb-4">
          <span className={`font-['JetBrains_Mono'] text-[10px] px-2.5 py-1 uppercase tracking-widest ${STATUS_COLORS[project.status]}`}>
            {project.status}
          </span>
          {project.tags.map((tag, i) => (
            <span key={tag} className={`bg-[#edeeef] dark:bg-[#282a2e] px-2 py-1 font-['JetBrains_Mono'] text-[10px] border-l-4 ${project.tagColors[i] || 'border-[#006877]'} text-[#191c1d] dark:text-[#e2e2e8]`}>
              {tag}
            </span>
          ))}
        </div>
        <h1
          className="font-['Space_Grotesk'] font-bold text-[#191c1d] dark:text-[#e2e2e8] leading-none mb-3"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)', letterSpacing: '-0.04em' }}
        >
          {project.title}
        </h1>
        <p className="font-['Geist',sans-serif] text-[17px] text-[#3b494c] dark:text-[#b9cacb]">{project.subtitle}</p>
      </div>

      {/* HERO IMAGE */}
      <div className="relative w-full aspect-[16/7] overflow-hidden mb-10 group border border-[#e1e3e4] dark:border-[#3b494b]">
        <div className="absolute top-0 left-0 w-full h-1" style={{ background: `linear-gradient(to right, ${project.accentColor}, transparent)` }}></div>
        <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src={project.image} alt={project.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f8f9fa]/60 dark:from-[#111318]/60 to-transparent"></div>
      </div>

      {/* METRICS */}
      <div className="grid grid-cols-3 gap-4 mb-12">
        {project.metrics.map(({ value, label, color }) => (
          <div key={label} className="border border-[#e1e3e4] dark:border-[#3b494b] p-5 text-center hover:bg-[#edeeef] dark:hover:bg-[#282a2e] transition-colors">
            <div className={`font-['Space_Grotesk'] text-[36px] font-bold leading-none ${color}`} style={{ letterSpacing: '-0.04em' }}>{value}</div>
            <div className="font-['JetBrains_Mono'] text-[10px] text-[#6b7a7d] dark:text-[#849495] uppercase mt-2 leading-tight">{label}</div>
          </div>
        ))}
      </div>

      {/* NARRATIVE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Overview */}
        <div className="md:col-span-2 border-l-4 pl-6 py-2" style={{ borderColor: project.accentColor }}>
          <h2 className="font-['Space_Grotesk'] text-[24px] font-semibold text-[#191c1d] dark:text-[#e2e2e8] mb-3" style={{ letterSpacing: '-0.02em' }}>Overview</h2>
          <p className="font-['Geist',sans-serif] text-[15px] text-[#3b494c] dark:text-[#b9cacb] leading-[1.8]">{project.description}</p>
        </div>

        {/* The Problem */}
        <div className="bg-[#f3f4f5] dark:bg-[#1e2024] border border-[#e1e3e4] dark:border-[#3b494b] p-6">
          <div className="font-['JetBrains_Mono'] text-[10px] text-[#a90097] dark:text-[#fface8] uppercase tracking-widest mb-3">// THE PROBLEM</div>
          <p className="font-['Geist',sans-serif] text-[14px] text-[#3b494c] dark:text-[#b9cacb] leading-relaxed">{project.problem}</p>
        </div>

        {/* The Solution */}
        <div className="bg-[#f3f4f5] dark:bg-[#1e2024] border border-[#e1e3e4] dark:border-[#3b494b] p-6">
          <div className="font-['JetBrains_Mono'] text-[10px] text-[#006877] dark:text-[#00dbe9] uppercase tracking-widest mb-3">// THE SOLUTION</div>
          <p className="font-['Geist',sans-serif] text-[14px] text-[#3b494c] dark:text-[#b9cacb] leading-relaxed">{project.solution}</p>
        </div>

        {/* Impact */}
        <div className="md:col-span-2 bg-[#191c1d] dark:bg-[#0c0e12] border border-[#191c1d] dark:border-[#3b494b] p-6">
          <div className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest mb-3" style={{ color: project.accentDark }}>// IMPACT &amp; RESULTS</div>
          <p className="font-['Geist',sans-serif] text-[14px] text-white/80 dark:text-[#b9cacb] leading-relaxed">{project.impact}</p>
        </div>
      </div>

      {/* STACK */}
      <div className="mb-10">
        <h3 className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest text-[#6b7a7d] dark:text-[#849495] mb-4">// TECH STACK</h3>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="font-['JetBrains_Mono'] text-[11px] px-3 py-1.5 border border-[#e1e3e4] dark:border-[#3b494b] bg-white dark:bg-[#1a1c20] text-[#3b494c] dark:text-[#b9cacb] hover:border-[#006877] dark:hover:border-[#00dbe9] transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* DIVIDER */}
      <div className="flex items-center gap-4 my-10">
        <div className="h-px flex-grow bg-[#e1e3e4] dark:bg-[#3b494b]"></div>
        <span className="font-['JetBrains_Mono'] text-[11px] text-[#bac9cd] dark:text-[#3b494b] uppercase">END_OF_FILE</span>
        <div className="h-px flex-grow bg-[#e1e3e4] dark:bg-[#3b494b]"></div>
      </div>

      {/* FOOTER ACTIONS */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <Link to="/work" className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest text-[#6b7a7d] dark:text-[#849495] hover:text-[#006877] dark:hover:text-[#7df4ff] transition-colors group">
          <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
          All Projects
        </Link>
        <div className="flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#e1e3e4] dark:border-[#3b494b] bg-white dark:bg-[#1a1c20] text-[#191c1d] dark:text-[#e2e2e8] font-['JetBrains_Mono'] text-[11px] px-5 py-3 uppercase tracking-widest hover:border-[#006877] dark:hover:border-[#00dbe9] transition-all"
            >
              <span className="material-symbols-outlined text-[16px]">code</span>
              View Source
            </a>
          )}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#191c1d] dark:bg-[#00dbe9] text-white dark:text-[#002022] font-['JetBrains_Mono'] text-[11px] px-5 py-3 uppercase tracking-widest hover:opacity-80 active:scale-95 transition-all"
          >
            Discuss Project
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
