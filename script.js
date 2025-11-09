// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar');
const skillItems = document.querySelectorAll('.skill-item');
const projectCards = document.querySelectorAll('.project-card');
const timelineItems = document.querySelectorAll('.timeline-item');
const contactForm = document.querySelector('.form');
const themeToggle = document.getElementById('themeToggle');

// Theme Toggle Functionality
function initThemeToggle() {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Update toggle button state
    updateThemeToggleIcon(savedTheme);
    
    // Theme toggle event listener
    themeToggle?.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        // Set new theme
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update icon
        updateThemeToggleIcon(newTheme);
        
        // Show notification
        showNotification(`Switched to ${newTheme} theme`, 'info');
    });
}

function updateThemeToggleIcon(theme) {
    const moonIcon = themeToggle?.querySelector('.moon-icon');
    const sunIcon = themeToggle?.querySelector('.sun-icon');
    
    if (theme === 'light') {
        moonIcon?.style.setProperty('display', 'none');
        sunIcon?.style.setProperty('display', 'block');
    } else {
        moonIcon?.style.setProperty('display', 'block');
        sunIcon?.style.setProperty('display', 'none');
    }
}

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active navigation link based on scroll position
const sections = document.querySelectorAll('section[id]');

function updateActiveNavLink() {
    let current = '';
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            if (entry.target.classList.contains('skill-item')) {
                entry.target.style.transform = 'translateX(0)';
            } else {
                entry.target.style.transform = 'translateY(0)';
            }
        }
    });
}, observerOptions);

// Observe skill items for staggered animation with slide-in from left
skillItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-50px)';
    item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(item);
});

// Observe timeline items
timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
    observer.observe(item);
});

// Observe project cards
projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
    observer.observe(card);
});

// Skill item hover effects
skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const skillName = item.dataset.skill;
        item.setAttribute('title', skillName);
    });
});

// Auto-scroll skills section
function initAutoScrollSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid) return;
    
    let scrollPosition = 0; // Start from left
    let isScrolling = true;
    let autoScrollInterval;
    
    // Set initial position to start from left
    skillsGrid.scrollTo({
        left: scrollPosition,
        behavior: 'instant'
    });
    
    function autoScroll() {
        if (!isScrolling) return;
        
        scrollPosition += 1.2; // Scroll right (left to right) - smooth speed
        
        const maxScroll = skillsGrid.scrollWidth - skillsGrid.clientWidth;
        
        // Reset to left when reaching right end
        if (scrollPosition >= maxScroll) {
            scrollPosition = 0;
            skillsGrid.scrollTo({
                left: scrollPosition,
                behavior: 'instant'
            });
        } else {
            skillsGrid.scrollTo({
                left: scrollPosition,
                behavior: 'instant'
            });
        }
    }
    
    // Start auto-scroll
    autoScrollInterval = setInterval(autoScroll, 16); // 60fps for smooth animation
    
    // Pause auto-scroll on hover over skills container
    const skillsContainer = document.querySelector('.skills-container');
    skillsContainer?.addEventListener('mouseenter', () => {
        isScrolling = false;
    });
    
    // Resume auto-scroll when mouse leaves
    skillsContainer?.addEventListener('mouseleave', () => {
        isScrolling = true;
    });
    
    // Update scroll position on manual scroll
    skillsGrid.addEventListener('scroll', () => {
        if (!isScrolling) {
            scrollPosition = skillsGrid.scrollLeft;
        }
    });
    
    return { interval: autoScrollInterval, updatePosition: (pos) => { scrollPosition = pos; } };
}

// Skills navigation arrows
function initSkillsNavigation() {
    const skillsGrid = document.querySelector('.skills-grid');
    const leftArrow = document.getElementById('skillsLeft');
    const rightArrow = document.getElementById('skillsRight');
    
    if (!skillsGrid || !leftArrow || !rightArrow) return;
    
    let scrollAmount = 300; // Pixel amount to scroll
    
    leftArrow.addEventListener('click', () => {
        skillsGrid.scrollBy({
            left: -scrollAmount, // Left arrow scrolls left (opposite to auto-scroll)
            behavior: 'smooth'
        });
    });
    
    rightArrow.addEventListener('click', () => {
        skillsGrid.scrollBy({
            left: scrollAmount, // Right arrow scrolls right (same as auto-scroll)
            behavior: 'smooth'
        });
    });
    
    // Add continuous scroll on hold
    let scrollInterval;
    
    function startContinuousScroll(direction) {
        scrollInterval = setInterval(() => {
            skillsGrid.scrollBy({
                left: direction * 50,
                behavior: 'auto'
            });
        }, 50);
    }
    
    function stopContinuousScroll() {
        if (scrollInterval) {
            clearInterval(scrollInterval);
            scrollInterval = null;
        }
    }
    
    // Mouse down/up events for continuous scrolling
    leftArrow.addEventListener('mousedown', () => startContinuousScroll(-1)); // Left arrow scrolls left
    leftArrow.addEventListener('mouseup', stopContinuousScroll);
    leftArrow.addEventListener('mouseleave', stopContinuousScroll);
    
    rightArrow.addEventListener('mousedown', () => startContinuousScroll(1)); // Right arrow scrolls right
    rightArrow.addEventListener('mouseup', stopContinuousScroll);
    rightArrow.addEventListener('mouseleave', stopContinuousScroll);
}

