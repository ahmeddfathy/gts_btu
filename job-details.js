/* ========== Job Details Page JavaScript ========== */

console.log('Job Details Script Loaded');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing job details page');
    initializeJobDetailsButtons();
    initializeSaveButton();
    initializeShareButtons();
    initializeSimilarJobButtons();
});

/* ========== Initialize All Buttons ========== */
function initializeJobDetailsButtons() {
    console.log('Initializing job details buttons...');
    
    // Apply buttons (main and sidebar)
    const applyBtns = document.querySelectorAll('.btn-apply-main, .btn-apply-sidebar');
    console.log('Found', applyBtns.length, 'apply buttons');
    applyBtns.forEach(btn => {
        btn.addEventListener('click', handleApplyClick);
    });
    
    // Save buttons
    const saveBtns = document.querySelectorAll('.btn-save, .btn-save-sidebar');
    console.log('Found', saveBtns.length, 'save buttons');
    saveBtns.forEach(btn => {
        btn.addEventListener('click', handleSaveClick);
    });
    
    // Share button (main)
    const shareBtn = document.querySelector('.btn-share');
    if (shareBtn) {
        shareBtn.addEventListener('click', handleShareMainClick);
    }
    
    // View company button
    const viewCompanyBtn = document.querySelector('.btn-view-company');
    if (viewCompanyBtn) {
        viewCompanyBtn.addEventListener('click', handleViewCompanyClick);
    }
    
    // Similar job cards
    const similarJobLinks = document.querySelectorAll('.similar-job-card a');
    console.log('Found', similarJobLinks.length, 'similar job links');
    similarJobLinks.forEach(link => {
        link.addEventListener('click', handleSimilarJobClick);
    });
    
    console.log('Job details buttons initialized');
}

/* ========== Apply Button Handler ========== */
function handleApplyClick(e) {
    e.preventDefault();
    console.log('Apply button clicked');
    
    const jobTitle = document.querySelector('.job-title-main').textContent.trim();
    const companyName = document.querySelector('.company-name').textContent.trim();
    const btn = e.currentTarget;
    
    console.log('Applying for:', jobTitle, 'at', companyName);
    
    // Disable button and show loading state
    const originalText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    
    // Simulate API call
    setTimeout(() => {
        // Update applicants count
        updateApplicantsCount();
        
        // Show success message
        showSuccessMessage(`Successfully applied for ${jobTitle} at ${companyName}!`);
        
        // Reset button
        btn.disabled = false;
        btn.innerHTML = originalText;
        
        console.log('Application submitted successfully');
    }, 1500);
}

