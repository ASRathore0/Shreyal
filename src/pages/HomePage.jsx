import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Package, 
  ShieldCheck, 
  Truck, 
  Receipt, 
  Award, 
  GraduationCap, 
  Building2, 
  Store, 
  BookOpenCheck, 
  FileText, 
  CheckCircle2, 
  Percent, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Star, 
  Sparkles,
  Calculator,
  ExternalLink
} from 'lucide-react';
import { COMPANY } from '../data/company';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import QuickViewModal from '../components/QuickViewModal';
import { createWhatsAppUrl } from '../utils/whatsapp';

export default function HomePage() {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Interactive Wholesale Savings Calculator State
  const [calcCategory, setCalcCategory] = useState('paper');
  const [calcVolume, setCalcVolume] = useState(25); // e.g. 25 cartons / 250 units

  // Bestselling products (filter top items)
  const bestsellerProducts = PRODUCTS.filter(p => p.isBestseller).slice(0, 8);

  // Calculator logic
  const calcData = {
    paper: {
      name: "JK Copier Paper 75 GSM (Cartons of 10 Reams)",
      retailPrice: 3900,
      wholesalePrice: 2850,
      bulkRate: 2720,
      unit: "Cartons (10 Reams / 5000 Sheets)"
    },
    notebooks: {
      name: "Classmate Long Notebooks (Packs of 10)",
      retailPrice: 750,
      wholesalePrice: 520,
      bulkRate: 470,
      unit: "Packs (10 Notebooks)"
    },
    pens: {
      name: "Cello Butterflow Blue Ball Pens (Boxes of 20)",
      retailPrice: 200,
      wholesalePrice: 150,
      bulkRate: 135,
      unit: "Boxes (20 Pens)"
    },
    files: {
      name: "Solo Lever Arch Heavy Box Files (Packs of 10)",
      retailPrice: 1950,
      wholesalePrice: 1350,
      bulkRate: 1250,
      unit: "Packs (10 Box Files)"
    }
  };

  const selectedCalc = calcData[calcCategory];
  const ratePerUnit = calcVolume >= 20 ? selectedCalc.bulkRate : selectedCalc.wholesalePrice;
  const estimatedWholesaleCost = ratePerUnit * calcVolume;
  const estimatedRetailCost = selectedCalc.retailPrice * calcVolume;
  const estimatedSavings = estimatedRetailCost - estimatedWholesaleCost;
  const savingsPercent = Math.round((estimatedSavings / estimatedRetailCost) * 100);

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. HERO SECTION - VISUAL-FIRST, MODERN & PREMIUM */}
      <section className="relative bg-slate-950 text-white overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 lg:py-20 border-b border-slate-800">
        
        {/* Subtle ambient light gradient background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:32px_32px] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Main Grid: Responsive layout with prominent visual media */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Mobile Visual Hero Image & CTAs */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold text-amber-300">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0"></span>
                <span>Direct Mill Distributor • Pan-India B2B Supply</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-heading">
                Everything Your <span className="text-amber-400">Workspace</span> &amp; <span className="text-amber-400">Classroom</span> Needs.
              </h1>

              {/* Concise Supporting Text */}
              <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Direct wholesale supply of notebooks, copier paper, pens, and institutional office essentials at genuine mill rates for schools, colleges, corporate offices, and retail stores across India.
              </p>

              {/* PROMINENT HERO IMAGE BANNER (Visible on Mobile & Tablet front-and-center) */}
              <div className="lg:hidden relative aspect-16/9 rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 my-4 group">
                <img
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80"
                  alt="Premium Wholesale Stationery & Classroom Supplies"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
                
                {/* Floating Image Badges */}
                <div className="absolute top-2.5 left-2.5">
                  <span className="bg-slate-900/90 backdrop-blur-md text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-amber-500/30 flex items-center space-x-1 shadow">
                    <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                    <span>Direct Mill Pricing • 2,500+ SKUs</span>
                  </span>
                </div>

                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-left">
                  <div>
                    <p className="text-xs font-bold leading-tight drop-shadow-sm">Master Cartons &amp; Student Sets</p>
                    <p className="text-[10px] text-slate-300">JK Copier • Classmate • Cello • Kangaro</p>
                  </div>
                  <span className="text-[10px] bg-emerald-600 text-white font-extrabold px-2.5 py-1 rounded-lg shadow">
                    Save up to 40%
                  </span>
                </div>
              </div>

              {/* Action Buttons: Clean Dual Grid on Mobile */}
              <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-row sm:items-center sm:justify-start pt-1 max-w-md mx-auto lg:mx-0">
                <Link
                  to="/products"
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm py-3 px-4 sm:px-6 rounded-xl shadow-lg shadow-amber-950/20 active:scale-95 transition-all flex items-center justify-center space-x-1.5 group"
                >
                  <span>Explore Catalog</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform shrink-0" />
                </Link>

                <Link
                  to="/bulk-enquiry"
                  className="bg-slate-800/90 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm py-3 px-4 sm:px-6 rounded-xl border border-slate-700/80 active:scale-95 transition-all flex items-center justify-center space-x-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Get Bulk Quote</span>
                </Link>

                {/* Desktop-only WhatsApp Quick Inquiry button */}
                {/* <a
                  href={createWhatsAppUrl("Hello Shreyal Stationery Solution, I would like to request your latest wholesale catalog & price list.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold text-xs sm:text-sm py-3 px-5 rounded-xl transition-all items-center justify-center space-x-1.5 shadow-md shrink-0"
                >
                  <span className="text-sm">💬</span>
                  <span>WhatsApp Desk</span>
                </a> */}
              </div>

              {/* Compact Trust Stats Row */}
              <div className="pt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 border-t border-slate-800/80 text-left">
                {COMPANY.stats.map((stat, idx) => (
                  <div key={idx} className="bg-slate-900/60 p-2 sm:p-2.5 rounded-xl border border-slate-800/80">
                    <div className="text-sm sm:text-lg font-black text-amber-400 font-heading">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-slate-200 mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Column: Hero Visual Showcase (Desktop high-end visual showcase) */}
            <div className="hidden lg:block lg:col-span-5 relative">
              <div className="bg-slate-900/90 rounded-2xl p-5 shadow-2xl border border-slate-700/80 backdrop-blur-md">
                
                {/* Visual Header with High-Res Image */}
                <div className="relative rounded-xl overflow-hidden aspect-16/9 mb-4 border border-slate-700/60 shadow-inner group">
                  <img
                    src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80"
                    alt="Premium Stationery Wholesale Stock"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
                  
                  {/* Floating Badges */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="bg-slate-950/80 backdrop-blur-xs text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-amber-500/30 flex items-center space-x-1">
                      <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                      <span>Direct Mill Sourcing</span>
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
                    <div>
                      <p className="text-xs font-bold leading-tight">Ready Warehouse Stock</p>
                      <p className="text-[10px] text-slate-300">Central Hubs: New Delhi &amp; Mumbai</p>
                    </div>
                    <span className="text-[10px] bg-emerald-600 text-white font-extrabold px-2 py-0.5 rounded shadow">
                      24h Dispatch
                    </span>
                  </div>
                </div>

                {/* 3 Fast-Moving Institutional SKUs with images */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2.5 p-2 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:bg-slate-800 transition-colors">
                    <img
                      src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=120&q=80"
                      alt="JK Copier paper"
                      className="w-10 h-10 object-cover rounded-lg border border-slate-700 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-100 truncate">JK Copier Paper 75 GSM</span>
                        <span className="text-xs font-bold text-emerald-400">₹2,850/ctn</span>
                      </div>
                      <p className="text-[10px] text-slate-400">Carton of 10 Reams (5,000 Sheets)</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2.5 p-2 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:bg-slate-800 transition-colors">
                    <img
                      src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=120&q=80"
                      alt="Classmate notebook"
                      className="w-10 h-10 object-cover rounded-lg border border-slate-700 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-100 truncate">Classmate Long Notebooks</span>
                        <span className="text-xs font-bold text-emerald-400">₹52/pc</span>
                      </div>
                      <p className="text-[10px] text-slate-400">172 Pages • High-Bright Chlorine Free</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2.5 p-2 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:bg-slate-800 transition-colors">
                    <img
                      src="https://images.unsplash.com/photo-1585336261026-7756f7ef57d6?auto=format&fit=crop&w=120&q=80"
                      alt="Cello Butterflow"
                      className="w-10 h-10 object-cover rounded-lg border border-slate-700 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-100 truncate">Cello Butterflow Blue Ball Pen</span>
                        <span className="text-xs font-bold text-emerald-400">₹150/box</span>
                      </div>
                      <p className="text-[10px] text-slate-400">Box of 20 Pens (₹7.50/pen)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">
                    <span className="font-semibold text-slate-200">Pallet Packing:</span> Moisture-proof shrink wrap
                  </span>
                  <Link to="/products" className="font-bold text-amber-400 hover:text-amber-300 flex items-center">
                    <span>View 2,500+ Items &rarr;</span>
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TARGET CLIENT SECTORS (Schools, Corporates, Retailers, Coaching, Resellers) */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded">
              Tailored For Your Business Model
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 font-heading">
              Serving Bulk Stationery Buyers Across India
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Whether you are an educational institution, a corporate procurement head, or a retail stationery shopkeeper, we have specialized supply terms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {COMPANY.targetSectors.map((sector) => {
              const icons = {
                GraduationCap: <GraduationCap className="w-6 h-6 text-amber-600" />,
                Building2: <Building2 className="w-6 h-6 text-amber-600" />,
                Store: <Store className="w-6 h-6 text-amber-600" />,
                BookOpenCheck: <BookOpenCheck className="w-6 h-6 text-amber-600" />,
                Truck: <Truck className="w-6 h-6 text-amber-600" />
              };

              return (
                <div 
                  key={sector.id} 
                  className="bg-slate-50 border border-slate-200 rounded-xl p-4 hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-amber-100/60 flex items-center justify-center mb-3">
                      {icons[sector.icon] || <Package className="w-6 h-6 text-amber-600" />}
                    </div>
                    <span className="text-[10px] font-extrabold text-slate-700 bg-slate-200/80 px-2 py-0.5 rounded uppercase tracking-wide">
                      {sector.badge}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mt-2">
                      {sector.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {sector.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/80">
                    <a
                      href={createWhatsAppUrl(`Hello Shreyal Stationery Solution, we represent a ${sector.title} and would like to receive institutional wholesale rates.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center justify-between group"
                    >
                      <span>Inquire on WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCT CATEGORIES (ALL 9 REQUIRED CATEGORIES) */}
      <section className="py-14 bg-slate-100/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded">
                Product Catalog
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 font-heading">
                Explore Stationery Categories
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Browse our complete warehouse stock divided into 9 dedicated wholesale departments.
              </p>
            </div>
            <Link
              to="/products"
              className="mt-4 md:mt-0 inline-flex items-center font-bold text-xs text-slate-900 hover:text-amber-700 transition-colors"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={`/products?category=${cat.slug}`}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col"
              >
                <div className="aspect-16/9 bg-slate-100 overflow-hidden relative">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] bg-amber-500 text-slate-950 font-extrabold px-1.5 py-0.5 rounded uppercase">
                      {cat.moqHighlight}
                    </span>
                    <h3 className="text-base font-bold text-white mt-1 leading-snug">
                      {cat.name}
                    </h3>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-medium text-slate-500 mb-1">
                      {cat.tagline}
                    </p>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-500">{cat.itemCount}</span>
                    <span className="font-bold text-slate-900 group-hover:text-amber-700 flex items-center">
                      Browse &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 4. BEST-SELLING BULK WHOLESALE DEALS */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded">
                  High-Demand Fast Movers
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 font-heading">
                Best-Selling Wholesale Products
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Top products ordered in high volume by schools, corporate purchasing departments, and retail stores.
              </p>
            </div>
            
            <Link
              to="/products"
              className="mt-4 md:mt-0 inline-flex items-center font-bold text-xs text-slate-900 hover:text-amber-700"
            >
              <span>Explore full 2,500+ SKU Catalog &rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {bestsellerProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE WHOLESALE SAVINGS CALCULATOR */}
      <section className="py-14 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                Interactive B2B Cost Estimator
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-heading">
                See How Much Your Institution Saves With Us
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                By purchasing in master cartons and institutional lots, schools and corporate procurement teams save 25% to 40% over local retail stationery purchases. Adjust the parameters to calculate your estimated savings.
              </p>
              
              <div className="space-y-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Direct mill invoices with 100% Input Tax Credit</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Tiered price discounts automatically applied on cartons</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Consolidated monthly billing options for corporates</span>
                </div>
              </div>
            </div>

            {/* Calculator Card */}
            <div className="lg:col-span-7 bg-white text-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-200">
              <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm mb-4 pb-3 border-b border-slate-100">
                <Calculator className="w-5 h-5 text-amber-600" />
                <span>Stationery Volume Savings Estimator</span>
              </div>

              {/* Product selector buttons */}
              <div className="mb-4">
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                  1. Select Product Category:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => setCalcCategory('paper')}
                    className={`p-2 rounded-lg text-xs font-bold transition-all border ${
                      calcCategory === 'paper' 
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm' 
                        : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                    }`}
                  >
                    Copier Paper
                  </button>
                  <button
                    type="button"
                    onClick={() => setCalcCategory('notebooks')}
                    className={`p-2 rounded-lg text-xs font-bold transition-all border ${
                      calcCategory === 'notebooks' 
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm' 
                        : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                    }`}
                  >
                    Notebooks
                  </button>
                  <button
                    type="button"
                    onClick={() => setCalcCategory('pens')}
                    className={`p-2 rounded-lg text-xs font-bold transition-all border ${
                      calcCategory === 'pens' 
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm' 
                        : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                    }`}
                  >
                    Ball Pens
                  </button>
                  <button
                    type="button"
                    onClick={() => setCalcCategory('files')}
                    className={`p-2 rounded-lg text-xs font-bold transition-all border ${
                      calcCategory === 'files' 
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm' 
                        : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                    }`}
                  >
                    Box Files
                  </button>
                </div>
              </div>

              {/* Quantity Volume Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    2. Order Volume:
                  </label>
                  <span className="text-sm font-extrabold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                    {calcVolume} {selectedCalc.unit}
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={calcVolume}
                  onChange={(e) => setCalcVolume(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>5 Units (Trial)</span>
                  <span>25 Units (Regular)</span>
                  <span>50 Units (Quarterly)</span>
                  <span>100+ Units (Annual Contract)</span>
                </div>
              </div>

              {/* Calculation Summary Table */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 mb-4">
                <p className="text-xs font-medium text-slate-600 mb-2">
                  Sample Item: <strong className="text-slate-900">{selectedCalc.name}</strong>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                  <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                    <span className="text-[11px] text-slate-500 block">Retail Market Cost:</span>
                    <span className="text-base font-bold text-slate-400 line-through">
                      ₹{estimatedRetailCost.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                    <span className="text-[11px] text-slate-500 block">Shreyal Wholesale:</span>
                    <span className="text-base font-extrabold text-slate-900">
                      ₹{estimatedWholesaleCost.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
                    <span className="text-[11px] text-emerald-700 font-bold block">Estimated Savings:</span>
                    <span className="text-lg font-black text-emerald-700">
                      ₹{estimatedSavings.toLocaleString('en-IN')} ({savingsPercent}%)
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <span className="text-xs text-slate-500 text-center sm:text-left">
                  *Indicative estimated calculation. Final rates subject to GST and freight.
                </span>
                <a
                  href={createWhatsAppUrl(`Hello Shreyal Stationery Solution, I used your volume savings calculator for ${calcVolume} units of ${selectedCalc.name}. Please share an official proforma quote.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-2.5 rounded-lg flex items-center justify-center space-x-1.5 transition-colors shadow"
                >
                  <span>💬 Lock This Bulk Rate on WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 6. WHOLESALE & BULK-ORDER BENEFITS (WHY CHOOSE US) */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded">
              The Shreyal Stationery Solution Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 font-heading">
              Why Hundreds of Institutions Rely on Us
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              We streamline stationery procurement so school administrators and corporate facility managers can focus on what matters most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY.benefits.map((b, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center mb-3.5 shadow-xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                  {b.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. TRUSTED BY SCHOOLS, OFFICES & RETAILERS SECTION */}
      <section className="py-12 bg-slate-100/50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">
            Trusted Stationery Supply Partner To Premier Organizations Across India
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center">
            <div className="bg-white py-3 px-4 rounded-xl border border-slate-200 shadow-2xs font-heading font-extrabold text-xs text-slate-700">
              DPS World Schools
            </div>
            <div className="bg-white py-3 px-4 rounded-xl border border-slate-200 shadow-2xs font-heading font-extrabold text-xs text-slate-700">
              Ryan International Group
            </div>
            <div className="bg-white py-3 px-4 rounded-xl border border-slate-200 shadow-2xs font-heading font-extrabold text-xs text-slate-700">
              Narayana Edu Trust
            </div>
            <div className="bg-white py-3 px-4 rounded-xl border border-slate-200 shadow-2xs font-heading font-extrabold text-xs text-slate-700">
              Allen Career Foundation
            </div>
            <div className="bg-white py-3 px-4 rounded-xl border border-slate-200 shadow-2xs font-heading font-extrabold text-xs text-slate-700">
              Infotech City Tech Parks
            </div>
            <div className="bg-white py-3 px-4 rounded-xl border border-slate-200 shadow-2xs font-heading font-extrabold text-xs text-slate-700">
              State Bank Associates
            </div>
          </div>
        </div>
      </section>

      {/* 8. BULK ENQUIRY BANNER */}
      <section className="py-12 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left max-w-2xl">
              <span className="text-[11px] font-extrabold text-amber-400 uppercase tracking-wider bg-slate-900 px-3 py-1 rounded-full">
                Institutional Annual Tenders &amp; Session Supplies
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-heading tracking-tight">
                Have a Custom List of School or Office Requirements?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Upload your excel sheet, tender specifications, or handwritten list directly to our WhatsApp quotation desk. Receive an itemized GST proforma invoice within 30 minutes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
              <Link
                to="/bulk-enquiry"
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all text-center flex items-center justify-center space-x-2"
              >
                <FileText className="w-4 h-4" />
                <span>Submit RFQ Form</span>
              </Link>

              <a
                href={createWhatsAppUrl("Hello Shreyal Stationery Solution! I have an Excel list of stationery items for bulk quotation. How may I share it?")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all text-center flex items-center justify-center space-x-2"
              >
                <span className="text-base">💬</span>
                <span>Send List on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. VERIFIED CUSTOMER TESTIMONIALS */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded">
              Client Feedback
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 font-heading">
              What Procurement Heads Say
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Read real feedback from school directors, facility managers, and retail bookshop owners across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {COMPANY.testimonials.map((t, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center space-x-1 text-amber-500 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-700 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200">
                  <h4 className="text-xs font-bold text-slate-900">{t.name}</h4>
                  <p className="text-[11px] text-amber-700 font-medium">{t.role}</p>
                  <p className="text-[11px] text-slate-500">{t.organization}</p>
                  <span className="text-[10px] text-slate-400 mt-1 block">📍 {t.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. COMPREHENSIVE FAQ SECTION */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 font-heading">
              Frequently Asked Wholesale Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Everything you need to know about our minimum order quantities, WhatsApp orders, shipping, and credit terms.
            </p>
          </div>

          <div className="space-y-3">
            {COMPANY.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:text-amber-800"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-amber-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center bg-white p-4 rounded-xl border border-slate-200 text-xs text-slate-600">
            Still have queries? Speak directly with our sales team on WhatsApp:{' '}
            <a 
              href={createWhatsAppUrl("Hello Shreyal Stationery Solution, I have a few specific questions regarding your wholesale terms.")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 font-bold hover:underline"
            >
              Chat on WhatsApp ({COMPANY.phone}) &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}

    </div>
  );
}
