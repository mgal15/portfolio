import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-900 font-sans antialiased selection:bg-pink-200">
      
      {/* 1. PLAYFUL FLOATING NAVIGATION */}
      <nav className="sticky top-4 z-50 max-w-7/8 mx-auto px-4">
        <div className="bg-white/90 backdrop-blur-md border-2 border-slate-900 rounded-2xl px-6 py-3 flex justify-between items-center shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
          <span className="text-sm font-black tracking-wider text-pink-500 uppercase">Hi!</span>
          <div className="space-x-4 md:space-x-6 text-xs font-bold tracking-wide uppercase">
            <a href="#about" className="text-slate-700 hover:text-pink-500 transition-colors">About</a>
            <a href="#projects" className="text-slate-700 hover:text-emerald-500 transition-colors">Projects</a>
            <a href="#skills" className="text-slate-700 hover:text-violet-500 transition-colors">Skills</a>
          </div>
        </div>
      </nav>

      <main className="max-w-3/4 mx-auto px-6 py-12 md:py-20 space-y-20">
        
        {/* 2. HERO / WELCOME SECTION */}
        <section id="about" className="space-y-6 scroll-mt-28">
          <div className="space-y-3">
            {/* Fun decorative badge */}
            <span className="inline-block bg-pink-100 text-pink-600 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider transform -rotate-1">
              Welcome to my space
            </span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-none">
              Maya Galley
            </h1>
            <p className="text-lg font-bold text-emerald-600 tracking-wide">
              Software Engineer & Full-Stack Developer
            </p>
          </div>
          
          <p className="text-slate-700 leading-relaxed font-medium text-base">
            I build clean, accessible, and user-centric web and mobile applications. 
            I thrive on turning complex logic into interactive, dynamic, and joyful digital experiences!
          </p>

          {/* Bright, high-contrast action buttons */}
          <div className="flex flex-wrap gap-3 text-sm font-bold pt-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-violet-500 text-white border-2 border-slate-900 px-4 py-2 rounded-xl shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] transition-all">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-pink-400 text-white border-2 border-slate-900 px-4 py-2 rounded-xl shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] transition-all">
              LinkedIn
            </a>
            <a href="/resume.pdf" download className="bg-amber-300 text-slate-900 border-2 border-slate-900 px-4 py-2 rounded-xl shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] transition-all">
              Resume.pdf
            </a>
          </div>
        </section>

        {/* 3. COLORFUL PROJECTS SECTION */}
        <section id="projects" className="space-y-8 scroll-mt-28">
          <div className="border-b-4 border-slate-900 pb-2 flex items-center justify-between">
            <h2 className="text-xl font-black tracking-wide text-slate-900 uppercase">
              Things I've Built 
            </h2>
          </div>

          <div className="space-y-8">
            {/* Project 1 - Emerald Palette */}
            <div className="bg-emerald-50 border-2 border-slate-900 rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] space-y-4">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <h3 className="font-black text-xl text-slate-900 hover:text-emerald-700 transition-colors">
                  <a href="#" className="inline-flex items-center gap-2">
                    Plus 1 Social Club
                  </a>
                </h3>
                <span className="text-xs font-mono font-bold bg-white border border-slate-900 px-2 py-0.5 rounded-md text-slate-700">2026</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                A community based, full-stack application. Designed to connect people with similar interests and facilitate meaningful interactions through posted events. Utilizing modern web technologies to create a seamless user experience.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-bold">
                <span className="bg-white border border-slate-900 px-2.5 py-1 rounded-lg text-emerald-700">React Native</span>
                <span className="bg-white border border-slate-900 px-2.5 py-1 rounded-lg text-emerald-700">Firebase</span>
                <span className="bg-white border border-slate-900 px-2.5 py-1 rounded-lg text-emerald-700">IOS</span>
              </div>
              <a href="https://www.youtube.com/watch?v=lDkp4lsNCpI" className="text-xs font-mono font-bold py-0.5 rounded-md text-slate-700 hover:text-pink-700">Watch the Demo Here</a>
            </div>

            {/* Project 2 - Violet Palette */}
            <div className="bg-violet-50 border-2 border-slate-900 rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] space-y-4">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <h3 className="font-black text-xl text-slate-900 hover:text-violet-700 transition-colors">
                  <a href="#" className="inline-flex items-center gap-2">
                    Woods Coffee Website Reimagined: A Case Study
                  </a>
                </h3>
                <span className="text-xs font-mono font-bold bg-white border border-slate-900 px-2 py-0.5 rounded-md text-slate-700">2026</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                Highlight another stellar project, like a rich mobile app design or specialized data mapping tool. Emphasize full-stack capabilities, database architectures, and API integrations.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-bold">
                <span className="bg-white border border-slate-900 px-2.5 py-1 rounded-lg text-violet-700">TypeScript</span>
                <span className="bg-white border border-slate-900 px-2.5 py-1 rounded-lg text-violet-700">Node.js</span>
                <span className="bg-white border border-slate-900 px-2.5 py-1 rounded-lg text-violet-700">PostgreSQL</span>
              </div>
            </div>
          </div>
        </section>
        {/* 4. SKILLS SECTION */}
        <section id="skills" className="space-y-6 scroll-mt-28">
          <div className="border-b-4 border-slate-900 pb-2">
            <h2 className="text-xl font-black tracking-wide text-slate-900 uppercase">
              My Toolkit
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-bold">
            <div className="bg-pink-50 border-2 border-slate-900 p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] space-y-1">
              <span className="text-pink-600 block text-xs uppercase tracking-wider font-extrabold">Languages</span>
              <p className="text-slate-800">JavaScript, TypeScript, Python, HTML/CSS</p>
            </div>
            <div className="bg-amber-50 border-2 border-slate-900 p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] space-y-1">
              <span className="text-amber-600 block text-xs uppercase tracking-wider font-extrabold">Frameworks & Tools</span>
              <p className="text-slate-800">React, Next.js, Node.js, Tailwind, Git</p>
            </div>
          </div>
        </section>

        {/* 5. FOOTER */}
        <footer className="text-xs font-mono font-bold text-slate-500 pt-8 border-t-2 border-dashed border-slate-300 text-center">
          <p>Made with 💖 and Next.js.</p>
        </footer>

      </main>
    </div>
  );
}
