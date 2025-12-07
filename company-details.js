/**
 * Company Details Page - JavaScript
 * Handles dynamic loading of company information and job listings
 */

// Company data
const companiesData = {
    microsoft: {
        name: 'Microsoft Egypt',
        logo: 'https://logo.clearbit.com/microsoft.com',
        category: 'Technology',
        description: 'Microsoft is a leading software and cloud solutions provider with offices across Egypt. We are committed to innovation and excellence in technology.',
        openJobs: 24,
        graduatesHired: '150+',
        jobs: [
            {
                title: 'Software Engineer',
                location: 'Cairo',
                experience: '0-2 Years Experience',
                salary: '$15,000 - $25,000',
                type: 'Full Time'
            },
            {
                title: 'Cloud Solutions Architect',
                location: 'Cairo',
                experience: '2-4 Years Experience',
                salary: '$22,000 - $32,000',
                type: 'Full Time'
            },
            {
                title: 'Data Engineer',
                location: 'Cairo',
                experience: '1-3 Years Experience',
                salary: '$18,000 - $28,000',
                type: 'Full Time'
            },
            {
                title: 'DevOps Engineer',
                location: 'Cairo',
                experience: '2-5 Years Experience',
                salary: '$20,000 - $30,000',
                type: 'Full Time'
            }
        ]
    },
    google: {
        name: 'Google Egypt',
        logo: 'https://logo.clearbit.com/google.com',
        category: 'Technology',
        description: 'Google is a search engine and digital advertising giant with innovation centers in Cairo. We foster creativity and innovation in everything we do.',
        openJobs: 18,
        graduatesHired: '120+',
        jobs: [
            {
                title: 'Software Engineer',
                location: 'Cairo',
                experience: '0-2 Years Experience',
                salary: '$16,000 - $26,000',
                type: 'Full Time'
            },
            {
                title: 'Product Manager',
                location: 'Cairo',
                experience: '2-4 Years Experience',
                salary: '$20,000 - $30,000',
                type: 'Full Time'
            },
            {
                title: 'UX Designer',
                location: 'Cairo',
                experience: '1-3 Years Experience',
                salary: '$15,000 - $25,000',
                type: 'Full Time'
            }
        ]
    },
    amazon: {
        name: 'Amazon Egypt',
        logo: 'https://logo.clearbit.com/amazon.com',
        category: 'Technology',
        description: 'Amazon is an e-commerce and cloud computing leader expanding operations in the Middle East. We are passionate about customer obsession and innovation.',
        openJobs: 32,
        graduatesHired: '180+',
        jobs: [
            {
                title: 'Software Development Engineer',
                location: 'Cairo',
                experience: '0-2 Years Experience',
                salary: '$17,000 - $27,000',
                type: 'Full Time'
            },
            {
                title: 'AWS Solutions Architect',
                location: 'Cairo',
                experience: '3-5 Years Experience',
                salary: '$25,000 - $35,000',
                type: 'Full Time'
            },
            {
                title: 'Operations Manager',
                location: 'Cairo',
                experience: '2-4 Years Experience',
                salary: '$18,000 - $28,000',
                type: 'Full Time'
            },
            {
                title: 'Data Scientist',
                location: 'Cairo',
                experience: '1-3 Years Experience',
                salary: '$19,000 - $29,000',
                type: 'Full Time'
            }
        ]
    },
    siemens: {
        name: 'Siemens Egypt',
        logo: 'https://logo.clearbit.com/siemens.com',
        category: 'Engineering',
        description: 'Siemens provides industrial automation and digitalization solutions for manufacturing and infrastructure. We are leaders in engineering excellence.',
        openJobs: 15,
        graduatesHired: '95+',
        jobs: [
            {
                title: 'Automation Engineer',
                location: '6th of October',
                experience: '1-3 Years Experience',
                salary: '$14,000 - $24,000',
                type: 'Full Time'
            },
            {
                title: 'Control Systems Engineer',
                location: '6th of October',
                experience: '2-4 Years Experience',
                salary: '$16,000 - $26,000',
                type: 'Full Time'
            },
            {
                title: 'Project Engineer',
                location: '6th of October',
                experience: '0-2 Years Experience',
                salary: '$12,000 - $22,000',
                type: 'Full Time'
            }
        ]
    },
    bosch: {
        name: 'Bosch Egypt',
        logo: 'https://logo.clearbit.com/bosch.com',
        category: 'Automotive',
        description: 'Bosch provides automotive technology and industrial solutions for vehicles and smart systems. We are committed to innovation and quality.',
        openJobs: 22,
        graduatesHired: '140+',
        jobs: [
            {
                title: 'Automotive Engineer',
                location: '10th of Ramadan',
                experience: '0-2 Years Experience',
                salary: '$13,000 - $23,000',
                type: 'Full Time'
            },
            {
                title: 'Electronics Engineer',
                location: '10th of Ramadan',
                experience: '1-3 Years Experience',
                salary: '$15,000 - $25,000',
                type: 'Full Time'
            },
            {
                title: 'Mechanical Engineer',
                location: '10th of Ramadan',
                experience: '2-4 Years Experience',
                salary: '$17,000 - $27,000',
                type: 'Full Time'
            },
            {
                title: 'Quality Assurance Engineer',
                location: '10th of Ramadan',
                experience: '1-3 Years Experience',
                salary: '$14,000 - $24,000',
                type: 'Full Time'
            }
        ]
    },
    schneider: {
        name: 'Schneider Electric',
        logo: 'https://logo.clearbit.com/schneider-electric.com',
        category: 'Energy',
        description: 'Schneider Electric provides renewable energy and power management solutions for sustainable development. We are leaders in energy innovation.',
        openJobs: 19,
        graduatesHired: '110+',
        jobs: [
            {
                title: 'Renewable Energy Engineer',
                location: 'Aswan',
                experience: 'Fresh Graduate',
                salary: '$12,000 - $18,000',
                type: 'Full Time'
            },
            {
                title: 'Power Systems Engineer',
                location: 'Aswan',
                experience: '1-3 Years Experience',
                salary: '$15,000 - $25,000',
                type: 'Full Time'
            },
            {
                title: 'Project Manager',
                location: 'Aswan',
                experience: '2-4 Years Experience',
                salary: '$18,000 - $28,000',
                type: 'Full Time'
            }
        ]
    },
    oracle: {
        name: 'Oracle Egypt',
        logo: 'https://logo.clearbit.com/oracle.com',
        category: 'Technology',
        description: 'Oracle provides database and enterprise software solutions for businesses worldwide. We are committed to delivering innovative technology.',
        openJobs: 16,
        graduatesHired: '85+',
        jobs: [
            {
                title: 'Database Administrator',
                location: 'Cairo',
                experience: '1-3 Years Experience',
                salary: '$16,000 - $26,000',
                type: 'Full Time'
            },
            {
                title: 'Software Engineer',
                location: 'Cairo',
                experience: '0-2 Years Experience',
                salary: '$14,000 - $24,000',
                type: 'Full Time'
            },
            {
                title: 'Systems Analyst',
                location: 'Cairo',
                experience: '2-4 Years Experience',
                salary: '$17,000 - $27,000',
                type: 'Full Time'
            }
        ]
    },
    cisco: {
        name: 'Cisco Egypt',
        logo: 'https://logo.clearbit.com/cisco.com',
        category: 'Engineering',
        description: 'Cisco provides networking and cybersecurity solutions for digital transformation. We are leaders in network innovation and security.',
        openJobs: 20,
        graduatesHired: '105+',
        jobs: [
            {
                title: 'Network Engineer',
                location: 'Cairo',
                experience: '1-3 Years Experience',
                salary: '$15,000 - $25,000',
                type: 'Full Time'
            },
            {
                title: 'Cybersecurity Engineer',
                location: 'Cairo',
                experience: '2-4 Years Experience',
                salary: '$19,000 - $29,000',
                type: 'Full Time'
            },
            {
                title: 'Systems Engineer',
                location: 'Cairo',
                experience: '1-3 Years Experience',
                salary: '$16,000 - $26,000',
                type: 'Full Time'
            },
            {
                title: 'Technical Support Engineer',
                location: 'Cairo',
                experience: '0-2 Years Experience',
                salary: '$12,000 - $22,000',
                type: 'Full Time'
            }
        ]
    },
    ibm: {
        name: 'IBM Egypt',
        logo: 'https://www.ibm.com/favicon.ico',
        category: 'Technology',
        description: 'IBM provides IT services, cloud computing, and AI solutions for enterprises. We are committed to innovation and digital transformation.',
        openJobs: 28,
        graduatesHired: '165+',
        jobs: [
            {
                title: 'IT Consultant',
                location: 'Cairo',
                experience: '1-3 Years Experience',
                salary: '$16,000 - $26,000',
                type: 'Full Time'
            },
            {
                title: 'Cloud Engineer',
                location: 'Cairo',
                experience: '2-4 Years Experience',
                salary: '$19,000 - $29,000',
                type: 'Full Time'
            },
            {
                title: 'AI/ML Engineer',
                location: 'Cairo',
                experience: '2-4 Years Experience',
                salary: '$21,000 - $31,000',
                type: 'Full Time'
            },
            {
                title: 'Business Analyst',
                location: 'Cairo',
                experience: '1-3 Years Experience',
                salary: '$15,000 - $25,000',
                type: 'Full Time'
            }
        ]
    }
};

