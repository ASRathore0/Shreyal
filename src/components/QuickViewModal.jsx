import React, { useState } from 'react';
import { X, ShoppingCart, ShieldCheck, Check, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { openWhatsApp, generateProductInquiryMessage } from '../utils/whatsapp';
import { Link } from 'react-router-dom';

export default function QuickViewModal({ product, onClose }) {
  if (!product) return null;

  const { addToCart } = useCart();
  const [selectedQty, setSelectedQty] = useState(product.moq || 1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, selectedQty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleWhatsApp = () => {
    const msg = generateProductInquiryMessage(product, selectedQty);
    openWhatsApp(msg);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-100"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image */}
          <div>
            <div className="aspect-square rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover" 
              />
            </div>
            <p className="text-[11px] text-center text-slate-400 mt-2">
              SKU: {product.sku} | HSN: {product.hsnCode} | GST: {product.gstRate}
            </p>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                {product.brand}
              </span>

              <h2 className="text-lg font-bold text-slate-900 mt-1.5 leading-snug">
                {product.name}
              </h2>

              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {product.shortDescription}
              </p>

              <div className="my-3 p-2.5 bg-slate-50 rounded-lg border border-slate-200 space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Pack Packaging:</span>
                  <span className="font-semibold text-slate-800">{product.packSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Wholesale MOQ:</span>
                  <span className="font-bold text-slate-900">{product.moq} {product.unit}</span>
                </div>
                {product.masterCarton && (
                  <div className="flex justify-between">
                    <span className="text-slate-500">Master Shipper:</span>
                    <span className="text-slate-700">{product.masterCarton}</span>
                  </div>
                )}
              </div>

              {/* Tier Pricing table */}
              {product.tierPricing && (
                <div className="mb-3">
                  <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Wholesale Volume Tiers
                  </p>
                  <div className="grid grid-cols-3 gap-1.5 text-center text-xs">
                    {product.tierPricing.map((tier, idx) => (
                      <div key={idx} className="bg-slate-100 p-1.5 rounded border border-slate-200">
                        <span className="block text-[10px] text-slate-500">{tier.label}</span>
                        <span className="font-bold text-slate-900">₹{tier.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="pt-3 border-t border-slate-200 space-y-2">
              <div className="flex items-center space-x-3">
                <div className="flex items-center border border-slate-300 rounded-lg bg-slate-50">
                  <button 
                    onClick={() => setSelectedQty(Math.max(product.moq || 1, selectedQty - 1))}
                    className="px-3 py-1.5 font-bold text-slate-700 hover:bg-slate-200"
                  >-</button>
                  <span className="px-3 text-xs font-bold text-slate-900">{selectedQty}</span>
                  <button 
                    onClick={() => setSelectedQty(selectedQty + 1)}
                    className="px-3 py-1.5 font-bold text-slate-700 hover:bg-slate-200"
                  >+</button>
                </div>
                
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-2.5 px-4 rounded-lg flex items-center justify-center space-x-1.5 shadow"
                >
                  {added ? <Check className="w-4 h-4 text-emerald-400" /> : <ShoppingCart className="w-4 h-4 text-amber-400" />}
                  <span>{added ? 'Added to Cart' : `Add ${selectedQty} to Cart`}</span>
                </button>
              </div>

              <button
                onClick={handleWhatsApp}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2 rounded-lg flex items-center justify-center space-x-1.5"
              >
                <span>💬 Enquire on WhatsApp</span>
              </button>

              <div className="text-center pt-1">
                <Link
                  to={`/product/${product.id}`}
                  onClick={onClose}
                  className="text-xs text-slate-600 hover:text-slate-900 font-semibold underline"
                >
                  View Full Specifications & Technical Data &rarr;
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
