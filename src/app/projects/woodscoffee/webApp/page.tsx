
import React from 'react';
//import { OpenInNew } from 'lucide-react';
import Link from 'next/link';

export default function WoodsCoffeeHomepage() {
  return (
    <div className="min-h-screen bg-white text-[#2C2523] font-sans antialiased">
      
      {/* 1. TOP NAVIGATION BAR */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-black tracking-tight text-slate-900">WOODS 🌲 COFFEE</span>
          </div>
          
          {/* 2. Swapped <a> tags for <Link href="..."> components */}
          <div className="hidden md:flex items-center space-x-6 text-xs font-semibold text-slate-700">
            <Link href="/projects/woodscoffee/webApp/shop" className="hover:text-[#5C473E] transition-colors">Shop</Link>
            <Link href="/projects/woodscoffee/webApp/menu" className="hover:text-[#5C473E] transition-colors">Menu</Link>
            <Link href="/projects/woodscoffee/webApp/locations" className="hover:text-[#5C473E] transition-colors">Find a Location</Link>
            <Link href="/projects/woodscoffee/webApp/about" className="hover:text-[#5C473E] transition-colors">About Us</Link>
            <Link href="/projects/woodscoffee/webApp/contact" className="hover:text-[#5C473E] transition-colors">Contact</Link>
            
            <span className="text-gray-300">|</span>
            
            <Link href="/register" className="hover:text-[#5C473E] transition-colors">Register</Link>
            
            <Link href="/login">
              <button className="bg-[#3D2A25] text-white px-4 py-1.5 rounded text-xs font-bold hover:bg-[#2A1D1A] transition-colors">
                Login
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* 2. SPLIT HERO SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-gray-100">
        {/* Hero Left Panel */}
        <div className="bg-[#FAF7F2] p-8 md:p-16 flex flex-col justify-between space-y-12">
          <div className="border border-gray-300 bg-white p-8 rounded-sm max-w-lg space-y-6 shadow-sm mt-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Walk into the Woods and discover more
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-gray-100">
              <span className="text-xs font-medium text-gray-500">Check out the new summer menu</span>
              <button className="bg-[#3D2A25] text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-[#2A1D1A] transition-all self-start sm:self-auto">
                Order ahead here
              </button>
            </div>
          </div>

            {/* Replace the bottom area of your left hero panel with this
            <div className="w-full max-w-lg mt-auto">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400 block mb-3">
                Explore More:
            </span>
            <div className="grid grid-cols-3 border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm">
                <button className="py-4 text-xs font-bold border-r border-gray-200 text-[#3D2A25] bg-[#FAF7F2] hover:bg-[#FAF7F2]/40 transition-colors flex flex-col items-center gap-1">
                <span className="text-base"></span> Merch
                </button>
                <button className="py-4 text-xs font-bold border-r border-gray-200 text-[#3D2A25] hover:bg-[#FAF7F2]/60 transition-colors flex flex-col items-center gap-1">
                <span className="text-base"></span> Coffee
                </button>
                <button className="py-4 text-xs font-bold text-[#3D2A25] hover:bg-[#FAF7F2]/60 transition-colors flex flex-col items-center gap-1">
                <span className="text-base"></span> Gift Cards
                </button>
            </div>
            </div> */}
        </div>

        {/* Hero Right Panel (Drinks Image Placeholder) */}
        <div className="bg-[#D9E6F2] min-h-[400px] lg:min-h-[550px] bg-cover bg-center relative bg-[url('/images/group.png')]">
          {/* Fallback presentation if asset isn't loaded */}
          <div className="absolute inset-0 flex items-center justify-center bg-sky-100/40 backdrop-blur-[1px]">
            <span className="text-xs font-mono text-slate-500 bg-white/80 px-3 py-1 rounded-full">[ Summer Drinks Showcase Asset ]</span>
          </div>
        </div>
      </section>

      {/* 3. NEW VALUE PROPOSITION SECTION (Added in image_da30d9.jpg) */}
      <section className="py-16 px-4 bg-white max-w-6xl mx-auto text-center space-y-10">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
          Here at Woods we value where our stuff comes from
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="bg-[#BC9E8B] text-white p-8 rounded-3xl flex items-center justify-center min-h-[110px] shadow-sm hover:scale-[1.01] transition-transform">
            <span className="text-lg font-bold tracking-tight">Fresh Food Daily</span>
          </div>
          <div className="bg-[#BC9E8B] text-white p-8 rounded-3xl flex items-center justify-center min-h-[110px] shadow-sm hover:scale-[1.01] transition-transform">
            <span className="text-lg font-bold tracking-tight">Personal Coffee Roasting</span>
          </div>
          <div className="bg-[#BC9E8B] text-white p-8 rounded-3xl flex items-center justify-center min-h-[110px] shadow-sm hover:scale-[1.01] transition-transform">
            <span className="text-lg font-bold tracking-tight">Locally Sourced Ingredients</span>
          </div>
        </div>
      </section>

      {/* 4. BANNER / LOCATION INTERACTIVE BLOCK */}
      <section className="relative h-[380px] bg-[#2C3E35] bg-cover bg-center bg-[url('/images/group.png')] flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-black/10"></div>
        {/* Frosted container box */}
        <div className="relative bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-8 max-w-xl w-full text-center shadow-lg">
          <button className="bg-[#3D2A25] text-white text-sm font-bold px-6 py-3 rounded-md hover:bg-[#2A1D1A] transition-all tracking-wide shadow-md">
            Find a location closest to you
          </button>
        </div>
      </section>

      {/* 5. ABOUT SECTION WITH TEXT BLOCK OUTLINE */}
      <section className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Images Graphic Composite */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          <div className="h-64 bg-gray-100 rounded-sm bg-cover bg-center bg-[url('/images/group.png')]"></div>
          <div className="h-64 bg-gray-200 rounded-sm bg-cover bg-center bg-[url('/images/group.png')]"></div>
        </div>

        {/* Outlined Text Canvas */}
        <div className="lg:col-span-7 border border-gray-300 rounded-sm p-6 md:p-10 bg-white space-y-6 relative">
          <h3 className="text-xl font-bold text-slate-900">About Woods Coffee</h3>
          <div className="text-xs text-gray-600 space-y-4 leading-relaxed font-medium">
            <p>
              For nearly 25 years, we’ve been (just a little) obsessed with roasting delicious coffee, hand-crafting dreamy baked goods—made fresh in our scratch bakery, and, of course, creating spaces where friends can enjoy conversations in front of our cozy fireplaces.
            </p>
            <p>
              Visit any of our Pacific Northwest-inspired coffee shops throughout Western Washington, and you’ll find a welcoming space that feels like a cabin in the woods. So bring your adventurous spirit, and head over to a Woods Coffee location near you.
            </p>
            <p>
              In a rush? Many of our locations also feature a drive-thru to get you back on the road faster. For even quicker service, Order Ahead, and we’ll have your order ready for you when you get here. We’ll see you soon!
            </p>
          </div>
          <div className="pt-4 flex justify-end">
            <button className="bg-[#3D2A25] text-white text-xs font-bold px-6 py-2 rounded hover:bg-[#2A1D1A] transition-colors">
              Read more
            </button>
          </div>
        </div>
      </section>

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