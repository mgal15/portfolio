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

    </div>
  );
}