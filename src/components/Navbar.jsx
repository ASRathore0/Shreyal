import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Search, 
  ShoppingCart, 
  Menu, 
  X, 
  Phone, 
  FileText, 
  ShieldCheck, 
  Clock, 
  Package, 
  ExternalLink,
  Building,
  CheckCircle2
} from 'lucide-react';
import { COMPANY } from '../data/company';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { createWhatsAppUrl } from '../utils/whatsapp';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchFocused, setSearchFocused] = useState(false);
  const [mobileSearchFocused, setMobileSearchFocused] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(true);
  const searchRef = useRef(null);
  const mobileSearchRef = useRef(null);
  const lastScrollY = useRef(0);
  const navigate = useNavigate();
  const location = useLocation();

  const { totalItemsCount, subtotal } = useCart();

  // Scroll direction detection for mobile search bar (hide on scroll down, show on scroll up)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show at top of page
      if (currentScrollY <= 15) {
        setShowMobileSearch(true);
      } else if (currentScrollY > lastScrollY.current + 8) {
        // Scrolling down: hide
        setShowMobileSearch(false);
      } else if (currentScrollY < lastScrollY.current - 8) {
        // Scrolling up: show
        setShowMobileSearch(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchFocused(false);
    setMobileSearchFocused(false);
  }, [location.pathname]);

  // Handle Search autocomplete
  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const q = searchQuery.toLowerCase();
      const matches = PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.categoryName.toLowerCase().includes(q)
      ).slice(0, 6);
      setSearchResults(matches);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  // Handle click outside search results
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchFocused(false);
      }
      if (mobileSearchRef.current && !mobileSearchRef.current.contains(event.target)) {
        setMobileSearchFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (searchQuery.trim()) {
      setSearchFocused(false);
      setMobileSearchFocused(false);
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleProductSelect = (productId) => {
    setSearchFocused(false);
    setSearchQuery('');
    navigate(`/product/${productId}`);
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm transition-all">
      {/* 1. TOP ANNOUNCEMENT / B2B TRUST BAR */}
      {/* <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-4 overflow-x-auto w-full md:w-auto text-[11px] md:text-xs">
            <span className="flex items-center text-amber-400 font-medium shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 mr-1 text-amber-400" /> Direct Mill Wholesale Sourcing
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="hidden sm:flex items-center text-slate-300 shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-400" /> 100% Verified GST Invoicing
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="text-slate-300 shrink-0">Pan-India Freight Dispatches</span>
          </div>

          <div className="flex items-center space-x-5 text-[11px] md:text-xs text-slate-300">
            <span className="hidden lg:flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1 text-slate-400" /> Mon - Sat: 9:30 AM – 7:30 PM
            </span>
            <a 
              href={`tel:${COMPANY.rawPhone}`} 
              className="flex items-center hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 mr-1 text-amber-400" /> Call: {COMPANY.phone}
            </a>
            <a
              href={createWhatsAppUrl("Hello Shreyal Stationery Solution team, I would like to inquire about wholesale prices.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-emerald-400 hover:text-emerald-300 font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-1.5"></span>
              WhatsApp Desk
            </a>
          </div>
        </div>
      </div> */}

      {/* 2. MAIN HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          
          {/* Logo & Brand Identity */}
          <Link to="/" className="flex items-center space-x-3 shrink-0 group">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 shadow-md group-hover:bg-slate-800 transition-colors">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-lg md:text-xl font-bold tracking-tight text-slate-900 font-heading">
                  SHREYAL
                </span>
                <span className="text-xs bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded uppercase tracking-wider text-[10px]">
                  Stationery Solution
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wide">
                Bulk Stationery & Institutional Supplies
              </p>
            </div>
          </Link>

          {/* Search Bar with Autocomplete Dropdown */}
          <div ref={searchRef} className="relative flex-1 max-w-xl hidden md:block">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search notebooks, JK copier paper, pens, staplers, registers, SKUs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                className="w-full bg-slate-100 border border-slate-300 text-slate-800 text-sm rounded-lg pl-10 pr-24 py-2.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all placeholder:text-slate-400"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-3.5 rounded-md transition-colors"
              >
                Search
              </button>
            </form>

            {/* Autocomplete Dropdown */}
            {searchFocused && searchResults.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-1.5 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden z-50">
                <div className="p-2 border-b border-slate-100 bg-slate-50 text-xs font-semibold text-slate-500 flex justify-between items-center">
                  <span>Product Suggestions</span>
                  <span>{searchResults.length} Results</span>
                </div>
                <div className="divide-y divide-slate-100 max-h-80 overflow-y-auto">
                  {searchResults.map(product => (
                    <button
                      key={product.id}
                      onClick={() => handleProductSelect(product.id)}
                      className="w-full p-2.5 text-left flex items-center space-x-3 hover:bg-slate-50 transition-colors group"
                    >
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-10 h-10 object-cover rounded border border-slate-200 shrink-0" 
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-800 truncate group-hover:text-amber-700">
                          {product.name}
                        </p>
                        <div className="flex items-center space-x-2 text-xs text-slate-500 mt-0.5">
                          <span className="font-semibold text-slate-700">₹{product.unitPrice}</span>
                          <span>•</span>
                          <span>MOQ: {product.moq} {product.unit}</span>
                          <span>•</span>
                          <span className="text-slate-400">{product.brand}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="p-2 bg-slate-50 border-t border-slate-100 text-center">
                  <button
                    onClick={handleSearchSubmit}
                    className="text-xs font-semibold text-slate-900 hover:underline"
                  >
                    View all matching wholesale items &rarr;
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Action Icons: RFQ, WhatsApp, Cart */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Bulk Quote CTA (Desktop) */}
            {/* <Link
              to="/bulk-enquiry"
              className="hidden lg:flex items-center space-x-1.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold text-xs px-3.5 py-2.5 rounded-lg shadow-sm transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Get Bulk Quote</span>
            </Link> */}

            {/* Direct WhatsApp Action */}
            {/* <a
              href={createWhatsAppUrl("Hello Shreyal Stationery Solution, I need a bulk quote for our organization.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center space-x-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs px-3 py-2.5 rounded-lg transition-colors shadow-sm"
              title="Chat with Sales Desk on WhatsApp"
            >
              <span className="text-base leading-none">💬</span>
              <span>WhatsApp</span>
            </a> */}

            {/* Bulk Cart Button (Hidden on mobile header per design, visible on tablet & desktop) */}
            <Link
              to="/cart"
              className="hidden sm:flex relative items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white px-3 sm:px-4 py-2 rounded-lg transition-colors shadow-sm"
              aria-label="View Bulk Cart"
            >
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-amber-400" />
                {totalItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItemsCount > 99 ? '99+' : totalItemsCount}
                  </span>
                )}
              </div>
              <div className="hidden sm:block text-left text-xs leading-tight">
                <span className="text-[10px] text-slate-300 block uppercase font-medium">Bulk Cart</span>
                <span className="font-bold text-white">
                  ₹{subtotal.toLocaleString('en-IN')}
                </span>
              </div>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar with Modernized Pill UI & Live Dropdown */}
        <div 
          ref={mobileSearchRef}
          className={`md:hidden relative transition-all duration-300 ease-in-out ${
            showMobileSearch || searchQuery.length > 0 || mobileSearchFocused
              ? 'max-h-24 opacity-100 mt-2.5 pointer-events-auto pb-0.5'
              : 'max-h-0 opacity-0 mt-0 pointer-events-none overflow-hidden'
          }`}
        >
          <form onSubmit={handleSearchSubmit} className="relative">
            <div className="flex items-center bg-slate-100/90 focus-within:bg-white border border-slate-200 focus-within:border-slate-800 rounded-full pl-3.5 pr-1.5 py-1 transition-all shadow-2xs">
              <Search className="w-4 h-4 text-slate-400 focus-within:text-slate-900 shrink-0" />
              
              <input
                type="text"
                placeholder="Search 2,500+ stationery items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setMobileSearchFocused(true)}
                className="w-full bg-transparent text-slate-800 text-xs sm:text-sm pl-2.5 pr-1 py-1 focus:outline-none placeholder:text-slate-400 font-medium"
              />
              
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="p-1 text-slate-400 hover:text-slate-700 shrink-0 mr-1 rounded-full hover:bg-slate-200/60"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}

              <button
                type="submit"
                className="bg-slate-900 hover:bg-slate-800 active:scale-95 text-white text-xs font-bold px-3.5 py-1.5 rounded-full shrink-0 transition-transform shadow-xs"
              >
                <span>Search</span>
              </button>
            </div>
          </form>

          {/* Mobile Live Suggestions Dropdown */}
          {mobileSearchFocused && searchResults.length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-1.5 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-50 animate-in fade-in slide-in-from-top-1">
              <div className="p-2.5 border-b border-slate-100 bg-slate-50 text-[11px] font-bold text-slate-500 flex justify-between items-center">
                <span>Matching Wholesale SKUs</span>
                <span>{searchResults.length} Results</span>
              </div>
              <div className="divide-y divide-slate-100 max-h-64 overflow-y-auto">
                {searchResults.map(product => (
                  <button
                    key={product.id}
                    onClick={() => {
                      setMobileSearchFocused(false);
                      handleProductSelect(product.id);
                    }}
                    className="w-full p-2.5 text-left flex items-center space-x-2.5 hover:bg-slate-50 transition-colors"
                  >
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-9 h-9 object-cover rounded-lg border border-slate-200 shrink-0" 
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-slate-800 truncate">
                        {product.name}
                      </p>
                      <div className="flex items-center space-x-1.5 text-[10px] text-slate-500 mt-0.5">
                        <span className="font-extrabold text-slate-900">₹{product.unitPrice}</span>
                        <span>•</span>
                        <span>MOQ: {product.moq} {product.unit}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              <div className="p-2 bg-slate-50 border-t border-slate-100 text-center">
                <button
                  onClick={() => {
                    setMobileSearchFocused(false);
                    handleSearchSubmit({ preventDefault: () => {} });
                  }}
                  className="text-xs font-bold text-slate-900 hover:underline"
                >
                  View all matching results &rarr;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 3. MOBILE SLIDEOUT DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
          {/* Quick Action Buttons */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            <Link
              to="/bulk-enquiry"
              className="flex items-center justify-center space-x-1.5 bg-amber-500 text-slate-950 font-bold text-xs py-2.5 rounded-lg text-center"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Get Bulk Quote</span>
            </Link>
            <a
              href={createWhatsAppUrl("Hello Shreyal Stationery Solution, I would like to place a bulk inquiry.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-1.5 bg-emerald-600 text-white font-bold text-xs py-2.5 rounded-lg text-center"
            >
              <span className="text-sm">💬</span>
              <span>WhatsApp Chat</span>
            </a>
          </div>

          <div className="py-2 border-b border-slate-100">
            <Link to="/" className="block py-2 text-sm font-semibold text-slate-800">
              Home
            </Link>
            <Link to="/products" className="block py-2 text-sm font-semibold text-slate-800">
              All Wholesale Products
            </Link>
            <Link to="/cart" className="block py-2 text-sm font-semibold text-amber-600">
              Bulk Order Cart ({totalItemsCount} items)
            </Link>
            <Link to="/about" className="block py-2 text-sm font-semibold text-slate-800">
              About Shreyal Stationery Solution
            </Link>
            <Link to="/contact" className="block py-2 text-sm font-semibold text-slate-800">
              Warehouse Locations & Contact
            </Link>
          </div>

          <div className="pt-3">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Browse Categories
            </p>
            <div className="space-y-1">
              {CATEGORIES.map(cat => (
                <Link
                  key={cat.id}
                  to={`/products?category=${cat.slug}`}
                  className="flex items-center justify-between py-2 text-xs font-medium text-slate-700 border-b border-slate-50 hover:text-amber-600"
                >
                  <span>{cat.name}</span>
                  <span className="text-[10px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">{cat.itemCount}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact help inside mobile drawer */}
          <div className="mt-5 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
            <p className="font-bold text-slate-900 mb-1">Central Wholesale Helpline</p>
            <p className="text-slate-600 mb-2">Direct assistance for schools, universities, and corporate procurement:</p>
            <a 
              href={`tel:${COMPANY.rawPhone}`} 
              className="flex items-center font-bold text-slate-900 text-sm mb-1"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-amber-600" /> {COMPANY.phone}
            </a>
            <p className="text-[11px] text-slate-500">GSTIN: {COMPANY.gstin}</p>
          </div>
        </div>
      )}
    </header>
  );
}
