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
    </div>
  );
}