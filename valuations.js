// Valuations Data
const valuations = [
    {
        id: 'birkenstock',
        title: 'Microsoft Advanced DCF Model [NYSE: MSFT]',
        company: 'Jul 04, 2025',
        date: '2024',
        description: 'Built a DCF that told the real story because great brands deserve a valuation to match.',
        metrics: {
            targetPrice: '$210.00',
            upside: '+15%',
            peRatio: '28.5x',
            evEbitda: '20.3x'
        },
        keyPoints: [
            'A Financial dashboard that turns numbers into clarity',
            'DCF valuation with forward-looking financial projections',
            'Debt Scenario Model with optimal capital structure',
            'A Wall Street Level Advanced DCF Analysis'
        ],
        paymentLink: 'https://buy.stripe.com/6oUdR94DJb349S57uYfYY0d',
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
        id: 'm_a',
        title: 'DKS x FL Merger Model',
        company: 'Jun 01, 2025',
        date: '2025',
        description: 'Built a DCF that told the real story because great brands deserve a valuation to match.',
        metrics: {
            targetPrice: '$220.00',
            upside: '+25%',
            peRatio: '32.5x',
            evEbitda: '25.3x'
        },
        keyPoints: [
            'Dynamic Dashboard showing a recent deal that makes sense',
            'Forward-looking 3 financial statement projections',
            'Revenue and Cost Synergies Calculation',
            'Accretion/Dilution Analysis'
        ],
        paymentLink: 'https://buy.stripe.com/14AcN5eej8UW2pDdTmfYY09',
        content: {
            executiveSummary: "Our analysis of Apple Inc. suggests a target price of $220.00, representing a 25% upside from current levels. Apple's ecosystem moat and growing services revenue provide strong support for this valuation.",
            investmentThesis: [
                'Strong ecosystem lock-in effect',
                'Growing services revenue with high margins',
                'Innovative product pipeline',
                'Robust balance sheet with significant cash reserves'
            ],
            financialAnalysis: [
                'Services revenue growth of 20% YoY',
                'Operating margin of 30%',
                'Free cash flow of $100 billion',
                'Return on invested capital of 35%'
            ],
            methodology: [
                'Discounted Cash Flow Analysis',
                'Sum of the Parts Valuation',
                'Ecosystem Value Assessment'
            ],
            risks: [
                'Supply chain disruptions',
                'Regulatory scrutiny',
                'Market saturation in key products',
                'Competition in services segment'
            ]
        }
    },
    {
        id: 'target',
        title: 'Target DCF Model [NYSE: TGT]',
        company: 'Mar 21, 2025',
        date: '2025',
        description: "Analysis of Target's omnichannel strategy and market positioning.",
        metrics: {
            targetPrice: '$180.00',
            upside: '-10%',
            peRatio: '45.2x',
            evEbitda: '35.8x'
        },
        keyPoints: [
            'A Financial dashboard to simplify complex financial data',
            'DCF valuation with forward-looking financial projections',
            'Revenue Top-Down Model with Industry Analysis',
            'Income Statement/Balance Sheet Projections'
        ],
        paymentLink: 'https://buy.stripe.com/fZueVd6LR0oq7JX6qUfYY0c',
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
    },
    {
        id: 'wellsfargo',
        title: 'Wells Fargo FCFE Model [NYSE: WFC]',
        company: 'Apr 14, 2025',
        date: '2025',
        description: "Analysis of Wells Fargo's transformation and market positioning.",
        metrics: {
            targetPrice: '$180.00',
            upside: '-10%',
            peRatio: '45.2x',
            evEbitda: '35.8x'
        },
        keyPoints: [
            'A Financial Dashboard to make decisions in Banking Sector',
            'FCFE modeling to cut through the noise and price banks',
            'Risk Weighted Assets Calculations and Forecasting',
            'Tier 1 Capital Ratio and Competitors ROE Analysis'
        ],
        paymentLink: 'https://buy.stripe.com/aFabJ1gmrdbcc0d02wfYY0a',
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
                    <div class="w-full mb-4">
                        <img src="images/${valuation.id}.jpg" alt="${valuation.title}" style="width: 100%; height: 100%; border: 1px solid #333; margin-bottom: 20px; object-fit: cover; border-radius: 0.5rem;">
                    </div>
                    <h3 class="text-xl font-bold mb-2">${valuation.title}</h3>
                    <p class="text-violet-600 font-semibold">${valuation.company}</p>
                </div>
                
                <!-- <div class="metrics-grid">
                    <div class="metric-box">
                        <div class="metric-value">${valuation.metrics.targetPrice}</div>
                        <div class="metric-label">Target Price</div>
                    </div>
                    <div class="metric-box">
                        <div class="metric-value ${valuation.metrics.upside.startsWith('+') ? 'text-green-600' : 'text-red-600'}">${valuation.metrics.upside}</div>
                        <div class="metric-label">Upside</div>
                    </div>
                    <div class="metric-box">
                        <div class="metric-value">${valuation.metrics.peRatio}</div>
                        <div class="metric-label">P/E Ratio</div>
                    </div>
                    <div class="metric-box">
                        <div class="metric-value">${valuation.metrics.evEbitda}</div>
                        <div class="metric-label">EV/EBITDA</div>
                    </div>
                </div> -->
                
                <div class="mt-6">
                    <h4 class="font-semibold mb-1">WHAT YOU GET?</h4>
                    <ul class="space-y-2">
                        ${valuation.keyPoints.map(point => `
                            <li class="flex items-start">
                                <svg class="w-5 h-5 text-violet-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>${point}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="mt-6 text-center">
                    <a href="${valuation.paymentLink}" class="inline-block px-6 py-3 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                        Download the Model
                    </a>
                </div>
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
    card.className = 'valuation-card fade-in';
    card.innerHTML = `
        <div class="valuation-header">
            <h3>${valuation.title}</h3>
            <p>${valuation.ticker}</p>
        </div>
        <div class="valuation-metrics">
            <div class="metric">
                <span class="metric-label">Target Price</span>
                <span class="metric-value">${valuation.metrics.targetPrice}</span>
            </div>
            <div class="metric">
                <span class="metric-label">Upside</span>
                <span class="metric-value">${valuation.metrics.upside}</span>
            </div>
        </div>
        <ul>
            ${valuation.keyPoints.map(highlight => `
                <li>
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    ${highlight}
                </li>
            `).join('')}
        </ul>
        <a href="${valuation.paymentLink}" class="primary-button">Purchase Model</a>
    `;
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

function createMetricsGrid(metrics) {
    const grid = document.createElement('div');
    grid.className = 'metrics-grid';

    const metricOrder = [
        { key: 'targetPrice', label: 'Target Price' },
        { key: 'upside', label: 'Upside' },
        { key: 'peRatio', label: 'P/E Ratio' },
        { key: 'evEbitda', label: 'EV/EBITDA' }
    ];

    metricOrder.forEach(({ key, label }) => {
        const box = document.createElement('div');
        box.className = 'metric-box';

        const value = document.createElement('div');
        value.className = 'metric-value';
        value.textContent = metrics[key];

        const labelElement = document.createElement('div');
        labelElement.className = 'metric-label';
        labelElement.textContent = label;

        box.appendChild(value);
        box.appendChild(labelElement);
        grid.appendChild(box);
    });

    return grid;
}

// Course Signup Form Handler
const courseSignupForm = document.getElementById('courseSignupForm');
if (courseSignupForm) {
    courseSignupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = courseSignupForm.querySelector('input[type="email"]').value;
        
        try {
            // Here you would typically send this to your backend
            console.log('Email submitted:', email);
            
            // Show success message
            const button = courseSignupForm.querySelector('button');
            const originalText = button.textContent;
            button.textContent = 'Thanks! We\'ll be in touch.';
            button.style.background = '#10B981';
            button.style.color = 'white';
            
            // Reset form
            courseSignupForm.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '';
                button.style.color = '';
            }, 3000);
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Something went wrong. Please try again.');
        }
    });
} 
