import React from 'react';

export default function Home() {
  return (
    // Background uses a soft, warm cream-grid aesthetic inspired by image_d940f5.jpg and image_d943bf.jpg
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C2523] font-serif antialiased selection:bg-[#F3C1B7] h-full w-full bg-[radial-gradient(#E8E2D5_1px,transparent_1px)] [background-size:16px_16px] p-4 md:p-8 cursor-[url(images/windows-98-pointer.svg),pointer]">
      
      {/* 1. RETRO WINDOW COMPONENT: HEADER / NAV */}
      <nav className="max-w-4xl mx-auto mb-12 border-2 border-[#2C2523] rounded-xl bg-white shadow-[4px_4px_0px_0px_#2C2523] overflow-hidden">
        {/* Window Top Bar (image_d940f5.jpg style) */}
        <div className="bg-[#EAA194] border-b-2 border-[#2C2523] px-4 py-2 flex justify-between items-center">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full border border-[#2C2523] bg-[#E76F51]"></div>
            <div className="w-3 h-3 rounded-full border border-[#2C2523] bg-[#F4A261]"></div>
            <div className="w-3 h-3 rounded-full border border-[#2C2523] bg-[#2A9D8F]"></div>
          </div>
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#2C2523]">maya_explorer.exe</span>
          <div className="w-10"></div>
        </div>
        {/* Navigation Links */}
        <div className="px-6 py-4 flex justify-between items-center flex-wrap gap-4 bg-[#FDFBF7]">
          <span className="text-lg font-black tracking-tighter uppercase text-[#E76F51]">M // G</span>
          <div className="space-x-6 text-xs font-mono font-bold uppercase tracking-wide">
            <a href="#about" className="hover:underline text-[#2C2523]">About</a>
            <a href="#projects" className="hover:underline text-[#2A9D8F]">Projects</a>
            <a href="#skills" className="hover:underline text-[#E76F51]">Toolkit</a>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto space-y-12">
        
        {/* 2. HERO / ABOUT WINDOW */}
        <section id="about" className="border-2 border-[#2C2523] rounded-xl bg-white shadow-[6px_6px_0px_0px_#2C2523] overflow-hidden grid grid-cols-1 md:grid-cols-5">
          {/* Left Block - Text Content */}
          <div className="p-8 md:col-span-3 space-y-6 flex flex-col justify-center">
            <div className="space-y-2">
              <span className="inline-block bg-[#F4E6D6] text-[#C87A53] text-xs font-mono font-bold px-2.5 py-1 rounded border border-[#2C2523]">
                SYSTEM STATUS: ONLINE
              </span>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#2C2523]">
                Maya Galley
              </h1>
              <p className="text-base font-mono font-bold text-[#2A9D8F]">
                &gt; Software Engineer & Full-Stack Developer
              </p>
            </div>
            
            <p className="text-[#4A3E3D] leading-relaxed text-sm font-medium">
              I build clean, accessible, and user-centric web and mobile applications. 
              I thrive on turning complex logic into interactive, dynamic, and joyful digital experiences!
            </p>

            <div className="flex flex-wrap gap-3 text-xs font-mono font-bold pt-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-[#2A9D8F] text-white border-2 border-[#2C2523] px-4 py-2 rounded-lg shadow-[3px_3px_0px_0px_#2C2523] hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_#2C2523] transition-all">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-[#EAA194] text-[#2C2523] border-2 border-[#2C2523] px-4 py-2 rounded-lg shadow-[3px_3px_0px_0px_#2C2523] hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_#2C2523] transition-all">
                LinkedIn
              </a>
              <a href="/resume.pdf" download className="bg-[#E9C46A] text-[#2C2523] border-2 border-[#2C2523] px-4 py-2 rounded-lg shadow-[3px_3px_0px_0px_#2C2523] hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_#2C2523] transition-all">
                Resume.pdf
              </a>
            </div>
          </div>

          {/* Right Block - Color Block Graphic (inspired by the layout structure of image_d940a0.jpg) */}
          <div className="bg-[#F4E6D6] md:col-span-2 border-t-2 md:border-t-0 md:border-l-2 border-[#2C2523] min-h-[200px] bg-cover bg-center bg-[url('images/group.png')] relative">
            <div className="absolute inset-0 bg-[#E76F51]/10 mix-blend-multiply"></div>
          </div>
        </section>

        {/* 3. ASYMMETRICAL COLOR-BLOCKED PROJECTS (image_d940a0.jpg & image_d943bf.jpg Style) */}
        <section id="projects" className="space-y-6">
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-black tracking-wider uppercase text-[#2C2523]">Works_In_Directory</h2>
            <div className="h-[2px] bg-[#2C2523] flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Project 1: Sage / Emerald Theme */}
            <div className="bg-[#E8F1EC] border-2 border-[#2C2523] rounded-xl overflow-hidden shadow-[5px_5px_0px_0px_#2C2523] flex flex-col justify-between">
              <div className="bg-[#2A9D8F] text-white px-4 py-1.5 border-b-2 border-[#2C2523] font-mono text-xs flex justify-between">
                <span>plus1_social.app</span>
                <span>✖</span>
              </div>
              <div className="p-6 space-y-4 flex-grow">
                <h3 className="font-black text-xl text-[#2C2523]">Plus 1 Social Club</h3>
                <p className="text-xs text-[#4A3E3D] leading-relaxed font-medium">
                  A community-based full-stack application. Designed alongside groupmates to connect people with similar interests through posted events. Developed with client insights for seamless discovery.
                </p>
                <div className="flex flex-wrap gap-1.5 text-[10px] font-mono font-bold">
                  <span className="bg-white border border-[#2C2523] px-2 py-0.5 rounded text-[#2A9D8F]">React Native</span>
                  <span className="bg-white border border-[#2C2523] px-2 py-0.5 rounded text-[#2A9D8F]">Firebase</span>
                </div>
              </div>
              <div className="p-4 bg-white/60 border-t border-[#2C2523] text-center">
                <a href="https://www.youtube.com/watch?v=lDkp4lsNCpI" target="_blank" rel="noopener noreferrer" className="text-xs font-mono font-bold text-[#2A9D8F] hover:underline">
                  Run Demo Video
                </a>
              </div>
            </div>

            {/* Project 2: Terracotta / Pink Theme */}
            <div className="bg-[#FBF2EF] border-2 border-[#2C2523] rounded-xl overflow-hidden shadow-[5px_5px_0px_0px_#2C2523] flex flex-col justify-between">
              <div className="bg-[#E76F51] text-white px-4 py-1.5 border-b-2 border-[#2C2523] font-mono text-xs flex justify-between">
                <span>woods_redesign.cfg</span>
                <span>✖</span>
              </div>
              <div className="p-6 space-y-4 flex-grow">
                <h3 className="font-black text-xl text-[#2C2523]">Woods Coffee Website Reimagined</h3>
                <p className="text-xs text-[#4A3E3D] leading-relaxed font-medium">
                  A comprehensive UX concept case study evaluating layout heuristics. Built around intensive user testing scenarios to create a fluid digital ordering architecture.
                </p>
                <div className="flex flex-wrap gap-1.5 text-[10px] font-mono font-bold">
                  <span className="bg-white border border-[#2C2523] px-2 py-0.5 rounded text-[#E76F51]">TypeScript</span>
                  <span className="bg-white border border-[#2C2523] px-2 py-0.5 rounded text-[#E76F51]">Tailwind</span>
                </div>
              </div>
              <div className="p-4 bg-white/60 border-t border-[#2C2523] text-center">
                <a href="/portfolio/projects/woodscoffee" className="text-xs font-mono font-bold text-[#E76F51] hover:underline">
                  Open Case Study
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* 4. SKILLS / WINDOW MATRIX */}
        <section id="skills" className="border-2 border-[#2C2523] rounded-xl bg-white shadow-[4px_4px_0px_0px_#2C2523] overflow-hidden">
          <div className="bg-[#E9C46A] border-b-2 border-[#2C2523] px-4 py-1.5 text-xs font-mono font-bold uppercase text-[#2C2523]">
            core_dependencies.log
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#FDFBF7]">
            <div className="space-y-1">
              <span className="text-[#C87A53] font-mono text-xs font-bold uppercase">&gt; Languages</span>
              <p className="text-sm font-medium text-[#2C2523]">JavaScript, TypeScript, Python, HTML/CSS</p>
            </div>
            <div className="space-y-1">
              <span className="text-[#2A9D8F] font-mono text-xs font-bold uppercase">&gt; Frameworks & Tools</span>
              <p className="text-sm font-medium text-[#2C2523]">React, Next.js, Node.js, Tailwind, Git</p>
            </div>
          </div>
        </section>

        {/* 5. FOOTER */}
        <footer className="text-center text-xs font-mono font-bold text-[#A69994] pt-8 border-t border-dashed border-[#E8E2D5]">
          <p>System Build v24.18.0 - Maya Galley</p>
        </footer>

      </main>
    </div>
  );
}