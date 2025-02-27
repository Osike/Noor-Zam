// JavaScript functionality for TransportPro Hauliers website

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset for the fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll event to handle header styling
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Form validation and submission handling
    const quoteForm = document.getElementById('quote-form');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            let isValid = true;
            
            // Very simple validation
            if (name === '') {
                isValid = false;
                highlightField('name');
            }
            
            if (email === '' || !isValidEmail(email)) {
                isValid = false;
                highlightField('email');
            }
            
            if (message === '') {
                isValid = false;
                highlightField('message');
            }
            
            if (isValid) {
                // In a real application, you would send this data to a server
                // For this example, we'll just show a success message
                showFormSuccess();
            }
        });
    }
    
    // Helper functions for form validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function highlightField(fieldId) {
        const field = document.getElementById(fieldId);
        field.style.borderColor = '#ff3b30';
        
        field.addEventListener('input', function() {
            this.style.borderColor = '#ddd';
        }, { once: true });
    }
    
    function showFormSuccess() {
        const form = document.getElementById('quote-form');
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = '<p>Thank you for your inquiry! We will get back to you shortly.</p>';
        
        // Replace form with success message
        form.style.display = 'none';
        form.parentNode.appendChild(successMessage);
        
        // Reset form fields (in case the form is shown again)
        form.reset();
    }
});