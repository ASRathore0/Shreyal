import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Truck, 
  Receipt, 
  Clock, 
  Award, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { COMPANY } from '../data/company';
import { CATEGORIES } from '../data/categories';
import { createWhatsAppUrl } from '../utils/whatsapp';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-14 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Trust Pillars Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-12 border-b border-slate-800">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 rounded-lg bg-slate-800 text-amber-400 flex items-center justify-center shrink-0 border border-slate-700">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Direct Mill Tie-Ups</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Authorized wholesale distributor sourcing directly from paper mills & manufacturing plants.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 rounded-lg bg-slate-800 text-amber-400 flex items-center justify-center shrink-0 border border-slate-700">
              <Receipt className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">100% Verified GST Invoicing</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Full Input Tax Credit (ITC) compliant billing with e-way bills generated instantly.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 rounded-lg bg-slate-800 text-amber-400 flex items-center justify-center shrink-0 border border-slate-700">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Pan-India Pallet Freight</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Moisture-barrier shrink packing and reliable door or godown delivery via trusted B2B carriers.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 rounded-lg bg-slate-800 text-amber-400 flex items-center justify-center shrink-0 border border-slate-700">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Established Since 1998</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                28+ years of dedicated service to schools, colleges, institutions, and stationery retailers.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Warehouses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-12 border-b border-slate-800">
          
          {/* Column 1: Company Profile & WhatsApp Quick CTA */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 shadow">
                <Package className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {COMPANY.name}
              </span>
            </div>

            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              India's leading institutional stationery supplier and wholesale distributor. Supplying over 2,500 active SKUs with dependable volume pricing and customized packaging for schools, universities, offices, and retail bookshops.
            </p>

            <div className="pt-2">
              <a
                href={createWhatsAppUrl("Hello Shreyal Stationery Solution! I am looking for a bulk quotation for our institution.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors shadow"
              >
                <span className="text-sm">💬</span>
                <span>Order Directly on WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="text-xs text-slate-400 space-y-1 pt-1">
              <p><strong className="text-slate-300">GSTIN:</strong> {COMPANY.gstin}</p>
              <p><strong className="text-slate-300">Sales Desk:</strong> {COMPANY.email}</p>
            </div>
          </div>

          {/* Column 2: Product Categories */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Stationery Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.slice(0, 6).map(cat => (
                <li key={cat.id}>
                  <Link 
                    to={`/products?category=${cat.slug}`}
                    className="hover:text-amber-400 transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-amber-400 mr-1" />
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/products" 
                  className="text-amber-400 hover:underline font-semibold flex items-center mt-2"
                >
                  View All 9 Departments &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Institutional Solutions & Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Wholesale Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/bulk-enquiry" className="hover:text-amber-400 transition-colors flex items-center group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-amber-400 mr-1" />
                  <span>Request Bulk Quote (RFQ)</span>
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-amber-400 transition-colors flex items-center group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-amber-400 mr-1" />
                  <span>Bulk Order Cart</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors flex items-center group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-amber-400 mr-1" />
                  <span>Wholesale Advantage</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors flex items-center group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-amber-400 mr-1" />
                  <span>Warehouse Hubs</span>
                </Link>
              </li>
              <li>
                <a 
                  href={createWhatsAppUrl("Hello, please share your school notebook customized branding guidelines.")}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-amber-400 transition-colors flex items-center group"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-amber-400 mr-1" />
                  <span>Custom School Logo Printing</span>
                </a>
              </li>
              <li>
                <a 
                  href={createWhatsAppUrl("Hi, please provide details on institutional credit terms for registered schools.")}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-amber-400 transition-colors flex items-center group"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-amber-400 mr-1" />
                  <span>Institutional Credit Terms</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Warehouse Locations & Contact */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Warehouse Hubs
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <p className="font-semibold text-white flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-amber-400 shrink-0" />
                  North India Central Warehouse:
                </p>
                <p className="text-slate-400 text-[11px] mt-0.5 pl-4.5">
                  Plot 42-B, Naraina Ind. Area Ph-1, New Delhi - 110028
                </p>
              </div>

              <div>
                <p className="font-semibold text-white flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-amber-400 shrink-0" />
                  West India Logistics Hub:
                </p>
                <p className="text-slate-400 text-[11px] mt-0.5 pl-4.5">
                  Bhiwandi Wholesale Park, Thane, Mumbai - 421302
                </p>
              </div>

              <div className="pt-1">
                <p className="flex items-center text-slate-300">
                  <Phone className="w-3 h-3 mr-1.5 text-amber-400" />
                  <a href={`tel:${COMPANY.rawPhone}`} className="hover:underline">{COMPANY.phone}</a>
                </p>
                <p className="flex items-center text-slate-400 text-[11px] mt-1">
                  <Clock className="w-3 h-3 mr-1.5 text-slate-500" />
                  {COMPANY.workingHours}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.name}. All Rights Reserved. All brand logos and trademarks belong to their respective manufacturers.
          </p>
          <div className="flex items-center space-x-4">
            <span>Wholesale B2B Catalog</span>
            <span>•</span>
            <span>Phase 1 WhatsApp Order Desk</span>
            <span>•</span>
            <span>GST ITC Compliant</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
