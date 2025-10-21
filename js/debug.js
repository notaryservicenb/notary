// Debug utilities for development
console.log('Debug mode enabled');

// Form validation debugging
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form[role="form"]');
    if (form) {
        form.addEventListener('submit', function(e) {
            console.log('Form submission attempt');
            const formData = new FormData(form);
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }
        });
    }
    
    // Google Drive API debugging
    window.addEventListener('error', function(e) {
        console.error('JavaScript Error:', e.error);
    });
    
    // Check if all libraries loaded
    console.log('jQuery loaded:', typeof $ !== 'undefined');
    console.log('Bootstrap loaded:', typeof Bootstrap !== 'undefined');
    console.log('Google API loaded:', typeof gapi !== 'undefined');
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perf = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', perf.loadEventEnd - perf.loadEventStart, 'ms');
        }, 0);
    });
}