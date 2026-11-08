/* =====================================================
   JavaScript Functionality & Interactions
   Harvey Yu Personal Website
   ===================================================== */

class HarveyWebsite {
    constructor() {
        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupFeatures());
        } else {
            this.setupFeatures();
        }
    }

    setupFeatures() {
        this.handleIntersectionObserver();
        this.handlePreferredMotion();
        this.setupSmoothScrolling();
        this.enhanceAccessibility();
        this.trackAnalytics();
        this.setupPerformanceOptimizations();
        this.handleKeyboardNavigation();
        this.setupSocialLinkEnhancements();
    }

    /* ===== INTERSECTION OBSERVER FOR ANIMATIONS ===== */
    handleIntersectionObserver() {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');

                        // Add staggered animation delays
                        const delay = Array.from(entry.target.parentElement.children).indexOf(entry.target) * 100;
                        entry.target.style.setProperty('--animation-delay', `${delay}ms`);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '50px'
            });

            // Observe hero section elements
            document.querySelectorAll('.hero-content > *').forEach(el => {
                observer.observe(el);
            });

            // Observe social links individually for staggered effect
            document.querySelectorAll('.social-link').forEach((link, index) => {
                link.style.setProperty('--stagger-delay', `${index * 100}ms`);
                observer.observe(link);
            });

            // Observe section headers
            document.querySelectorAll('.section-header').forEach(header => {
                observer.observe(header);
            });

            // Observe experience items with staggered delays
            document.querySelectorAll('.experience-item').forEach((item, index) => {
                item.style.setProperty('--stagger-delay', `${index * 150}ms`);
                observer.observe(item);
            });

            // Observe project items with staggered delays
            document.querySelectorAll('.project-item').forEach((item, index) => {
                item.style.setProperty('--stagger-delay', `${index * 200}ms`);
                observer.observe(item);
            });
        }
    }

    /* ===== MOTION PREFERENCE HANDLING ===== */
    handlePreferredMotion() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

        const updateMotionPreference = (e) => {
            if (e.matches) {
                document.body.classList.add('reduced-motion');
                this.disableAnimations();
            } else {
                document.body.classList.remove('reduced-motion');
                this.enableAnimations();
            }
        };

        // Set initial state
        updateMotionPreference(prefersReducedMotion);

        // Listen for changes
        prefersReducedMotion.addEventListener('change', updateMotionPreference);
    }

    disableAnimations() {
        const style = document.createElement('style');
        style.id = 'reduced-motion-override';
        style.innerHTML = `
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    `;
        document.head.appendChild(style);
    }

    enableAnimations() {
        const existingStyle = document.getElementById('reduced-motion-override');
        if (existingStyle) {
            existingStyle.remove();
        }
    }

    /* ===== SMOOTH SCROLLING ENHANCEMENTS ===== */
    setupSmoothScrolling() {
        // Enhanced smooth scrolling for any anchor links
        document.addEventListener('click', (e) => {
            const anchor = e.target.closest('a[href^="#"]');
            if (anchor) {
                e.preventDefault();
                const targetId = anchor.getAttribute('href').substring(1);
                const target = document.getElementById(targetId);

                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    }

    /* ===== ACCESSIBILITY ENHANCEMENTS ===== */
    enhanceAccessibility() {
        // Add ARIA labels dynamically
        this.updateAriaLabels();

        // Handle focus management
        this.setupFocusManagement();

        // Add screen reader announcements
        this.setupScreenReaderAnnouncements();
    }

    updateAriaLabels() {
        const name = document.querySelector('.name');
        if (name) {
            name.setAttribute('aria-label', 'Hang Harvey Yu, Machine Learning Engineer');
        }

        const title = document.querySelector('.title');
        if (title) {
            title.setAttribute('aria-label', 'Professional title: Physicist, Machine Learning Engineer, and Tech Enthusiast');
        }
    }

    setupFocusManagement() {
        // Ensure social links have proper focus indicators
        document.querySelectorAll('.social-link').forEach(link => {
            link.addEventListener('focus', (e) => {
                e.target.classList.add('focus-visible');
            });

            link.addEventListener('blur', (e) => {
                e.target.classList.remove('focus-visible');
            });
        });
    }

    setupScreenReaderAnnouncements() {
        // Create live region for dynamic announcements
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        liveRegion.id = 'live-announcements';
        document.body.appendChild(liveRegion);
    }

    /* ===== KEYBOARD NAVIGATION ===== */
    handleKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // Handle Escape key
            if (e.key === 'Escape') {
                // Remove focus from any focused element
                if (document.activeElement) {
                    document.activeElement.blur();
                }
            }

            // Handle Tab navigation enhancement
            if (e.key === 'Tab') {
                document.body.classList.add('using-keyboard');
            }
        });

        // Remove keyboard class on mouse use
        document.addEventListener('mousedown', () => {
            document.body.classList.remove('using-keyboard');
        });
    }

    /* ===== SOCIAL LINK ENHANCEMENTS ===== */
    setupSocialLinkEnhancements() {
        document.querySelectorAll('.social-link').forEach(link => {
            // Add hover sound effect (optional, accessibility-friendly)
            link.addEventListener('mouseenter', () => {
                this.playHoverSound();
            });

            // Add ripple effect on click
            link.addEventListener('click', (e) => {
                this.createRippleEffect(e);
            });

            // Enhanced keyboard interaction
            link.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.createRippleEffect(e);
                    setTimeout(() => {
                        e.target.click();
                    }, 150);
                }
            });
        });
    }

    playHoverSound() {
        // Optional subtle audio feedback (respecting user preferences)
        if ('AudioContext' in window) {
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();

                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);

                oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
                gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.1);
            } catch (e) {
                // Silently fail if audio context is not available
            }
        }
    }

    createRippleEffect(e) {
        const button = e.target.closest('.social-link');
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transform: scale(0);
      animation: ripple 0.6s linear;
      left: ${x}px;
      top: ${y}px;
      width: ${size}px;
      height: ${size}px;
      pointer-events: none;
    `;

        // Add ripple animation CSS if not exists
        if (!document.getElementById('ripple-animation')) {
            const style = document.createElement('style');
            style.id = 'ripple-animation';
            style.innerHTML = `
        @keyframes ripple {
          to {
            transform: scale(2);
            opacity: 0;
          }
        }
      `;
            document.head.appendChild(style);
        }

        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    /* ===== ANALYTICS TRACKING (Privacy-Focused) ===== */
    trackAnalytics() {
        // Track page load
        this.trackEvent('page_load', {
            timestamp: new Date().toISOString(),
            user_agent: navigator.userAgent.substring(0, 100), // Truncated for privacy
            viewport: `${window.innerWidth}x${window.innerHeight}`,
            color_scheme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
            reduced_motion: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        });

        // Track social link interactions
        document.querySelectorAll('.social-link').forEach(link => {
            link.addEventListener('click', (e) => {
                const linkType = e.currentTarget.classList.contains('linkedin') ? 'LinkedIn' : 'Resume';
                this.trackEvent('social_link_click', {
                    link_type: linkType,
                    timestamp: new Date().toISOString()
                });
            });
        });

        // Track time on page
        this.startTime = Date.now();
        window.addEventListener('beforeunload', () => {
            const timeOnPage = Date.now() - this.startTime;
            this.trackEvent('page_exit', {
                time_on_page: Math.round(timeOnPage / 1000) // seconds
            });
        });
    }

    trackEvent(eventName, data) {
        // Privacy-focused analytics - log to console for now
        // In production, you would send to your preferred analytics service
        console.log(`Analytics Event: ${eventName}`, data);

        // Example for Google Analytics 4 (uncomment if using):
        // if (typeof gtag !== 'undefined') {
        //   gtag('event', eventName, data);
        // }

        // Example for privacy-focused alternatives like Plausible:
        // if (typeof plausible !== 'undefined') {
        //   plausible(eventName, { props: data });
        // }
    }

    /* ===== PERFORMANCE OPTIMIZATIONS ===== */
    setupPerformanceOptimizations() {
        // Lazy load non-critical resources
        this.setupLazyLoading();

        // Preload critical resources
        this.preloadCriticalResources();

        // Setup performance monitoring
        this.monitorPerformance();
    }

    setupLazyLoading() {
        // Implement lazy loading for any future images or heavy content
        if ('IntersectionObserver' in window) {
            const lazyElements = document.querySelectorAll('[data-lazy]');
            const lazyObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const element = entry.target;
                        const src = element.dataset.lazy;
                        if (src) {
                            element.src = src;
                            element.removeAttribute('data-lazy');
                            lazyObserver.unobserve(element);
                        }
                    }
                });
            });

            lazyElements.forEach(el => lazyObserver.observe(el));
        }
    }

    preloadCriticalResources() {
        // Preload the resume PDF when user hovers over the link
        const resumeLink = document.querySelector('.social-link.resume');
        if (resumeLink) {
            let preloaded = false;
            resumeLink.addEventListener('mouseenter', () => {
                if (!preloaded) {
                    const link = document.createElement('link');
                    link.rel = 'prefetch';
                    link.href = resumeLink.href;
                    document.head.appendChild(link);
                    preloaded = true;
                }
            }, { once: true });
        }
    }

    monitorPerformance() {
        // Monitor Core Web Vitals
        if ('PerformanceObserver' in window) {
            try {
                // Largest Contentful Paint (LCP)
                new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    const lastEntry = entries[entries.length - 1];
                    this.trackEvent('performance_lcp', {
                        value: Math.round(lastEntry.startTime),
                        rating: lastEntry.startTime < 2500 ? 'good' : lastEntry.startTime < 4000 ? 'needs_improvement' : 'poor'
                    });
                }).observe({ entryTypes: ['largest-contentful-paint'] });

                // First Input Delay (FID)
                new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    entries.forEach(entry => {
                        this.trackEvent('performance_fid', {
                            value: Math.round(entry.processingStart - entry.startTime),
                            rating: entry.processingStart - entry.startTime < 100 ? 'good' :
                                entry.processingStart - entry.startTime < 300 ? 'needs_improvement' : 'poor'
                        });
                    });
                }).observe({ entryTypes: ['first-input'] });

                // Cumulative Layout Shift (CLS)
                new PerformanceObserver((list) => {
                    let clsValue = 0;
                    const entries = list.getEntries();
                    entries.forEach(entry => {
                        if (!entry.hadRecentInput) {
                            clsValue += entry.value;
                        }
                    });

                    if (clsValue > 0) {
                        this.trackEvent('performance_cls', {
                            value: Math.round(clsValue * 1000) / 1000,
                            rating: clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs_improvement' : 'poor'
                        });
                    }
                }).observe({ entryTypes: ['layout-shift'] });
            } catch (e) {
                console.log('Performance monitoring not fully supported');
            }
        }
    }

    /* ===== SERVICE WORKER REGISTRATION ===== */
    registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                        console.log('SW registered: ', registration);
                        this.trackEvent('service_worker_registered', {
                            scope: registration.scope
                        });
                    })
                    .catch(registrationError => {
                        console.log('SW registration failed: ', registrationError);
                    });
            });
        }
    }

    /* ===== THEME DETECTION & SYSTEM INTEGRATION ===== */
    handleSystemIntegration() {
        // Handle color scheme changes
        const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        colorSchemeQuery.addEventListener('change', (e) => {
            this.trackEvent('color_scheme_change', {
                new_scheme: e.matches ? 'dark' : 'light'
            });
        });

        // Handle reduced data preference (for future optimization)
        if ('connection' in navigator) {
            const connection = navigator.connection;
            if (connection && connection.saveData) {
                document.body.classList.add('save-data');
                this.trackEvent('save_data_mode', { enabled: true });
            }
        }
    }
}

/* ===== UTILITY FUNCTIONS ===== */

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

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/* ===== ERROR HANDLING ===== */

window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    // In production, you might want to send error reports to a logging service
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    // In production, you might want to send error reports to a logging service
});

/* ===== INITIALIZE APPLICATION ===== */

// Initialize the website when DOM is ready
const harveyWebsite = new HarveyWebsite();

// Export for potential testing or debugging
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HarveyWebsite;
} else {
    window.HarveyWebsite = HarveyWebsite;
}