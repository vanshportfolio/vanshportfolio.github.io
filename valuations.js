// Valuations Data
const valuations = [
    {
        id: 'apple',
        title: 'Apple Inc. Valuation',
        company: 'Technology Sector',
        date: '2024',
        description: 'Comprehensive valuation of Apple Inc. using DCF and comparable company analysis.',
        metrics: {
            targetPrice: '$210.00',
            upside: '+15%',
            peRatio: '28.5x',
            evEbitda: '20.3x'
        },
        keyPoints: [
            'Strong ecosystem lock-in and recurring revenue',
            'Services segment growth driving margin expansion',
            'Robust free cash flow generation',
            'Potential AI integration opportunities'
        ],
        content: {
            executiveSummary: "Our analysis of Apple Inc. suggests a target price of $210.00, representing a 15% upside from current levels. The valuation is based on a combination of DCF analysis and comparable company multiples, taking into account Apple's strong ecosystem, growing services business, and robust cash flow generation.",
            investmentThesis: [
                'Strong ecosystem lock-in driving high customer retention',
                'Growing services segment with higher margins',
                'Robust free cash flow generation enabling continued innovation',
                'Potential AI integration opportunities across product line'
            ],
            financialAnalysis: [
                'Revenue growth of 8% YoY',
                'Operating margin expansion to 30%',
                'Free cash flow of $110 billion',
                'Return on invested capital of 35%'
            ],
            methodology: [
                'Discounted Cash Flow Analysis',
                'Comparable Company Analysis',
                'Sum of the Parts Valuation'
            ],
            risks: [
                'Supply chain disruptions',
                'Intense competition in key markets',
                'Regulatory scrutiny',
                'Macroeconomic headwinds'
            ]
        }
    },
    {
        id: 'tesla',
        title: 'Tesla Inc. Valuation',
        company: 'Automotive Sector',
        date: '2024',
        description: "Analysis of Tesla's growth trajectory and market positioning in the EV space.",
        metrics: {
            targetPrice: '$180.00',
            upside: '-10%',
            peRatio: '45.2x',
            evEbitda: '35.8x'
        },
        keyPoints: [
            'Market leadership in EV space',
            'Strong brand value and customer loyalty',
            'Technological innovation and vertical integration',
            'International expansion opportunities'
        ],
        content: {
            executiveSummary: "Our analysis of Tesla Inc. suggests a target price of $180.00, representing a 10% downside from current levels. While Tesla maintains its leadership position in the EV market, current valuation multiples appear stretched relative to growth prospects.",
            investmentThesis: [
                'Market leadership in EV space',
                'Strong brand value and customer loyalty',
                'Technological innovation and vertical integration',
                'International expansion opportunities'
            ],
            financialAnalysis: [
                'Revenue growth of 25% YoY',
                'Operating margin of 15%',
                'Free cash flow of $5 billion',
                'Return on invested capital of 20%'
            ],
            methodology: [
                'Discounted Cash Flow Analysis',
                'Comparable Company Analysis',
                'Sum of the Parts Valuation'
            ],
            risks: [
                'Increasing competition in EV space',
                'Production challenges',
                'Regulatory changes',
                'Supply chain constraints'
            ]
        }
    }
];

// DOM Elements
const valuationsGrid = document.querySelector('.valuations-grid');
const loading = document.querySelector('.loading');
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');

