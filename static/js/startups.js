$(document).ready(function () {
		initSplineHero();
		initStartupsSteps();
		initStartupsPriorities();
		initStartupsBenefits();
});

const initSplineHero = () => {
		const splineViewer = document.querySelector('spline-viewer');
		
		if (splineViewer) {
				// Set initial size
				const resizeViewer = () => {
						splineViewer.style.width = '100vw';
						splineViewer.style.height = '100vh';
				};
				
				// Call resize on load and window resize
				resizeViewer();
				window.addEventListener('resize', resizeViewer);

				// Wait for Spline to load
				splineViewer.addEventListener('load', () => {
						console.log('Spline scene loaded');
						
						// Get the application
						const app = splineViewer.application;

						if (app) {
								// Add scroll interaction - only rotate, no darkening
								window.addEventListener('scroll', () => {
										const scrolled = window.pageYOffset;
										const val = scrolled * 0.0015;
										app.setRotation(0, val, 0);
								});

								// Add mouse move interaction with increased sensitivity
								document.addEventListener('mousemove', (e) => {
										const mouseX = (e.clientX / window.innerWidth - 0.5) * 0.15;
										const mouseY = (e.clientY / window.innerHeight - 0.5) * 0.15;
										app.setRotation(mouseY, mouseX, 0);
								});

								// Handle window resize
								window.addEventListener('resize', () => {
										if (app.setSize) {
												app.setSize(window.innerWidth, window.innerHeight);
										}
								});
						}
				});
		}
};

var initStartupsSteps = function () {

		var _scroll = function () {
				$('.startups-steps').each(function () {
						var el = $(this);
						var i1, i2, i3;
						var p = (($(window).scrollTop() - el.offset().top) / (el.outerHeight())) * 4;

						if (p <= 0) {
								i1 = 0;
						} else if (p > 0 && p < 1) {
								i1 = p;
						} else {
								i1 = 1
						}
						if (p <= 1) {
								i2 = 0;
						} else if (p > 1 && p < 2) {
								i2 = p - 1;
						} else {
								i2 = 1
						}
						if (p <= 2) {
								i3 = 0;
						} else if (p > 2 && p < 3) {
								i3 = p - 2;
						} else {
								i3 = 1
						}

						if (p >= 0.5) {
								el.addClass('active1');
						} else {
								el.removeClass('active1');
						}
						if (p >= 1.5) {
								el.addClass('active2');
						} else {
								el.removeClass('active2');
						}
						if (p >= 2.5) {
								el.addClass('active3');
						} else {
								el.removeClass('active3');
						}

						if (p >= 3) {
								el.addClass('done');
						} else {
								el.removeClass('done');
						}

						el.css({
								'--percent1': i1,
								'--percent2': i2,
								'--percent3': i3
						});
				});
		};

		_scroll();
		$(window).on('scroll resize', _scroll);
};

var initStartupsPriorities = function () {

		var _scroll = function () {
				$('.startups-priorities').each(function () {
						var el = $(this);
						var i1, i2, i3;
						var p = (($(window).scrollTop() - el.offset().top) / (el.outerHeight())) * 5;

						if (p <= 0) {
								i1 = 0;
						} else if (p > 0 && p < 1) {
								i1 = p;
						} else {
								i1 = 1
						}
						if (p <= 1) {
								i2 = 0;
						} else if (p > 1 && p < 2) {
								i2 = p - 1;
						} else {
								i2 = 1
						}
						if (p <= 2) {
								i3 = 0;
						} else if (p > 2 && p < 3) {
								i3 = p - 2;
						} else {
								i3 = 1
						}

						if (p >= 0.5) {
								el.addClass('active1');
						} else {
								el.removeClass('active1');
						}
						if (p >= 1.5) {
								el.addClass('active2');
						} else {
								el.removeClass('active2');
						}
						if (p >= 2.5) {
								el.addClass('active3');
						} else {
								el.removeClass('active3');
						}

						if (p >= 3) {
								el.addClass('done');
						} else {
								el.removeClass('done');
						}

						el.css({
								'--percent1': i1,
								'--percent2': i2,
								'--percent3': i3
						});
				});
		};

		_scroll();
		$(window).on('scroll resize', _scroll);
};


var initStartupsBenefits = function () {
    var _scroll = function () {
        $('.startups-benefits').each(function () {
            var el = $(this);

            // Only apply effects to elements within .startups-benefits, not the hero section
            if (el.is(':visible') && !el.hasClass('startups-hero')) {
                var i, i1, i2, i3, i4, i5;
                var p = ((($(window).scrollTop() - el.offset().top) / (el.outerHeight() - $(window).outerHeight())) * 5);

                if (p <= 0) {
                    i = 0;
                } else if (p > 0 && p < 4) {
                    i = p / 4;
                } else {
                    i = 1
                }
                if (p <= 0) {
                    i1 = 0;
                } else if (p > 0 && p < 1) {
                    i1 = p;
                } else {
                    i1 = 1
                }
                if (p <= 1) {
                    i2 = 0;
                } else if (p > 1 && p < 2) {
                    i2 = p - 1;
                } else {
                    i2 = 1
                }
                if (p <= 2) {
                    i3 = 0;
                } else if (p > 2 && p < 3) {
                    i3 = p - 2;
                } else {
                    i3 = 1
                }
                if (p <= 3) {
                    i4 = 0;
                } else if (p > 3 && p < 4) {
                    i4 = p - 3;
                } else {
                    i4 = 1
                }
                if (p <= 4) {
                    i5 = 0;
                } else if (p > 4 && p < 5) {
                    i5 = p - 4;
                } else {
                    i5 = 1
                }

                // Only apply CSS variables to the benefits section
                el.css({
                    '--percent': i,
                    '--percent1': i1,
                    '--percent2': i2,
                    '--percent3': i3,
                    '--percent4': i4,
                    '--percent5': i5
                });
            }
        });
    };

    _scroll();
    $(window).on('scroll resize', _scroll);
};
