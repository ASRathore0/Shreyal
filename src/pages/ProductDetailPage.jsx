import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ShoppingCart, 
  ShieldCheck, 
  Truck, 
  Receipt, 
  Package, 
  Check, 
  ChevronRight, 
  ArrowLeft,
  FileText,
  Share2,
  Clock,
  Sparkles,
  Award
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { openWhatsApp, generateProductInquiryMessage } from '../utils/whatsapp';
import ProductCard from '../components/ProductCard';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = PRODUCTS.find(p => p.id === id);

  // If product not found
  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Product Not Found</h2>
        <p className="text-sm text-slate-500 mb-6">The requested stationery product SKU is not in our active catalog.</p>
        <Link to="/products" className="bg-slate-900 text-white text-xs font-bold px-5 py-2.5 rounded-lg">
          Browse All Products
        </Link>
      </div>
    );
  }

  const [activeImage, setActiveImage] = useState(product.gallery?.[0] || product.image);
  const [quantity, setQuantity] = useState(product.moq || 1);
  const [added, setAdded] = useState(false);

  // Calculate active tier price
  const activeTier = product.tierPricing?.find(t => quantity >= t.minQty && quantity <= t.maxQty) 
    || product.tierPricing?.[product.tierPricing.length - 1];
  
  const currentPrice = activeTier ? activeTier.price : product.unitPrice;
  const estimatedLineTotal = currentPrice * quantity;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleWhatsAppEnquiry = () => {
    const msg = generateProductInquiryMessage(product, quantity);
    openWhatsApp(msg);
  };

  // Related products from same category
  const relatedProducts = PRODUCTS
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb Navigation */}
        <nav className="text-xs text-slate-500 mb-6 flex items-center space-x-1.5 overflow-x-auto whitespace-nowrap pb-1">
          <Link to="/" className="hover:text-slate-800">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to="/products" className="hover:text-slate-800">Catalog</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to={`/products?category=${product.category}`} className="hover:text-slate-800">
            {product.categoryName}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-900 truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Main Product Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden p-6 lg:p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column: Image Gallery */}
            <div className="lg:col-span-5 space-y-4">
              {/* Main Image */}
              <div className="aspect-square bg-slate-100 rounded-xl overflow-hidden border border-slate-200 relative group">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.isBestseller && (
                  <span className="absolute top-3 left-3 bg-amber-500 text-slate-950 text-xs font-extrabold px-2.5 py-1 rounded shadow uppercase tracking-wide">
                    Wholesale Bestseller
                  </span>
                )}
              </div>

              {/* Thumbnail Selector */}
              {product.gallery && product.gallery.length > 1 && (
                <div className="flex items-center space-x-3 overflow-x-auto pb-1">
                  {product.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                        activeImage === img ? 'border-amber-500 shadow-sm' : 'border-slate-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`${product.name} ${idx}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* SKU & Compliance Metadata */}
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs space-y-1.5 text-slate-600">
                <div className="flex justify-between">
                  <span>Product Code (SKU):</span>
                  <span className="font-mono font-semibold text-slate-900">{product.sku}</span>
                </div>
                <div className="flex justify-between">
                  <span>Harmonized Code (HSN):</span>
                  <span className="font-mono font-semibold text-slate-900">{product.hsnCode}</span>
                </div>
                <div className="flex justify-between">
                  <span>Applicable GST Rate:</span>
                  <span className="font-semibold text-slate-900">{product.gstRate} (Input Tax Credit Eligible)</span>
                </div>
                <div className="flex justify-between">
                  <span>Stock Status:</span>
                  <span className="text-emerald-700 font-bold flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span> Ready Warehouse Stock
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Title, Volume Tiers, Ordering */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                
                {/* Brand & Category tags */}
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded">
                    {product.brand}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {product.categoryName}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading leading-tight">
                  {product.name}
                </h1>

                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {product.fullDescription || product.shortDescription}
                </p>

                {/* Packaging Highlights */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <div>
                    <span className="text-slate-500 block">Inner Pack Configuration:</span>
                    <strong className="text-slate-800">{product.packSize}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Master Shipper Carton:</span>
                    <strong className="text-slate-800">{product.masterCarton || "Standard Bulk Shipper"}</strong>
                  </div>
                </div>

                {/* Wholesale Volume Pricing Tiers */}
                <div className="mt-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600 mr-1" />
                      Wholesale Volume Tier Rates
                    </span>
                    <span className="text-[11px] text-slate-400">Excl. GST & Freight</span>
                  </div>

                  {product.tierPricing && product.tierPricing.length > 0 && (
                    <div className="grid grid-cols-3 gap-2">
                      {product.tierPricing.map((tier, idx) => {
                        const isSelectedTier = quantity >= tier.minQty && quantity <= tier.maxQty;
                        return (
                          <div 
                            key={idx}
                            onClick={() => setQuantity(tier.minQty)}
                            className={`p-3 rounded-xl border cursor-pointer transition-all text-center ${
                              isSelectedTier
                                ? 'bg-amber-50/80 border-amber-500 shadow-xs'
                                : 'bg-white border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            <span className="text-[11px] font-semibold text-slate-600 block">
                              {tier.label}
                            </span>
                            <span className="text-lg font-black text-slate-900 block mt-0.5">
                              ₹{tier.price}
                            </span>
                            <span className="text-[10px] text-slate-400">
                              / {product.unit}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Order Selector & MOQ Warning */}
                <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    
                    {/* Quantity Control */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Quantity ({product.unit}s):
                      </label>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center border border-slate-300 rounded-lg overflow-hidden bg-white shadow-2xs">
                          <button
                            type="button"
                            onClick={() => setQuantity(Math.max(product.moq || 1, quantity - 1))}
                            className="px-3.5 py-2 font-bold text-slate-700 hover:bg-slate-100"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            min={product.moq || 1}
                            value={quantity}
                            onChange={(e) => setQuantity(Math.max(product.moq || 1, parseInt(e.target.value) || (product.moq || 1)))}
                            className="w-16 text-center text-sm font-bold bg-white py-2 focus:outline-none"
                          />
                          <button
                            type="button"
                            onClick={() => setQuantity(quantity + 1)}
                            className="px-3.5 py-2 font-bold text-slate-700 hover:bg-slate-100"
                          >
                            +
                          </button>
                        </div>
                        <span className="text-xs text-slate-500">
                          (MOQ: {product.moq} {product.unit})
                        </span>
                      </div>
                    </div>

                    {/* Estimated Line Item Total */}
                    <div className="text-left sm:text-right">
                      <span className="text-xs text-slate-500 block">Estimated Batch Subtotal:</span>
                      <span className="text-2xl font-black text-slate-900">
                        ₹{estimatedLineTotal.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] text-slate-400 block">(@ ₹{currentPrice}/{product.unit})</span>
                    </div>

                  </div>

                  {/* Primary CTA Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleAddToCart}
                      className={`py-3 px-6 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center space-x-2 transition-all shadow-md ${
                        added 
                          ? 'bg-emerald-600 text-white' 
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                    >
                      {added ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span>Added to Bulk Cart</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4 text-amber-400" />
                          <span>Add {quantity} to Bulk Cart</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppEnquiry}
                      className="py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center space-x-2 transition-all shadow-md"
                    >
                      <span className="text-base">💬</span>
                      <span>Enquire on WhatsApp</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Wholesale Buyer Assurances */}
              <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600">
                <div className="flex items-center space-x-2">
                  <Receipt className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>GST Tax Invoice with ITC</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Pan-India Transport Godown / Door</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>100% Genuine Brand Guarantee</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Technical Specifications Table */}
        {product.specs && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 mb-12 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 uppercase tracking-wider flex items-center">
              <FileText className="w-4 h-4 mr-2 text-amber-600" />
              Technical Specifications & Commercial Data
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-xs">
              {Object.entries(product.specs).map(([key, val], idx) => (
                <div key={idx} className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">{key}</span>
                  <span className="text-slate-900 font-bold text-right pl-4">{val}</span>
                </div>
              ))}
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Country of Origin</span>
                <span className="text-slate-900 font-bold text-right pl-4">India</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">B2B Sample Policy</span>
                <span className="text-slate-900 font-bold text-right pl-4">Physical sample kit available for verified institutions</span>
              </div>
            </div>
          </div>
        )}

        {/* Related Products from same category */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-slate-900 font-heading">
                Related {product.categoryName}
              </h3>
              <Link 
                to={`/products?category=${product.category}`}
                className="text-xs font-bold text-amber-700 hover:underline flex items-center"
              >
                <span>View all in this category</span>
                <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
