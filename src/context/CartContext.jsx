import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CART_STORAGE_KEY = 'sss_wholesale_cart_v1';
const CUSTOMER_STORAGE_KEY = 'sss_customer_details_v1';

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Failed to parse cart from localStorage', e);
      return [];
    }
  });

  const [customerDetails, setCustomerDetails] = useState(() => {
    try {
      const saved = localStorage.getItem(CUSTOMER_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {
        name: '',
        businessName: '',
        institutionType: 'Retail Stationery Shop',
        phone: '',
        email: '',
        location: '',
        gstin: '',
        notes: ''
      };
    } catch (e) {
      return {
        name: '',
        businessName: '',
        institutionType: 'Retail Stationery Shop',
        phone: '',
        email: '',
        location: '',
        gstin: '',
        notes: ''
      };
    }
  });

  const [toastMessage, setToastMessage] = useState(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to persist cart to localStorage', e);
    }
  }, [cart]);

  // Sync customer details
  useEffect(() => {
    try {
      localStorage.setItem(CUSTOMER_STORAGE_KEY, JSON.stringify(customerDetails));
    } catch (e) {
      console.error('Failed to persist customer details', e);
    }
  }, [customerDetails]);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  /**
   * Add product to cart respecting MOQ
   */
  const addToCart = (product, quantity = null) => {
    const qtyToAdd = quantity ? Math.max(quantity, product.moq || 1) : (product.moq || 1);

    setCart(prevCart => {
      const existingIndex = prevCart.findIndex(item => item.id === product.id);

      if (existingIndex > -1) {
        const updated = [...prevCart];
        const currentQty = updated[existingIndex].quantity;
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: currentQty + qtyToAdd
        };
        showToast(`Updated ${product.name} quantity to ${currentQty + qtyToAdd} ${product.unit}`);
        return updated;
      } else {
        showToast(`Added ${qtyToAdd} ${product.unit} of ${product.name} to Bulk Cart`);
        return [
          ...prevCart,
          {
            id: product.id,
            sku: product.sku,
            name: product.name,
            brand: product.brand,
            category: product.category,
            categoryName: product.categoryName,
            image: product.image,
            unit: product.unit,
            packSize: product.packSize,
            masterCarton: product.masterCarton,
            unitPrice: product.unitPrice,
            mrp: product.mrp,
            moq: product.moq,
            moqUnit: product.moqUnit,
            hsnCode: product.hsnCode,
            gstRate: product.gstRate,
            quantity: qtyToAdd
          }
        ];
      }
    });
  };

  /**
   * Update quantity
   */
  const updateQuantity = (productId, newQuantity) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === productId) {
          // Never let it drop below 1; warn if below MOQ
          const validatedQty = Math.max(1, parseInt(newQuantity) || 1);
          return {
            ...item,
            quantity: validatedQty
          };
        }
        return item;
      });
    });
  };

  /**
   * Remove item
   */
  const removeFromCart = (productId) => {
    setCart(prevCart => {
      const item = prevCart.find(i => i.id === productId);
      if (item) {
        showToast(`Removed ${item.name} from cart`);
      }
      return prevCart.filter(item => item.id !== productId);
    });
  };

  /**
   * Clear all items
   */
  const clearCart = () => {
    setCart([]);
    showToast('Wholesale cart cleared');
  };

  // Calculations
  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalUniqueSkus = cart.length;

  const subtotal = cart.reduce((sum, item) => {
    const price = item.unitPrice || 0;
    return sum + (price * item.quantity);
  }, 0);

  // Standard estimated GST composite (average ~15% for mixed stationery)
  const estimatedGst = Math.round(subtotal * 0.15);
  const estimatedTotal = subtotal + estimatedGst;

  // MOQ compliance check
  const hasMoqViolations = cart.some(item => item.quantity < item.moq);
  const moqViolationsList = cart.filter(item => item.quantity < item.moq);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        customerDetails,
        setCustomerDetails,
        totalItemsCount,
        totalUniqueSkus,
        subtotal,
        estimatedGst,
        estimatedTotal,
        hasMoqViolations,
        moqViolationsList,
        toastMessage
      }}
    >
      {children}
      {/* Global Minimal Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md bg-slate-900 text-white px-5 py-3.5 rounded-xl shadow-2xl flex items-center space-x-3 border border-slate-700 animate-slide-up">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0"></span>
          <span className="text-sm font-medium leading-snug">{toastMessage}</span>
        </div>
      )}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
