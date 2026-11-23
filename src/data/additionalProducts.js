// Additional products to enrich all 9 categories
export const ADDITIONAL_PRODUCTS = [
  // Notebooks addition
  {
    id: "nb-004",
    sku: "SSS-NB-104",
    name: "Student Hardcover Practical Science Lab Journal (120 Pgs)",
    category: "notebooks-registers",
    categoryName: "Notebooks & Registers",
    brand: "Shreyal Prime",
    shortDescription: "One side blank for diagrams, one side ruled for observations. 70 GSM heavy cartridge paper.",
    fullDescription: "Required for Physics, Chemistry, and Biology school and college laboratories. Hardbound stiff board cover prevents bending during experimental bench work. Stitched binding prevents loose leaves.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80"],
    unit: "Pack of 10 Journals",
    packSize: "Outer Box of 10 Journals",
    masterCarton: "Master Shipper of 60 Journals (6 Packs)",
    unitPrice: 650,
    mrp: 950,
    moq: 2,
    moqUnit: "Packs (20 Journals)",
    inStock: true,
    hsnCode: "4820",
    gstRate: "12%",
    specs: {
      "Page Count": "120 Pages (60 Ruled, 60 Plain Cartridge)",
      "Paper GSM": "70 GSM High Opacity Lab Grade",
      "Binding": "Hardbound Cloth Spine Thread Bound",
      "Format": "CBSE/ICSE Compliant Lab Format"
    },
    tierPricing: [
      { minQty: 2, maxQty: 5, price: 650, label: "2 - 5 packs" },
      { minQty: 6, maxQty: 15, price: 590, label: "6 - 15 packs" },
      { minQty: 16, maxQty: 50, price: 540, label: "16+ packs" }
    ],
    isBestseller: false,
    isFeatured: false
  },
  // Writing addition
  {
    id: "pen-004",
    sku: "SSS-PEN-204",
    name: "Reynolds 045 Fine Carbure Ball Pen (Box of 50 Pens)",
    category: "pens-pencils-writing",
    categoryName: "Pens, Pencils & Writing",
    brand: "Reynolds",
    shortDescription: "Legendary fine writing ball pen with non-smudge ink. Preferred for exams and daily accounting.",
    fullDescription: "Trusted for generations across Indian educational and corporate setups. Ultra-fine laser tip produces crisp, clean strokes. Includes 50 royal blue ball pens per dispenser box.",
    image: "https://images.unsplash.com/photo-1585336261026-7756f7ef57d6?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1585336261026-7756f7ef57d6?auto=format&fit=crop&w=800&q=80"],
    unit: "Box (50 Pens)",
    packSize: "Dispenser Box of 50 Pens",
    masterCarton: "Shipper of 40 Boxes (2,000 Pens)",
    unitPrice: 375, // ₹7.50 per pen vs ₹10 MRP
    mrp: 500,
    moq: 2,
    moqUnit: "Boxes (100 Pens)",
    inStock: true,
    hsnCode: "9608",
    gstRate: "18%",
    specs: {
      "Tip": "0.5 mm Ultra Fine Carbure Tip",
      "Ink Color": "Blue (Black option available)",
      "Body": "White classic hexagonal barrel with blue cap",
      "Count": "50 Pens per Box"
    },
    tierPricing: [
      { minQty: 2, maxQty: 9, price: 375, label: "2 - 9 boxes" },
      { minQty: 10, maxQty: 39, price: 345, label: "10 - 39 boxes" },
      { minQty: 40, maxQty: 150, price: 320, label: "40+ boxes (Carton)" }
    ],
    isBestseller: true,
    isFeatured: false
  },
  {
    id: "pen-005",
    sku: "SSS-PEN-205",
    name: "Faber-Castell Textliner 38 Highlighters (Pack of 10 Assorted)",
    category: "pens-pencils-writing",
    categoryName: "Pens, Pencils & Writing",
    brand: "Faber-Castell",
    shortDescription: "Superfluorescent water-based chisel tip highlighters in neon yellow, green, pink, and orange.",
    fullDescription: "Essential study aid for competitive exam aspirants, college students, and corporate analysts. Chisel tip marks 3 line widths: 1mm, 2mm, and 5mm. Non-toxic ink does not smudge inkjet text.",
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80"],
    unit: "Pack (10 Highlighters)",
    packSize: "Pouch of 10 Highlighters",
    masterCarton: "Shipper of 50 Packs (500 Highlighters)",
    unitPrice: 220,
    mrp: 300,
    moq: 3,
    moqUnit: "Packs (30 Highlighters)",
    inStock: true,
    hsnCode: "9608",
    gstRate: "18%",
    specs: {
      "Tip": "Polyester Chisel Tip (1mm - 5mm)",
      "Ink": "Water-based Universal Neon Ink",
      "Colors": "4 Yellow, 2 Green, 2 Pink, 2 Orange"
    },
    tierPricing: [
      { minQty: 3, maxQty: 9, price: 220, label: "3 - 9 packs" },
      { minQty: 10, maxQty: 24, price: 200, label: "10 - 24 packs" },
      { minQty: 25, maxQty: 100, price: 185, label: "25+ packs" }
    ],
    isBestseller: false,
    isFeatured: false
  },
  // Office supplies addition
  {
    id: "off-004",
    sku: "SSS-OFF-304",
    name: "Kangaro 2-Hole Medium Paper Punch Machine DP-52",
    category: "office-supplies",
    categoryName: "Office Supplies",
    brand: "Kangaro",
    shortDescription: "Heavy gauge steel two-hole punch with centering guide bar and waste chip confetti tray.",
    fullDescription: "Punches up to 16 sheets of 80 GSM paper simultaneously with clean 5.5mm holes. Equipped with metal paper guide bar calibrated for A4, A5, and B5 paper standards.",
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80"],
    unit: "Pack of 4 Punches",
    packSize: "Box of 4 Punch Machines",
    masterCarton: "Carton of 24 Units (6 Boxes)",
    unitPrice: 620,
    mrp: 880,
    moq: 2,
    moqUnit: "Boxes (8 Punches)",
    inStock: true,
    hsnCode: "8472",
    gstRate: "18%",
    specs: {
      "Punch Capacity": "16 Sheets (80 GSM)",
      "Hole Distance": "80 mm Standard Filing Pitch",
      "Diameter": "5.5 mm Clean Hole",
      "Guide Bar": "Metal Sliding Calibrated Guide"
    },
    tierPricing: [
      { minQty: 2, maxQty: 5, price: 620, label: "2 - 5 boxes" },
      { minQty: 6, maxQty: 15, price: 570, label: "6 - 15 boxes" },
      { minQty: 16, maxQty: 40, price: 530, label: "16+ boxes" }
    ],
    isBestseller: false,
    isFeatured: false
  },
  {
    id: "off-005",
    sku: "SSS-OFF-305",
    name: "Casio MJ-120D Plus Desktop Check & Correct Calculator (Pack of 5)",
    category: "office-supplies",
    categoryName: "Office Supplies",
    brand: "Casio",
    shortDescription: "12-digit Indian business calculator with 300 steps check, tax calculation, and dual power.",
    fullDescription: "The most trusted accounting calculator in retail shops, wholesale mandis, and corporate finance departments. Dual solar and battery power with extra large localized digit display.",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80"],
    unit: "Pack of 5 Calculators",
    packSize: "Box of 5 Calculators",
    masterCarton: "Shipper of 40 Units (8 Boxes)",
    unitPrice: 2450, // ₹490 per unit vs ₹650 MRP
    mrp: 3250,
    moq: 1,
    moqUnit: "Box (5 Calculators)",
    inStock: true,
    hsnCode: "8470",
    gstRate: "18%",
    specs: {
      "Digits": "12 Digits Extra Large Display",
      "Check Steps": "300 Steps Check & Correct",
      "Tax Keys": "Auto GST / Tax+ / Tax- Calculation",
      "Power": "Two-Way Solar Cell & CR2032 Battery",
      "Warranty": "3 Years Manufacturer Warranty"
    },
    tierPricing: [
      { minQty: 1, maxQty: 3, price: 2450, label: "1 - 3 boxes" },
      { minQty: 4, maxQty: 9, price: 2320, label: "4 - 9 boxes" },
      { minQty: 10, maxQty: 30, price: 2200, label: "10+ boxes" }
    ],
    isBestseller: true,
    isFeatured: false
  },
  // Paper & printing addition
  {
    id: "pp-003",
    sku: "SSS-PPR-403",
    name: "JK Cedar 100 GSM Executive Bond Paper A4 (Pack of 5 Reams)",
    category: "paper-printing",
    categoryName: "Paper & Printing",
    brand: "JK Paper Ltd.",
    shortDescription: "Luxury high-weight watermarked bond paper for legal deeds, corporate letterheads, and certificates.",
    fullDescription: "Crafted with 100 GSM virgin pulp giving a substantial, crisp tactile hand feel. Ideal for prestigious corporate documentation, legal affidavits, and university degree certificates.",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80"],
    unit: "Carton of 5 Reams (2,500 Sheets)",
    packSize: "Corrugated Box of 5 Reams (500 sheets/ream)",
    masterCarton: "Pallet of 30 Cartons",
    unitPrice: 2250,
    mrp: 3100,
    moq: 2,
    moqUnit: "Cartons (10 Reams)",
    inStock: true,
    hsnCode: "4802",
    gstRate: "12%",
    specs: {
      "GSM": "100 GSM Super Premium Bond",
      "Size": "A4 (210 x 297 mm)",
      "Surface": "Ultra Smooth Parchment Touch",
      "Brightness": "100% Super Bright White"
    },
    tierPricing: [
      { minQty: 2, maxQty: 4, price: 2250, label: "2 - 4 cartons" },
      { minQty: 5, maxQty: 14, price: 2120, label: "5 - 14 cartons" },
      { minQty: 15, maxQty: 50, price: 1990, label: "15+ cartons" }
    ],
    isBestseller: false,
    isFeatured: false
  },
  // Art & craft addition
  {
    id: "art-003",
    sku: "SSS-ART-503",
    name: "Pidilite Fevicol MR General Craft Adhesive 100g (Pack of 24 Squeeze Bottles)",
    category: "art-craft",
    categoryName: "Art & Craft Supplies",
    brand: "Pidilite / Fevicol",
    shortDescription: "Anti-clog applicator squeeze bottles of synthetic white craft adhesive for schools and offices.",
    fullDescription: "Bonds paper, cardboard, thermocol, fabrics, and wood crafts cleanly. Dries transparent without yellowing. Safe for young school children and craft workshops.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80"],
    unit: "Pack (24 Bottles x 100g)",
    packSize: "Outer Shipper of 24 Squeeze Bottles",
    masterCarton: "Master Shipper of 96 Bottles (4 Packs)",
    unitPrice: 720, // ₹30 per bottle vs ₹40 MRP
    mrp: 960,
    moq: 2,
    moqUnit: "Packs (48 Bottles)",
    inStock: true,
    hsnCode: "3506",
    gstRate: "18%",
    specs: {
      "Net Weight": "100 grams per Bottle",
      "Nozzle": "Precision Tapered Needle Applicator",
      "Toxicity": "Non-Toxic Child Safe Formulation",
      "Pack Quantity": "24 Bottles per Box"
    },
    tierPricing: [
      { minQty: 2, maxQty: 5, price: 720, label: "2 - 5 packs" },
      { minQty: 6, maxQty: 15, price: 670, label: "6 - 15 packs" },
      { minQty: 16, maxQty: 50, price: 620, label: "16+ packs (Carton)" }
    ],
    isBestseller: true,
    isFeatured: false
  },
  // Files addition
  {
    id: "fil-003",
    sku: "SSS-FIL-703",
    name: "Spring Cobra Paper Filing Folders (Pack of 50 Units)",
    category: "files-folders-organizers",
    categoryName: "Files, Folders & Organizers",
    brand: "Shreyal Prime",
    shortDescription: "Heavy calendered laminated cardboard folders with steel cobra spring wire lock mechanism.",
    fullDescription: "The most economical, standard document filing system in Indian government departments, schools, and corporate administration. Firmly clasps up to 150 punch-holed sheets without damaging pages.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80"],
    unit: "Pack of 50 Spring Files",
    packSize: "Bundle of 50 Cobra Files",
    masterCarton: "Master Carton of 200 Files (4 Bundles)",
    unitPrice: 1150, // ₹23 per file vs ₹35 MRP
    mrp: 1750,
    moq: 1,
    moqUnit: "Bundle (50 Files)",
    inStock: true,
    hsnCode: "4820",
    gstRate: "12%",
    specs: {
      "Board": "Heavy Calendered Stiff Strawboard",
      "Clip": "High Tension Spring Steel Cobra Fastener",
      "Capacity": "Up to 150 Sheets (80 GSM)",
      "Colors": "Assorted Blue, Green, Red, Yellow"
    },
    tierPricing: [
      { minQty: 1, maxQty: 3, price: 1150, label: "1 - 3 bundles" },
      { minQty: 4, maxQty: 9, price: 1050, label: "4 - 9 bundles (Carton)" },
      { minQty: 10, maxQty: 40, price: 980, label: "10+ bundles" }
    ],
    isBestseller: true,
    isFeatured: false
  },
  // Desk essentials addition
  {
    id: "dsk-003",
    sku: "SSS-DSK-803",
    name: "3-Tier Pull-Out Metal Mesh Document Tray",
    category: "office-desk-essentials",
    categoryName: "Office & Desk Essentials",
    brand: "Solo / Shreyal",
    shortDescription: "Sliding mesh tier trays for sorting incoming/outgoing letters, printer paper, and project dossiers.",
    fullDescription: "Sturdy steel mesh construction with front load sliding trays. Keeps executive workspaces tidy while keeping urgent correspondence easily reachable.",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80"],
    unit: "Pack of 4 Document Trays",
    packSize: "Shipper of 4 Sets",
    masterCarton: "Carton of 12 Sets",
    unitPrice: 1560,
    mrp: 2400,
    moq: 1,
    moqUnit: "Pack (4 Trays)",
    inStock: true,
    hsnCode: "8304",
    gstRate: "18%",
    specs: {
      "Tiers": "3 Sliding Wire Trays",
      "Paper Size": "Fits A4, Legal & Folio Sizes",
      "Finish": "Anti-Rust Black Powder Coating",
      "Dimensions": "35 cm x 30 cm x 27 cm"
    },
    tierPricing: [
      { minQty: 1, maxQty: 2, price: 1560, label: "1 - 2 packs" },
      { minQty: 3, maxQty: 7, price: 1440, label: "3 - 7 packs (Carton)" },
      { minQty: 8, maxQty: 25, price: 1320, label: "8+ packs" }
    ],
    isBestseller: false,
    isFeatured: false
  },
  // Exam supplies addition
  {
    id: "exm-003",
    sku: "SSS-EXM-903",
    name: "School & Corporate Student ID Card Lanyards + Badge Holders (Pack of 100)",
    category: "exam-educational-supplies",
    categoryName: "Exam & Educational Supplies",
    brand: "Shreyal Prime",
    shortDescription: "Satin silk finish neck lanyards with metal swivel dog hook and rigid clear PVC card holder case.",
    fullDescription: "Complete identification solution for schools, colleges, conference delegates, and corporate employees. Smooth edges prevent neck chafing during all-day wear.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80"],
    unit: "Pack (100 Lanyards + 100 Holders)",
    packSize: "Box of 100 Complete ID Sets",
    masterCarton: "Carton of 1,000 Sets (10 Boxes)",
    unitPrice: 1200, // ₹12 per set vs ₹25 retail
    mrp: 2500,
    moq: 1,
    moqUnit: "Box (100 Sets)",
    inStock: true,
    hsnCode: "6307",
    gstRate: "18%",
    specs: {
      "Ribbon": "16 mm Royal Blue Satin Ribbon (Multi-colors available)",
      "Clip": "High Strength Nickel Dog Hook",
      "Holder": "Landscape/Portrait Rigid Clear Plastic Casing",
      "Custom Print": "Custom School/Company Name Screen Printing Available (Min 5 Boxes)"
    },
    tierPricing: [
      { minQty: 1, maxQty: 4, price: 1200, label: "1 - 4 boxes" },
      { minQty: 5, maxQty: 9, price: 1080, label: "5 - 9 boxes" },
      { minQty: 10, maxQty: 50, price: 960, label: "10+ boxes" }
    ],
    isBestseller: false,
    isFeatured: false
  }
];
