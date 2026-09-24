/**
 * Ashiyana Real Estate & Land Developers - App Script
 * Core Functionality: Toast, EMI Calculator, Contact Handlers, FAQ Accordions
 */

document.addEventListener('DOMContentLoaded', function () {
    initFeaturedProperties();
    initHeroSearch();
    initEMICalculator();
    initContactForms();
    initFAQ();
    initCounters();
    initScrollReveal();
});

// Toast System
function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icon = type === 'success' 
        ? `<svg class="text-brass" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`
        : `<svg class="text-red-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;

    toast.innerHTML = `${icon}<span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-10px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// Render Featured Properties on Homepage
function initFeaturedProperties() {
    const container = document.getElementById('featured-properties-container');
    if (!container || typeof ASHIYANA_PROPERTIES === 'undefined') return;

    // Show top 4 featured listings
    const featured = ASHIYANA_PROPERTIES.slice(0, 4);
    container.innerHTML = featured.map((p, idx) => createPropertyCardHTML(p, idx)).join('');
    setTimeout(initScrollReveal, 60);
}

// Hero Search Form Logic
function initHeroSearch() {
    const searchForm = document.getElementById('hero-quick-search');
    if (!searchForm) return;

    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const type = document.getElementById('search-property-type')?.value || 'all';
        const location = document.getElementById('search-property-location')?.value || 'all';
        const budget = document.getElementById('search-property-budget')?.value || 'all';

        // Redirect to properties.html with search parameters
        window.location.href = `properties.html?type=${encodeURIComponent(type)}&location=${encodeURIComponent(location)}&budget=${encodeURIComponent(budget)}`;
    });
}

// EMI Loan Calculator
function initEMICalculator() {
    const amountSlider = document.getElementById('emi-amount');
    const interestSlider = document.getElementById('emi-interest');
    const tenureSlider = document.getElementById('emi-tenure');

    const amountDisplay = document.getElementById('emi-amount-val');
    const interestDisplay = document.getElementById('emi-interest-val');
    const tenureDisplay = document.getElementById('emi-tenure-val');

    const monthlyEmiDisplay = document.getElementById('emi-monthly-result');
    const totalInterestDisplay = document.getElementById('emi-total-interest');
    const totalPayableDisplay = document.getElementById('emi-total-payable');

    if (!amountSlider || !interestSlider || !tenureSlider) return;

    function calculate() {
        const P = parseFloat(amountSlider.value);
        const annualRate = parseFloat(interestSlider.value);
        const N = parseFloat(tenureSlider.value) * 12; // months

        const r = annualRate / 12 / 100; // monthly rate

        let emi = 0;
        if (r > 0) {
            emi = (P * r * Math.pow(1 + r, N)) / (Math.pow(1 + r, N) - 1);
        } else {
            emi = P / N;
        }

        const totalPayable = emi * N;
        const totalInterest = totalPayable - P;

        if (amountDisplay) amountDisplay.textContent = '₹ ' + (P / 100000).toFixed(1) + ' Lakhs';
        if (interestDisplay) interestDisplay.textContent = annualRate.toFixed(1) + ' %';
        if (tenureDisplay) tenureDisplay.textContent = (N / 12) + ' Years';

        if (monthlyEmiDisplay) monthlyEmiDisplay.textContent = '₹ ' + Math.round(emi).toLocaleString('en-IN');
        if (totalInterestDisplay) totalInterestDisplay.textContent = '₹ ' + Math.round(totalInterest).toLocaleString('en-IN');
        if (totalPayableDisplay) totalPayableDisplay.textContent = '₹ ' + Math.round(totalPayable).toLocaleString('en-IN');
    }

    amountSlider.addEventListener('input', calculate);
    interestSlider.addEventListener('input', calculate);
    tenureSlider.addEventListener('input', calculate);

    calculate(); // Initial run
}

// Universal Contact Form & WhatsApp Dispatch
function initContactForms() {
    const forms = document.querySelectorAll('.ashiyana-inquiry-form');
    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = form.querySelector('[name="name"]')?.value || 'Valued Client';
            const phone = form.querySelector('[name="phone"]')?.value || 'Not provided';
            const service = form.querySelector('[name="service"]')?.value || 'General Inquiry';
            const location = form.querySelector('[name="location"]')?.value || 'Jabalpur';
            const message = form.querySelector('[name="message"]')?.value || 'Looking for verified properties / plotting consultation.';

            showToast('Thank you! Redirecting to WhatsApp with Amit Chakravarti...');

            // Formulate WhatsApp message
            const waText = encodeURIComponent(
                `*New Inquiry from Ashiyana Website*\n\n` +
                `*Name:* ${name}\n` +
                `*Phone:* ${phone}\n` +
                `*Service:* ${service}\n` +
                `*Preferred Location:* ${location}\n` +
                `*Message:* ${message}\n\n` +
                `Kindly connect with me at the earliest.`
            );

            const waUrl = `https://wa.me/919617254953?text=${waText}`;

            setTimeout(() => {
                window.open(waUrl, '_blank');
                form.reset();
            }, 1200);
        });
    });
}

// FAQ Accordion
function initFAQ() {
    const items = document.querySelectorAll('.faq-item');
    items.forEach(item => {
        const header = item.querySelector('.faq-question');
        if (!header) return;

        header.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');
            
            // Close all
            items.forEach(other => {
                other.classList.remove('active');
                const content = other.querySelector('.faq-answer');
                if (content) content.style.maxHeight = null;
                const icon = other.querySelector('.faq-icon');
                if (icon) icon.style.transform = 'rotate(0deg)';
            });

            if (!isOpen) {
                item.classList.add('active');
                const content = item.querySelector('.faq-answer');
                if (content) content.style.maxHeight = content.scrollHeight + 'px';
                const icon = item.querySelector('.faq-icon');
                if (icon) icon.style.transform = 'rotate(180deg)';
            }
        });
    });
}

// Animated Statistics Counters
function initCounters() {
    const counters = document.querySelectorAll('.stat-counter');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target') || '0', 10);
                const suffix = entry.target.getAttribute('data-suffix') || '';
                let current = 0;
                const increment = Math.ceil(target / 40);

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        entry.target.textContent = target + suffix;
                        clearInterval(timer);
                    } else {
                        entry.target.textContent = current + suffix;
                    }
                }, 30);

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// Universal Scroll Reveal Observer
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom');
    if (!revealElements.length) return;

    // If user prefers reduced motion, reveal immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        revealElements.forEach(el => el.classList.add('revealed'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}
