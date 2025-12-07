// Jobs Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeJobsPage();
});

function initializeJobsPage() {
    setupSearchFunctionality();
    setupFilterFunctionality();
    setupPaginationButtons();
    setupLoadMoreLink();
    setupApplyButtons();
    setupJobCardClickHandlers();
}

// Search Functionality
function setupSearchFunctionality() {
    const searchInput = document.querySelector('.search-input-group input');
    
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            filterJobs(searchTerm);
        });
    }
}

// Filter Functionality
function setupFilterFunctionality() {
    const selects = document.querySelectorAll('.form-select');
    
    selects.forEach(select => {
        select.addEventListener('change', function() {
            applyFilters();
        });
    });
}

// Filter Jobs by Search Term
function filterJobs(searchTerm) {
    const jobCards = document.querySelectorAll('.job-card');
    
    jobCards.forEach(card => {
        const jobTitle = card.querySelector('h4').textContent.toLowerCase();
        const companyName = card.querySelector('.company-name').textContent.toLowerCase();
        const description = card.querySelector('.job-description').textContent.toLowerCase();
        
        if (jobTitle.includes(searchTerm) || companyName.includes(searchTerm) || description.includes(searchTerm)) {
            card.parentElement.style.display = 'block';
            card.parentElement.style.animation = 'fadeIn 0.3s ease';
        } else {
            card.parentElement.style.display = 'none';
        }
    });
}

// Apply Filters
function applyFilters() {
    const specializationSelect = document.querySelectorAll('.form-select')[0];
    const locationSelect = document.querySelectorAll('.form-select')[1];
    
    const selectedSpecialization = specializationSelect.value;
    const selectedLocation = locationSelect.value;
    
    const jobCards = document.querySelectorAll('.job-card');
    
    jobCards.forEach(card => {
        const tags = card.querySelectorAll('.job-tags span');
        let specializationMatch = true;
        let locationMatch = true;
        
        if (selectedSpecialization !== 'All Specializations') {
            specializationMatch = Array.from(tags).some(tag => 
                tag.textContent.includes(selectedSpecialization)
            );
        }
        
        if (selectedLocation !== 'All Locations') {
            locationMatch = Array.from(tags).some(tag => 
                tag.textContent.includes(selectedLocation)
            );
        }
        
        if (specializationMatch && locationMatch) {
            card.parentElement.style.display = 'block';
            card.parentElement.style.animation = 'fadeIn 0.3s ease';
        } else {
            card.parentElement.style.display = 'none';
        }
    });
}

// Pagination State
let currentPage = 1;
const jobsPerPage = 6;

// Pagination Buttons
function setupPaginationButtons() {
    const paginationLinks = document.querySelectorAll('.page-link');
    
    paginationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const pageNumber = this.textContent.trim();
            
            // Handle Previous button
            if (this.getAttribute('aria-label') === 'Previous') {
                if (currentPage > 1) {
                    currentPage--;
                    updatePagination();
                }
            }
            // Handle Next button
            else if (this.getAttribute('aria-label') === 'Next') {
                currentPage++;
                updatePagination();
            }
            // Handle page number
            else if (!isNaN(pageNumber)) {
                currentPage = parseInt(pageNumber);
                updatePagination();
            }
        });
    });
}