/**
 * Extract company ID from URL query parameters
 * @returns {string} Company ID from URL
 */
function getCompanyFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('company');
}

/**
 * Load and display company details and jobs
 */
function loadCompanyDetails() {
    const companyId = getCompanyFromURL();
    const company = companiesData[companyId];

    // Handle company not found
    if (!company) {
        displayErrorMessage();
        return;
    }

    // Populate company information
    populateCompanyInfo(company);
    
    // Load and display jobs
    loadJobs(company.jobs, company.name, company.logo);
}

/**
 * Display error message when company is not found
 */
function displayErrorMessage() {
    const errorHTML = `
        <div class="container mt-5 text-center">
            <div class="empty-state">
                <div class="empty-state-icon">
                    <i class="fas fa-exclamation-circle"></i>
                </div>
                <h3>Company Not Found</h3>
                <p>The company you're looking for doesn't exist.</p>
                <a href="companies.html" class="btn btn-primary mt-3">Back to Companies</a>
            </div>
        </div>
    `;
    document.body.innerHTML = errorHTML;
}

/**
 * Populate company information in the page
 * @param {Object} company - Company data object
 */
function populateCompanyInfo(company) {
    document.getElementById('companyLogo').src = company.logo;
    document.getElementById('companyLogo').onerror = function() {
        this.src = 'https://via.placeholder.com/100?text=' + company.name;
    };
    document.getElementById('companyName').textContent = company.name;
    document.getElementById('companyCategory').textContent = company.category;
    document.getElementById('companyNameSpan').textContent = company.name;
    document.getElementById('openJobs').textContent = company.openJobs;
    document.getElementById('graduatesHired').textContent = company.graduatesHired;
    document.getElementById('companyDescription').textContent = company.description;
}

