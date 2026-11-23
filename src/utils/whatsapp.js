import { COMPANY } from '../data/company';

/**
 * Generate a wa.me URL with properly encoded message
 */
export function createWhatsAppUrl(message, phoneNumber = COMPANY.rawPhone) {
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${phoneNumber}?text=${encodedText}`;
}

/**
 * Open WhatsApp directly in a new window/tab
 */
export function openWhatsApp(message, phoneNumber = COMPANY.rawPhone) {
  const url = createWhatsAppUrl(message, phoneNumber);
  window.open(url, '_blank', 'noopener,noreferrer');
}

/**
 * Product-level WhatsApp inquiry message
 */
export function generateProductInquiryMessage(product, quantity = null) {
  const qty = quantity || product.moq;
  const price = product.unitPrice ? `₹${product.unitPrice}` : 'Request Price';

  return `*WHOLESALE ENQUIRY - SHREYAL STATIONERY SOLUTION*
Hello Team, I am interested in a bulk quote for:

📦 *Product:* ${product.name}
🔖 *SKU:* ${product.sku}
🏢 *Brand:* ${product.brand}
📦 *Pack Size:* ${product.packSize}
🔢 *Requirement Qty:* ${qty} (${product.unit})
💰 *Listed Unit Price:* ${price}
⚠️ *MOQ:* ${product.moq} ${product.unit}

Please share your best wholesale rate, bulk tier discount, current ready stock, and shipping estimate.`;
}

/**
 * Cart order inquiry formatted WhatsApp message
 */
export function generateCartOrderMessage(cartItems, customerDetails, totals) {
  const now = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  let message = `🛒 *BULK ORDER ENQUIRY - SHREYAL STATIONERY SOLUTION*\n`;
  message += `📅 *Date:* ${now}\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `👤 *CUSTOMER & BUSINESS DETAILS:*\n`;
  message += `• *Contact Person:* ${customerDetails.name || 'Not provided'}\n`;
  message += `• *Business / School:* ${customerDetails.businessName || 'Not provided'}\n`;
  message += `• *Institution Type:* ${customerDetails.institutionType || 'General Wholesale'}\n`;
  message += `• *WhatsApp Phone:* ${customerDetails.phone || 'Not provided'}\n`;
  if (customerDetails.email) {
    message += `• *Email:* ${customerDetails.email}\n`;
  }
  message += `• *Delivery City & State:* ${customerDetails.location || 'Not provided'}\n`;
  if (customerDetails.gstin) {
    message += `• *GSTIN:* ${customerDetails.gstin}\n`;
  }
  if (customerDetails.notes) {
    message += `• *Special Instructions:* ${customerDetails.notes}\n`;
  }

  message += `\n📦 *ORDERED ITEMS (${cartItems.length} SKUs):*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;

  cartItems.forEach((item, index) => {
    const itemTotal = item.unitPrice ? `₹${(item.unitPrice * item.quantity).toLocaleString('en-IN')}` : 'To Quote';
    message += `${index + 1}. *${item.name}*\n`;
    message += `   • SKU: ${item.sku} | Brand: ${item.brand}\n`;
    message += `   • Pack: ${item.packSize}\n`;
    message += `   • Quantity: *${item.quantity} ${item.unit}*\n`;
    if (item.unitPrice) {
      message += `   • Rate: ₹${item.unitPrice} | Line Total: ${itemTotal}\n`;
    }
  });

  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `📊 *ESTIMATED COMMERCIALS:*\n`;
  message += `• *Items Subtotal:* ₹${totals.subtotal.toLocaleString('en-IN')}\n`;
  message += `• *Estimated GST (12-18%):* ₹${totals.estimatedGst.toLocaleString('en-IN')}\n`;
  message += `• *Estimated Order Total:* *₹${totals.estimatedTotal.toLocaleString('en-IN')}*\n`;
  message += `*(Note: Transport freight & final GST as per official Proforma Invoice)*\n\n`;
  message += `Please confirm stock availability and send the official Proforma Invoice with RTGS/NEFT payment details.`;

  return message;
}

/**
 * Bulk RFQ Enquiry page WhatsApp message
 */
export function generateBulkRfqMessage(data) {
  let message = `📋 *INSTITUTIONAL BULK QUOTATION RFQ*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `• *Contact Person:* ${data.name}\n`;
  message += `• *Business / Institution:* ${data.businessName}\n`;
  message += `• *Category/Segment:* ${data.institutionType || 'Wholesale Buyer'}\n`;
  message += `• *Phone:* ${data.phone}\n`;
  message += `• *Email:* ${data.email || 'N/A'}\n`;
  message += `• *Delivery Location:* ${data.location}\n`;
  if (data.gstin) {
    message += `• *GSTIN:* ${data.gstin}\n`;
  }
  message += `\n📌 *REQUIREMENTS:*\n`;
  if (data.categories && data.categories.length > 0) {
    message += `• *Categories Needed:* ${data.categories.join(', ')}\n`;
  }
  message += `• *Estimated Quantity / Volume:* ${data.estimatedQuantity || 'High Volume'}\n`;
  if (data.budget) {
    message += `• *Expected Budget Range:* ${data.budget}\n`;
  }
  if (data.customBranding) {
    message += `• *Custom School/Company Logo Printing:* Yes (Required)\n`;
  }
  if (data.requirements) {
    message += `• *Detailed Item List / Specs:*\n${data.requirements}\n`;
  }
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `Please share your B2B institutional price catalog and formal quotation.`;

  return message;
}

/**
 * Quick help query templates
 */
export const QUICK_WHATSAPP_QUERIES = [
  {
    id: "catalogue",
    label: "Request Wholesale Price List PDF",
    message: "Hello Shreyal Stationery Solution! Please share your latest 2026 Wholesale Product Catalog & Master Price List PDF."
  },
  {
    id: "school-tender",
    label: "School / College Session Supplies",
    message: "Hello! We are looking for annual bulk student stationery, custom printed notebooks, and examination supplies for our school/college. Please connect us with your institutional sales team."
  },
  {
    id: "copier-paper",
    label: "Copier Paper Pallet Rates",
    message: "Hi Shreyal Stationery Solution, please provide your current wholesale rates for JK Copier and 70/75 GSM A4 copier paper for 20+ cartons delivery."
  },
  {
    id: "retail-shop",
    label: "Retail Shop Wholesale Dealership",
    message: "Hi, I run a stationery retail shop. I want to procure fast-moving branded stationery at wholesale carton margins. How can I start ordering?"
  }
];