/* ========== Show Success Message ========== */
function showSuccessMessage(message) {
    // Create alert element
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-success alert-dismissible fade show';
    alertDiv.setAttribute('role', 'alert');
    alertDiv.innerHTML = `
        <i class="fas fa-check-circle"></i> ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    // Add to page
    const container = document.querySelector('.container');
    if (container) {
        container.insertBefore(alertDiv, container.firstChild);
        
        // Auto-dismiss after 5 seconds
        setTimeout(() => {
            alertDiv.remove();
        }, 5000);
    }
}

/* ========== Save Button Handler ========== */
function handleSaveClick(e) {
    e.preventDefault();
    console.log('Save button clicked');
    
    const btn = e.currentTarget;
    const icon = btn.querySelector('i');
    const isSaved = icon.classList.contains('fas');
    
    if (isSaved) {
        // Unsave
        icon.classList.remove('fas');
        icon.classList.add('far');
        console.log('Job unsaved');
    } else {
        // Save
        icon.classList.remove('far');
        icon.classList.add('fas');
        console.log('Job saved');
    }
}

/* ========== Initialize Save Button State ========== */
function initializeSaveButton() {
    // Check if job is already saved (in real app, check from backend)
    const savedJobs = getSavedJobs();
    const currentJobId = getCurrentJobId();
    
    if (savedJobs.includes(currentJobId)) {
        const saveBtns = document.querySelectorAll('.btn-save, .btn-save-sidebar');
        saveBtns.forEach(btn => {
            const icon = btn.querySelector('i');
            icon.classList.remove('far');
            icon.classList.add('fas');
        });
    }
}

function getSavedJobs() {
    // In real app, get from localStorage or backend
    return [];
}

function getCurrentJobId() {
    // In real app, get from URL or data attribute
    return 'job-123';
}

/* ========== Share Main Button Handler ========== */
function handleShareMainClick(e) {
    e.preventDefault();
    console.log('Share main button clicked');
    
    // Scroll to share card
    const shareCard = document.querySelector('.share-card');
    if (shareCard) {
        shareCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Highlight share card
        shareCard.style.border = '2px solid #7c3aed';
        setTimeout(() => {
            shareCard.style.border = '1px solid #e5e7eb';
        }, 2000);
    }
}

/* ========== Initialize Share Buttons ========== */
function initializeShareButtons() {
    console.log('Initializing share buttons...');
    
    const shareFacebook = document.querySelector('.share-facebook');
    const shareTwitter = document.querySelector('.share-twitter');
    const shareLinkedin = document.querySelector('.share-linkedin');
    const shareWhatsapp = document.querySelector('.share-whatsapp');
    const shareCopy = document.querySelector('.share-copy');
    
    if (shareFacebook) {
        shareFacebook.addEventListener('click', () => handleSocialShare('facebook'));
    }
    
    if (shareTwitter) {
        shareTwitter.addEventListener('click', () => handleSocialShare('twitter'));
    }
    
    if (shareLinkedin) {
        shareLinkedin.addEventListener('click', () => handleSocialShare('linkedin'));
    }
    
    if (shareWhatsapp) {
        shareWhatsapp.addEventListener('click', () => handleSocialShare('whatsapp'));
    }
    
    if (shareCopy) {
        shareCopy.addEventListener('click', handleCopyLink);
    }
    
    console.log('Share buttons initialized');
}

/* ========== Social Share Handler ========== */
function handleSocialShare(platform) {
    console.log('Sharing on:', platform);
    
    const jobTitle = document.querySelector('.job-title-main').textContent.trim();
    const companyName = document.querySelector('.company-name').textContent.trim();
    const url = window.location.href;
    const text = `Check out this job: ${jobTitle} at ${companyName}`;
    
    let shareUrl = '';
    
    switch(platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
            break;
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
        console.log('Opening share dialog for:', platform);
    }
}

/* ========== Copy Link Handler ========== */
function handleCopyLink(e) {
    e.preventDefault();
    console.log('Copy link clicked');
    
    const url = window.location.href;
    
    // Try to use Clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => {
            console.log('Link copied successfully');
        }).catch(err => {
            console.error('Failed to copy:', err);
            fallbackCopyLink(url);
        });
    } else {
        fallbackCopyLink(url);
    }
}

function fallbackCopyLink(url) {
    // Fallback method for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = url;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        console.log('Link copied using fallback method');
    } catch (err) {
        console.error('Fallback copy failed:', err);
    }
    
    document.body.removeChild(textArea);
}

/* ========== View Company Handler ========== */
function handleViewCompanyClick(e) {
    e.preventDefault();
    console.log('View company button clicked');
    
    const companyName = document.querySelector('.company-name-sidebar').textContent.trim();
    console.log('Viewing company profile for:', companyName);
    // In real app: window.location.href = '/companies/microsoft';
}

/* ========== Similar Job Click Handler ========== */
function handleSimilarJobClick(e) {
    e.preventDefault();
    console.log('Similar job clicked');
    
    const jobCard = e.target.closest('.similar-job-card');
    const jobTitle = jobCard.querySelector('.similar-job-title').textContent.trim();
    
    console.log('Loading job details for:', jobTitle);
    // In real app: window.location.href = '/jobs/job-id';
    // For demo, reload current page
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ========== Update Applicants Count ========== */
function updateApplicantsCount() {
    const applicantsValue = document.querySelector('.overview-item:last-child .overview-value');
    if (applicantsValue) {
        const currentCount = parseInt(applicantsValue.textContent.match(/\d+/)[0]);
        const newCount = currentCount + 1;
        applicantsValue.textContent = `${newCount} Applied`;
        
        // Highlight the change
        applicantsValue.style.color = '#7c3aed';
        applicantsValue.style.fontWeight = '700';
        setTimeout(() => {
            applicantsValue.style.color = '#1f2937';
            applicantsValue.style.fontWeight = '600';
        }, 2000);
        
        console.log('Applicants count updated to:', newCount);
    }
}

/* ========== Smooth Scroll for Anchor Links ========== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

/* ========== Initialize Similar Job Buttons ========== */
function initializeSimilarJobButtons() {
    console.log('Initializing similar job buttons...');
    
    const viewButtons = document.querySelectorAll('.view-similar-job');
    console.log('Found', viewButtons.length, 'similar job view buttons');
    
    viewButtons.forEach(btn => {
        btn.addEventListener('click', handleSimilarJobViewClick);
    });
}

/* ========== Handle Similar Job View Click ========== */
function handleSimilarJobViewClick(e) {
    e.preventDefault();
    console.log('Similar job view button clicked');
    
    const jobCard = e.target.closest('.similar-job-card');
    const jobDataStr = jobCard.getAttribute('data-job');
    
    if (jobDataStr) {
        try {
            const jobData = JSON.parse(jobDataStr);
            console.log('Job data:', jobData);
            
            // Save to sessionStorage
            sessionStorage.setItem('selectedJob', JSON.stringify(jobData));
            
            // Reload page to display new job
            window.location.reload();
        } catch (err) {
            console.error('Error parsing job data:', err);
        }
    }
}

/* ========== Sticky Sidebar on Scroll ========== */
window.addEventListener('scroll', function() {
    const sidebar = document.querySelector('.job-details-sidebar');
    if (sidebar && window.innerWidth > 991) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 200) {
            sidebar.style.position = 'sticky';
            sidebar.style.top = '100px';
        }
    }
});

console.log('Job Details Script Fully Loaded');
