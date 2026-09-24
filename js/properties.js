/**
 * Ashiyana Real Estate & Land Developers
 * Property Inventory & Interactive Filter System
 */

const ASHIYANA_PROPERTIES = [
    {
        id: "ash-01",
        title: "Crystal Valley Project — Gated Residential Plots",
        location: "Tilwara, Jabalpur",
        areaZone: "tilwara",
        type: "residential-plots",
        typeName: "Residential Plot",
        price: "₹ 18.50 Lakhs onwards",
        priceNumeric: 1850000,
        area: "1,200 - 2,400 Sq. Ft.",
        possession: "Immediate Handover",
        badge: "Crystal Valley Flagship",
        doctorVerified: true,
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
        ],
        description: "The Crystal Valley Project in Tilwara is Jabalpur's premier planned plotted community. Features 30-40 ft wide paved roads, underground drainage, landscaped green parks, and immediate land possession with 100% clear legal registry verified by Property Doctor.",
        features: ["30-40 Ft Wide Concrete Roads", "Water & Electricity Supply Line", "Legal Mutation Assistance", "Boundary Wall Demarcated", "24/7 Secured Campus"]
    },
    {
        id: "ash-02",
        title: "Independent 1 BHK House (Built-up)",
        location: "Napier Town / Russel Chowk, Jabalpur",
        areaZone: "napier-town",
        type: "builder-floors",
        typeName: "Independent House",
        price: "₹ 24.50 Lakhs",
        priceNumeric: 2450000,
        area: "600 Sq. Ft. Built-up",
        possession: "Ready to Move",
        badge: "City Centre Prime",
        doctorVerified: true,
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80"
        ],
        description: "Compact, masterfully built independent single-floor residential house offering ~600 Sq. Ft. built-up area right in the heart of Napier Town / Russel Chowk. Built with premium structural materials, vitrified flooring, and independent terrace access.",
        features: ["Independent Water Tank & Borewell", "Vitrified Tile Flooring", "Steps from Jabalpur Hospital", "Immediate Registry & Possession", "100% Vastu Compliant"]
    },
    {
        id: "ash-03",
        title: "Luxury 3 BHK Builder Floor with Balcony",
        location: "Madan Mahal, Jabalpur",
        areaZone: "madan-mahal",
        type: "builder-floors",
        typeName: "Builder Floor",
        price: "₹ 58.00 Lakhs",
        priceNumeric: 5800000,
        area: "1,450 Sq. Ft.",
        possession: "Ready to Move",
        badge: "New Construction",
        doctorVerified: true,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=80"
        ],
        description: "Architect-designed 3 BHK luxury builder floor constructed to the highest standards. Features expansive master bedroom with en-suite bath, spacious balconies overlooking Madan Mahal green ridge, dedicated stilt covered car parking and automatic elevator.",
        features: ["Covered Car Parking", "High Speed Elevator", "Modular Kitchen with Chimney", "Municipal Water + Submersible", "Clear Title Mutation Done"]
    },
    {
        id: "ash-04",
        title: "Commercial Retail / Office Space Plot",
        location: "Shastri Bridge Rd, Napier Town, Jabalpur",
        areaZone: "napier-town",
        type: "commercial",
        typeName: "Commercial Plot",
        price: "₹ 82.00 Lakhs",
        priceNumeric: 8200000,
        area: "1,850 Sq. Ft.",
        possession: "Immediate Registry",
        badge: "High Footfall Hub",
        doctorVerified: true,
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80"
        ],
        description: "High-visibility commercial plot located directly on Shastri Bridge Road / Rajul Landmark corridor in Napier Town. High consumer footfall, excellent road frontage, ideal for diagnostic centers, banking branches, IT offices, or retail showrooms.",
        features: ["Wide Commercial Road Frontage", "Commercial Diversion Approved", "Dual Side Access", "Clear 30-Year Search Report", "Immediate Mutation & Possession"]
    },
    {
        id: "ash-05",
        title: "Scenic Eco-Farm & Resort Plots",
        location: "Bandhavgarh / Umaria Corridor",
        areaZone: "bandhavgarh",
        type: "agricultural",
        typeName: "Agricultural / Resort Land",
        price: "₹ 21.00 Lakhs / Acre",
        priceNumeric: 2100000,
        area: "1 to 5 Acres Parcels",
        possession: "Instant Possession",
        badge: "Outstation Investment",
        doctorVerified: true,
        image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=900&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80"
        ],
        description: "Picturesque agricultural and eco-resort land plots located along the Jabalpur to Bandhavgarh Tiger Reserve & Umaria expressway corridor. Perfect for farmhouses, agro-tourism retreats, luxury wilderness cottages, and organic farming.",
        features: ["All-Weather Tar Road Access", "Rich Alluvial Fertile Soil", "Abundant Groundwater Level", "Clear Government Registry Records", "Fenced & Demarcated"]
    },
    {
        id: "ash-06",
        title: "Corner Residential Plot in Green Township",
        location: "Tilwara Ghat, Jabalpur",
        areaZone: "tilwara",
        type: "residential-plots",
        typeName: "Residential Plot",
        price: "₹ 27.00 Lakhs",
        priceNumeric: 2700000,
        area: "1,500 Sq. Ft.",
        possession: "Ready for Construction",
        badge: "Corner East-Facing",
        doctorVerified: true,
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80"
        ],
        description: "East-facing corner plot situated in an upscale residential colony near Narmada River corridor in Tilwara. Highly peaceful residential environment with fresh air, wide asphalt roads, streetlights, and swift connectivity to Jabalpur city center.",
        features: ["East Facing Vastu Approved", "Electricity Grid Connected", "Water Connection Pipeline Ready", "Immediate Building Permission Support", "Gated Security Entry"]
    },
    {
        id: "ash-07",
        title: "Modern 2 BHK Independent Duplex House",
        location: "Near Jabalpur Hospital, Napier Town",
        areaZone: "napier-town",
        type: "builder-floors",
        typeName: "Independent House",
        price: "₹ 44.00 Lakhs",
        priceNumeric: 4400000,
        area: "1,050 Sq. Ft.",
        possession: "Ready to Move",
        badge: "Verified Doctor Clear",
        doctorVerified: true,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80"
        ],
        description: "Thoughtfully engineered 2 BHK duplex residential house boasting premium finishes, spacious bedrooms, modern open modular kitchen, and private parking. Walking distance to schools, clinics, and Napier Town markets.",
        features: ["Car Parking Porch", "Teak Wood Main Door", "Fall Ceiling with LED Spotlights", "Overhead & Underground Water Tanks", "100% Clear Title Registry"]
    },
    {
        id: "ash-08",
        title: "Prime Highway Commercial Land Parcel",
        location: "Tilwara Bypass, Jabalpur",
        areaZone: "tilwara",
        type: "commercial",
        typeName: "Commercial Land",
        price: "₹ 1.25 Crore",
        priceNumeric: 12500000,
        area: "10,000 Sq. Ft.",
        possession: "Clear Possession",
        badge: "Highway Corridor",
        doctorVerified: true,
        image: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&w=900&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&w=900&q=80"
        ],
        description: "Exceptional commercial land parcel directly abutting the four-lane Tilwara Bypass highway. Perfect for logistics hub, multi-specialty hospital, resort hotel, or institutional campus. Cleared by Property Doctor with full 30-year search title.",
        features: ["120 Ft Frontage on Highway", "Commercial Master Plan Zone", "Heavy Vehicle Accessibility", "Water & 3-Phase Power Nearby", "Immediate Land Possession Handover"]
    }
];

