// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.dept-card, .job-card, .stat-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Setup job card click handlers for home page
function setupHomeJobCardHandlers() {
    const jobCards = document.querySelectorAll('.job-card');
    
    jobCards.forEach(card => {
        card.style.cursor = 'pointer';
        
        // Handle card click
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on Apply button
            if (e.target.closest('.btn')) {
                return;
            }
            
            handleHomeJobCardClick(card);
        });
        
        // Handle Apply button click
        const applyBtn = card.querySelector('.btn');
        if (applyBtn) {
            applyBtn.addEventListener('click', function(e) {
                e.preventDefault();
                handleHomeJobCardClick(card);
            });
        }
    });
}

// Handle job card click from home page
function handleHomeJobCardClick(jobCard) {
    const jobTitle = jobCard.querySelector('h4').textContent;
    const companyName = jobCard.querySelector('.company-name').textContent;
    const jobType = jobCard.querySelector('.job-type').textContent;
    const tags = Array.from(jobCard.querySelectorAll('.job-tags span')).map(tag => tag.textContent);
    const logo = jobCard.querySelector('.company-logo').src;
    const salary = jobCard.querySelector('.job-salary').textContent;
    
    // Store job data in sessionStorage
    const jobData = {
        title: jobTitle,
        company: companyName,
        type: jobType,
        tags: tags,
        logo: logo,
        salary: salary,
        description: `Join ${companyName} and be part of our innovative team. This is a great opportunity to grow your career with us.`
    };
    
    console.log('Saving job data:', jobData);
    sessionStorage.setItem('selectedJob', JSON.stringify(jobData));
    
    // Verify data was saved
    const savedData = sessionStorage.getItem('selectedJob');
    console.log('Verified saved data:', savedData);
    
    // Navigate to job details page
    setTimeout(() => {
        window.location.href = 'job-details.html';
    }, 100);
}

// Initialize home page job cards
document.addEventListener('DOMContentLoaded', setupHomeJobCardHandlers);

// Add animate-in class styles
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    </style>
`);

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start).toLocaleString() + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString() + '+';
        }
    }
    
    updateCounter();
}

// Initialize counters when visible
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.dataset.count);
            if (target) {
                animateCounter(entry.target, target);
                counterObserver.unobserve(entry.target);
            }
        }
    });
}, { threshold: 0.5 });

// Search functionality
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');

if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query) {
            console.log('Searching for:', query);
            // Add search logic here
        }
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });
}

// Mobile menu close on link click
const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    });
});

console.log('BSU Tech Careers - Website Loaded Successfully');
