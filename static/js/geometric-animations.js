document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.startups-hero');
    const geometricSection = document.querySelector('.geometric-section');
    const transition = document.querySelector('.section-transition');
    
    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Simple fade in for geometric section content
    gsap.timeline({
        scrollTrigger: {
            trigger: geometricSection,
            start: 'top center',
            onEnter: () => {
                geometricSection.querySelector('.geometric-content-inner').classList.add('is-visible');
            }
        }
    });

    // Fade hero section on scroll
    gsap.to(heroSection, {
        scrollTrigger: {
            trigger: geometricSection,
            start: 'top bottom-=100',
            end: 'top center',
            scrub: true
        },
        opacity: 0,
        ease: "power2.inOut"
    });

    // Initialize particle effects with a slight delay
    setTimeout(() => {
        if (window.particlesJS) {
            particlesJS('geometric-particles', {
                particles: {
                    number: { value: 80, density: { enable: true, value_area: 800 } },
                    color: { value: '#000000' },
                    opacity: { value: 0.3 },
                    size: { value: 3 },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#000000',
                        opacity: 0.3,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: 'none',
                        random: true,
                        straight: false,
                        out_mode: 'out'
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: { enable: true, mode: 'grab' },
                        onclick: { enable: true, mode: 'push' },
                        resize: true
                    }
                },
                retina_detect: true
            });

            // Fade in particles container
            const particlesContainer = document.getElementById('geometric-particles');
            if (particlesContainer) {
                particlesContainer.style.opacity = '1';
            }
        }
    }, 200);

    // Handle scroll events for parallax effects
    ScrollTrigger.create({
        trigger: geometricSection,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
            if (self.isInView) {
                const scrollProgress = self.progress;
                const elements = geometricSection.querySelectorAll('.geometric-tag');
                elements.forEach((el, index) => {
                    const speed = 0.05 * (index + 1);
                    el.style.transform = `translateY(${scrollProgress * 50 * speed}px)`;
                });
            }
        }
    });

    // Background color transition
    ScrollTrigger.create({
        trigger: geometricSection,
        start: 'top center',
        end: 'top top',
        onUpdate: (self) => {
            if (self.isInView) {
                const progress = self.progress;
                document.body.style.backgroundColor = `rgba(203, 203, 203, ${progress})`;
            }
        },
        onLeaveBack: () => {
            document.body.style.backgroundColor = '';
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        ScrollTrigger.refresh();
    });
});
