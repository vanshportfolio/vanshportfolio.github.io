// DOM Elements
const timelineContainer = document.querySelector('.timeline');
const competitionsGrid = document.querySelector('.competitions-grid');
const modal = document.getElementById('caseModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalAchievements = document.getElementById('modalAchievements');
const modalSkills = document.getElementById('modalSkills');
const closeButton = document.querySelector('.close-button');
const loading = document.querySelector('.loading');
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');

// Show loading animation
function showLoading() {
    loading.classList.remove('hidden');
}

// Hide loading animation
function hideLoading() {
    loading.classList.add('hidden');
}

// Initialize Timeline
function initializeTimeline() {
    // Clear existing content
    timelineContainer.innerHTML = '';
    
    // Sort timeline by year in descending order
    const sortedTimeline = [...timeline].sort((a, b) => b.year - a.year);
    
    sortedTimeline.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <span class="timeline-year">${item.year}</span>
                <h3>${item.title}</h3>
                <p class="text-violet-600 font-semibold">${item.company}</p>
                <p class="mt-2">${item.description}</p>
                <ul class="mt-4 space-y-2">
                    ${item.achievements.map(achievement => `
                        <li class="flex items-start">
                            <svg class="w-5 h-5 text-violet-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>${achievement}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
        
        timelineContainer.appendChild(timelineItem);
    });
}

// Initialize Competitions
function initializeCompetitions() {
    // Clear existing content
    competitionsGrid.innerHTML = '';
    
    caseCompetitions.forEach(competition => {
        const card = document.createElement('div');
        card.className = 'competition-card fade-in';
        
        card.innerHTML = `
            <h3 class="text-xl font-bold mb-6">${competition.title}</h3>
            <div>
                <h4 class="font-semibold mb-3">Key Achievements</h4>
                <ul class="space-y-2">
                    ${competition.achievements.slice(0, 2).map(achievement => `
                        <li class="flex items-start">
                            <svg class="w-5 h-5 text-violet-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>${achievement}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
            <span class="competition-year">
                ${competition.date}
            </span>
        `;
        
        card.addEventListener('click', () => showModal(competition));
        competitionsGrid.appendChild(card);
    });
}

// Show Modal
function showModal(competition) {
    modalTitle.textContent = competition.title;
    modalDescription.textContent = competition.description;
    
    modalAchievements.innerHTML = competition.achievements.map(achievement => `
        <li>
            <svg class="w-5 h-5 text-violet-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>${achievement}</span>
        </li>
    `).join('');
    
    modalSkills.innerHTML = competition.skills.map(skill => `
        <span class="skill-tag">${skill}</span>
    `).join('');
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Toggle mobile menu
function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
}

// Handle scroll animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in, .timeline-item');
    
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
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Event Listeners
closeButton.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

mobileMenuButton.addEventListener('click', toggleMobileMenu);
mobileMenuClose.addEventListener('click', toggleMobileMenu);

window.addEventListener('scroll', () => {
    handleScrollAnimations();
    handleNavbarScroll();
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            if (mobileMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Hide loading animation after page load
    hideLoading();
    
    // Initialize components
    initializeTimeline();
    initializeCompetitions();
    
    // Initial scroll animations
    handleScrollAnimations();
    handleNavbarScroll();
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileMenu.classList.contains('active') && 
            !mobileMenu.contains(e.target) && 
            !mobileMenuButton.contains(e.target)) {
            toggleMobileMenu();
        }
    });
}); 