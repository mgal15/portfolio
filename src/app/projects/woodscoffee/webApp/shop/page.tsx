'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function WoodsCoffeeShop() {
    // Sample product dataset including categories and unique IDs
    const PRODUCTS_DATA = [
    { id: 'camo-hoodie', name: 'Woods Camo Hoodie', price: '$65.00', category: 'sweatshirts', icon: '👕' },
    { id: 'classic-tumbler', name: 'Insulated Tumbler', price: '$32.00', category: 'mugs-bottles', icon: '🥛' },
    { id: 'timber-cap', name: 'Woods Timber Hat', price: '$28.00', category: 'hats', icon: '🧢' },
    { id: 'egift-card', name: 'Digital Gift Card', price: '$25.00', category: 'gift-cards', icon: '💳' },
    { id: 'espresso-blend', name: 'Cascade Espresso Beans', price: '$18.00', category: 'coffee-beans', icon: '☕' },
    ];

    const CATEGORIES = [
    { name: 'All Products', slug: 'all', icon: '✨' },
    { name: 'Sweatshirts', slug: 'sweatshirts', icon: '👕' },
    { name: 'Mugs/Bottles', slug: 'mugs-bottles', icon: '🥛' },
    { name: 'Hats', slug: 'hats', icon: '🧢' },
    { name: 'Gift Cards/Misc', slug: 'gift-cards', icon: '💳' },
    { name: 'Coffee beans', slug: 'coffee-beans', icon: '☕' },
    ];

    const [selectedCategory, setSelectedCategory] = useState('all');

    // Filter items instantly in the browser
    const filteredProducts = selectedCategory === 'all'
        ? PRODUCTS_DATA
        : PRODUCTS_DATA.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2523] font-sans antialiased">
      
      {/* 1. TOP NAVIGATION BAR */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
          <Link href="/projects/woodscoffee/webApp" className="flex items-center gap-2 font-black tracking-tight text-slate-900">
            WOODS 🌲 COFFEE
          </Link>
          
          <div className="hidden md:flex items-center space-x-6 text-xs font-semibold text-slate-700">
            <Link href="/projects/woodscoffee/webApp/shop" className="text-[#5C473E] underline decoration-2 underline-offset-4">Shop</Link>
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
        </div>
      </nav>
      
      <header className="max-w-6xl mx-auto px-4 pt-10 pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Shop</h1>
      </header>

      {/* HORIZONTAL FILTER STRIP */}
      <section className="bg-[#3D2A25] py-6 border-y border-[#2A1D1A]">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {CATEGORIES.map((cat) => (
            <button 
              key={cat.slug} 
              onClick={() => setSelectedCategory(cat.slug)}
              className="flex flex-col items-center gap-3 text-white focus:outline-none group"
            >
              <div className={`w-24 h-20 sm:w-28 sm:h-22 md:w-32 md:h-24 rounded-lg overflow-hidden flex items-center justify-center text-3xl transition-all border shadow-md ${
                selectedCategory === cat.slug 
                  ? 'bg-[#BC9E8B] border-white scale-105' 
                  : 'bg-white/10 border-white/10 group-hover:bg-white/20'
              }`}>
                {cat.icon}
              </div>
              <span className={`text-xs font-semibold tracking-wider transition-colors ${
                selectedCategory === cat.slug ? 'text-white underline' : 'text-gray-300 group-hover:text-white'
              }`}>
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* PRODUCT GRID */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-[#E5E5E5] p-6 md:p-10 rounded-sm shadow-inner">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              /* Link point directly to the individual product's id page path */
              <Link 
                key={product.id} 
                href={`/projects/woodscoffee/webApp/shop/${product.id}`}
                className="bg-white rounded-sm overflow-hidden shadow-sm flex flex-col relative group border border-gray-200 hover:scale-[1.01] transition-transform"
              >
                <div className="aspect-square bg-slate-50 flex items-center justify-center min-h-[260px]">
                  <span className="text-4xl group-hover:scale-105 transition-transform duration-300">{product.icon}</span>
                </div>
                <div className="bg-[#BC9E8B] text-white p-4 flex flex-col justify-between min-h-[85px]">
                  <h3 className="text-sm font-bold tracking-tight">{product.name}</h3>
                  <div className="flex justify-end mt-2">
                    <span className="text-[11px] font-mono bg-[#3D2A25]/20 px-2 py-0.5 rounded">{product.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* 5. COHESIVE FOOTER CONTAINER */}
      <footer className="bg-[#BC9E8B] text-[#3D2A25] pt-16 pb-8 px-6 border-t border-[#AA8B79] mt-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-[#AA8B79]/40">
          
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xl font-black tracking-tight uppercase">WOODS COFFEE</h4>
            <p className="text-xs text-[#523E35] font-medium max-w-sm leading-relaxed">
              Our vision is to provide convenience and help increase your sales business.
            </p>
            <div className="flex space-x-3 pt-2 text-[#3D2A25]">
              {/* Inline SVG Social Icons for error-free compiling */}
              <a href="#" className="p-2 bg-white/40 rounded-full hover:bg-white/60 transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 12 22 12z" />
                </svg>
              </a>
              <a href="#" className="p-2 bg-white/40 rounded-full hover:bg-white/60 transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="p-2 bg-white/40 rounded-full hover:bg-white/60 transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#2A1D1A]">About</h5>
            <ul className="text-xs space-y-2 font-medium text-[#523E35]">
              <li><Link href="#" className="hover:underline">How it works</Link></li>
              <li><Link href="#" className="hover:underline">Featured</Link></li>
              <li><Link href="#" className="hover:underline">Partnership</Link></li>
              <li><Link href="#" className="hover:underline">Business Relation</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#2A1D1A]">Community</h5>
            <ul className="text-xs space-y-2 font-medium text-[#523E35]">
              <li><Link href="#" className="hover:underline">Events</Link></li>
              <li><Link href="#" className="hover:underline">Blog</Link></li>
              <li><Link href="#" className="hover:underline">Podcast</Link></li>
              <li><Link href="#" className="hover:underline">Invite a friend</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#2A1D1A]">Socials</h5>
            <ul className="text-xs space-y-2 font-medium text-[#523E35]">
              <li><Link href="#" className="hover:underline">Discord</Link></li>
              <li><Link href="#" className="hover:underline">Instagram</Link></li>
              <li><Link href="#" className="hover:underline">Twitter</Link></li>
              <li><Link href="#" className="hover:underline">Facebook</Link></li>
            </ul>
          </div>
        </div>

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