'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function WoodsCoffeeRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // State to track if mobile toggle menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      
      {/* 🌲 GLOBAL NAVBAR BLOCK */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
          
          <Link href="/projects/woodscoffee/webApp" className="flex items-center gap-2 font-black tracking-tight text-slate-900">
            WOODS 🌲 COFFEE
          </Link>
          
          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-6 text-xs font-semibold text-slate-700">
            <Link href="/projects/woodscoffee/webApp/shop" className="hover:text-[#5C473E] transition-colors">Shop</Link>
            <Link href="/projects/woodscoffee/webApp/menu" className="hover:text-[#5C473E] transition-colors">Menu</Link>
            <Link href="/projects/woodscoffee/webApp/locations" className="hover:text-[#5C473E] transition-colors">Find a Location</Link>
            <Link href="/projects/woodscoffee/webApp/about" className="hover:text-[#5C473E] transition-colors">About Us</Link>
            <Link href="/projects/woodscoffee/webApp/contact" className="hover:text-[#5C473E] transition-colors">Contact</Link>
            <span className="text-gray-300">|</span>
            <Link href="/register" className="hover:text-[#5C473E] transition-colors">Register</Link>
            <button className="bg-[#3D2A25] text-white px-4 py-1.5 rounded text-xs font-bold hover:bg-[#2A1D1A] transition-colors">
              Login
            </button>
          </div>

          {/* MOBILE HAMBURGER TOGGLE BUTTON */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              type="button"
              className="text-slate-700 hover:text-slate-900 focus:outline-none p-2"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* MOBILE EXPANDED LINKS DROPDOWN */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-3 shadow-md flex flex-col text-sm font-semibold text-slate-700">
            <Link href="/projects/woodscoffee/webApp/shop" onClick={() => setIsMenuOpen(false)} className="hover:bg-slate-50 px-3 py-2 rounded">Shop</Link>
            <Link href="/projects/woodscoffee/webApp/menu" onClick={() => setIsMenuOpen(false)} className="hover:bg-slate-50 px-3 py-2 rounded">Menu</Link>
            <Link href="/projects/woodscoffee/webApp/locations" onClick={() => setIsMenuOpen(false)} className="hover:bg-slate-50 px-3 py-2 rounded">Find a Location</Link>
            <Link href="/projects/woodscoffee/webApp/about" onClick={() => setIsMenuOpen(false)} className="hover:bg-slate-50 px-3 py-2 rounded">About Us</Link>
            <Link href="/projects/woodscoffee/webApp/contact" onClick={() => setIsMenuOpen(false)} className="hover:bg-slate-50 px-3 py-2 rounded">Contact</Link>
            <div className="border-t border-gray-200 my-2 pt-2"></div>
            <Link href="/register" onClick={() => setIsMenuOpen(false)} className="hover:bg-slate-50 px-3 py-2 rounded">Register</Link>
            <button className="w-full bg-[#3D2A25] text-white py-2.5 rounded text-xs font-bold hover:bg-[#2A1D1A] transition-colors mt-2">Login</button>
          </div>
        )}
      </nav>

      {/* ACTIVE PAGE CONTENT INJECTION SITE */}
      <main className="flex-grow">
        {children}
      </main>

          {/* 6. REVISED EARTH-TONED FOOTER (Updated color from image_da30d9.jpg) */}
      <footer className="bg-[#BC9E8B] text-[#3D2A25] pt-16 pb-8 px-6 border-t border-[#AA8B79]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-[#AA8B79]/40">
          
          {/* Footer Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xl font-black tracking-tight uppercase">WOODS COFFEE</h4>
            <p className="text-xs text-[#523E35] font-medium max-w-sm leading-relaxed">
              Our vision is to provide convenience and help increase your sales business.
            </p>
            <div className="flex space-x-3 pt-2 text-[#3D2A25]">
            {/* Facebook SVG */}
            <a href="#" className="p-2 bg-white/40 rounded-full hover:bg-white/60 transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 12 22 12z" />
                </svg>
            </a>

            {/* Twitter / X SVG */}
            <a href="#" className="p-2 bg-white/40 rounded-full hover:bg-white/60 transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            </a>

            {/* Instagram SVG */}
            <a href="#" className="p-2 bg-white/40 rounded-full hover:bg-white/60 transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
            </a>
            </div>
          </div>

          {/* Footer Links Column 1 */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#2A1D1A]">About</h5>
            <ul className="text-xs space-y-2 font-medium text-[#523E35]">
              <li><a href="#" className="hover:underline">How it works</a></li>
              <li><a href="#" className="hover:underline">Featured</a></li>
              <li><a href="#" className="hover:underline">Partnership</a></li>
              <li><a href="#" className="hover:underline">Business Relation</a></li>
            </ul>
          </div>

          {/* Footer Links Column 2 */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#2A1D1A]">Community</h5>
            <ul className="text-xs space-y-2 font-medium text-[#523E35]">
              <li><a href="#" className="hover:underline">Events</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Podcast</a></li>
              <li><a href="#" className="hover:underline">Invite a friend</a></li>
            </ul>
          </div>

          {/* Footer Links Column 3 */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#2A1D1A]">Socials</h5>
            <ul className="text-xs space-y-2 font-medium text-[#523E35]">
              <li><a href="#" className="hover:underline">Discord</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Facebook</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Utility Metadata */}
        <div className="max-w-6xl mx-auto pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] font-medium text-[#523E35] gap-4">
          <p>©2022 Company Name. All rights reserved</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:underline">Privacy & Policy</a>
            <a href="#" className="hover:underline">Terms & Condition</a>
          </div>
        </div>
      </footer>
    </div>
  );
}