import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Building, 
  ExternalLink,
  MessageSquare,
  Truck
} from 'lucide-react';
import { COMPANY } from '../data/company';
import { createWhatsAppUrl } from '../utils/whatsapp';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Contact &amp; Logistics Hubs
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
            Connect With Our Wholesale Sales Desk
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Reach out via WhatsApp, phone, or visit our central warehouses in New Delhi or Mumbai.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Warehouse Hubs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {COMPANY.addresses.map((addr, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-heading">
                    {addr.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 pl-10 leading-relaxed">
                  {addr.address}
                </p>

                <div className="pl-10 flex flex-wrap items-center gap-4 text-xs pt-1">
                  <a href={`tel:${addr.phone.replace(/[^0-9]/g, '')}`} className="font-bold text-slate-900 hover:text-amber-700 flex items-center">
                    <Phone className="w-3.5 h-3.5 mr-1.5 text-amber-600" />
                    {addr.phone}
                  </a>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-500">Warehouse Godown Pickup Available</span>
                </div>
              </div>
            ))}

            {/* Timings & GST credentials */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-3 text-xs">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Operational Schedule &amp; Commercial Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-600 pt-1">
                <div>
                  <span className="text-slate-400 block font-medium">Business Working Hours:</span>
                  <strong className="text-slate-800">{COMPANY.workingHours}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Verified GSTIN (Delhi):</span>
                  <strong className="text-slate-800 font-mono">{COMPANY.gstin}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Institutional Quotations:</span>
                  <strong className="text-slate-800">{COMPANY.email}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Transport Carriers:</span>
                  <strong className="text-slate-800">V-Trans, TCI, Safexpress, Delhivery B2B</strong>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Contact Actions (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-lg space-y-4">
              <h3 className="text-base font-bold text-amber-400 font-heading">
                Instant WhatsApp Quotation Desk
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Send your list of items, product codes, or tender PDF directly to our sales coordinator on WhatsApp. We typically reply within 15–30 minutes during business hours.
              </p>

              <a
                href={createWhatsAppUrl("Hello Shreyal Stationery Solution! I would like to get in touch with your wholesale representative.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 rounded-xl flex items-center justify-center space-x-2 transition-colors shadow"
              >
                <span className="text-base">💬</span>
                <span>Chat on WhatsApp ({COMPANY.phone})</span>
              </a>

              <div className="pt-2 text-center text-[11px] text-slate-400">
                Direct WhatsApp Helpline available 6 days a week
              </div>
            </div>

            {/* RFQ Form Prompt */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs text-center space-y-3">
              <h4 className="font-bold text-slate-900 text-sm">Need a Formal Institutional RFQ?</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                If you have a multi-page list with specific packaging and customized school branding requirements, use our structured RFQ form.
              </p>
              <Link
                to="/bulk-enquiry"
                className="inline-block bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs px-5 py-2.5 rounded-lg shadow-sm transition-colors"
              >
                Open Institutional RFQ Form
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
