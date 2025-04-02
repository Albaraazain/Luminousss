document.addEventListener('DOMContentLoaded', function() {
    console.log("Loader script initialized");
    
    // Get the loader element
    const loader = document.querySelector('.loader');
    if (!loader) {
        console.error("Loader element not found");
        return;
    }
    console.log("Loader element found:", loader);

    // Initialize the counter and line progress
    let counter = 0;
    const counterElement = document.querySelector('.loader__number');
    const lineInner = document.querySelector('.loader__line-inner');
    const loaderContent = document.querySelector('.loader__content');
    const loaderNumberWrapper = document.querySelector('.loader__number-wrapper');
    
    console.log("Counter element:", counterElement);
    console.log("Line inner element:", lineInner);

    // Force the loader to be shown initially
    loader.style.display = 'flex';
    
    // Make sure content is visible immediately without waiting for GSAP
    if (loaderContent) loaderContent.style.opacity = '1';
    if (loaderNumberWrapper) loaderNumberWrapper.style.opacity = '1';
    
    // Show loader content with initial animation
    if (typeof gsap !== 'undefined') {
        console.log("GSAP found, initializing animations");
        
        gsap.timeline()
            .set(".loader", {
                backgroundColor: "rgba(255, 255, 255, 1)",
            })
            .to(".loader__content", {
                opacity: 1,
                duration: 0.6,
                ease: "power2.inOut"
            })
            .to(".loader__number-wrapper", {
                opacity: 1,
                duration: 0.6,
                ease: "power2.inOut"
            }, "<");
    } else {
        console.error("GSAP not found, using fallback styles");
        // Fallback if GSAP is not available
        if (loaderContent) loaderContent.style.opacity = '1';
        if (loaderNumberWrapper) loaderNumberWrapper.style.opacity = '1';
    }

    // Function to update the counter and progress line
    function updateCounter() {
        counter++;
        if (counterElement) {
            counterElement.textContent = counter;
            console.log("Counter updated to:", counter);
        }
        
        if (lineInner) {
            if (typeof gsap !== 'undefined') {
                gsap.to(lineInner, {
                    width: `${counter}%`,
                    duration: 0.1
                });
            } else {
                // Fallback if GSAP is not available
                lineInner.style.width = `${counter}%`;
            }
        }
        
        if (counter < 100) {
            setTimeout(updateCounter, 20);
        } else {
            console.log("Counter reached 100, animating loader out");
            // When counter reaches 100, animate loader out
            animateLoaderOut();
        }
    }

    // Start counter animation
    setTimeout(updateCounter, 200);

    // Function to animate the loader out
    function animateLoaderOut() {
        if (typeof gsap !== 'undefined') {
            const tl = gsap.timeline();

            tl.to(".loader__number", {
                opacity: 0,
                duration: 0.3,
                ease: "power2.out"
            })
            .to(".loader__line", {
                opacity: 0,
                duration: 0.3,
                ease: "power2.out"
            }, "<")
            .to(".loader__text", {
                opacity: 0,
                rotationX: -90,
                rotationY: -20,
                rotationZ: 0,
                x: "-1rem",
                yPercent: -100,
                stagger: 0.075,
                ease: "expo.inOut",
                duration: 2
            })
            .to(".loader__wrapper", {
                width: "90%",
                height: "90%", 
                duration: 2,
                ease: "expo.inOut"
            }, "<")
            .to(".loader__wrapper", {
                transform: "scaleY(0)",
                duration: 1.2,
                ease: "expo.inOut"
            })
            .to(".loader", {
                backgroundColor: "rgba(255, 255, 255, 0)",
                backdropFilter: "blur(0px)",
                duration: 1.2,
                ease: "expo.inOut"
            }, "<")
            .to(".loader", {
                display: "none"
            });
        } else {
            // Fallback if GSAP is not available
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    }
}); 