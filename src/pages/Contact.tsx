import { useState } from 'react';

export default function Contact() {
  const [btnState, setBtnState] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBtnState('sending');
    setTimeout(() => {
      setBtnState('sent');
      setTimeout(() => {
        setBtnState('idle');
        (e.target as HTMLFormElement).reset();
      }, 2000);
    }, 1500);
  };

  const btnText = btnState === 'sending' ? 'TRANSMITTING...' : btnState === 'sent' ? 'SIGNAL SENT ✓' : 'Initialize Transmission';
  const btnClass = btnState === 'sent' ? 'bg-[#0c6e00] dark:bg-[#2ae500] dark:text-[#002200]' : btnState === 'sending' ? 'opacity-60 cursor-not-allowed' : 'hover:bg-[#006877] dark:hover:bg-[#00dbe9] dark:hover:text-[#002022]';

  return (
    <div className="px-5 md:px-8 max-w-[1280px] mx-auto relative pt-8 pb-32 md:pb-16 min-h-[calc(100vh-140px)]">
      {/* Background grid decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-30 dark:opacity-10"
        style={{
          backgroundImage: 'linear-gradient(#e9ecef 1px, transparent 1px), linear-gradient(90deg, #e9ecef 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* HERO HEADING */}
        <div className="md:col-span-12 mb-6 pt-8">
          <span className="font-['JetBrains_Mono'] text-[11px] text-[#a90097] dark:text-[#fface8] uppercase tracking-widest block mb-2">
            Inquiries &amp; Partnerships
          </span>
          <h1 className="font-['Space_Grotesk'] font-bold text-[#191c1d] dark:text-[#e2e2e8] leading-none" style={{ fontSize: 'clamp(36px, 6vw, 72px)', letterSpacing: '-0.04em' }}>
            Ready to build the{' '}
            <span className="text-[#006877] dark:text-[#7df4ff] italic">next</span>{' '}
            digital frontier?
          </h1>
        </div>

        {/* FORM */}
        <div className="md:col-span-7">
          <div className="bg-white dark:bg-[#1a1c20] border border-[#e1e3e4] dark:border-[#3b494b] p-8 shadow-sm relative">
            {/* Neon top accent bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#00e0ff] dark:bg-[#00dbe9]"></div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5 group/inp">
                  <label className="font-['JetBrains_Mono'] text-[10px] text-[#6b7a7d] dark:text-[#849495] uppercase tracking-widest group-focus-within/inp:text-[#006877] dark:group-focus-within/inp:text-[#00dbe9] transition-colors">
                    Full Name
                  </label>
                  <input
                    className="w-full bg-[#f3f4f5] dark:bg-[#111318] border border-[#e1e3e4] dark:border-[#3b494b] focus:border-[#006877] dark:focus:border-[#00dbe9] focus:ring-0 outline-none transition-all font-['Geist',sans-serif] text-[14px] p-3 placeholder:text-[#bac9cd] dark:placeholder:text-[#3b494b] text-[#191c1d] dark:text-[#e2e2e8]"
                    placeholder="ALEX RIVERA"
                    type="text"
                  />
                </div>
                <div className="space-y-1.5 group/inp">
                  <label className="font-['JetBrains_Mono'] text-[10px] text-[#6b7a7d] dark:text-[#849495] uppercase tracking-widest group-focus-within/inp:text-[#006877] dark:group-focus-within/inp:text-[#00dbe9] transition-colors">
                    Email Address
                  </label>
                  <input
                    className="w-full bg-[#f3f4f5] dark:bg-[#111318] border border-[#e1e3e4] dark:border-[#3b494b] focus:border-[#006877] dark:focus:border-[#00dbe9] focus:ring-0 outline-none transition-all font-['Geist',sans-serif] text-[14px] p-3 placeholder:text-[#bac9cd] dark:placeholder:text-[#3b494b] text-[#191c1d] dark:text-[#e2e2e8]"
                    placeholder="ALEX@STUDIO.TECH"
                    type="email"
                  />
                </div>
              </div>

              <div className="space-y-1.5 group/inp">
                <label className="font-['JetBrains_Mono'] text-[10px] text-[#6b7a7d] dark:text-[#849495] uppercase tracking-widest group-focus-within/inp:text-[#006877] dark:group-focus-within/inp:text-[#00dbe9] transition-colors">
                  Subject
                </label>
                <select
                  className="w-full bg-[#f3f4f5] dark:bg-[#111318] border border-[#e1e3e4] dark:border-[#3b494b] focus:border-[#006877] dark:focus:border-[#00dbe9] focus:ring-0 outline-none transition-all font-['Geist',sans-serif] text-[14px] p-3 text-[#191c1d] dark:text-[#e2e2e8]"
                >
                  <option>Project Collaboration</option>
                  <option>Speaking Engagement</option>
                  <option>Consultancy</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-1.5 group/inp">
                <label className="font-['JetBrains_Mono'] text-[10px] text-[#6b7a7d] dark:text-[#849495] uppercase tracking-widest group-focus-within/inp:text-[#006877] dark:group-focus-within/inp:text-[#00dbe9] transition-colors">
                  Your Message
                </label>
                <textarea
                  className="w-full bg-[#f3f4f5] dark:bg-[#111318] border border-[#e1e3e4] dark:border-[#3b494b] focus:border-[#006877] dark:focus:border-[#00dbe9] focus:ring-0 outline-none transition-all font-['Geist',sans-serif] text-[14px] p-3 placeholder:text-[#bac9cd] dark:placeholder:text-[#3b494b] text-[#191c1d] dark:text-[#e2e2e8] resize-none"
                  placeholder="DESCRIBE THE VISION..."
                  rows={6}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={btnState !== 'idle'}
                className={`group relative w-full bg-[#191c1d] dark:bg-[#1e2024] py-4 text-white dark:text-[#e2e2e8] font-['JetBrains_Mono'] text-[12px] uppercase tracking-widest transition-all active:scale-[0.98] border border-transparent dark:border-[#3b494b] ${btnClass}`}
              >
                <span className="relative z-10">{btnText}</span>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00e0ff] dark:bg-[#00dbe9] group-hover:bg-[#00f0ff] dark:group-hover:bg-[#7df4ff] transition-colors"></div>
              </button>
            </form>
          </div>
        </div>

        {/* SIDE PANEL */}
        <div className="md:col-span-5 space-y-4">
          {/* Connect Card */}
          <div className="bg-[#f3f4f5] dark:bg-[#1e2024] p-7 border border-[#e1e3e4] dark:border-[#3b494b] relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-5 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
              <span className="material-symbols-outlined text-[64px] text-[#006877] dark:text-[#00dbe9]" style={{ fontVariationSettings: "'FILL' 1" }}>alternate_email</span>
            </div>
            <h3 className="font-['Space_Grotesk'] text-[32px] font-semibold text-[#191c1d] dark:text-[#e2e2e8] mb-5" style={{ letterSpacing: '-0.02em' }}>Connect</h3>
            <div className="space-y-3 relative z-10">
              {[
                { icon: 'terminal', label: 'Source Code', value: 'GitHub / creative-tech', accent: 'border-[#006877] dark:border-[#00dbe9]', iconColor: 'text-[#006877] dark:text-[#00dbe9]' },
                { icon: 'share', label: 'Professional Network', value: 'LinkedIn / creative-tech-lead', accent: 'border-[#a90097] dark:border-[#ff24e4]', iconColor: 'text-[#a90097] dark:text-[#fface8]' },
              ].map(({ icon, label, value, accent, iconColor }) => (
                <a key={icon} className={`flex items-center gap-4 p-4 bg-white dark:bg-[#111318] border border-[#e1e3e4] dark:border-[#3b494b] hover:${accent} transition-colors group/link`} href="#">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#edeeef] dark:bg-[#1e2024] group-hover/link:bg-[#00e0ff]/20 dark:group-hover/link:bg-[#00dbe9]/10 transition-colors flex-shrink-0">
                    <span className={`material-symbols-outlined ${iconColor}`}>{icon}</span>
                  </div>
                  <div>
                    <p className="font-['JetBrains_Mono'] text-[10px] text-[#6b7a7d] dark:text-[#849495] uppercase tracking-widest">{label}</p>
                    <p className="font-['Space_Grotesk'] text-[15px] font-semibold text-[#191c1d] dark:text-[#e2e2e8]">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Location Card */}
          <div className="border border-[#e1e3e4] dark:border-[#3b494b] bg-white dark:bg-[#1a1c20] p-5 relative">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-[#006877] dark:text-[#00dbe9] text-[20px]">location_on</span>
              <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-[#6b7a7d] dark:text-[#849495]">Global Hub</span>
            </div>
            <div className="h-44 w-full bg-[#edeeef] dark:bg-[#282a2e] overflow-hidden relative group/map">
              <img
                className="w-full h-full object-cover filter grayscale group-hover/map:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUgyEtzdvm403h8UI0x0U0yKFmN2Gzsrx-bj9i7wXDAYtLfcX-BK090htPWhtDtCnROvpH6JryGE5a9DBSUG0YfhKcX4Y_pHO-K_m3U8kJcx8LK5ui3Qqc7DADiaXd7ngIOsW234ltee1jRLh-cUBflL0oMmO-JjKY6YdCJDLjyde2FZxpFu2U5nRIaZp4DI1NqI8yhyFZSjnJzqB_UePvRs8vdFrSHzUrQgwqG5dWWMbS64Ql0qxj7PDzFkH5eQw6njsqTz14yF5B"
                alt="Map Location"
              />
              <div className="absolute inset-0 bg-[#006877]/10 dark:bg-[#00dbe9]/10 mix-blend-multiply pointer-events-none"></div>
            </div>
            <p className="mt-4 font-['Geist',sans-serif] text-[14px] font-medium text-[#191c1d] dark:text-[#e2e2e8]">
              Creative Labs, 404 Innovation Way<br />Digital District, CA 90210
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
