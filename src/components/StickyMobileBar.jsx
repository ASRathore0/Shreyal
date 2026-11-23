import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, FileText, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { createWhatsAppUrl } from '../utils/whatsapp';

export default function StickyMobileBar() {
  const { totalItemsCount, subtotal, estimatedTotal } = useCart();
  const location = useLocation();

  // If user is already on the Cart page, provide a contextual fast-action floating bar
  if (location.pathname === '/cart') {
    return (
      <div className="fixed bottom-3.5 inset-x-3 z-40 md:hidden max-w-md mx-auto">
        <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700/90 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.5)] p-2 flex items-stretch justify-between gap-2">
          <Link
            to="/products"
            className="h-12 px-3.5 rounded-xl flex items-center justify-center space-x-1.5 text-slate-300 hover:text-white bg-slate-800/90 text-xs font-semibold shrink-0 border border-slate-700/80 active:scale-95 transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-slate-400" />
            <span>Catalog</span>
          </Link>

          <a
            href={createWhatsAppUrl(`Hello Shreyal Stationery Solution, I am ready to place an order for ${totalItemsCount} stationery items (Estimated ₹${estimatedTotal.toLocaleString('en-IN')}). Please prepare our GST invoice.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 flex-1 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-lg shadow-emerald-950/40 active:scale-98 transition-all"
          >
            <span className="text-base leading-none">💬</span>
            <span className="truncate">Confirm via WhatsApp</span>
          </a>
        </div>
      </div>
    );
  }

  // If user is on Bulk RFQ page, provide a contextual bar to catalog or direct WhatsApp
  if (location.pathname === '/bulk-enquiry') {
    return (
      <div className="fixed bottom-3.5 inset-x-3 z-40 md:hidden max-w-md mx-auto">
        <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700/90 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.5)] p-2 flex items-stretch justify-between gap-2">
          <Link
            to="/products"
            className="h-12 px-3.5 rounded-xl flex items-center justify-center space-x-1.5 text-slate-300 hover:text-white bg-slate-800/90 text-xs font-semibold shrink-0 border border-slate-700/80 active:scale-95 transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-slate-400" />
            <span>Products</span>
          </Link>

          <a
            href={createWhatsAppUrl("Hello Shreyal Stationery Solution, I want to discuss an institutional annual tender/bulk order quotation.")}
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 flex-1 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-lg shadow-emerald-950/40 active:scale-98 transition-all"
          >
            <span className="text-base leading-none">💬</span>
            <span className="truncate">Talk to Sales Desk</span>
          </a>
        </div>
      </div>
    );
  }

  // Standard Floating Island Dock for all other pages with pixel-perfect matching heights
  return (
    <div className="fixed bottom-3.5 inset-x-3 z-40 md:hidden max-w-md mx-auto">
      <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700/90 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.5)] p-2 flex items-stretch justify-between gap-2">
        
        {/* 1. Left: Cart Capsule (Fixed h-12 with vertically centered content) */}
        <Link 
          to="/cart"
          className="h-12 px-3 rounded-xl flex items-center space-x-2.5 bg-slate-800/90 hover:bg-slate-800 text-white shrink-0 border border-slate-700/80 active:scale-95 transition-all shadow-xs"
          aria-label="View Bulk Cart"
        >
          <div className="relative shrink-0">
            <ShoppingCart className="w-4 h-4 text-amber-400" />
            {totalItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[9px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                {totalItemsCount > 99 ? '99+' : totalItemsCount}
              </span>
            )}
          </div>
          <div className="text-left flex flex-col justify-center leading-tight">
            <span className="text-[10px] text-slate-400 font-medium">Cart</span>
            <span className="text-xs font-extrabold text-amber-300 font-mono tracking-tight">
              ₹{subtotal.toLocaleString('en-IN')}
            </span>
          </div>
        </Link>

        {/* 2. Center: WhatsApp Order Button (Identical h-12) */}
        <a
          href={createWhatsAppUrl("Hello Shreyal Stationery Solution, I have an urgent wholesale inquiry for our institution.")}
          target="_blank"
          rel="noopener noreferrer"
          className="h-12 flex-1 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-lg shadow-emerald-950/40 active:scale-98 transition-all px-3"
        >
          <span className="text-base leading-none shrink-0">💬</span>
          <span className="truncate">WhatsApp Order</span>
        </a>

        {/* 3. Right: Bulk RFQ Button (Identical h-12) */}
        <Link
          to="/bulk-enquiry"
          className="h-12 px-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center justify-center space-x-1.5 shadow-md shadow-amber-950/30 shrink-0 active:scale-95 transition-all"
          title="Request Bulk Quotation"
        >
          <FileText className="w-4 h-4 shrink-0" />
          <span>RFQ</span>
        </Link>

      </div>
    </div>
  );
}
