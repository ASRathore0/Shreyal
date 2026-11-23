import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye, Sparkles, Check, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { openWhatsApp, generateProductInquiryMessage } from '../utils/whatsapp';

export default function ProductCard({ product, onQuickView }) {
  const { addToCart } = useCart();
  const [selectedQty, setSelectedQty] = useState(product.moq || 1);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedQty);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  const handleWhatsAppEnquiry = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const message = generateProductInquiryMessage(product, selectedQty);
    openWhatsApp(message);
  };

  const discountPercent = product.mrp && product.unitPrice 
    ? Math.round(((product.mrp - product.unitPrice) / product.mrp) * 100) 
    : null;

  return (
    <div className="group bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden relative">
      
      {/* Top Badges */}
      <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1 items-start">
        {product.isBestseller && (
          <span className="bg-amber-500 text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded shadow-sm uppercase tracking-wide">
            Wholesale Bestseller
          </span>
        )}
        <span className="bg-slate-900/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded backdrop-blur-sm shadow-sm">
          MOQ: {product.moq} {product.unit}
        </span>
      </div>

      {discountPercent && (
        <div className="absolute top-2.5 right-2.5 z-10">
          <span className="bg-emerald-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm">
            Save {discountPercent}%
          </span>
        </div>
      )}

      {/* Product Image & Quick View trigger */}
      <div className="relative aspect-4/3 bg-slate-100 overflow-hidden cursor-pointer">
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Quick View Button on Hover */}
        {onQuickView && (
          <button
            onClick={(e) => {
              e.preventDefault();
              onQuickView(product);
            }}
            className="absolute bottom-2.5 right-2.5 bg-white/95 hover:bg-white text-slate-800 text-xs font-semibold px-2.5 py-1.5 rounded-lg shadow opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-1 backdrop-blur-xs"
            aria-label="Quick View Specs"
          >
            <Eye className="w-3.5 h-3.5 text-slate-600" />
            <span>Quick View</span>
          </button>
        )}
      </div>

      {/* Product Content Details */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & SKU */}
          <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
            <span className="font-semibold text-slate-600 uppercase tracking-wider">{product.brand}</span>
            <span className="font-mono text-[10px] text-slate-400">{product.sku}</span>
          </div>

          {/* Product Title */}
          <Link to={`/product/${product.id}`}>
            <h3 className="text-sm font-bold text-slate-900 hover:text-amber-700 transition-colors line-clamp-2 leading-snug">
              {product.name}
            </h3>
          </Link>

          {/* Pack info */}
          <p className="text-xs text-slate-500 mt-1 line-clamp-1">
            📦 {product.packSize}
          </p>

          {/* Short description */}
          <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Pricing & Volume Discounts */}
        <div className="mt-3 pt-3 border-t border-slate-100">
          <div className="flex items-baseline justify-between">
            <div>
              <div className="flex items-baseline space-x-1.5">
                <span className="text-lg font-bold text-slate-900">
                  ₹{product.unitPrice}
                </span>
                <span className="text-[11px] text-slate-500 font-normal">
                  / {product.unit}
                </span>
              </div>
              {product.mrp && (
                <div className="text-[11px] text-slate-400 space-x-1">
                  <span>MRP:</span>
                  <span className="line-through">₹{product.mrp}</span>
                  <span className="text-slate-400 text-[10px] font-normal">(Excl. GST)</span>
                </div>
              )}
            </div>

            {/* GST rate badge */}
            <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono">
              GST {product.gstRate}
            </span>
          </div>

          {/* Lowest Tier Rate teaser */}
          {product.tierPricing && product.tierPricing.length > 1 && (
            <div className="mt-1 text-[11px] text-emerald-700 font-medium">
              As low as ₹{product.tierPricing[product.tierPricing.length - 1].price}/{product.unit} in carton lots
            </div>
          )}

          {/* Quantity selector & Action Buttons */}
          <div className="mt-3 space-y-2">
            <div className="flex items-center space-x-2">
              <div className="flex items-center border border-slate-300 rounded-lg overflow-hidden bg-slate-50">
                <button
                  type="button"
                  onClick={() => setSelectedQty(Math.max(product.moq || 1, selectedQty - (product.moq > 5 ? 5 : 1)))}
                  className="px-2.5 py-1 text-slate-600 hover:bg-slate-200 font-bold text-sm"
                  title="Decrease"
                >
                  -
                </button>
                <input
                  type="number"
                  min={product.moq || 1}
                  value={selectedQty}
                  onChange={(e) => setSelectedQty(Math.max(product.moq || 1, parseInt(e.target.value) || (product.moq || 1)))}
                  className="w-12 text-center text-xs font-bold bg-white py-1 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setSelectedQty(selectedQty + (product.moq > 5 ? 5 : 1))}
                  className="px-2.5 py-1 text-slate-600 hover:bg-slate-200 font-bold text-sm"
                  title="Increase"
                >
                  +
                </button>
              </div>

              {/* Add to Cart button */}
              <button
                type="button"
                onClick={handleAddToCart}
                className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors shadow-xs ${
                  addedAnimation
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
              >
                {addedAnimation ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Added ({selectedQty})</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-3.5 h-3.5 text-amber-400" />
                    <span>Add to Bulk Cart</span>
                  </>
                )}
              </button>
            </div>

            {/* WhatsApp Enquiry button */}
            <button
              type="button"
              onClick={handleWhatsAppEnquiry}
              className="w-full py-1.5 px-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-lg text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors"
            >
              <span className="text-sm">💬</span>
              <span>Enquire on WhatsApp</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