// Helper to format Indian Currency
function formatIndianCurrency(amount) {
    if (!amount) return "Price on Request";
    if (typeof amount === 'string') return amount;
    return "₹ " + Number(amount).toLocaleString('en-IN');
}

// Function to render property card HTML
function createPropertyCardHTML(prop, index = 0) {
    const waMessage = encodeURIComponent(`Hello Ashiyana Real Estate! I am interested in: ${prop.title} (${prop.location}) priced at ${prop.price}. Please share full details and arrange a site visit.`);
    const waLink = `https://wa.me/919617254953?text=${waMessage}`;
    const staggerClass = `stagger-${(index % 4) + 1}`;

    return `
    <div class="property-card reveal ${staggerClass}" data-category="${prop.type}" data-location="${prop.areaZone}" data-id="${prop.id}">
        <div class="property-img-wrapper">
            <img src="${prop.image}" alt="${prop.title}" loading="lazy">
            <span class="property-badge-tag">${prop.badge || 'Verified'}</span>
            <span class="property-price-tag">${prop.price}</span>
        </div>
        <div class="property-content">
            <div class="property-location">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-brass"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>${prop.location}</span>
            </div>
            <h3 class="property-title">${prop.title}</h3>
            
            <div class="property-specs">
                <div class="property-spec-item" title="Area / Dimensions">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 8.7 8.7 21.3c-1 1-2.5 1-3.4 0l-2.6-2.6c-1-1-1-2.5 0-3.4L15.3 2.7c1-1 2.5-1 3.4 0l2.6 2.6c1 1 1 2.5 0 3.4Z"></path><path d="m14.5 9.5 2 2"></path></svg>
                    <span>${prop.area}</span>
                </div>
                <div class="property-spec-item" title="Possession Status">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    <span>${prop.possession}</span>
                </div>
            </div>

            <div class="property-actions">
                <button type="button" class="btn-card-details" onclick="openPropertyModal('${prop.id}')">
                    View Details
                </button>
                <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn-card-inquire btn-shimmer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    Inquire Now
                </a>
            </div>
        </div>
    </div>
    `;
}

