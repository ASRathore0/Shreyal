import React, { useState } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  Clock, 
  FileSpreadsheet, 
  ShieldCheck, 
  ChevronRight,
  PhoneCall
} from 'lucide-react';
import { COMPANY } from '../data/company';
import { QUICK_WHATSAPP_QUERIES, openWhatsApp } from '../utils/whatsapp';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [customQuery, setCustomQuery] = useState('');

  const handleSendCustom = (e) => {
    e.preventDefault();
    if (customQuery.trim()) {
      openWhatsApp(customQuery);
      setCustomQuery('');
      setIsOpen(false);
    }
  };

  const handleQuickTemplate = (message) => {
    openWhatsApp(message);
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Trigger Button (Desktop & Tablet only - hidden on mobile to avoid overlapping floating dock) */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end">
        
        {/* Pulsing prompt badge when closed */}
        {!isOpen && (
          <div 
            onClick={() => setIsOpen(true)}
            className="mb-2 hidden sm:flex items-center space-x-2 bg-slate-900 text-white text-xs px-3.5 py-1.5 rounded-full shadow-lg border border-slate-700 cursor-pointer hover:bg-slate-800 transition-all group animate-bounce duration-1000"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-medium group-hover:text-amber-300">Quick WhatsApp Enquiry</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-105 focus:outline-none ${
            isOpen 
              ? 'bg-slate-800 text-white rotate-90' 
              : 'bg-emerald-600 hover:bg-emerald-500 text-white'
          }`}
          aria-label="Open WhatsApp Chat Assistant"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <div className="relative">
              <span className="text-2xl leading-none">💬</span>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full border-2 border-emerald-600"></span>
            </div>
          )}
        </button>
      </div>

      {/* Floating Interactive Chat Panel (Desktop & Tablet) */}
      {isOpen && (
        <div className="hidden md:block fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4">
          
          {/* Header */}
          <div className="bg-slate-900 text-white p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xs shadow tracking-wider">
                  SSS
                </div>
                <div>
                  <h3 className="text-sm font-bold leading-tight">Shreyal Stationery Desk</h3>
                  <div className="flex items-center space-x-1.5 text-[11px] text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Online | Quick Reply (15 mins)</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-[11px] text-slate-300 leading-snug">
              Chat directly with our B2B account managers for immediate stock checks, institutional tenders, and proforma invoices.
            </p>
          </div>

          {/* Quick Query Templates */}
          <div className="p-3 bg-slate-50 border-b border-slate-200">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center">
              <Sparkles className="w-3 h-3 mr-1 text-amber-500" /> 1-Click Wholesale Queries:
            </div>
            <div className="space-y-1.5">
              {QUICK_WHATSAPP_QUERIES.map(q => (
                <button
                  key={q.id}
                  onClick={() => handleQuickTemplate(q.message)}
                  className="w-full text-left text-xs bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 p-2 rounded-lg font-medium text-slate-700 hover:text-emerald-900 transition-colors flex items-center justify-between group"
                >
                  <span className="truncate pr-2">{q.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Custom Message Box */}
          <form onSubmit={handleSendCustom} className="p-3 bg-white">
            <label className="block text-[11px] font-semibold text-slate-500 mb-1.5">
              Or type your specific requirement:
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Need 50 cartons JK Copier paper delivered to Jaipur..."
              value={customQuery}
              onChange={(e) => setCustomQuery(e.target.value)}
              className="w-full text-xs p-2.5 bg-slate-100 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500 resize-none text-slate-800 placeholder:text-slate-400"
            ></textarea>
            
            <button
              type="submit"
              disabled={!customQuery.trim()}
              className="w-full mt-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-xs py-2 rounded-lg flex items-center justify-center space-x-1.5 transition-colors shadow-sm"
            >
              <span>Open in WhatsApp</span>
              <Send className="w-3.5 h-3.5" />
            </button>

            <div className="mt-2 text-center text-[10px] text-slate-400 flex items-center justify-center space-x-1">
              <ShieldCheck className="w-3 h-3 text-emerald-500" />
              <span>Official Business WhatsApp: {COMPANY.phone}</span>
            </div>
          </form>

        </div>
      )}
    </>
  );
}