/**
 * Create HTML for a single job card
 * @param {Object} job - Job data object
 * @param {string} companyName - Name of the company
 * @param {string} companyCategory - Category of the company
 * @param {string} companyLogo - Logo URL of the company
 * @returns {string} HTML string for job card
 */
function createJobCard(job, companyName, companyCategory, companyLogo) {
    return `
        <div class="col-lg-6">
            <div class="job-card">
                <div class="job-header">
                    <img src="${companyLogo}" alt="${escapeHtml(companyName)}" class="company-logo" onerror="this.src='https://via.placeholder.com/50?text=${escapeHtml(companyName)}'">
                    <div class="job-info">
                        <h4>${escapeHtml(job.title)}</h4>
                        <span class="company-name">${escapeHtml(companyName)}</span>
                    </div>
                    <span class="job-type">${escapeHtml(job.type)}</span>
                </div>
                <div class="job-tags">
                    <span>${escapeHtml(companyCategory)}</span>
                    <span>${escapeHtml(job.location)}</span>
                    <span>${escapeHtml(job.experience)}</span>
                </div>
                <div class="job-footer">
                    <span class="job-salary"><i class="fas fa-money-bill-wave"></i> ${escapeHtml(job.salary)}</span>
                    <a href="#" class="btn btn-primary btn-sm">Apply Now</a>
                </div>
            </div>
        </div>
    `;
}

