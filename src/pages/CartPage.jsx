import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Trash2, 
  ArrowLeft, 
  Send, 
  ShieldCheck, 
  FileText, 
  AlertTriangle, 
  CheckCircle2, 
  Truck, 
  Printer,
  RotateCcw
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { openWhatsApp, generateCartOrderMessage } from '../utils/whatsapp';
import { COMPANY } from '../data/company';

export default function CartPage() {
  const { 
    cart, 
    updateQuantity, 
    removeFromCart, 
    clearCart, 
    customerDetails, 
    setCustomerDetails,
    subtotal, 
    estimatedGst, 
    estimatedTotal,
    hasMoqViolations,
    moqViolationsList
  } = useCart();

  const [formErrors, setFormErrors] = useState({});
  const [showProformaPreview, setShowProformaPreview] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails(prev => ({
      ...prev,
      [name]: value
    }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!customerDetails.name?.trim()) errors.name = "Contact person name is required";
    if (!customerDetails.businessName?.trim()) errors.businessName = "School or Business name is required";
    if (!customerDetails.phone?.trim() || customerDetails.phone.trim().length < 10) {
      errors.phone = "Valid 10-digit WhatsApp number is required";
    }
    if (!customerDetails.location?.trim()) errors.location = "Delivery City & State is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePlaceOrderWhatsApp = (e) => {
    e.preventDefault();
    if (cart.length === 0) return;

    if (!validateForm()) {
      window.scrollTo({ top: 300, behavior: 'smooth' });
      return;
    }

    const message = generateCartOrderMessage(cart, customerDetails, {
      subtotal,
      estimatedGst,
      estimatedTotal
    });

    openWhatsApp(message);
  };

  if (cart.length === 0) {
    return (
      <div className="bg-slate-50 min-h-screen py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center mx-auto mb-4">
            <ShoppingCart className="w-10 h-10" />
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 font-heading">
            Your Bulk Order Cart is Empty
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
            You haven't added any stationery items to your wholesale quotation list yet. Browse our departments to select notebooks, copier paper, pens, and desk supplies.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/products"
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-6 py-3 rounded-xl shadow transition-colors"
            >
              Browse Wholesale Catalog
            </Link>
            <Link
              to="/bulk-enquiry"
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs px-6 py-3 rounded-xl shadow transition-colors"
            >
              Submit Custom Tender RFQ
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 mb-6 flex items-center space-x-1.5">
          <Link to="/" className="hover:text-slate-800">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-slate-800">Catalog</Link>
          <span>/</span>
          <span className="font-semibold text-slate-900">Bulk Order Cart & WhatsApp Checkout</span>
        </div>

        {/* Title & Clear All */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 mb-6 gap-3">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Wholesale Order Summary ({cart.length} SKUs)
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Review line items, confirm institution delivery details, and send directly to our WhatsApp dispatch desk.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={clearCart}
              className="text-xs text-red-600 hover:text-red-700 font-semibold flex items-center space-x-1"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Cart</span>
            </button>
            <Link
              to="/products"
              className="text-xs text-slate-700 hover:text-slate-900 font-semibold flex items-center space-x-1 bg-white px-3 py-1.5 rounded-lg border border-slate-200"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Add More Items</span>
            </Link>
          </div>
        </div>

        {/* MOQ Warning Banner if any */}
        {hasMoqViolations && (
          <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start space-x-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Minimum Order Quantity (MOQ) Alert</p>
              <p className="mt-0.5 text-amber-800">
                Some items in your cart are currently below the required wholesale MOQ:
              </p>
              <ul className="list-disc list-inside mt-1 font-medium">
                {moqViolationsList.map(item => (
                  <li key={item.id}>
                    {item.name}: Current {item.quantity} {item.unit} (MOQ is {item.moq} {item.unit})
                  </li>
                ))}
              </ul>
              <p className="mt-1 text-[11px] text-amber-700">
                You can still submit your enquiry on WhatsApp; our sales team will confirm whether small sample quantities can be accommodated.
              </p>
            </div>
          </div>
        )}

        {/* Main Grid: Cart Items List + Checkout Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT: Items Table (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="p-4 bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-700 grid grid-cols-12 gap-2">
                <span className="col-span-6">Stationery Item</span>
                <span className="col-span-3 text-center">Quantity</span>
                <span className="col-span-3 text-right">Subtotal</span>
              </div>

              <div className="divide-y divide-slate-100">
                {cart.map((item) => {
                  const lineTotal = item.unitPrice * item.quantity;
                  const isBelowMoq = item.quantity < item.moq;

                  return (
                    <div key={item.id} className="p-4 grid grid-cols-12 gap-3 items-center">
                      
                      {/* Product details */}
                      <div className="col-span-6 flex items-center space-x-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-14 h-14 object-cover rounded-lg border border-slate-200 shrink-0"
                        />
                        <div className="min-w-0">
                          <Link 
                            to={`/product/${item.id}`} 
                            className="text-xs font-bold text-slate-900 hover:text-amber-700 line-clamp-1"
                          >
                            {item.name}
                          </Link>
                          <p className="text-[11px] text-slate-500">{item.packSize}</p>
                          <div className="flex items-center space-x-2 text-[10px] text-slate-400 mt-0.5">
                            <span>SKU: {item.sku}</span>
                            <span>•</span>
                            <span className="text-slate-600 font-semibold">₹{item.unitPrice}/{item.unit}</span>
                          </div>
                          {isBelowMoq && (
                            <span className="text-[10px] text-amber-700 font-bold bg-amber-50 px-1.5 py-0.2 rounded mt-1 inline-block">
                              Below MOQ ({item.moq})
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Quantity Modifier */}
                      <div className="col-span-3 flex flex-col items-center">
                        <div className="flex items-center border border-slate-300 rounded-lg bg-slate-50">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="px-2 py-1 text-slate-700 font-bold hover:bg-slate-200 text-xs"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, e.target.value)}
                            className="w-10 text-center text-xs font-bold bg-white py-1 focus:outline-none"
                          />
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 text-slate-700 font-bold hover:bg-slate-200 text-xs"
                          >
                            +
                          </button>
                        </div>
                        <span className="text-[10px] text-slate-400 mt-0.5">{item.unit}s</span>
                      </div>

                      {/* Line Total & Remove button */}
                      <div className="col-span-3 text-right">
                        <div className="text-sm font-bold text-slate-900">
                          ₹{lineTotal.toLocaleString('en-IN')}
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="text-[11px] text-red-500 hover:text-red-700 mt-1 inline-flex items-center"
                        >
                          <Trash2 className="w-3 h-3 mr-0.5" /> Remove
                        </button>
                      </div>

                    </div>
                  );
                })}
              </div>

              {/* Cart Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-600">Total Unique SKUs: <strong>{cart.length}</strong></span>
                <span className="text-slate-600">Total Units: <strong>{cart.reduce((s, i) => s + i.quantity, 0)}</strong></span>
              </div>
            </div>

            {/* Wholesale Freight & GST Assurance Note */}
            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 text-xs text-blue-900 space-y-2">
              <div className="flex items-center space-x-2 font-bold text-blue-950">
                <Truck className="w-4 h-4 text-blue-700" />
                <span>Pan-India B2B Logistics Delivery</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Goods are dispatched from our Central Delhi or Mumbai logistics godowns via standard heavy transport carriers (V-Trans, TCI, SafeExpress). Freight charges are charged at actuals on To-Pay basis or billed directly on the GST invoice.
              </p>
            </div>
          </div>

          {/* RIGHT: Customer Details & WhatsApp Checkout Action (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 space-y-5">
              
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-2 border-b border-slate-100 flex items-center">
                <FileText className="w-4 h-4 mr-1.5 text-amber-600" />
                Customer &amp; Institution Details
              </h2>

              <form onSubmit={handlePlaceOrderWhatsApp} className="space-y-3.5">
                
                {/* Contact Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Contact Person Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={customerDetails.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Ramesh Sharma"
                    className={`w-full text-xs p-2.5 bg-slate-50 border rounded-lg focus:bg-white focus:outline-none focus:ring-1 ${
                      formErrors.name ? 'border-red-500 ring-red-500' : 'border-slate-300 focus:ring-slate-900'
                    }`}
                  />
                  {formErrors.name && <p className="text-[10px] text-red-500 mt-0.5">{formErrors.name}</p>}
                </div>

                {/* Business / School Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    School / Business / Institute Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={customerDetails.businessName}
                    onChange={handleInputChange}
                    placeholder="e.g. St. Xavier's Senior Secondary School"
                    className={`w-full text-xs p-2.5 bg-slate-50 border rounded-lg focus:bg-white focus:outline-none focus:ring-1 ${
                      formErrors.businessName ? 'border-red-500 ring-red-500' : 'border-slate-300 focus:ring-slate-900'
                    }`}
                  />
                  {formErrors.businessName && <p className="text-[10px] text-red-500 mt-0.5">{formErrors.businessName}</p>}
                </div>

                {/* Institution Type */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Buyer Category
                  </label>
                  <select
                    name="institutionType"
                    value={customerDetails.institutionType}
                    onChange={handleInputChange}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 focus:bg-white"
                  >
                    <option value="School / College">School / College</option>
                    <option value="Corporate Office">Corporate Office</option>
                    <option value="Retail Stationery Shop">Retail Stationery Shop</option>
                    <option value="Coaching Institute">Coaching Institute</option>
                    <option value="Wholesale Reseller">Wholesale Reseller</option>
                    <option value="Individual / Student">Individual / Student</option>
                  </select>
                </div>

                {/* WhatsApp Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      WhatsApp Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={customerDetails.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 9876543210"
                      className={`w-full text-xs p-2.5 bg-slate-50 border rounded-lg focus:bg-white focus:outline-none focus:ring-1 ${
                        formErrors.phone ? 'border-red-500 ring-red-500' : 'border-slate-300 focus:ring-slate-900'
                      }`}
                    />
                    {formErrors.phone && <p className="text-[10px] text-red-500 mt-0.5">{formErrors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={customerDetails.email}
                      onChange={handleInputChange}
                      placeholder="accounts@school.edu"
                      className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white"
                    />
                  </div>
                </div>

                {/* Delivery City & State */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Delivery City, State &amp; Pincode <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={customerDetails.location}
                    onChange={handleInputChange}
                    placeholder="e.g. Lucknow, Uttar Pradesh - 226010"
                    className={`w-full text-xs p-2.5 bg-slate-50 border rounded-lg focus:bg-white focus:outline-none focus:ring-1 ${
                      formErrors.location ? 'border-red-500 ring-red-500' : 'border-slate-300 focus:ring-slate-900'
                    }`}
                  />
                  {formErrors.location && <p className="text-[10px] text-red-500 mt-0.5">{formErrors.location}</p>}
                </div>

                {/* GSTIN (Optional) */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    GSTIN Number (Optional for Input Tax Credit)
                  </label>
                  <input
                    type="text"
                    name="gstin"
                    value={customerDetails.gstin}
                    onChange={handleInputChange}
                    placeholder="e.g. 09AAACB1234F1Z5"
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white uppercase font-mono"
                  />
                </div>

                {/* Special Instructions */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Special Packaging / Delivery Instructions
                  </label>
                  <textarea
                    rows={2}
                    name="notes"
                    value={customerDetails.notes}
                    onChange={handleInputChange}
                    placeholder="e.g. Require student kit individual packing; Delivery required before 15th..."
                    className="w-full text-xs p-2 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white resize-none"
                  ></textarea>
                </div>

                {/* Price Breakdown Summary */}
                <div className="pt-3 border-t border-slate-200 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Items Subtotal:</span>
                    <span className="font-semibold text-slate-900">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Estimated GST (Composite ~15%):</span>
                    <span className="font-semibold text-slate-900">₹{estimatedGst.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-slate-500 text-[11px]">
                    <span>B2B Freight / Transport:</span>
                    <span className="font-medium text-emerald-700">As per actuals / To-Pay</span>
                  </div>
                  <div className="pt-2 border-t border-slate-200 flex justify-between items-baseline">
                    <span className="text-sm font-bold text-slate-900">Estimated Total:</span>
                    <div className="text-right">
                      <span className="text-xl font-black text-slate-900">
                        ₹{estimatedTotal.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] text-slate-400 block font-normal">(Excl. Freight)</span>
                    </div>
                  </div>
                </div>

                {/* PRIMARY CHECKOUT CTA */}
                <div className="pt-3 space-y-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold flex items-center justify-center space-x-2 transition-all shadow-lg hover:shadow-xl"
                  >
                    <span className="text-lg">💬</span>
                    <span>Place Order on WhatsApp</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-500 leading-snug">
                    Clicking opens WhatsApp with your complete order list formatted ready to send to <strong>{COMPANY.phone}</strong>. Our accounts desk will immediately reply with a GST Proforma Invoice.
                  </p>
                </div>

              </form>

            </div>

            {/* Proforma Invoice Preview Toggle */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs flex items-center justify-between">
              <span className="text-slate-600 font-medium">Want to inspect the formatted text before sending?</span>
              <button
                type="button"
                onClick={() => setShowProformaPreview(!showProformaPreview)}
                className="font-bold text-amber-700 hover:underline"
              >
                {showProformaPreview ? 'Hide Message' : 'Preview Message'}
              </button>
            </div>

            {showProformaPreview && (
              <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-[11px] whitespace-pre-wrap max-h-60 overflow-y-auto border border-slate-700">
                {generateCartOrderMessage(cart, customerDetails, { subtotal, estimatedGst, estimatedTotal })}
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