// Project card interactions
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Contact form handling
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate API call delay
        setTimeout(() => {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            contactForm.reset();
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        }, 2000);
    });
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add notification styles
    const notificationStyles = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            max-width: 400px;
            padding: 1rem;
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            transform: translateX(400px);
            transition: transform 0.3s ease;
            backdrop-filter: blur(10px);
        }
        
        .notification-success {
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
        }
        
        .notification-error {
            background: linear-gradient(135deg, #ef4444, #dc2626);
            color: white;
        }
        
        .notification-info {
            background: linear-gradient(135deg, #3b82f6, #2563eb);
            color: white;
        }
        
        .notification-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: inherit;
            font-size: 1.5rem;
            cursor: pointer;
            opacity: 0.7;
            transition: opacity 0.2s ease;
        }
        
        .notification-close:hover {
            opacity: 1;
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        @media (max-width: 480px) {
            .notification {
                left: 20px;
                right: 20px;
                max-width: none;
                transform: translateY(-100px);
            }
            
            .notification.show {
                transform: translateY(0);
            }
        }
    `;
    
    // Add styles to head if not already added
    if (!document.querySelector('#notification-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'notification-styles';
        styleSheet.textContent = notificationStyles;
        document.head.appendChild(styleSheet);
    }
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Auto-hide after 5 seconds
    const autoHideTimer = setTimeout(() => {
        hideNotification(notification);
    }, 5000);
    
    // Close button functionality
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', () => {
        clearTimeout(autoHideTimer);
        hideNotification(notification);
    });
}

function hideNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Typing animation for hero section
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize everything when page loads
window.addEventListener('load', () => {
    // Initialize theme toggle
    initThemeToggle();
    
    // Initialize typing animation
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 80);
        }, 1000);
    }
    
    // Initialize auto-scroll for skills after a delay
    setTimeout(() => {
        initAutoScrollSkills();
        initSkillsNavigation();
    }, 2000);
});

// Add scroll progress indicator
function createScrollProgressIndicator() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.innerHTML = '<div class="scroll-progress-bar"></div>';
    
    const progressStyles = `
        .scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: rgba(55, 65, 81, 0.5);
            z-index: 9999;
        }
        
        .scroll-progress-bar {
            height: 100%;
            background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
            width: 0%;
            transition: width 0.1s ease;
        }
    `;
    
    // Add styles
    const styleSheet = document.createElement('style');
    styleSheet.textContent = progressStyles;
    document.head.appendChild(styleSheet);
    
    // Add to DOM
    document.body.appendChild(progressBar);
    
    // Update progress on scroll
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.querySelector('.scroll-progress-bar').style.width = scrolled + '%';
    });
}

// Initialize scroll progress indicator
createScrollProgressIndicator();

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Add loading styles if not already added
    if (!document.querySelector('#loading-styles')) {
        const loadingStyles = `
            body {
                opacity: 0;
                transition: opacity 0.5s ease;
            }
            
            body.loaded {
                opacity: 1;
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.id = 'loading-styles';
        styleSheet.textContent = loadingStyles;
        document.head.appendChild(styleSheet);
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    updateActiveNavLink();
}, 100));

// Add easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        showNotification('ðŸŽ‰ Cybersecurity mode activated! Keep exploring!', 'success');
        document.body.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => {
            document.body.style.filter = 'none';
        }, 3000);
        konamiCode = [];
    }
});

console.log('ðŸ›¡ï¸ Welcome to Basim Nawaz\'s Portfolio! ðŸ›¡ï¸');
console.log('Try the Konami code for a surprise! â†‘ â†‘ â†“ â†“ â† â†’ â† â†’ B A');