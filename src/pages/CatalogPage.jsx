import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Filter, 
  Search, 
  SlidersHorizontal, 
  X, 
  ArrowUpDown, 
  Check, 
  ChevronRight,
  Package,
  RotateCcw
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import ProductCard from '../components/ProductCard';
import QuickViewModal from '../components/QuickViewModal';

export default function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const searchParam = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [searchTerm, setSearchTerm] = useState(searchParam);
  const [sortBy, setSortBy] = useState('featured'); // featured, price-asc, price-desc, moq-asc, name-asc
  const [inStockOnly, setInStockOnly] = useState(false);
  const [bestsellerOnly, setBestsellerOnly] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Sync state with URL params
  useEffect(() => {
    if (categoryParam) setSelectedCategory(categoryParam);
  }, [categoryParam]);

  useEffect(() => {
    if (searchParam) setSearchTerm(searchParam);
  }, [searchParam]);

  // Extract unique brands for brand filter
  const allBrands = useMemo(() => {
    const brands = new Set(PRODUCTS.map(p => p.brand));
    return Array.from(brands).sort();
  }, []);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

      // Brand filter
      if (selectedBrand !== 'all' && product.brand !== selectedBrand) {
        return false;
      }

      // Stock filter
      if (inStockOnly && !product.inStock) {
        return false;
      }

      // Bestseller filter
      if (bestsellerOnly && !product.isBestseller) {
        return false;
      }

      // Search term
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesBrand = product.brand.toLowerCase().includes(query);
        const matchesSku = product.sku.toLowerCase().includes(query);
        const matchesDesc = product.shortDescription.toLowerCase().includes(query);
        const matchesCat = product.categoryName.toLowerCase().includes(query);

        if (!matchesName && !matchesBrand && !matchesSku && !matchesDesc && !matchesCat) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.unitPrice - b.unitPrice;
      if (sortBy === 'price-desc') return b.unitPrice - a.unitPrice;
      if (sortBy === 'moq-asc') return a.moq - b.moq;
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      // default: featured/bestseller first
      if (a.isBestseller && !b.isBestseller) return -1;
      if (!a.isBestseller && b.isBestseller) return 1;
      return 0;
    });
  }, [selectedCategory, selectedBrand, inStockOnly, bestsellerOnly, searchTerm, sortBy]);

  const activeCategoryObj = CATEGORIES.find(c => c.slug === selectedCategory);

  const handleCategoryChange = (slug) => {
    setSelectedCategory(slug);
    const newParams = new URLSearchParams(searchParams);
    if (slug === 'all') {
      newParams.delete('category');
    } else {
      newParams.set('category', slug);
    }
    setSearchParams(newParams);
  };

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSearchTerm('');
    setSelectedBrand('all');
    setInStockOnly(false);
    setBestsellerOnly(false);
    setSortBy('featured');
    setSearchParams({});
  };

  const activeFiltersCount = (selectedCategory !== 'all' ? 1 : 0) +
    (selectedBrand !== 'all' ? 1 : 0) +
    (inStockOnly ? 1 : 0) +
    (bestsellerOnly ? 1 : 0) +
    (searchTerm.trim() ? 1 : 0);

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 mb-4 flex items-center space-x-1.5">
          <Link to="/" className="hover:text-slate-800">Home</Link>
          <span>/</span>
          <span className="font-semibold text-slate-900">Wholesale Product Catalog</span>
          {selectedCategory !== 'all' && (
            <>
              <span>/</span>
              <span className="font-semibold text-amber-700">{activeCategoryObj?.name}</span>
            </>
          )}
        </div>

        {/* Category Header Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded uppercase tracking-wider">
                Wholesale Inventory
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 font-heading">
                {activeCategoryObj ? activeCategoryObj.name : "All Wholesale Stationery Supplies"}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
                {activeCategoryObj 
                  ? activeCategoryObj.description 
                  : "Explore our comprehensive B2B stationery range. Genuine mill packs, clear MOQs, and tiered carton discounts for institutional buyers."
                }
              </p>
            </div>

            <div className="flex items-center space-x-3 shrink-0">
              <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                {filteredProducts.length} Items Found
              </span>
            </div>
          </div>

          {/* Quick Category Pills Bar */}
          <div className="flex items-center space-x-2 overflow-x-auto pt-5 mt-4 border-t border-slate-100 pb-1 scrollbar-none">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`text-xs font-bold px-3 py-1.5 rounded-lg shrink-0 transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Categories
            </button>
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.slug)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg shrink-0 transition-colors ${
                  selectedCategory === cat.slug
                    ? 'bg-slate-900 text-white font-bold'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.shortName}
              </button>
            ))}
          </div>
        </div>

        {/* Main Catalog Layout: Sidebar + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* DESKTOP FILTERS SIDEBAR */}
          <aside className="hidden lg:block space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center">
                  <SlidersHorizontal className="w-4 h-4 mr-1.5 text-amber-600" /> Filters
                </span>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={handleClearFilters}
                    className="text-xs text-amber-700 hover:underline flex items-center space-x-1 font-semibold"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset All</span>
                  </button>
                )}
              </div>

              {/* Department / Category Filter */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                  Department
                </label>
                <div className="space-y-1">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`w-full text-left text-xs py-1.5 px-2 rounded-lg flex items-center justify-between ${
                      selectedCategory === 'all'
                        ? 'bg-amber-50 text-amber-900 font-bold'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>All Departments</span>
                    <span className="text-[11px] text-slate-400">{PRODUCTS.length}</span>
                  </button>

                  {CATEGORIES.map(cat => {
                    const count = PRODUCTS.filter(p => p.category === cat.slug).length;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => handleCategoryChange(cat.slug)}
                        className={`w-full text-left text-xs py-1.5 px-2 rounded-lg flex items-center justify-between ${
                          selectedCategory === cat.slug
                            ? 'bg-amber-50 text-amber-900 font-bold'
                            : 'text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <span className="truncate pr-2">{cat.name}</span>
                        <span className="text-[11px] text-slate-400">{count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Brand Filter */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                  Brand / Manufacturer
                </label>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full text-xs p-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-900"
                >
                  <option value="all">All Brands ({allBrands.length})</option>
                  {allBrands.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>

              {/* Toggle filters */}
              <div className="pt-2 border-t border-slate-100 space-y-2.5">
                <label className="flex items-center space-x-2.5 cursor-pointer text-xs text-slate-700">
                  <input
                    type="checkbox"
                    checked={bestsellerOnly}
                    onChange={(e) => setBestsellerOnly(e.target.checked)}
                    className="rounded border-slate-300 text-amber-600 focus:ring-amber-500"
                  />
                  <span className="font-medium">Wholesale Bestsellers Only</span>
                </label>

                <label className="flex items-center space-x-2.5 cursor-pointer text-xs text-slate-700">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="rounded border-slate-300 text-amber-600 focus:ring-amber-500"
                  />
                  <span className="font-medium">Ready Stock Only</span>
                </label>
              </div>

              {/* Quick RFQ Assistance Card in Sidebar */}
              <div className="p-4 bg-slate-900 text-white rounded-xl text-xs space-y-2">
                <p className="font-bold text-amber-400">Custom Tender or Large Lot?</p>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  For university book supplies or 100+ cartons of paper, contact our sales desk for customized freight rates.
                </p>
                <Link
                  to="/bulk-enquiry"
                  className="block text-center bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-1.5 rounded text-xs transition-colors"
                >
                  Request Bulk Quote
                </Link>
              </div>

            </div>
          </aside>

          {/* MAIN PRODUCT GRID & CONTROLS */}
          <div className="lg:col-span-3 space-y-4">
            
            {/* Top Toolbar: Search + Sort + Mobile Filter Toggle */}
            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
              
              {/* Keyword Filter input */}
              <div className="relative w-full sm:w-72">
                <input
                  type="text"
                  placeholder="Filter by keyword / brand / SKU..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg pl-8 pr-7 py-2 focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-900"
                />
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="absolute right-2 top-2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Right Controls: Sort & Mobile Filter Toggle */}
              <div className="flex items-center space-x-2 w-full sm:w-auto justify-between sm:justify-end">
                
                {/* Mobile Filter Trigger */}
                <button
                  type="button"
                  onClick={() => setMobileFilterOpen(true)}
                  className="lg:hidden flex items-center space-x-1.5 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-lg border border-slate-200"
                >
                  <Filter className="w-3.5 h-3.5" />
                  <span>Filters ({activeFiltersCount})</span>
                </button>

                {/* Sort dropdown */}
                <div className="flex items-center space-x-1.5">
                  <span className="text-[11px] font-semibold text-slate-500 hidden sm:inline">Sort:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="text-xs font-semibold bg-slate-50 border border-slate-300 text-slate-800 rounded-lg px-2.5 py-2 focus:outline-none focus:ring-1 focus:ring-slate-900"
                  >
                    <option value="featured">Featured / Bestsellers</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="moq-asc">MOQ: Low to High</option>
                    <option value="name-asc">Alphabetical (A - Z)</option>
                  </select>
                </div>

              </div>

            </div>

            {/* Active filter chips */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 text-xs">
                <span className="text-slate-500 text-[11px]">Active Filters:</span>
                
                {selectedCategory !== 'all' && (
                  <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full flex items-center space-x-1 text-[11px] font-semibold">
                    <span>Dept: {activeCategoryObj?.name}</span>
                    <button onClick={() => handleCategoryChange('all')}><X className="w-3 h-3 ml-1" /></button>
                  </span>
                )}

                {selectedBrand !== 'all' && (
                  <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full flex items-center space-x-1 text-[11px] font-semibold">
                    <span>Brand: {selectedBrand}</span>
                    <button onClick={() => setSelectedBrand('all')}><X className="w-3 h-3 ml-1" /></button>
                  </span>
                )}

                {bestsellerOnly && (
                  <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full flex items-center space-x-1 text-[11px] font-semibold">
                    <span>Bestsellers</span>
                    <button onClick={() => setBestsellerOnly(false)}><X className="w-3 h-3 ml-1" /></button>
                  </span>
                )}

                {searchTerm && (
                  <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full flex items-center space-x-1 text-[11px] font-semibold">
                    <span>Keyword: "{searchTerm}"</span>
                    <button onClick={() => setSearchTerm('')}><X className="w-3 h-3 ml-1" /></button>
                  </span>
                )}

                <button
                  onClick={handleClearFilters}
                  className="text-xs text-amber-700 font-bold hover:underline ml-2"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* PRODUCT GRID */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={(p) => setQuickViewProduct(p)}
                  />
                ))}
              </div>
            ) : (
              /* EMPTY STATE */
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                  <Package className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  No Wholesale Items Found Matching Criteria
                </h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Try adjusting your search terms or clearing the active department / brand filters to view all available stationery inventory.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="inline-flex items-center space-x-1.5 bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All Filters</span>
                </button>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* MOBILE FILTER MODAL DRAWER */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div 
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
            onClick={() => setMobileFilterOpen(false)}
          ></div>
          <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl p-5 overflow-y-auto flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Filter Products
                </h3>
                <button 
                  onClick={() => setMobileFilterOpen(false)}
                  className="text-slate-400 hover:text-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                  Department
                </label>
                <div className="space-y-1">
                  <button
                    onClick={() => { handleCategoryChange('all'); setMobileFilterOpen(false); }}
                    className={`w-full text-left text-xs py-1.5 px-2 rounded-lg flex justify-between ${selectedCategory === 'all' ? 'bg-amber-100 font-bold' : ''}`}
                  >
                    <span>All Departments</span>
                    <span>{PRODUCTS.length}</span>
                  </button>
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => { handleCategoryChange(cat.slug); setMobileFilterOpen(false); }}
                      className={`w-full text-left text-xs py-1.5 px-2 rounded-lg flex justify-between ${selectedCategory === cat.slug ? 'bg-amber-100 font-bold' : ''}`}
                    >
                      <span className="truncate pr-2">{cat.name}</span>
                      <span>{PRODUCTS.filter(p => p.category === cat.slug).length}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Brand */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                  Brand
                </label>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full text-xs p-2 bg-slate-100 border border-slate-300 rounded-lg"
                >
                  <option value="all">All Brands</option>
                  {allBrands.map(b => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              {/* Checkboxes */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-xs">
                  <input
                    type="checkbox"
                    checked={bestsellerOnly}
                    onChange={(e) => setBestsellerOnly(e.target.checked)}
                  />
                  <span>Bestsellers Only</span>
                </label>
                <label className="flex items-center space-x-2 text-xs">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                  />
                  <span>Ready Stock Only</span>
                </label>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-full bg-slate-900 text-white font-bold text-xs py-2.5 rounded-lg"
              >
                Apply Filters ({filteredProducts.length} Results)
              </button>
            </div>
          </div>
        </div>
      )}

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