/**
 * Escape HTML special characters to prevent XSS
 * @param {string} text - Text to escape
 * @returns {string} Escaped text
 */
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

/**
 * Load and display all jobs for a company
 * @param {Array} jobs - Array of job objects
 * @param {string} companyName - Name of the company
 * @param {string} companyLogo - Logo URL of the company
 */
function loadJobs(jobs, companyName, companyLogo) {
    const jobsContainer = document.getElementById('jobsContainer');
    
    if (!jobs || jobs.length === 0) {
        jobsContainer.innerHTML = `
            <div class="col-12">
                <div class="empty-state">
                    <div class="empty-state-icon">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <h3>No Jobs Available</h3>
                    <p>There are currently no open positions. Please check back later.</p>
                </div>
            </div>
        `;
        return;
    }

    // Get company category from the page
    const companyCategory = document.getElementById('companyCategory').textContent;
    
    // Generate and insert job cards
    const jobsHTML = jobs
        .map(job => createJobCard(job, companyName, companyCategory, companyLogo))
        .join('');
    
    jobsContainer.innerHTML = jobsHTML;
    
    // Setup click handlers for job cards
    setupCompanyJobCardHandlers(jobs, companyName, companyLogo);
}

/**
 * Setup click handlers for job cards
 * @param {Array} jobs - Array of job objects
 * @param {string} companyName - Name of the company
 * @param {string} companyLogo - Logo URL of the company
 */
function setupCompanyJobCardHandlers(jobs, companyName, companyLogo) {
    const jobCards = document.querySelectorAll('#jobsContainer .job-card');
    
    jobCards.forEach((card, index) => {
        card.style.cursor = 'pointer';
        
        // Handle card click
        card.addEventListener('click', function(e) {
            if (e.target.closest('.btn')) {
                return;
            }
            handleCompanyJobCardClick(card, jobs[index], companyName, companyLogo);
        });
        
        // Handle Apply button click
        const applyBtn = card.querySelector('.btn');
        if (applyBtn) {
            applyBtn.addEventListener('click', function(e) {
                e.preventDefault();
                handleCompanyJobCardClick(card, jobs[index], companyName, companyLogo);
            });
        }
    });
}

/**
 * Handle job card click from company details page
 * @param {HTMLElement} jobCard - The job card element
 * @param {Object} job - Job data object
 * @param {string} companyName - Name of the company
 * @param {string} companyLogo - Logo URL of the company
 */
function handleCompanyJobCardClick(jobCard, job, companyName, companyLogo) {
    const jobData = {
        title: job.title,
        company: companyName,
        type: job.type,
        tags: [
            document.getElementById('companyCategory').textContent,
            job.location,
            job.experience
        ],
        logo: companyLogo,
        salary: job.salary,
        description: `Join ${companyName} as a ${job.title}. This is a great opportunity to grow your career with us.`
    };
    
    console.log('Saving job data from company details:', jobData);
    sessionStorage.setItem('selectedJob', JSON.stringify(jobData));
    
    // Verify data was saved
    const savedData = sessionStorage.getItem('selectedJob');
    console.log('Verified saved data:', savedData);
    
    // Navigate to job details page
    setTimeout(() => {
        window.location.href = 'job-details.html';
    }, 100);
}

/**
 * Initialize page on DOM content loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    loadCompanyDetails();
});
