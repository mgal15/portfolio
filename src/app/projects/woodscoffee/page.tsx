import React from 'react';

export default function WoodsCoffeeCaseStudy() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased selection:bg-neutral-100">
      
      {/* CASE STUDY HEADER */}
      <header className="border-b border-neutral-100 px-6 py-16 md:py-24 bg-neutral-50/50">
        <div className="max-w-3xl mx-auto space-y-4">
          <a href="/portfolio" className="text-xs font-bold tracking-widest text-neutral-400 uppercase hover:text-neutral-950 transition-colors">&larr; Back to Portfolio</a>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-neutral-950">
            Woods Coffee: UX Redesign
          </h1>
          <p className="text-lg text-neutral-600 font-light max-w-2xl">
            Optimizing mobile information architecture and overall user experience for a Pacific Northwest favorite.
          </p>
          
          {/* Metadata Block */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 text-xs font-mono text-neutral-500 border-t border-neutral-200/60">
            <div>
              <span className="block font-bold text-neutral-950 uppercase tracking-wider mb-1">Role</span>
              UX/UI Research & Front-End
            </div>
            <div>
              <span className="block font-bold text-neutral-950 uppercase tracking-wider mb-1">Timeline</span>
              4 Weeks (Concept)
            </div>
            <div>
              <span className="block font-bold text-neutral-950 uppercase tracking-wider mb-1">Tools</span>
              Figma, Next.js, Tailwind
            </div>
            <div>
              <span className="block font-bold text-neutral-950 uppercase tracking-wider mb-1">Live Deliverable</span>
              <a href="#" className="text-neutral-950 underline underline-offset-2">Interactive Demo</a>
            </div>
          </div>
        </div>
      </header>

      {/* CASE STUDY CONTENT */}
      <main className="max-w-3xl mx-auto px-6 py-16 space-y-20">
        
        {/* SECTION 1: THE CHALLENGE */}
        <section className="space-y-4">
          <h2 className="text-xs font-bold tracking-widest text-neutral-400 uppercase">01 / The Challenge</h2>
          <h3 className="text-xl font-bold text-neutral-950">Uncovering Friction on the Go</h3>
          <p className="text-neutral-700 leading-relaxed font-normal">
            Through quick guerrilla usability testing with local users, I discovered that while customers love the brand, they experience notable friction when using the mobile site on the move. The primary pain points centered around parsing menu items quickly and filtering locations based on specific amenities. As an employee of the company, I was able to gather valuable insights and create a more user-friendly experience. I wanted to redesign the website so customers of all backgrounds and technical abilities could easily navigate and enjoy the brand.
          </p>
          <section className="text-neutral-700 leading-relaxed font-normal">
            Here are the key points I wanted to address:
            <ul className="list-disc list-inside text-neutral-700 leading-relaxed font-normal">
              <li>The landing page was busy and overwhelming</li>
              <li>Modifying a drink and getting information about what is in the drink</li>
              <li>Keeping their company purpose a focus point throughout the user journey</li>
            </ul>
          </section>
          <section>
            <p className="text-neutral-700 leading-relaxed font-normal">See the following documents for more information: </p>
            <a href="#" className="text-pink-500 hover:text-pink-700">Usability Testing</a>
          </section>
        </section>

        {/* SECTION 2: RESEARCH & WIREFRAMES */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xs font-bold tracking-widest text-neutral-400 uppercase">02 / Ideation & Wireframing</h2>
            <h3 className="text-xl font-bold text-neutral-950">Mapping the New Solution</h3>
          </div>
          <p className="text-neutral-700 leading-relaxed">
            I mapped out a flattened information architecture that brought key interactions directly to the user's thumb-zone. Below are the early structural concepts and low-fidelity iterations sketched in Figma.
          </p>
          
          {/* PLACEHOLDER FOR FIGMA WIREFRAME IMAGE */}
          <div className="bg-neutral-50 border-2 border-dashed border-neutral-200 rounded-xl p-8 flex flex-col items-center justify-center text-center space-y-2 aspect-[16/9]">
            <span className="text-2xl">📐</span>
            <span className="text-sm font-semibold text-neutral-900">Figma Low-Fidelity Wireframes Workspace</span>
            <span className="text-xs text-neutral-400 font-mono max-w-sm">Replace this div with your exported Figma frame image once available</span>
          </div>
        </section>

        {/* SECTION 3: BEFORE vs AFTER COMPARISON */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-xs font-bold tracking-widest text-neutral-400 uppercase">03 / The Redesign</h2>
            <h3 className="text-xl font-bold text-neutral-950">Visual Hierarchy Transformations</h3>
          </div>
          
          {/* Two-Column Responsive Grid for Before/After */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* The Before Column */}
            <div className="space-y-3">
              <span className="inline-block bg-neutral-100 text-neutral-700 text-xs font-bold px-2.5 py-1 rounded-md uppercase font-mono">
                Original Interface
              </span>
              <div className="bg-neutral-100 border border-neutral-200 rounded-xl flex items-center justify-center aspect-[3/4] text-neutral-400 text-sm font-mono">
                [ Screenshot of Original Website ]
              </div>
              <p className="text-xs text-neutral-500 leading-relaxed">
                <strong>Friction:</strong> Core features are buried behind nested navigation toggles, making quick discovery difficult on mobile displays.
              </p>
            </div>

            {/* The After Column */}
            <div className="space-y-3">
              <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-md uppercase font-mono">
                Proposed Redesign
              </span>
              <div className="bg-neutral-50 border-2 border-neutral-900 rounded-xl flex items-center justify-center aspect-[3/4] text-neutral-400 text-sm font-mono shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                [ Screenshot of Figma High-Fi Mockup ]
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                <strong>Solution:</strong> Surfaced critical utility toggles immediately to the viewport header and increased interactive target areas for seamless tap gestures.
              </p>
              <a href="/webApp" className="text-emerald-500 hover:text-emerald-600 font-bold text-sm">
                View the redesigned web app
              </a>
            </div>

          </div>
        </section>

        {/* SECTION 4: LESSONS LEARNED */}
        <section className="space-y-4">
          <h2 className="text-xs font-bold tracking-widest text-neutral-400 uppercase">04 / Engineering Takeaways</h2>
          <h3 className="text-xl font-bold text-neutral-950">Reflections & Architecture Decisions</h3>
          <p className="text-neutral-700 leading-relaxed">
            Translating visual layouts from a Figma workspace directly into functional Next.js components taught me a great deal about setting up clean, conditional client-side state logic. If I were to scale this further, my next move would be integrating real map APIs to dynamically calculate client geo-proximity.
          </p>
        </section>

      </main>

      {/* COMPACT CASE STUDY FOOTER */}
      <footer className="max-w-3xl mx-auto px-6 py-12 border-t border-neutral-100 text-center text-xs text-neutral-400 font-mono">
        <p>Documented with care &bull; Redesign Case Study Template</p>
      </footer>
      
    </div>
  );
}