function updatePagination() {
    const pageItems = document.querySelectorAll('.page-item');
    
    // Update active state
    pageItems.forEach((item, index) => {
        if (index === currentPage) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // Update page numbers display
    const pageNumbers = document.querySelectorAll('.page-item:not(:first-child):not(:last-child)');
    pageNumbers.forEach((item, index) => {
        item.querySelector('.page-link').textContent = currentPage + index;
    });
    
    // Scroll to jobs section
    document.querySelector('#jobs-section').scrollIntoView({ behavior: 'smooth' });
}

// Load More Link
function setupLoadMoreLink() {
    const loadMoreLink = document.querySelector('.load-more-link');
    
    if (loadMoreLink) {
        loadMoreLink.addEventListener('click', function(e) {
            e.preventDefault();
            loadMoreJobs();
        });
    }
}

function loadMoreJobs() {
    // Simulate loading more jobs
    const container = document.querySelector('.row.g-4');
    
    const newJobs = [
        {
            company: 'Google Egypt',
            logo: 'https://logo.clearbit.com/google.com',
            title: 'Frontend Developer',
            type: 'Full Time',
            specialization: 'Information Technology',
            location: 'Cairo',
            experience: '2-3 Years Experience',
            description: 'Join Google\'s Cairo office and work on innovative web applications used by millions worldwide.',
            salary: '$25,000 - $35,000'
        },
        {
            company: 'Amazon Egypt',
            logo: 'https://logo.clearbit.com/amazon.com',
            title: 'Cloud Engineer',
            type: 'Full Time',
            specialization: 'Information Technology',
            location: 'Giza',
            experience: '1-3 Years Experience',
            description: 'Design and implement cloud solutions for enterprise clients across the Middle East region.',
            salary: '$22,000 - $32,000'
        }
    ];
    
    newJobs.forEach(job => {
        const jobCard = createJobCard(job);
        container.appendChild(jobCard);
    });
}

// Create Job Card Element
function createJobCard(jobData) {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-lg-6';
    
    colDiv.innerHTML = `
        <div class="job-card">
            <div class="job-header">
                <img src="${jobData.logo}" alt="${jobData.company}" class="company-logo">
                <div class="job-info">
                    <h4>${jobData.title}</h4>
                    <span class="company-name">${jobData.company}</span>
                </div>
                <span class="job-type">${jobData.type}</span>
            </div>
            <div class="job-tags">
                <span>${jobData.specialization}</span>
                <span>${jobData.location}</span>
                <span>${jobData.experience}</span>
            </div>
            <p class="job-description">${jobData.description}</p>
            <div class="job-footer">
                <span class="job-salary"><i class="fas fa-money-bill-wave"></i> ${jobData.salary}</span>
                <a href="#" class="btn btn-primary">Apply Now</a>
            </div>
        </div>
    `;
    
    return colDiv;
}

// Setup Job Card Click Handlers
function setupJobCardClickHandlers() {
    const jobCards = document.querySelectorAll('.job-card');
    
    jobCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on Apply button
            if (e.target.textContent === 'Apply Now') {
                return;
            }
            
            handleJobCardClick(card);
        });
        
        // Add cursor pointer style
        card.style.cursor = 'pointer';
    });
}

// Handle Job Card Click
function handleJobCardClick(jobCard) {
    const jobTitle = jobCard.querySelector('h4').textContent;
    const companyName = jobCard.querySelector('.company-name').textContent;
    const jobDescription = jobCard.querySelector('.job-description').textContent;
    const jobSalary = jobCard.querySelector('.job-salary').textContent;
    const jobType = jobCard.querySelector('.job-type').textContent;
    const tags = Array.from(jobCard.querySelectorAll('.job-tags span')).map(tag => tag.textContent);
    const logo = jobCard.querySelector('.company-logo').src;
    
    // Store job data in sessionStorage
    const jobData = {
        title: jobTitle,
        company: companyName,
        description: jobDescription,
        salary: jobSalary,
        type: jobType,
        tags: tags,
        logo: logo
    };
    
    console.log('Saving job data from jobs page:', jobData);
    sessionStorage.setItem('selectedJob', JSON.stringify(jobData));
    
    // Verify data was saved
    const savedData = sessionStorage.getItem('selectedJob');
    console.log('Verified saved data:', savedData);
    
    // Navigate to job details page
    setTimeout(() => {
        window.location.href = 'job-details.html';
    }, 100);
}

// Apply Button Functionality
function setupApplyButtons() {
    document.addEventListener('click', function(e) {
        if (e.target.textContent === 'Apply Now') {
            e.preventDefault();
            handleApplyClick(e.target);
        }
    });
}

function handleApplyClick(button) {
    const jobCard = button.closest('.job-card');
    const jobTitle = jobCard.querySelector('h4').textContent;
    const companyName = jobCard.querySelector('.company-name').textContent;
    const jobDescription = jobCard.querySelector('.job-description').textContent;
    const jobSalary = jobCard.querySelector('.job-salary').textContent;
    const jobType = jobCard.querySelector('.job-type').textContent;
    const tags = Array.from(jobCard.querySelectorAll('.job-tags span')).map(tag => tag.textContent);
    const logo = jobCard.querySelector('.company-logo').src;
    
    // Store job data in sessionStorage
    const jobData = {
        title: jobTitle,
        company: companyName,
        description: jobDescription,
        salary: jobSalary,
        type: jobType,
        tags: tags,
        logo: logo
    };
    
    console.log('Saving job data from apply button:', jobData);
    sessionStorage.setItem('selectedJob', JSON.stringify(jobData));
    
    // Verify data was saved
    const savedData = sessionStorage.getItem('selectedJob');
    console.log('Verified saved data:', savedData);
    
    // Navigate to job details page
    setTimeout(() => {
        window.location.href = 'job-details.html';
    }, 100);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

console.log('Jobs page initialized successfully');
