document.addEventListener('DOMContentLoaded', (event) => {
    let currentTestimonialIndex = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const prevButtons = document.querySelectorAll('.nav-left'); // Use class if there are multiple buttons
    const nextButtons = document.querySelectorAll('.nav-right'); // Use class
    const photoContainer = document.querySelector('.client-photo'); // The container for the photo
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navLinks = document.querySelector('.nav-links');
    const heroSection = document.querySelector('.hero-section');
    const serviceItems = document.querySelectorAll('.service-item');
    const teamItems = document.querySelectorAll('.team-member');
    const preloader = document.getElementById('preloader');
    const backtotop = document.querySelector('.back-to-top');
    const serviceBtnContainer = document.querySelector('.service-btn-container');
    const servicesTitle = document.querySelector('.services-title');
    const servicesDescription = document.querySelector('.services-description');
    const teamBtnContainer = document.querySelector('.team-btn-container');
    const teamTitle = document.querySelector('.team-title');
    const teamDescription = document.querySelector('.team-description');
    const newsBtnContainer = document.querySelector('.news-btn-container');
    const newsTitle = document.querySelector('.news-title');
    const newsDescription = document.querySelector('.news-description');
    const testimonialBtnContainer = document.querySelector('.testimonial-btn-container');
    const testimonialTitle = document.querySelector('.testimonial-title');
    const testimonialDescription = document.querySelector('.testimonial-description');
    const contactBtnContainer = document.querySelector('.contact-btn-container');
    const contactTitle = document.querySelector('.contact-title');
    const contactDescription = document.querySelector('.contact-description');
    const heroElements = document.querySelectorAll('.hero-section .hidden');
    const statItems = document.querySelectorAll('.stats-section .stat-item');


    window.addEventListener('load', () => {
        if (preloader) {
            // Remove the preloader element
            preloader.remove();
        }
    });

    const toggleBacktotop = () => {
        if (window.scrollY > 100) {
            backtotop.classList.add('active');
        } else {
            backtotop.classList.remove('active');
        }
    };

    // Add the scroll event listener to toggle the back to top button
    window.addEventListener('scroll', toggleBacktotop);

    // Optionally, add a click event listener to the back to top button to scroll the window to the top
    if (backtotop) {
        backtotop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Function to animate elements on page load
    function animateHeroOnLoad() {
        heroElements.forEach((element, index) => {
            // Remove the 'hidden' class and add the animation class
            element.classList.remove('hidden');
            element.classList.add(index % 2 === 0 ? 'fade-in-top' : 'fade-in-bottom');
        });
    }



    // Call the animate function
    animateHeroOnLoad();

    function showServicesOnScroll() {
        const scrollY = window.pageYOffset;
    
        serviceItems.forEach((item, index) => {
        const itemOffset = item.offsetTop;
        const itemHeight = item.offsetHeight;
        
        // Check if the item is within the viewport
        if (scrollY > itemOffset - itemHeight * 3) {
            item.classList.add('visible');
        }
        });
    }

    function parallaxEffect() {
        const decorativeLeft = document.querySelector('.solutions-decorative-left');
        const decorativeRight = document.querySelector('.solutions-decorative-right');
        const decorativeRight2 = document.querySelector('.solutions-decorative-right2');
        const solutionsContainer = document.querySelector('.solutions-container');
        const containerOffset = solutionsContainer.offsetTop;
    
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset + window.innerHeight;
            if (scrollPosition >= containerOffset) { // Apply effect only when the section is in or above the viewport
                const offset = window.pageYOffset - containerOffset;
                decorativeLeft.style.transform = `translateY(${offset * 0.3}px)`;
                decorativeRight.style.transform = `translateY(${offset * 0.3}px)`;
                decorativeRight2.style.transform = `translateY(${offset * 0.2}px)`;
                decorativeRight2.style.transform = `translateX(${offset * 0.2}px)`;
            }
        });
    }

    function showNewsCardsOnScroll() {
        const scrollY = window.pageYOffset;
        const newsCards = document.querySelectorAll('.news-card'); // Select all news cards
    
        newsCards.forEach((card, index) => {
            const cardOffset = card.offsetTop;
            const cardHeight = card.offsetHeight;
    
            // Check if the card is within the viewport
            if (scrollY > cardOffset - window.innerHeight) {
                // Add a staggered delay based on the index
                card.style.transitionDelay = `${index * 0.4}s`; // 1s delay increment for each card
                card.classList.add('visible');
            }
        });
    }
    
    window.addEventListener('scroll', showNewsCardsOnScroll);
    

    function showteamOnScroll() {
        const scrollY = window.pageYOffset;
    
        teamItems.forEach((item, index) => {
        const itemOffset = item.offsetTop;
        const itemHeight = item.offsetHeight;
        
        // Check if the item is within the viewport
        if (scrollY > itemOffset - itemHeight * 3) {
            item.classList.add('visible');
        }
        });
    }

    window.addEventListener('scroll', showServicesOnScroll);
    window.addEventListener('scroll', showteamOnScroll);
    window.addEventListener('scroll', () => {
        const offset = window.pageYOffset;
        heroSection.style.backgroundPositionY = offset * 0.7 + 'px'; // Adjust the 0.7 to control the speed
    });

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to animate logos on scroll
    function animateOnScroll() {
        // Check if the service button and title are in the viewport
        if (isInViewport(serviceBtnContainer) || isInViewport(servicesTitle)) {
            serviceBtnContainer.classList.remove('hidden');
            serviceBtnContainer.classList.add('fade-in-left');
            servicesTitle.classList.remove('hidden');
            servicesTitle.classList.add('fade-in-right');
        }

        

        // Check if the team button and title are in the viewport
        if (isInViewport(teamBtnContainer) || isInViewport(teamTitle)) {
            teamBtnContainer.classList.remove('hidden');
            teamBtnContainer.classList.add('fade-in-left');
            teamTitle.classList.remove('hidden');
            teamTitle.classList.add('fade-in-right');
        }
        // Check if the news button and title are in the viewport
        if (isInViewport(newsBtnContainer) || isInViewport(newsTitle)) {
            newsBtnContainer.classList.remove('hidden');
            newsBtnContainer.classList.add('fade-in-left');
            newsTitle.classList.remove('hidden');
            newsTitle.classList.add('fade-in-right');
        }

        // Check if the testimonial button and title are in the viewport
        if (isInViewport(testimonialBtnContainer) || isInViewport(testimonialTitle)) {
            testimonialBtnContainer.classList.remove('hidden');
            testimonialBtnContainer.classList.add('fade-in-left');
            testimonialTitle.classList.remove('hidden');
            testimonialTitle.classList.add('fade-in-right');
        }


        // Check if the contact button and title are in the viewport
        if (isInViewport(contactBtnContainer) || isInViewport(contactTitle)) {
            contactBtnContainer.classList.remove('hidden');
            contactBtnContainer.classList.add('fade-in-left');
            contactTitle.classList.remove('hidden');
            contactTitle.classList.add('fade-in-right');
        }

        
        
        // Animate stat items on scroll
        statItems.forEach((item, index) => {
            if (isInViewport(item)) {
                item.classList.remove('hidden');
                item.classList.add(index % 2 === 0 ? 'fade-in-top' : 'fade-in-bottom');
            }
        });

        // Selectors for solutions section
        const solutionsHeader = document.querySelector('.solutions-header');
        const solutionsContent = document.querySelector('.solutions-content');

        if (isInViewport(solutionsHeader)) {
            solutionsHeader.classList.remove('hidden');
            solutionsHeader.classList.add('fade-in-top');
        }
        if (isInViewport(solutionsContent)) {
            solutionsContent.classList.remove('hidden');
            solutionsContent.classList.add('fade-in-bottom');
        }

        // Check if the service description is in the viewport
        if (isInViewport(servicesDescription)) {
            servicesDescription.classList.remove('hidden');
            servicesDescription.classList.add('fade-in-right');
        }

        // Check if the team description is in the viewport
        if (isInViewport(teamDescription)) {
            teamDescription.classList.remove('hidden');
            teamDescription.classList.add('fade-in-right');
        }

        // Check if the news description is in the viewport
        if (isInViewport(newsDescription)) {
            newsDescription.classList.remove('hidden');
            newsDescription.classList.add('fade-in-right');
        }

        // Check if the testimonial description is in the viewport
        if (isInViewport(testimonialDescription)) {
            testimonialDescription.classList.remove('hidden');
            testimonialDescription.classList.add('fade-in-bottom');
        }

        // Check if the contact description is in the viewport
        if (isInViewport(contactDescription)) {
            contactDescription.classList.remove('hidden');
            contactDescription.classList.add('fade-in-bottom');
        }

        // Selector for the contact form and image
        const contactForm = document.querySelector('.contact-form');
        const contactImage = document.querySelector('.contact-image');
        // Check if the contact description is in the viewport
        if (isInViewport(contactForm)) {
            contactForm.classList.remove('hidden');
            contactForm.classList.add('fade-in-bottom');
        }

        if (isInViewport(contactImage)) {
            contactImage.classList.remove('hidden');
            contactImage.classList.add('fade-in-bottom');
        }

        const logos = document.querySelectorAll('.client-logos img');
        logos.forEach(logo => {


            if (isInViewport(logo)) {
                logo.classList.add('in-view');
            } else {
                logo.classList.remove('in-view');
            }

        });

        
    }

    // Function to check the window's width and adjust nav-links display
function adjustNavLinksDisplay() {
    if (window.innerWidth > 768) { // assumes 768px is where the navbar should no longer be collapsed
        navLinks.style.display = ''; // reset to default style
    } else {
        if (!navLinks.style.display || navLinks.style.display === 'none') {
            navLinks.style.display = 'none'; // keep it consistent with the toggle state
        }
    }
}

// Call the function on window resize
window.addEventListener('resize', adjustNavLinksDisplay);

// Call the function on DOMContentLoaded to check initial state
document.addEventListener('DOMContentLoaded', adjustNavLinksDisplay);
    
    // Listen for scroll event to trigger animation
    window.addEventListener('scroll', animateOnScroll);

    navbarToggler.addEventListener('click', () => {
        const isDisplayed = navLinks.style.display === 'block';
        navLinks.style.display = isDisplayed ? 'none' : 'block';
    });

    function showTestimonial(index) {
        testimonials.forEach((testimonial, idx) => {
            if (idx === index) {
                testimonial.classList.add('active');
            } else {
                testimonial.classList.remove('active');
            }
        });
        // Assuming each testimonial has a .client-photo element with a background image
        const currentPhoto = testimonials[index].querySelector('.client-photo').style.backgroundImage;
        photoContainer.style.backgroundImage = currentPhoto;
    }
    
    

    function nextTestimonial() {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
        showTestimonial(currentTestimonialIndex);
    }

    function prevTestimonial() {
        currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonialIndex);
    }

    // Automatic switch every 4 seconds
    let testimonialInterval = setInterval(nextTestimonial, 4000);

    // Reset the interval when a button is clicked
    function resetInterval() {
        clearInterval(testimonialInterval);
        testimonialInterval = setInterval(nextTestimonial, 4000);
    }

    prevButtons.forEach(button => button.addEventListener('click', () => {
        prevTestimonial();
        resetInterval();
    }));

    nextButtons.forEach(button => button.addEventListener('click', () => {
        nextTestimonial();
        resetInterval();
    }));

    // Initialize with the first testimonial
    showTestimonial(currentTestimonialIndex);
    parallaxEffect();
});
