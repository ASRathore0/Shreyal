import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  Truck, 
  Package, 
  Award, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Factory
} from 'lucide-react';
import { COMPANY } from '../data/company';
import { createWhatsAppUrl } from '../utils/whatsapp';

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            About Our Company
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
            Pioneering Stationery Wholesale &amp; Institutional Supply Since 1998
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
            Headquartered in New Delhi with logistical distribution facilities in Mumbai, Shreyal Stationery Solution is one of India's most dependable bulk suppliers of paper products, writing instruments, and educational essentials.
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {COMPANY.stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs text-center">
              <span className="text-3xl font-black text-slate-900 font-heading block">{stat.value}</span>
              <span className="text-xs font-bold text-amber-700 mt-1 block">{stat.label}</span>
              <p className="text-[11px] text-slate-500 mt-1 leading-snug">{stat.detail}</p>
            </div>
          ))}
        </div>

        {/* Narrative & Infrastructure */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs mb-12 space-y-6">
          <h2 className="text-xl font-bold text-slate-900 font-heading">
            Our Wholesale Infrastructure &amp; Supply Chain
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <p>
              Founded in 1998 in the heart of Delhi's commercial trading hub, Shreyal Stationery Solution started as a master distributor for regional paper converters. Over the past 28 years, we have expanded into a state-of-the-art multi-city warehousing network supplying over 1,200 educational institutions, universities, IT parks, and retail stationery stores across North, West, and Central India.
            </p>
            <p>
              By establishing direct procurement partnerships with leading mills—including JK Paper, ITC Classmate, Cello, Camlin Kokuyo, Kangaro, and Solo—we eliminate intermediate distributor margins and offer genuine wholesale carton rates with verified GST input tax credits and rapid transport turnarounds.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <Factory className="w-5 h-5 text-amber-600 mb-2" />
              <h4 className="text-xs font-bold text-slate-900 mb-1">Central Warehouse Delhi</h4>
              <p className="text-[11px] text-slate-500">
                Over 25,000 sq.ft. of moisture-controlled storage for paper reams and student notebooks.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <Truck className="w-5 h-5 text-amber-600 mb-2" />
              <h4 className="text-xs font-bold text-slate-900 mb-1">Western Hub Mumbai</h4>
              <p className="text-[11px] text-slate-500">
                Dedicated B2B logistics node at Bhiwandi catering to Maharashtra and Gujarat buyers.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <Package className="w-5 h-5 text-amber-600 mb-2" />
              <h4 className="text-xs font-bold text-slate-900 mb-1">Custom Assembly Unit</h4>
              <p className="text-[11px] text-slate-500">
                Automated bundling line for customized student book-sets and customized school logo printing.
              </p>
            </div>
          </div>
        </div>

        {/* Corporate Trust Badges */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 mb-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold font-heading">
              Ready to Upgrade Your Stationery Supply Chain?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Send your annual requirements or bill of materials to our procurement desk today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              to="/products"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs px-6 py-3 rounded-xl text-center"
            >
              Browse Catalog
            </Link>
            <a
              href={createWhatsAppUrl("Hello Shreyal Stationery Solution! I would like to explore a partnership for our institution.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-6 py-3 rounded-xl text-center"
            >
              Connect on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