// Initialize Valuations
function initializeValuations() {
    console.log('Initializing valuations...');
    console.log('Valuations grid element:', valuationsGrid);
    
    if (!valuationsGrid) {
        console.log('No valuations grid found, initializing detail page...');
        // We're on a valuation detail page
        initializeValuationDetail();
        return;
    }
    
    try {
        console.log('Creating valuation cards...');
        // Clear existing content
        valuationsGrid.innerHTML = '';
        
        // Create and append valuation cards
        valuations.forEach(valuation => {
            console.log('Creating card for:', valuation.title);
            const card = document.createElement('div');
            card.className = 'valuation-card fade-in';
            
            card.innerHTML = `
                <div class="valuation-header">
                    <h3 class="text-xl font-bold mb-2">${valuation.title}</h3>
                    <p class="text-violet-600 font-semibold">${valuation.company}</p>
                </div>
                
                <div class="valuation-metrics">
                    <div class="metric">
                        <span class="metric-label">Target Price</span>
                        <span class="metric-value">${valuation.metrics.targetPrice}</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Upside</span>
                        <span class="metric-value ${valuation.metrics.upside.startsWith('+') ? 'text-green-600' : 'text-red-600'}">${valuation.metrics.upside}</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">P/E Ratio</span>
                        <span class="metric-value">${valuation.metrics.peRatio}</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">EV/EBITDA</span>
                        <span class="metric-value">${valuation.metrics.evEbitda}</span>
                    </div>
                </div>
                
                <p class="mt-4 text-gray-600">${valuation.description}</p>
                
                <div class="mt-6">
                    <h4 class="font-semibold mb-3">Key Points</h4>
                    <ul class="space-y-2">
                        ${valuation.keyPoints.map(point => `
                            <li class="flex items-start">
                                <svg class="w-5 h-5 text-violet-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>${point}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <a href="valuation/${valuation.id}.html" class="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                    Read Full Analysis
                </a>
            `;
            
            valuationsGrid.appendChild(card);
        });

        console.log('Valuation cards created successfully');
        
        // Trigger initial animation
        setTimeout(() => {
            handleScrollAnimations();
        }, 100);
    } catch (error) {
        console.error('Error initializing valuations:', error);
        valuationsGrid.innerHTML = '<p class="text-red-500">Error loading valuations. Please try again later.</p>';
    }
}

function createMetricBox(label, value) {
    const box = document.createElement('div');
    box.className = 'metric-box';
    box.innerHTML = `
        <h4>${label}</h4>
        <p>${value}</p>
    `;
    return box;
}

function updateValuationMetrics(metricsContainer, metrics) {
    metricsContainer.innerHTML = '';
    const container = document.createElement('div');
    container.className = 'metrics-container';

    Object.entries(metrics).forEach(([label, value]) => {
        container.appendChild(createMetricBox(label, value));
    });

    metricsContainer.appendChild(container);
}

function createValuationCard(valuation) {
    const card = document.createElement('div');
    card.className = 'valuation-card';
    card.innerHTML = `
        <div class="valuation-header">
            <h3>${valuation.company}</h3>
            <span class="valuation-sector">${valuation.sector}</span>
        </div>
        <div class="valuation-metrics"></div>
        <p class="valuation-description">${valuation.description}</p>
        <a href="valuation/${valuation.id}.html" class="valuation-link">View Analysis</a>
    `;

    // Add metrics to the card
    const metricsContainer = card.querySelector('.valuation-metrics');
    updateValuationMetrics(metricsContainer, valuation.metrics);

    return card;
}

function initializeValuationDetail() {
    const valuationId = window.location.pathname.split('/').pop().replace('.html', '');
    const valuation = valuations.find(v => v.id === valuationId);
    
    if (!valuation) {
        console.error('Valuation not found:', valuationId);
        return;
    }

    // Update page title
    document.title = `${valuation.company} Valuation - Vansh Sharma`;
    
    // Update content
    const title = document.getElementById('valuationTitle');
    const company = document.getElementById('valuationCompany');
    const metrics = document.getElementById('valuationMetrics');
    const executiveSummary = document.getElementById('executiveSummary');
    const investmentThesis = document.getElementById('investmentThesis');
    const financialAnalysis = document.getElementById('financialAnalysis');
    const methodology = document.getElementById('methodology');
    const risks = document.getElementById('risks');

    if (title) title.textContent = `${valuation.company} Valuation`;
    if (company) company.textContent = valuation.company;
    if (metrics) updateValuationMetrics(metrics, valuation.metrics);
    if (executiveSummary) executiveSummary.textContent = valuation.content.executiveSummary;
    
    // Update lists
    if (investmentThesis) {
        investmentThesis.innerHTML = valuation.content.investmentThesis.map(point => 
            `<li>${point}</li>`
        ).join('');
    }
    
    if (financialAnalysis) {
        financialAnalysis.innerHTML = valuation.content.financialAnalysis.map(point => 
            `<li>${point}</li>`
        ).join('');
    }
    
    if (methodology) {
        methodology.innerHTML = valuation.content.methodology.map(point => 
            `<li>${point}</li>`
        ).join('');
    }
    
    if (risks) {
        risks.innerHTML = valuation.content.risks.map(point => 
            `<li>${point}</li>`
        ).join('');
    }

    // Hide loading animation
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.classList.add('hidden');
    }
}

// Toggle mobile menu
function toggleMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
}

// Handle scroll animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
}

// Handle navbar scroll
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Event Listeners
if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', toggleMobileMenu);
}

if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', toggleMobileMenu);
}

window.addEventListener('scroll', () => {
    handleScrollAnimations();
    handleNavbarScroll();
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Initialize components
    initializeValuations();
    
    // Initial scroll animations
    handleScrollAnimations();
    handleNavbarScroll();
    
    // Hide loading animation
    if (loading) {
        loading.classList.add('hidden');
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileMenu && mobileMenu.classList.contains('active') && 
            !mobileMenu.contains(e.target) && 
            mobileMenuButton && !mobileMenuButton.contains(e.target)) {
            toggleMobileMenu();
        }
    });
}); 