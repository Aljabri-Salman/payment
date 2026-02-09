// Main JavaScript for Payment Observability Research Site

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initNavigation();
    initFileDownloads();
    initScrollEffects();
    initThemeDetection();
    initPrintButton();
    initCopyLinks();
});

// Navigation functionality
function initNavigation() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Smooth scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
                
                // Update active link in sidebar
                updateActiveNavLink(targetId);
                
                // Update URL hash without scrolling
                history.pushState(null, null, targetId);
            }
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', debounce(() => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
        
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        if (currentSection) {
            updateActiveNavLink(`#${currentSection}`);
        }
    }, 100));

    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
        const hash = window.location.hash;
        if (hash) {
            const targetElement = document.querySelector(hash);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
                updateActiveNavLink(hash);
            }
        }
    });
}

// Update active navigation link
function updateActiveNavLink(targetId) {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === targetId) {
            link.classList.add('active');
        }
    });
}

// File download tracking
function initFileDownloads() {
    document.querySelectorAll('a[download]').forEach(link => {
        link.addEventListener('click', function(e) {
            const fileName = this.getAttribute('href');
            const fileType = fileName.split('.').pop().toUpperCase();
            
            // Log download event (could be sent to analytics)
            console.log(`Downloading ${fileType} file: ${fileName}`);
            
            // Show download confirmation
            showToast(`Downloading ${fileType} file...`, 'info');
            
            // You could add actual analytics here:
            // trackDownload(fileName, fileType);
        });
    });
}

// Scroll effects and animations
function initScrollEffects() {
    // Add scroll-triggered animations to cards
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

    // Observe all cards for animation
    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });

    // Add parallax effect to header
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('header');
        if (header && scrolled < 300) {
            header.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Theme detection and toggle
function initThemeDetection() {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        }
    });

    // Add theme toggle button if needed
    // createThemeToggle();
}

// Create theme toggle button (optional)
function createThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.setAttribute('aria-label', 'Toggle dark mode');
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        themeToggle.innerHTML = newTheme === 'dark' 
            ? '<i class="fas fa-sun"></i>' 
            : '<i class="fas fa-moon"></i>';
        
        showToast(`${newTheme === 'dark' ? 'Dark' : 'Light'} mode enabled`, 'success');
    });
    
    // Add to header or sidebar
    const headerContent = document.querySelector('.header-content');
    if (headerContent) {
        headerContent.appendChild(themeToggle);
    }
}

// Print functionality
function initPrintButton() {
    // Create print button
    const printButton = document.createElement('button');
    printButton.className = 'btn btn-outline print-btn';
    printButton.innerHTML = '<i class="fas fa-print"></i> Print Report';
    printButton.addEventListener('click', () => {
        window.print();
    });
    
    // Add to quick links section
    const quickLinks = document.querySelector('.sidebar h3:last-of-type');
    if (quickLinks) {
        const list = quickLinks.nextElementSibling;
        if (list && list.tagName === 'UL') {
            const li = document.createElement('li');
            li.appendChild(printButton);
            list.appendChild(li);
        }
    }
}

// Copy link functionality
function initCopyLinks() {
    // Add copy buttons to section headers
    document.querySelectorAll('section[id]').forEach(section => {
        const header = section.querySelector('.content-header h2');
        if (header) {
            const copyButton = document.createElement('button');
            copyButton.className = 'copy-link-btn';
            copyButton.innerHTML = '<i class="fas fa-link"></i>';
            copyButton.setAttribute('aria-label', 'Copy section link');
            copyButton.setAttribute('title', 'Copy link to this section');
            
            copyButton.addEventListener('click', () => {
                const sectionId = section.getAttribute('id');
                const url = `${window.location.origin}${window.location.pathname}#${sectionId}`;
                
                navigator.clipboard.writeText(url).then(() => {
                    showToast('Link copied to clipboard!', 'success');
                }).catch(err => {
                    console.error('Failed to copy link:', err);
                    showToast('Failed to copy link', 'error');
                });
            });
            
            header.appendChild(copyButton);
        }
    });
}

// Show toast notifications
function showToast(message, type = 'info') {
    // Remove existing toasts
    const existingToasts = document.querySelectorAll('.toast');
    existingToasts.forEach(toast => toast.remove());
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <div class="toast-content">
            <i class="fas fa-${getToastIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="toast-close"><i class="fas fa-times"></i></button>
    `;
    
    // Add styles if not already present
    if (!document.querySelector('#toast-styles')) {
        const styles = document.createElement('style');
        styles.id = 'toast-styles';
        styles.textContent = `
            .toast {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: white;
                border-radius: 8px;
                padding: 1rem;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                display: flex;
                align-items: center;
                gap: 10px;
                z-index: 1000;
                animation: slideIn 0.3s ease;
                border-left: 4px solid var(--primary-color);
            }
            .toast-success { border-left-color: var(--success-color); }
            .toast-error { border-left-color: var(--danger-color); }
            .toast-warning { border-left-color: var(--warning-color); }
            .toast-info { border-left-color: var(--primary-color); }
            .toast-content {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            .toast-close {
                background: none;
                border: none;
                cursor: pointer;
                color: #666;
            }
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(styles);
    }
    
    // Add close functionality
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => toast.remove());
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (toast.parentNode) {
            toast.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }
    }, 5000);
    
    // Add slideOut animation
    if (!document.querySelector('#toast-animations')) {
        const animations = document.createElement('style');
        animations.id = 'toast-animations';
        animations.textContent = `
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(animations);
    }
    
    document.body.appendChild(toast);
}

// Get appropriate icon for toast type
function getToastIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export functions for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initNavigation,
        initFileDownloads,
        initScrollEffects,
        initThemeDetection,
        showToast,
        debounce
    };
}