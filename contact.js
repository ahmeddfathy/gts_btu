/**
 * Contact Form Handler - BSU Tech Careers
 * Handles form validation and submission
 */

(function() {
    'use strict';

    // DOM Elements
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    if (!contactForm) {
        console.error('Contact form not found');
        return;
    }

    // Form submission handler
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear previous errors
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
        
        // Validate form
        let isValid = true;
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const faculty = document.getElementById('faculty').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validate name
        if (!name) {
            document.getElementById('name-error').textContent = 'Name is required';
            isValid = false;
        }
        
        // Validate email
        if (!email) {
            document.getElementById('email-error').textContent = 'Email is required';
            isValid = false;
        } else if (!isValidEmail(email)) {
            document.getElementById('email-error').textContent = 'Please enter a valid email';
            isValid = false;
        }
        
        // Validate faculty
        if (!faculty) {
            document.getElementById('faculty-error').textContent = 'Faculty / Department is required';
            isValid = false;
        }
        
        // Validate subject
        if (!subject) {
            document.getElementById('subject-error').textContent = 'Subject is required';
            isValid = false;
        }
        
        // Validate message
        if (!message) {
            document.getElementById('message-error').textContent = 'Message is required';
            isValid = false;
        } else if (message.length < 15) {
            document.getElementById('message-error').textContent = 'Message must be at least 15 characters';
            isValid = false;
        }
        
        // If valid, show success message
        if (isValid) {
            successMessage.classList.add('show');
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 5000);
        }
    });

    // Email validation helper
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Real-time validation on blur
    document.getElementById('name').addEventListener('blur', function() {
        const error = document.getElementById('name-error');
        if (!this.value.trim()) {
            error.textContent = 'Name is required';
        } else {
            error.textContent = '';
        }
    });

    document.getElementById('email').addEventListener('blur', function() {
        const error = document.getElementById('email-error');
        if (!this.value.trim()) {
            error.textContent = 'Email is required';
        } else if (!isValidEmail(this.value.trim())) {
            error.textContent = 'Please enter a valid email';
        } else {
            error.textContent = '';
        }
    });

    document.getElementById('faculty').addEventListener('change', function() {
        const error = document.getElementById('faculty-error');
        if (!this.value.trim()) {
            error.textContent = 'Faculty / Department is required';
        } else {
            error.textContent = '';
        }
    });

    document.getElementById('subject').addEventListener('blur', function() {
        const error = document.getElementById('subject-error');
        if (!this.value.trim()) {
            error.textContent = 'Subject is required';
        } else {
            error.textContent = '';
        }
    });

    document.getElementById('message').addEventListener('input', function() {
        // Update character counter
        const charCount = this.value.length;
        const charCountElement = document.getElementById('charCount');
        charCountElement.textContent = charCount;
        
        // Change color based on character count
        if (charCount < 15) {
            charCountElement.style.color = '#ef4444'; // Red
        } else {
            charCountElement.style.color = '#7c3aed'; // Purple (primary color)
        }
    });

    document.getElementById('message').addEventListener('blur', function() {
        const error = document.getElementById('message-error');
        if (!this.value.trim()) {
            error.textContent = 'Message is required';
        } else if (this.value.trim().length < 15) {
            error.textContent = 'Message must be at least 15 characters';
        } else {
            error.textContent = '';
        }
    });

    // Privacy Policy Modal
    const privacyLink = document.querySelector('.privacy-link');
    const privacyModal = document.getElementById('privacyModal');
    const closePrivacyModal = document.getElementById('closePrivacyModal');

    if (privacyLink) {
        privacyLink.addEventListener('click', function(e) {
            e.preventDefault();
            if (privacyModal) {
                privacyModal.classList.add('active');
            }
        });
    }

    if (closePrivacyModal) {
        closePrivacyModal.addEventListener('click', function() {
            if (privacyModal) {
                privacyModal.classList.remove('active');
            }
        });
    }

    // Close modal when clicking outside
    if (privacyModal) {
        privacyModal.addEventListener('click', function(e) {
            if (e.target === privacyModal) {
                privacyModal.classList.remove('active');
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && privacyModal && privacyModal.classList.contains('active')) {
            privacyModal.classList.remove('active');
        }
    });

})();
