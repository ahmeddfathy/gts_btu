// Companies Page Functionality
(function() {
    'use strict';
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCompaniesPage);
    } else {
        initCompaniesPage();
    }
    
    function initCompaniesPage() {
        const searchInput = document.getElementById('searchCompanies');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const companyCards = document.querySelectorAll('.company-card');
        
        if (!searchInput || filterButtons.length === 0 || companyCards.length === 0) {
            console.error('Companies page elements not found!');
            return;
        }
        
        let activeFilter = 'all';
        let currentPage = 1;
        
        // Setup pagination
        setupPaginationButtons();

        // Filter by category
        filterButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                activeFilter = this.getAttribute('data-filter');
                filterCompanies();
            });
        });

        // Search functionality
        searchInput.addEventListener('input', function() {
            filterCompanies();
        });

        // Load more link
        const loadMoreLink = document.querySelector('.load-more-link');
        if (loadMoreLink) {
            loadMoreLink.addEventListener('click', function(e) {
                e.preventDefault();
                loadMoreCompanies();
            });
        }

        // Initial filter on page load
        filterCompanies();
        
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
            
            // Scroll to companies section
            document.querySelector('.companies-section').scrollIntoView({ behavior: 'smooth' });
        }
        
        function loadMoreCompanies() {
            // Placeholder for loading more companies
            // In a real application, this would fetch more data from the server
        }

        function filterCompanies() {
            const searchTerm = searchInput.value.toLowerCase();
            let visibleCount = 0;

            companyCards.forEach((card, index) => {
                try {
                    const category = card.getAttribute('data-category');
                    const cardContent = card.querySelector('.company-card-content');
                    
                    if (!cardContent) {
                        return;
                    }
                    
                    const h3 = cardContent.querySelector('h3');
                    const descElement = cardContent.querySelector('.company-description');
                    
                    const companyName = h3 ? h3.textContent.toLowerCase() : '';
                    const companyDesc = descElement ? descElement.textContent.toLowerCase() : '';
                    
                    // Check if card matches filter and search
                    const matchesFilter = activeFilter === 'all' || category === activeFilter;
                    const matchesSearch = searchTerm === '' || companyName.includes(searchTerm) || companyDesc.includes(searchTerm);
                    
                    if (matchesFilter && matchesSearch) {
                        card.classList.remove('hidden');
                        card.parentElement.classList.remove('hidden');
                        card.style.display = 'flex';
                        card.style.animation = 'fadeIn 0.3s ease-in';
                        visibleCount++;
                    } else {
                        card.classList.add('hidden');
                        card.parentElement.classList.add('hidden');
                    }
                } catch (error) {
                    console.error('Error filtering card:', error, card);
                }
            });;

            // Show "no results" message if needed
            if (visibleCount === 0) {
                showNoResults();
            } else {
                removeNoResults();
            }
        }

        function showNoResults() {
            const container = document.querySelector('.companies-section .row');
            if (!document.querySelector('.no-results')) {
                const noResults = document.createElement('div');
                noResults.className = 'no-results col-12';
                noResults.innerHTML = `
                    <i class="fas fa-search"></i>
                    <h3>No companies found</h3>
                    <p>Try adjusting your search or filter criteria</p>
                `;
                container.appendChild(noResults);
            }
        }

        function removeNoResults() {
            const noResults = document.querySelector('.no-results');
            if (noResults) {
                noResults.remove();
            }
        }
    }
})();

// Add fade-in animation
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
`;
document.head.appendChild(style);
