import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Send, 
  ShieldCheck, 
  Clock, 
  Truck, 
  CheckCircle2, 
  Building, 
  Phone, 
  Mail,
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { COMPANY } from '../data/company';
import { openWhatsApp, generateBulkRfqMessage } from '../utils/whatsapp';

export default function BulkEnquiryPage() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    institutionType: 'School / College',
    phone: '',
    email: '',
    location: '',
    gstin: '',
    estimatedQuantity: '50 - 200 Cartons / Sets',
    budget: '₹50,000 – ₹1,00,000',
    customBranding: false,
    categories: ['Notebooks & Registers', 'Paper & Printing'],
    requirements: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleCategoryToggle = (categoryName) => {
    setFormData(prev => {
      const exists = prev.categories.includes(categoryName);
      if (exists) {
        return { ...prev, categories: prev.categories.filter(c => c !== categoryName) };
      } else {
        return { ...prev, categories: [...prev.categories, categoryName] };
      }
    });
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Contact name is required";
    if (!formData.businessName.trim()) errs.businessName = "Institution/Business name is required";
    if (!formData.phone.trim() || formData.phone.trim().length < 10) {
      errs.phone = "Valid 10-digit WhatsApp phone number is required";
    }
    if (!formData.location.trim()) errs.location = "Delivery city and state is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      window.scrollTo({ top: 150, behavior: 'smooth' });
      return;
    }

    const message = generateBulkRfqMessage(formData);
    openWhatsApp(message);
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Institutional Procurement Desk
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
            Request Institutional Bulk Quotation (RFQ)
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            Need customized pricing for an upcoming academic session, corporate annual contract, coaching test series, or retail shop replenishment? Submit your requirements below to receive a formal GST quotation directly on WhatsApp within 30 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main RFQ Form (8 cols) */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8">
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Section 1: Customer & Institution */}
                <div>
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider pb-2 border-b border-slate-100 flex items-center">
                    <Building className="w-4 h-4 mr-1.5 text-amber-600" />
                    1. Institution &amp; Contact Details
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Contact Person Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Dr. Arvind Saxena"
                        className={`w-full text-xs p-2.5 bg-slate-50 border rounded-lg focus:bg-white focus:outline-none focus:ring-1 ${
                          errors.name ? 'border-red-500 ring-red-500' : 'border-slate-300 focus:ring-slate-900'
                        }`}
                      />
                      {errors.name && <p className="text-[10px] text-red-500 mt-0.5">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        School / Business / Institute Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        placeholder="e.g. Modern Public Academy"
                        className={`w-full text-xs p-2.5 bg-slate-50 border rounded-lg focus:bg-white focus:outline-none focus:ring-1 ${
                          errors.businessName ? 'border-red-500 ring-red-500' : 'border-slate-300 focus:ring-slate-900'
                        }`}
                      />
                      {errors.businessName && <p className="text-[10px] text-red-500 mt-0.5">{errors.businessName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Institution Type
                      </label>
                      <select
                        name="institutionType"
                        value={formData.institutionType}
                        onChange={handleInputChange}
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 focus:bg-white"
                      >
                        <option value="School / College">School / College</option>
                        <option value="Coaching Institute / Academy">Coaching Institute / Academy</option>
                        <option value="Corporate Office">Corporate Office</option>
                        <option value="Retail Stationery Shop">Retail Stationery Shop</option>
                        <option value="Reseller / Distributor">Reseller / Distributor</option>
                        <option value="Govt Organization / Tender">Govt Organization / Tender</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. 9876543210"
                        className={`w-full text-xs p-2.5 bg-slate-50 border rounded-lg focus:bg-white focus:outline-none focus:ring-1 ${
                          errors.phone ? 'border-red-500 ring-red-500' : 'border-slate-300 focus:ring-slate-900'
                        }`}
                      />
                      {errors.phone && <p className="text-[10px] text-red-500 mt-0.5">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="director@school.com"
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Delivery City &amp; State <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="e.g. Chandigarh, Punjab"
                        className={`w-full text-xs p-2.5 bg-slate-50 border rounded-lg focus:bg-white focus:outline-none focus:ring-1 ${
                          errors.location ? 'border-red-500 ring-red-500' : 'border-slate-300 focus:ring-slate-900'
                        }`}
                      />
                      {errors.location && <p className="text-[10px] text-red-500 mt-0.5">{errors.location}</p>}
                    </div>
                  </div>
                </div>

                {/* Section 2: Required Categories */}
                <div>
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider pb-2 border-b border-slate-100 flex items-center">
                    <FileText className="w-4 h-4 mr-1.5 text-amber-600" />
                    2. Product Categories Needed
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1 mb-3">
                    Select all departments you need in this bulk supply:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {CATEGORIES.map(cat => {
                      const isChecked = formData.categories.includes(cat.name);
                      return (
                        <label
                          key={cat.id}
                          className={`p-2.5 rounded-lg border text-xs cursor-pointer flex items-center space-x-2 transition-all ${
                            isChecked
                              ? 'bg-amber-50 border-amber-300 text-amber-950 font-bold'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleCategoryToggle(cat.name)}
                            className="rounded border-slate-300 text-amber-600 focus:ring-amber-500"
                          />
                          <span>{cat.name}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Section 3: Volume & Specifications */}
                <div>
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider pb-2 border-b border-slate-100 flex items-center">
                    <Truck className="w-4 h-4 mr-1.5 text-amber-600" />
                    3. Volume &amp; Specifications
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Estimated Order Volume
                      </label>
                      <select
                        name="estimatedQuantity"
                        value={formData.estimatedQuantity}
                        onChange={handleInputChange}
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-800"
                      >
                        <option value="10 - 25 Cartons / Sets (Sample/Trial)">10 - 25 Cartons / Sets (Trial Order)</option>
                        <option value="50 - 200 Cartons / Sets (Regular Supply)">50 - 200 Cartons / Sets (Regular Supply)</option>
                        <option value="200 - 500 Cartons (Quarterly/Session)">200 - 500 Cartons (Session Lot)</option>
                        <option value="500+ Cartons / Full Pallet Truckload">500+ Cartons / Full Pallet Truckload</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Target Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-800"
                      >
                        <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
                        <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>
                        <option value="₹1,00,000 – ₹2,50,000">₹1,00,000 – ₹2,50,000</option>
                        <option value="₹2,50,000+ (Institutional Tender)">₹2,50,000+ (Institutional Tender)</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-3">
                    <label className="flex items-center space-x-2 text-xs font-semibold text-slate-800 bg-amber-50/50 p-2.5 rounded-lg border border-amber-200 cursor-pointer">
                      <input
                        type="checkbox"
                        name="customBranding"
                        checked={formData.customBranding}
                        onChange={handleInputChange}
                        className="rounded border-slate-300 text-amber-600 focus:ring-amber-500"
                      />
                      <span>Require Custom School/Company Logo Printing on Notebooks &amp; Files</span>
                    </label>
                  </div>

                  <div className="mt-3">
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Detailed Item List / Specific Brands / Requirements
                    </label>
                    <textarea
                      rows={4}
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      placeholder="e.g. 50 cartons JK Copier 75 GSM, 1,200 Classmate Long Notebooks (Single Line), 300 boxes Cello Butterflow blue, 50 Kangaro HD-10 staplers..."
                      className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl flex items-center justify-center space-x-2 transition-all shadow-lg hover:shadow-xl"
                  >
                    <span className="text-lg">💬</span>
                    <span>Submit &amp; Open WhatsApp RFQ</span>
                  </button>
                  <p className="text-[11px] text-center text-slate-500 mt-2">
                    Our institutional quotation desk receives this structured RFQ instantly and prepares your discounted quotation.
                  </p>
                </div>

              </form>

            </div>
          </div>

          {/* Right Column: Wholesale Guarantees & Warehouse Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            
            <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-xs space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400">
                Institutional Assurances
              </h3>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start space-x-2.5">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">30-Minute Quotation Turnaround:</strong>
                    Fast response during warehouse operational hours.
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Physical Sample Boxes:</strong>
                    Sample paper packs and registers dispatched for verified schools &amp; colleges.
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <Truck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Palletized Transport:</strong>
                    Moisture barrier wrapping for zero monsoon humidity or transit dust.
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">GST Input Tax Credit:</strong>
                    Fully compliant e-way bills with formal tax invoice.
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Helpline card */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3 text-xs">
              <h4 className="font-bold text-slate-900">Direct Institutional Desk</h4>
              <p className="text-slate-600">
                Prefer to speak with our institutional sales manager directly?
              </p>
              <div className="space-y-2 pt-1 font-semibold text-slate-800">
                <a href={`tel:${COMPANY.rawPhone}`} className="flex items-center text-slate-900 hover:text-amber-700">
                  <Phone className="w-4 h-4 mr-2 text-amber-600" />
                  {COMPANY.phone}
                </a>
                <a href={`mailto:${COMPANY.email}`} className="flex items-center text-slate-900 hover:text-amber-700">
                  <Mail className="w-4 h-4 mr-2 text-amber-600" />
                  {COMPANY.email}
                </a>
              </div>
              <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500">
                Hours: Mon – Sat, 9:30 AM to 7:30 PM IST
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