// Function to open Property Detail Modal
function openPropertyModal(id) {
    const prop = ASHIYANA_PROPERTIES.find(p => p.id === id);
    if (!prop) return;

    let modalBackdrop = document.getElementById('property-modal-backdrop');
    if (!modalBackdrop) {
        modalBackdrop = document.createElement('div');
        modalBackdrop.id = 'property-modal-backdrop';
        modalBackdrop.className = 'modal-backdrop';
        document.body.appendChild(modalBackdrop);
    }

    const waMessage = encodeURIComponent(`Hello Amit Chakravarti ji, I want more details and site visit booking for ${prop.title} (${prop.location}) listed at ${prop.price}.`);
    const waLink = `https://wa.me/919617254953?text=${waMessage}`;
    const callLink = `tel:+919617254953`;

    const featuresHTML = prop.features.map(f => `
        <li class="flex items-center gap-2 text-sm text-gray-700">
            <svg class="text-emerald-600 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>${f}</span>
        </li>
    `).join('');

    modalBackdrop.innerHTML = `
        <div class="modal-content">
            <button class="modal-close-btn" onclick="closePropertyModal()" aria-label="Close modal">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <div class="relative h-64 bg-gray-900 overflow-hidden">
                <img src="${prop.image}" alt="${prop.title}" class="w-full h-full object-cover">
                <div class="absolute bottom-3 left-4 bg-navy text-white px-3 py-1 rounded text-xs font-bold tracking-wide">
                    ${prop.badge || 'Verified Listing'}
                </div>
            </div>
            <div class="p-6">
                <div class="flex items-center justify-between gap-4 mb-2 flex-wrap">
                    <span class="text-xs font-bold uppercase tracking-wider text-brass bg-brass/10 px-2.5 py-1 rounded">
                        ${prop.typeName} • ${prop.areaZone.toUpperCase()}
                    </span>
                    <span class="text-2xl font-bold font-display text-navy">${prop.price}</span>
                </div>
                <h2 class="text-xl font-bold font-display text-navy mb-2">${prop.title}</h2>
                <p class="text-sm text-gray-500 flex items-center gap-1 mb-4">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    ${prop.location}
                </p>

                <div class="bg-amber-50/60 border border-amber-200/80 rounded-lg p-3.5 mb-5 flex items-start gap-3">
                    <div class="p-1.5 bg-amber-500 text-white rounded shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-gray-900 uppercase tracking-wide">Property Doctor Certified Clear Title</h4>
                        <p class="text-xs text-gray-600 mt-0.5">30-Year registry search, land mutation, demarcation, and diversion records verified with zero legal disputes.</p>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-3 p-3 bg-gray-50 rounded-lg mb-5 text-sm">
                    <div>
                        <span class="text-xs text-gray-400 block font-medium">Area / Dimension</span>
                        <strong class="text-gray-800">${prop.area}</strong>
                    </div>
                    <div>
                        <span class="text-xs text-gray-400 block font-medium">Possession Status</span>
                        <strong class="text-gray-800">${prop.possession}</strong>
                    </div>
                </div>

                <h4 class="text-sm font-bold text-gray-900 mb-2">About Property</h4>
                <p class="text-sm text-gray-600 leading-relaxed mb-4">${prop.description}</p>

                <h4 class="text-sm font-bold text-gray-900 mb-2">Key Highlights & Amenities</h4>
                <ul class="grid sm:grid-cols-2 gap-2 mb-6">
                    ${featuresHTML}
                </ul>

                <div class="flex gap-3 pt-3 border-t border-gray-100">
                    <a href="${callLink}" class="flex-1 text-center py-3 px-4 border border-navy text-navy font-bold rounded-lg text-sm hover:bg-navy hover:text-white transition flex items-center justify-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        Call Amit Ji
                    </a>
                    <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="flex-1 text-center py-3 px-4 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold rounded-lg text-sm transition flex items-center justify-center gap-2 shadow-sm">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                        Chat & Visit
                    </a>
                </div>
            </div>
        </div>
    `;

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';

    modalBackdrop.onclick = function(e) {
        if (e.target === modalBackdrop) {
            closePropertyModal();
        }
    };
}

function closePropertyModal() {
    const modalBackdrop = document.getElementById('property-modal-backdrop');
    if (modalBackdrop) {
        modalBackdrop.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Attach Escape key listener for modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePropertyModal();
    }
});
