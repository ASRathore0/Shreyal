import { ADDITIONAL_PRODUCTS } from './additionalProducts';

export const BASE_PRODUCTS = [
  // 1. NOTEBOOKS & REGISTERS
  {
    id: "nb-001",
    sku: "SSS-NB-101",
    name: "Classmate Long Notebook (Ruled, 172 Pages)",
    category: "notebooks-registers",
    categoryName: "Notebooks & Registers",
    brand: "Classmate / ITC",
    shortDescription: "Premium chlorine-free paper with smooth writing surface, durable soft cover, and pin binding.",
    fullDescription: "Designed for school and college students, this Classmate long notebook features 172 single-line ruled pages made of high-brightness eco-friendly paper. The sturdy binding withstands rough daily classroom usage. Wholesale master bundles come packaged in moisture-proof shrink wrap.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=800&q=80"
    ],
    unit: "Notebook",
    packSize: "Pack of 10 Notebooks",
    masterCarton: "Master Carton of 80 Notebooks (8 Packs)",
    unitPrice: 52, // Indicative wholesale price per notebook
    mrp: 75,
    moq: 20, // 2 packs minimum
    moqUnit: "Notebooks (2 Packs)",
    inStock: true,
    hsnCode: "4820",
    gstRate: "12%",
    specs: {
      "Page Count": "172 Pages",
      "Paper GSM": "68 GSM High Brightness",
      "Ruling": "Single Line Ruled with Date & Page No.",
      "Binding": "Center Stitch Pin Binding",
      "Cover": "Gloss Coated Durable Paperboard",
      "Size": "29.7 cm x 21 cm (A4 Long)"
    },
    tierPricing: [
      { minQty: 20, maxQty: 79, price: 52, label: "20 - 79 pcs" },
      { minQty: 80, maxQty: 239, price: 47, label: "80 - 239 pcs (Carton)" },
      { minQty: 240, maxQty: 1000, price: 43, label: "240+ pcs (Wholesale)" }
    ],
    isBestseller: true,
    isFeatured: true
  },
  {
    id: "nb-002",
    sku: "SSS-NB-102",
    name: "Hardbound Ledger & Office Register (384 Pages)",
    category: "notebooks-registers",
    categoryName: "Notebooks & Registers",
    brand: "Shreyal Prime",
    shortDescription: "Heavy-duty hardbound register with cloth-reinforced spine, 75 GSM ledger paper, and foil-stamped cover.",
    fullDescription: "Engineered for accounting, warehouse inventory, school attendance, and corporate documentation. Made with heavyweight 75 GSM azure-tinted ledger paper that prevents ink bleed-through. The stitched hardbound spine guarantees multi-year shelf durability.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80"
    ],
    unit: "Register",
    packSize: "Pack of 5 Registers",
    masterCarton: "Master Carton of 30 Registers",
    unitPrice: 185,
    mrp: 275,
    moq: 10,
    moqUnit: "Registers (2 Packs)",
    inStock: true,
    hsnCode: "4820",
    gstRate: "12%",
    specs: {
      "Page Count": "384 Pages (No. 6 Size)",
      "Paper GSM": "75 GSM Heavy Ledger Paper",
      "Ruling": "Single Line / Cash Column Ruling",
      "Binding": "Thread Stitched with Cloth Backing",
      "Cover": "Rigid Strawboard with Gold Stamping",
      "Size": "32 cm x 20 cm (Full Scape)"
    },
    tierPricing: [
      { minQty: 10, maxQty: 29, price: 185, label: "10 - 29 pcs" },
      { minQty: 30, maxQty: 89, price: 168, label: "30 - 89 pcs (Carton)" },
      { minQty: 90, maxQty: 500, price: 155, label: "90+ pcs (Volume)" }
    ],
    isBestseller: true,
    isFeatured: false
  },
  {
    id: "nb-003",
    sku: "SSS-NB-103",
    name: "Executive Spiral Bound Subject Notebook (A5, 300 Pgs)",
    category: "notebooks-registers",
    categoryName: "Notebooks & Registers",
    brand: "Solo / Papeterie",
    shortDescription: "5-subject color-divided polypropylene cover spiral notebook with micro-perforated tear-out sheets.",
    fullDescription: "Ideal for university students and corporate executives. Includes 5 colored tabbed divider sheets, dual pocket for loose sheets, and rust-resistant black twin-wire binding. Ultra-smooth paper compatible with fountain and gel pens.",
    image: "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=800&q=80"
    ],
    unit: "Notebook",
    packSize: "Pack of 6 Notebooks",
    masterCarton: "Carton of 36 Notebooks",
    unitPrice: 160,
    mrp: 240,
    moq: 12,
    moqUnit: "Notebooks (2 Packs)",
    inStock: true,
    hsnCode: "4820",
    gstRate: "12%",
    specs: {
      "Page Count": "300 Pages (150 Leaves)",
      "Paper GSM": "70 GSM Super Fine Cream Paper",
      "Dividers": "5 Colored Polypropylene Tabs",
      "Binding": "Twin Wire Wiro Bound",
      "Cover": "Waterproof Polypropylene (PP)",
      "Size": "A5 (21 cm x 14.8 cm)"
    },
    tierPricing: [
      { minQty: 12, maxQty: 35, price: 160, label: "12 - 35 pcs" },
      { minQty: 36, maxQty: 107, price: 145, label: "36 - 107 pcs (Carton)" },
      { minQty: 108, maxQty: 500, price: 135, label: "108+ pcs" }
    ],
    isBestseller: false,
    isFeatured: true
  },

  // 2. PENS, PENCILS & WRITING
  {
    id: "pen-001",
    sku: "SSS-PEN-201",
    name: "Cello Butterflow Classic Blue Ball Pen (Box of 20)",
    category: "pens-pencils-writing",
    categoryName: "Pens, Pencils & Writing",
    brand: "Cello / BIC",
    shortDescription: "India's highest selling smooth lubricated ball pen with 0.7mm tip and ergonomic rubber grip.",
    fullDescription: "The gold standard for office and school exams. Features low-viscosity ink for effortless gliding across paper without smudging. Supplied in master wholesale carton quantities of 40 boxes (800 pens) for institutional supply.",
    image: "https://images.unsplash.com/photo-1585336261026-7756f7ef57d6?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1585336261026-7756f7ef57d6?auto=format&fit=crop&w=800&q=80"
    ],
    unit: "Box (20 Pens)",
    packSize: "Inner Box of 20 Pens",
    masterCarton: "Master Shipper of 40 Boxes (800 Pens)",
    unitPrice: 150, // Per box of 20 (₹7.50 per pen vs ₹10 MRP)
    mrp: 200,
    moq: 5, // 5 boxes minimum = 100 pens
    moqUnit: "Boxes (100 Pens)",
    inStock: true,
    hsnCode: "9608",
    gstRate: "18%",
    specs: {
      "Tip Size": "0.7 mm Swiss Carbide Tip",
      "Ink Color": "Royal Blue (Black & Red available)",
      "Grip": "Elastomeric Rubber Soft Grip",
      "Packaging": "20 Pens per Dispenser Box",
      "Shelf Life": "24 Months Fresh Ink Guarantee"
    },
    tierPricing: [
      { minQty: 5, maxQty: 19, price: 150, label: "5 - 19 boxes" },
      { minQty: 20, maxQty: 39, price: 140, label: "20 - 39 boxes" },
      { minQty: 40, maxQty: 200, price: 130, label: "40+ boxes (Carton)" }
    ],
    isBestseller: true,
    isFeatured: true
  },
  {
    id: "pen-002",
    sku: "SSS-PEN-202",
    name: "Camlin Whiteboard Marker Pens (Box of 10 Assorted)",
    category: "pens-pencils-writing",
    categoryName: "Pens, Pencils & Writing",
    brand: "Camlin Kokuyo",
    shortDescription: "Bright dry-erase ink whiteboard markers with durable bullet tip and easy wipe-off formulation.",
    fullDescription: "Indispensable for schools, colleges, and conference rooms. Specially formulated alcohol-based low-odor ink wipes away cleanly with dry cloth or eraser leaving zero ghost stains on melamine or magnetic whiteboards.",
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80"
    ],
    unit: "Box (10 Markers)",
    packSize: "Box of 10 Markers",
    masterCarton: "Shipper of 50 Boxes (500 Markers)",
    unitPrice: 220,
    mrp: 300,
    moq: 5,
    moqUnit: "Boxes (50 Markers)",
    inStock: true,
    hsnCode: "9608",
    gstRate: "18%",
    specs: {
      "Tip Type": "2.5 mm Bullet Tip",
      "Ink Formulation": "Low Odor Alcohol Based Dry Wipe",
      "Assortment": "4 Blue, 3 Black, 2 Red, 1 Green",
      "Cap": "Vented Child-Safe Safety Cap",
      "Refillable": "Yes (Compatible with Camlin Refill Ink)"
    },
    tierPricing: [
      { minQty: 5, maxQty: 19, price: 220, label: "5 - 19 boxes" },
      { minQty: 20, maxQty: 49, price: 205, label: "20 - 49 boxes" },
      { minQty: 50, maxQty: 200, price: 190, label: "50+ boxes (Carton)" }
    ],
    isBestseller: true,
    isFeatured: false
  },
  {
    id: "pen-003",
    sku: "SSS-PEN-203",
    name: "Apsara Platinum Extra Dark Pencils (Pack of 10 Boxes)",
    category: "pens-pencils-writing",
    categoryName: "Pens, Pencils & Writing",
    brand: "Apsara / Hindustan Pencils",
    shortDescription: "Premium bonded lead wooden pencils for students. Each box includes 10 pencils, 1 eraser & 1 sharpener.",
    fullDescription: "The preferred pencil brand across Indian educational institutions. Made with seasoned lightweight wood and high-grade graphite lead that doesn't snap during sharpening or writing. Includes free non-dust eraser and precision sharpener in each retail pack.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    ],
    unit: "Pack (10 Boxes = 100 Pencils)",
    packSize: "Outer Shrink Pack of 10 Boxes",
    masterCarton: "Master Shipper of 500 Pencils (5 Packs)",
    unitPrice: 540,
    mrp: 700,
    moq: 2,
    moqUnit: "Packs (20 Boxes = 200 Pencils)",
    inStock: true,
    hsnCode: "9609",
    gstRate: "12%",
    specs: {
      "Lead Grade": "Extra Dark Bonded Graphite",
      "Wood": "Soft Treated FSC Plantation Wood",
      "Shape": "Hexagonal Grip Design",
      "Box Inclusions": "10 Pencils + 1 Non-Dust Eraser + 1 Long Tip Sharpener",
      "Pack Quantity": "100 Pencils per Pack"
    },
    tierPricing: [
      { minQty: 2, maxQty: 4, price: 540, label: "2 - 4 packs" },
      { minQty: 5, maxQty: 14, price: 500, label: "5 - 14 packs (Carton)" },
      { minQty: 15, maxQty: 50, price: 470, label: "15+ packs" }
    ],
    isBestseller: false,
    isFeatured: false
  },

  // 3. OFFICE SUPPLIES
  {
    id: "off-001",
    sku: "SSS-OFF-301",
    name: "Kangaro HD-10 Heavy Duty Stapler + Pin Boxes Bundle",
    category: "office-supplies",
    categoryName: "Office Supplies",
    brand: "Kangaro Industries",
    shortDescription: "All-metal construction desktop stapler with built-in staple remover and 20 sheets stapling capacity.",
    fullDescription: "Standard equipment in Indian offices, banks, and academic institutions. High-tensile steel mechanism with nickel chrome plating. Bundle comes with 1 Kangaro HD-10 stapler plus 5 boxes of No. 10 Kangaro staples (1,000 pins per box).",
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80"
    ],
    unit: "Bundle (1 Stapler + 5 Pin Boxes)",
    packSize: "Pack of 5 Complete Bundles",
    masterCarton: "Carton of 40 Bundles",
    unitPrice: 425,
    mrp: 600,
    moq: 2,
    moqUnit: "Packs (10 Bundles)",
    inStock: true,
    hsnCode: "8472",
    gstRate: "18%",
    specs: {
      "Staple Pin Size": "No. 10 (1M / 1000 pins per box)",
      "Stapling Capacity": "20 Sheets of 75 GSM Paper",
      "Body Material": "Full Metal with High-Impact Plastic Cap",
      "Loading Mechanism": "Quick Spring-Loaded Top Load",
      "Integrated Tool": "Rear Folded Staple Remover"
    },
    tierPricing: [
      { minQty: 2, maxQty: 5, price: 425, label: "2 - 5 packs" },
      { minQty: 6, maxQty: 15, price: 395, label: "6 - 15 packs" },
      { minQty: 16, maxQty: 50, price: 370, label: "16+ packs (Carton)" }
    ],
    isBestseller: true,
    isFeatured: true
  },
  {
    id: "off-002",
    sku: "SSS-OFF-302",
    name: "Post-it Style Sticky Notes 3x3 Inch (Pack of 12 Pads)",
    category: "office-supplies",
    categoryName: "Office Supplies",
    brand: "3M / Shreyal Commercial",
    shortDescription: "Self-adhesive vibrant yellow reminder notes that stick securely and remove cleanly without residue.",
    fullDescription: "Bulk corporate stationery pack containing 12 individually shrink-wrapped pads (100 sheets per pad, 1,200 total sheets). Ideal for project management, brainstorming sessions, office desks, and book indexing.",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80"
    ],
    unit: "Pack (12 Pads / 1200 Sheets)",
    packSize: "Shrink Pack of 12 Pads",
    masterCarton: "Carton of 24 Packs (288 Pads)",
    unitPrice: 380,
    mrp: 540,
    moq: 3,
    moqUnit: "Packs (36 Pads)",
    inStock: true,
    hsnCode: "4820",
    gstRate: "12%",
    specs: {
      "Dimensions": "76 mm x 76 mm (3 x 3 inches)",
      "Sheets per Pad": "100 Sheets per Pad",
      "Adhesive Type": "Water-based Re-stickable Acrylic",
      "Paper Color": "Canary Neon Yellow",
      "Compatibility": "Wood, Glass, Plastic, Paper, Metal"
    },
    tierPricing: [
      { minQty: 3, maxQty: 9, price: 380, label: "3 - 9 packs" },
      { minQty: 10, maxQty: 23, price: 345, label: "10 - 23 packs" },
      { minQty: 24, maxQty: 100, price: 315, label: "24+ packs (Carton)" }
    ],
    isBestseller: false,
    isFeatured: false
  },
  {
    id: "off-003",
    sku: "SSS-OFF-303",
    name: "Assorted Binder Clips & Paper Clips Tub (Pack of 6 Tubs)",
    category: "office-supplies",
    categoryName: "Office Supplies",
    brand: "Shreyal Prime",
    shortDescription: "Tempered rust-resistant spring steel binder clips (15mm, 19mm, 25mm, 32mm) in reusable clear tubs.",
    fullDescription: "Versatile paper binding solution for corporate file tracking and student exam paper bundling. Durable steel arms fold flat for compact filing and detach easily for permanent document storage.",
    image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&w=800&q=80"
    ],
    unit: "Pack (6 Tubs)",
    packSize: "Outer Box of 6 Tubs (60 clips/tub)",
    masterCarton: "Carton of 24 Packs",
    unitPrice: 450,
    mrp: 660,
    moq: 2,
    moqUnit: "Packs (12 Tubs)",
    inStock: true,
    hsnCode: "8305",
    gstRate: "18%",
    specs: {
      "Material": "Corrosion-resistant Tempered Steel",
      "Sizes Included": "15mm (20 pcs), 19mm (15 pcs), 25mm (15 pcs), 32mm (10 pcs)",
      "Total Clips per Tub": "60 Clips per Tub",
      "Container": "Clear Shatterproof Screw-cap Tub",
      "Finish": "Electrophoretic Black Body with Chrome Handles"
    },
    tierPricing: [
      { minQty: 2, maxQty: 5, price: 450, label: "2 - 5 packs" },
      { minQty: 6, maxQty: 15, price: 410, label: "6 - 15 packs" },
      { minQty: 16, maxQty: 60, price: 380, label: "16+ packs" }
    ],
    isBestseller: false,
    isFeatured: false
  },

  // 4. PAPER & PRINTING
  {
    id: "pp-001",
    sku: "SSS-PPR-401",
    name: "JK Copier A4 Paper 75 GSM (Carton of 10 Reams / 5000 Sheets)",
    category: "paper-printing",
    categoryName: "Paper & Printing",
    brand: "JK Paper Ltd.",
    shortDescription: "India's #1 multipurpose office copier paper for high-speed photocopiers, laser, and inkjet printers.",
    fullDescription: "The industry standard for corporate offices, schools, and commercial print shops. ColorLok technology delivers bolder blacks, crisper text, and faster drying times. Jam-free performance guaranteed even in continuous 100+ pages/minute production copiers.",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80"
    ],
    unit: "Carton (10 Reams = 5000 Sheets)",
    packSize: "Master Corrugated Box of 10 Reams (500 sheets/ream)",
    masterCarton: "Pallet of 40 Cartons (400 Reams)",
    unitPrice: 2850, // Per carton of 10 reams (₹285/ream vs ₹390 MRP)
    mrp: 3900,
    moq: 2, // 2 cartons minimum (20 reams)
    moqUnit: "Cartons (20 Reams)",
    inStock: true,
    hsnCode: "4802",
    gstRate: "12%",
    specs: {
      "GSM": "75 GSM Premium Office Grade",
      "Sheet Size": "A4 (210 mm x 297 mm)",
      "Brightness": "98% ISO Super White",
      "Reams per Box": "10 Reams (500 Sheets per Ream)",
      "Technology": "HP ColorLok Certified",
      "Weight per Box": "23.5 kg approx"
    },
    tierPricing: [
      { minQty: 2, maxQty: 9, price: 2850, label: "2 - 9 cartons" },
      { minQty: 10, maxQty: 39, price: 2720, label: "10 - 39 cartons" },
      { minQty: 40, maxQty: 200, price: 2600, label: "40+ cartons (Pallet Rate)" }
    ],
    isBestseller: true,
    isFeatured: true
  },
  {
    id: "pp-002",
    sku: "SSS-PPR-402",
    name: "B2B Copier A4 Paper 70 GSM Economy (Carton of 10 Reams)",
    category: "paper-printing",
    categoryName: "Paper & Printing",
    brand: "Trident / Century",
    shortDescription: "Budget-friendly, high-opacity everyday printing paper formulated for mass printing and school exam sheets.",
    fullDescription: "Best suited for high-volume circulars, coaching institute mock test papers, bill printing, and daily office drafts. Offers smooth feed characteristics and high opacity for double-sided printing at the most economical bulk price.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80"
    ],
    unit: "Carton (10 Reams = 5000 Sheets)",
    packSize: "Master Box of 10 Reams",
    masterCarton: "Pallet of 45 Cartons",
    unitPrice: 2450,
    mrp: 3400,
    moq: 3,
    moqUnit: "Cartons (30 Reams)",
    inStock: true,
    hsnCode: "4802",
    gstRate: "12%",
    specs: {
      "GSM": "70 GSM High Opacity Economy",
      "Sheet Size": "A4 (210 mm x 297 mm)",
      "Brightness": "92% ISO White",
      "Ream Count": "10 Reams (5,000 Sheets Total)",
      "Recommended Use": "Daily Xerox, Test Papers, Invoices"
    },
    tierPricing: [
      { minQty: 3, maxQty: 9, price: 2450, label: "3 - 9 cartons" },
      { minQty: 10, maxQty: 44, price: 2320, label: "10 - 44 cartons" },
      { minQty: 45, maxQty: 300, price: 2240, label: "45+ cartons" }
    ],
    isBestseller: true,
    isFeatured: false
  },

  // 5. ART & CRAFT SUPPLIES
  {
    id: "art-001",
    sku: "SSS-ART-501",
    name: "Camel Student Acrylic Colour Set (12 Shades x 20ml Tubes)",
    category: "art-craft",
    categoryName: "Art & Craft Supplies",
    brand: "Camlin Kokuyo",
    shortDescription: "Non-toxic, fast-drying, highly pigmented acrylic colors for school art departments and hobby workshops.",
    fullDescription: "Formulated with premium lightfast pigments. Adheres to canvas, paper, wood, earthenware, and stone. Fast drying waterproof finish. Supplied in outer wholesale shrink packs of 10 sets for school art room procurement.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80"
    ],
    unit: "Pack of 5 Sets",
    packSize: "Pack of 5 Complete Sets",
    masterCarton: "Master Carton of 40 Sets (8 Packs)",
    unitPrice: 1150, // For 5 sets (₹230 per set vs ₹325 MRP)
    mrp: 1625,
    moq: 2,
    moqUnit: "Packs (10 Sets)",
    inStock: true,
    hsnCode: "3213",
    gstRate: "18%",
    specs: {
      "Number of Shades": "12 Vibrant Intermixable Shades",
      "Volume per Tube": "20 ml Squeeze Tubes",
      "Toxicity": "EN-71 Certified Non-Toxic",
      "Medium": "Water Soluble, Waterproof Once Dry",
      "Ideal For": "School Art Competitions, Canvas Painting"
    },
    tierPricing: [
      { minQty: 2, maxQty: 5, price: 1150, label: "2 - 5 packs" },
      { minQty: 6, maxQty: 15, price: 1080, label: "6 - 15 packs" },
      { minQty: 16, maxQty: 50, price: 1020, label: "16+ packs (Carton)" }
    ],
    isBestseller: false,
    isFeatured: true
  },
  {
    id: "art-002",
    sku: "SSS-ART-502",
    name: "Doms Premium Oil Pastels 50 Shades Box (Wholesale Bundle)",
    category: "art-craft",
    categoryName: "Art & Craft Supplies",
    brand: "Doms",
    shortDescription: "Rich intermixable oil pastels with scraping tool and blending tool in hard plastic storage case.",
    fullDescription: "Specially formulated for smooth color laydown and brilliant luminosity without crumbling. Safe for junior and senior students. Comes in durable snap-lock plastic tray suitable for long-term classroom use.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
    ],
    unit: "Pack of 6 Boxes",
    packSize: "Shrink Pack of 6 Boxes",
    masterCarton: "Carton of 36 Boxes (6 Packs)",
    unitPrice: 1080,
    mrp: 1500,
    moq: 2,
    moqUnit: "Packs (12 Boxes)",
    inStock: true,
    hsnCode: "9609",
    gstRate: "12%",
    specs: {
      "Shade Count": "50 Rich & Intense Shades",
      "Accessories": "Scraping Tool + Blending Tool Included",
      "Body": "Paper-wrapped round pastels",
      "Box": "Shock-resistant PP Carry Case",
      "Standards": "Child-Safe Non-Toxic ASTM D-4236"
    },
    tierPricing: [
      { minQty: 2, maxQty: 5, price: 1080, label: "2 - 5 packs" },
      { minQty: 6, maxQty: 11, price: 1020, label: "6 - 11 packs" },
      { minQty: 12, maxQty: 50, price: 960, label: "12+ packs (Carton)" }
    ],
    isBestseller: true,
    isFeatured: false
  },

  // 6. SCHOOL STATIONERY
  {
    id: "sch-001",
    sku: "SSS-SCH-601",
    name: "Camlin Scholar Mathematical Drawing Geometry Box (Pack of 10)",
    category: "school-stationery",
    categoryName: "School Stationery",
    brand: "Camlin Kokuyo",
    shortDescription: "Precision die-cast compass and divider with transparent measuring scale, protractor, and set squares.",
    fullDescription: "Mandatory instrument box for middle and high school students. Self-centering gear mechanism compass ensures wobble-free circle drafting. Metal tin case prevents instrument rattling and breakage inside school bags.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
    ],
    unit: "Pack of 10 Geometry Boxes",
    packSize: "Outer Box of 10 Metal Geometry Boxes",
    masterCarton: "Shipper Carton of 80 Boxes (8 Packs)",
    unitPrice: 950, // ₹95 per box vs ₹135 MRP
    mrp: 1350,
    moq: 2,
    moqUnit: "Packs (20 Boxes)",
    inStock: true,
    hsnCode: "9017",
    gstRate: "18%",
    specs: {
      "Compass Material": "Die-Cast Rust Resistant Zinc Alloy",
      "Scale & Protractor": "High-Transparency Optical Virgin Plastic",
      "Inclusions": "Compass, Divider, 15cm Scale, Protractor, 2 Set Squares, Small Pencil, Eraser, Sharpener",
      "Container": "Embossed Protective Tin Case",
      "Accuracy": "High Precision Laser Calibrated Markings"
    },
    tierPricing: [
      { minQty: 2, maxQty: 7, price: 950, label: "2 - 7 packs" },
      { minQty: 8, maxQty: 23, price: 890, label: "8 - 23 packs (Carton)" },
      { minQty: 24, maxQty: 100, price: 830, label: "24+ packs" }
    ],
    isBestseller: true,
    isFeatured: true
  },
  {
    id: "sch-002",
    sku: "SSS-SCH-602",
    name: "Apsara Non-Dust Eraser Jumbo Tub (Pack of 4 Tubs x 30 Pcs)",
    category: "school-stationery",
    categoryName: "School Stationery",
    brand: "Apsara",
    shortDescription: "Soft residue-rolling erasers that erase graphite lead cleanly without tearing paper.",
    fullDescription: "A retail store and primary school bestseller. Gathers eraser shavings into neat rolls rather than scattering dust across desks and notebooks. Phthalate-free and safe for young children.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    ],
    unit: "Pack (4 Tubs = 120 Erasers)",
    packSize: "Outer Pack of 4 Tubs",
    masterCarton: "Carton of 24 Tubs (6 Packs)",
    unitPrice: 420,
    mrp: 600,
    moq: 2,
    moqUnit: "Packs (8 Tubs / 240 Erasers)",
    inStock: true,
    hsnCode: "4016",
    gstRate: "12%",
    specs: {
      "Eraser Formulation": "Non-Dust Polymeric Roll Action",
      "Quantity": "30 Erasers per Clear Tub (120 per pack)",
      "Safety": "Non-Toxic, Phthalate Free",
      "Dimensions": "Standard Jumbo Student Size"
    },
    tierPricing: [
      { minQty: 2, maxQty: 5, price: 420, label: "2 - 5 packs" },
      { minQty: 6, maxQty: 15, price: 390, label: "6 - 15 packs" },
      { minQty: 16, maxQty: 60, price: 360, label: "16+ packs" }
    ],
    isBestseller: false,
    isFeatured: false
  },

  // 7. FILES, FOLDERS & ORGANIZERS
  {
    id: "fil-001",
    sku: "SSS-FIL-701",
    name: "Solo Lever Arch Heavy Box File (Pack of 10 Units)",
    category: "files-folders-organizers",
    categoryName: "Files, Folders & Organizers",
    brand: "Solo",
    shortDescription: "75mm spine rigid box file with heavy-duty nickel lever mechanism, metal edge protectors, and spine label.",
    fullDescription: "Built for intensive legal, financial, and institutional archive filing. Accommodates up to 500 sheets of A4 or legal paper without warping. Reinforced with bottom metal shoe for anti-scuff storage on metal warehouse racking.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80"
    ],
    unit: "Pack of 10 Box Files",
    packSize: "Corrugated Pack of 10 Files",
    masterCarton: "Master Shipper of 50 Files (5 Packs)",
    unitPrice: 1350, // ₹135 per file vs ₹195 MRP
    mrp: 1950,
    moq: 2,
    moqUnit: "Packs (20 Box Files)",
    inStock: true,
    hsnCode: "4820",
    gstRate: "18%",
    specs: {
      "Spine Width": "75 mm (Holds up to 500 sheets)",
      "Paper Size": "FC / Legal / A4 Compatible",
      "Mechanism": "Heavy Duty Steel Lever Arch with Compressor Bar",
      "Protection": "Full Metal Bottom Shoe & Metal Finger Ring",
      "Label": "Reversible Spine Pocket Label"
    },
    tierPricing: [
      { minQty: 2, maxQty: 4, price: 1350, label: "2 - 4 packs" },
      { minQty: 5, maxQty: 14, price: 1250, label: "5 - 14 packs (Carton)" },
      { minQty: 15, maxQty: 50, price: 1180, label: "15+ packs" }
    ],
    isBestseller: true,
    isFeatured: true
  },
  {
    id: "fil-002",
    sku: "SSS-FIL-702",
    name: "Clear Polypropylene L-Shaped Document Folders (Pack of 100)",
    category: "files-folders-organizers",
    categoryName: "Files, Folders & Organizers",
    brand: "Shreyal Commercial",
    shortDescription: "Durable 160 micron transparent A4 document sleeves with thumb cut for quick paperwork retrieval.",
    fullDescription: "Essential for corporate board meetings, resume handouts, school certificates, and hospital patient records. Ultrasonic welded seams prevent tearing. Moisture and tear resistant.",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80"
    ],
    unit: "Pack of 100 Folders",
    packSize: "Box of 100 Folders",
    masterCarton: "Master Carton of 1,000 Folders (10 Boxes)",
    unitPrice: 580,
    mrp: 850,
    moq: 2,
    moqUnit: "Boxes (200 Folders)",
    inStock: true,
    hsnCode: "3926",
    gstRate: "18%",
    specs: {
      "Thickness": "160 Micron Virgin PP Sheet",
      "Orientation": "A4 Size L-Opening (Top and Right side open)",
      "Cutout": "Ergonomic Corner Thumb Notch",
      "Transparency": "Ultra High Optical Clarity",
      "Quantity": "100 Sleeves per Inner Box"
    },
    tierPricing: [
      { minQty: 2, maxQty: 5, price: 580, label: "2 - 5 boxes" },
      { minQty: 6, maxQty: 9, price: 520, label: "6 - 9 boxes" },
      { minQty: 10, maxQty: 50, price: 470, label: "10+ boxes (Carton)" }
    ],
    isBestseller: false,
    isFeatured: false
  },

  // 8. OFFICE & DESK ESSENTIALS
  {
    id: "dsk-001",
    sku: "SSS-DSK-801",
    name: "Executive 4-Compartment Metal Mesh Desk Organizer (Pack of 6)",
    category: "office-desk-essentials",
    categoryName: "Office & Desk Essentials",
    brand: "Shreyal Prime",
    shortDescription: "Powder-coated scratch resistant wire mesh caddy with compartments for pens, sticky notes, clips, and letters.",
    fullDescription: "Provides a clutter-free executive desktop for corporate workstations and school staff rooms. Built with reinforced steel wire mesh and non-skid rubber feet that protect polished desk surfaces.",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80"
    ],
    unit: "Pack of 6 Units",
    packSize: "Outer Shipper of 6 Organizers",
    masterCarton: "Master Carton of 24 Organizers (4 Packs)",
    unitPrice: 1260, // ₹210 per unit vs ₹350 MRP
    mrp: 2100,
    moq: 2,
    moqUnit: "Packs (12 Organizers)",
    inStock: true,
    hsnCode: "8304",
    gstRate: "18%",
    specs: {
      "Compartments": "4 Divided Storage Sections",
      "Material": "Epoxy Coated Industrial Wire Mesh",
      "Base": "4 Non-Skid Protective Rubber Pads",
      "Dimensions": "20.5 cm x 10.5 cm x 10 cm",
      "Color": "Matte Satin Black"
    },
    tierPricing: [
      { minQty: 2, maxQty: 3, price: 1260, label: "2 - 3 packs" },
      { minQty: 4, maxQty: 11, price: 1150, label: "4 - 11 packs (Carton)" },
      { minQty: 12, maxQty: 40, price: 1050, label: "12+ packs" }
    ],
    isBestseller: false,
    isFeatured: true
  },
  {
    id: "dsk-002",
    sku: "SSS-DSK-802",
    name: "Heavy Duty Desktop Tape Dispenser + 12 Tape Rolls Bundle",
    category: "office-desk-essentials",
    categoryName: "Office & Desk Essentials",
    brand: "Kangaro / 3M",
    shortDescription: "Weighted non-skid base tape dispenser with sharp stainless blade, includes 12 rolls of 1-inch transparent tape.",
    fullDescription: "Ideal for dispatch packaging, exam paper bundle sealing, and office desks. Weighted cement core enables single-handed tape dispensing without tilting.",
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80"
    ],
    unit: "Bundle (1 Dispenser + 12 Tapes)",
    packSize: "Pack of 4 Complete Bundles",
    masterCarton: "Master Carton of 16 Bundles",
    unitPrice: 880,
    mrp: 1300,
    moq: 2,
    moqUnit: "Packs (8 Bundles)",
    inStock: true,
    hsnCode: "8472",
    gstRate: "18%",
    specs: {
      "Core Size": "Dual Core (Compatible with 1-inch and 3-inch tapes)",
      "Blade": "Serrated Stainless Steel Anti-Rust Cutter",
      "Base": "Weighted Sand/Cement Core with Anti-Slip Pad",
      "Included Tapes": "12 Rolls of 24mm x 30m Clear BOPP Tape"
    },
    tierPricing: [
      { minQty: 2, maxQty: 3, price: 880, label: "2 - 3 packs" },
      { minQty: 4, maxQty: 7, price: 820, label: "4 - 7 packs" },
      { minQty: 8, maxQty: 30, price: 760, label: "8+ packs (Carton)" }
    ],
    isBestseller: false,
    isFeatured: false
  },

  // 9. EXAM & EDUCATIONAL SUPPLIES
  {
    id: "exm-001",
    sku: "SSS-EXM-901",
    name: "Pre-Printed OMR Answer Sheets 100/180 Questions (Pack of 1000)",
    category: "exam-educational-supplies",
    categoryName: "Exam & Educational Supplies",
    brand: "Shreyal Print Solutions",
    shortDescription: "105 GSM high-precision scanner-grade OMR sheets compatible with standard optical mark reader software.",
    fullDescription: "Widely used by coaching institutes, NEET/JEE mock test providers, and board exam simulation centres. Calibrated barcode and timing track markings ensure 100% scanning accuracy with zero optical distortion.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80"
    ],
    unit: "Pack (1000 OMR Sheets)",
    packSize: "Shrink Wrapped Pack of 1000 Sheets",
    masterCarton: "Master Shipper of 5000 Sheets (5 Packs)",
    unitPrice: 1450, // ₹1.45 per sheet
    mrp: 2200,
    moq: 2,
    moqUnit: "Packs (2000 Sheets)",
    inStock: true,
    hsnCode: "4820",
    gstRate: "12%",
    specs: {
      "Question Capacity": "Choice of 100 or 180 MCQ Questions (NEET/JEE pattern)",
      "Paper Thickness": "105 GSM High Precision Scanner Grade Maplitho",
      "Scanning Compatibility": "Standard Remark OMR / Vericool / In-house Scanners",
      "Features": "Student Roll No, Test ID, Batch Code & Signature blocks",
      "Custom Logo": "Custom Institute Logo Printing available on 5+ packs"
    },
    tierPricing: [
      { minQty: 2, maxQty: 4, price: 1450, label: "2 - 4 packs" },
      { minQty: 5, maxQty: 9, price: 1320, label: "5 - 9 packs (Carton)" },
      { minQty: 10, maxQty: 50, price: 1200, label: "10+ packs (Bulk)" }
    ],
    isBestseller: true,
    isFeatured: true
  },
  {
    id: "exm-002",
    sku: "SSS-EXM-902",
    name: "Rigid Transparent Acrylic Exam Clipboard (Pack of 20)",
    category: "exam-educational-supplies",
    categoryName: "Exam & Educational Supplies",
    brand: "Shreyal Commercial",
    shortDescription: "Board-exam compliant crystal clear 3mm acrylic writing pad with rubberized low-profile spring clamp.",
    fullDescription: "Meets CBSE, ICSE, and state board examination guidelines requiring 100% see-through clipboards without hidden compartments or printed markings. Smooth polished rounded corners prevent accidental cuts.",
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80"
    ],
    unit: "Pack of 20 Boards",
    packSize: "Cardboard Box of 20 Clipboards",
    masterCarton: "Master Carton of 100 Boards (5 Packs)",
    unitPrice: 1100, // ₹55 per board vs ₹90 MRP
    mrp: 1800,
    moq: 2,
    moqUnit: "Packs (40 Clipboards)",
    inStock: true,
    hsnCode: "3926",
    gstRate: "18%",
    specs: {
      "Board Material": "3 mm Thick Virgin Optical Clear Acrylic",
      "Size": "23 cm x 35 cm (Fits A4 & Legal Exam Sheets)",
      "Clip Mechanism": "Low-Profile High Tension Steel Clamp with Rubber Grips",
      "Corners": "Machine Polished Smooth Safety Beveled Corners",
      "Hanger": "Retractable Top Wall-Hanging Loop"
    },
    tierPricing: [
      { minQty: 2, maxQty: 4, price: 1100, label: "2 - 4 packs" },
      { minQty: 5, maxQty: 9, price: 1020, label: "5 - 9 packs (Carton)" },
      { minQty: 10, maxQty: 40, price: 940, label: "10+ packs" }
    ],
    isBestseller: false,
    isFeatured: true
  }
];

export const PRODUCTS = [...BASE_PRODUCTS, ...ADDITIONAL_PRODUCTS];

