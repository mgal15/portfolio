import React from 'react';
import Link from 'next/link';

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

// 1. Hardcoded product mapping data to replace placeholders dynamically
const PRODUCT_DETAILS_MAP: Record<string, { name: string; price: string; desc: string; icon: string }> = {
  'camo-hoodie': {
    name: 'Woods Camo Hoodie',
    price: '$65.00',
    desc: 'Cozy up in our signature Woods Camo Hoodie. Perfect for PNW mornings, featuring premium heavyweight fleece, an adjustable drawstring hood, and an ultra-soft interior finish.',
    icon: '👕'
  },
  'classic-tumbler': {
    name: 'Insulated Tumbler',
    price: '$32.00',
    desc: 'Keep your brew piping hot or ice cold for hours. Double-wall vacuum insulated stainless steel with a splash-resistant press-in lid. Built tough for your next outdoor adventure.',
    icon: '🥛'
  },
  'timber-cap': {
    name: 'Woods Timber Hat',
    price: '$28.00',
    desc: 'A classic structure with a Northwest twist. Features an embroidered Woods design on a durable canvas build with an adjustable snapback closure for a perfect fit.',
    icon: '🧢'
  },
  'egift-card': {
    name: 'Digital Gift Card',
    price: '$25.00+',
    desc: 'The perfect gift for any coffee lover. Delivered instantly via email, our eGift cards can be used on any storefront menu items or online merchandise packages.',
    icon: '💳'
  },
  'espresso-blend': {
    name: 'Cascade Espresso Beans',
    price: '$18.00',
    desc: 'Our signature whole-bean espresso blend. Rich, smooth, and locally roasted with tasting notes of dark chocolate, sweet caramel, and a hint of bright mountain citrus.',
    icon: '☕'
  }
};

// Satisfy output: export by informing Next.js of all active product pages during building
export async function generateStaticParams() {
  const ids = ['camo-hoodie', 'classic-tumbler', 'timber-cap', 'egift-card', 'espresso-blend'];
  return ids.map((itemId) => ({
    id: itemId,
  }));
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;

  // Fallback content if an unknown ID slips through
  const product = PRODUCT_DETAILS_MAP[id] || {
    name: id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    price: '[Price]',
    desc: 'More Information associated with shop here. For nearly 25 years, we’ve been obsessed with bringing premium Pacific Northwest experiences straight to you.',
    icon: '📦'
  };

  return (
    <div className="min-h-screen bg-white text-[#2C2523] font-sans antialiased">

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
      {/* Top Main Section matching the layout border container in image_33ea1e.jpg */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-[#E6D5C3]/40 border border-[#BC9E8B]/30 rounded-lg p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN: Gallery & Pagination Layout */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex gap-4">
              {/* Vertical Stack Thumbnails */}
              <div className="flex flex-col gap-2 w-20 shrink-0">
                {Array(4).fill(0).map((_, i) => (
                  <div key={i} className="aspect-square bg-[#BC9E8B]/20 rounded border border-gray-200 overflow-hidden flex items-center justify-center text-xs text-[#3D2A25]/60 font-medium">
                    {product.icon}
                  </div>
                ))}
              </div>

              {/* Main Preview Image Workspace */}
              <div className="flex-1 aspect-[4/3] bg-[#BC9E8B]/10 rounded border border-gray-300 flex flex-col items-center justify-center relative overflow-hidden min-h-[350px]">
                <span className="text-6xl mb-2">{product.icon}</span>
                <span className="text-xs font-mono text-gray-500">[{id}_preview.png]</span>
              </div>
            </div>

            {/* Micro Pagination Toolbar Under Imagery */}
            <div className="flex items-center justify-start space-x-2 text-xs font-semibold text-slate-600 pl-24">
              <button className="text-gray-400 hover:text-slate-800 transition-colors">← Previous</button>
              <button className="w-6 h-6 rounded bg-[#3D2A25] text-white flex items-center justify-center">1</button>
              <button className="w-6 h-6 rounded hover:bg-gray-200 transition-colors flex items-center justify-center">2</button>
              <button className="w-6 h-6 rounded hover:bg-gray-200 transition-colors flex items-center justify-center">3</button>
              <span className="text-gray-400">...</span>
              <button className="w-6 h-6 rounded hover:bg-gray-200 transition-colors flex items-center justify-center">5</button>
              <button className="text-slate-800 hover:text-black transition-colors">Next →</button>
            </div>
          </div>

          {/* RIGHT COLUMN: Details & Description */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div className="flex justify-between items-baseline">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 uppercase">
                {product.name}
              </h2>
              <span className="text-lg font-mono font-bold text-[#3D2A25] bg-[#3D2A25]/10 px-2.5 py-0.5 rounded">
                {product.price}
              </span>
            </div>
            
            {/* Description Info Canvas */}
            <div className="bg-[#BC9E8B]/50 border border-[#BC9E8B] rounded-lg p-6 flex-1 min-h-[300px] flex flex-col justify-between">
              <p className="text-sm font-medium text-[#3D2A25] leading-relaxed">
                {product.desc}
              </p>
              
              <div className="pt-6 border-t border-[#3D2A25]/20 flex justify-between items-center">
                <Link href="/projects/woodscoffee/webApp/shop">
                  <button className="bg-[#3D2A25] text-white text-xs font-bold px-6 py-2.5 rounded hover:bg-[#2A1D1A] transition-colors">
                    Back to Shop
                  </button>
                </Link>
                <button className="bg-white text-[#3D2A25] border border-[#3D2A25]/20 text-xs font-bold px-6 py-2.5 rounded hover:bg-white/80 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
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