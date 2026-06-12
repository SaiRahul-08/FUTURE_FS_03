// =============================
// MOBILE MENU
// =============================

const hamburger =
document.querySelector(".hamburger");

const navLinks =
document.querySelector(".nav-links");

if(hamburger){

    hamburger.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

// =============================
// CLOSE MENU ON LINK CLICK
// =============================

document
.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// =============================
// STICKY NAVBAR
// =============================

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(7,20,45,0.98)";

        navbar.style.boxShadow =
        "0 10px 25px rgba(0,0,0,0.25)";

    }
    else{

        navbar.style.background =
        "rgba(7,20,45,0.95)";

        navbar.style.boxShadow =
        "none";

    }

});

// =============================
// COUNTER ANIMATION
// =============================

const counters =
document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target =
        +counter.getAttribute("data-target");

        let count = 0;

        const increment =
        target / 100;

        const updateCounter = () => {

            if(count < target){

                count += increment;

                counter.innerText =
                Math.ceil(count);

                setTimeout(
                    updateCounter,
                    20
                );

            }
            else{

                counter.innerText =
                target + "+";

            }

        };

        updateCounter();

    });

};

// =============================
// COUNTER OBSERVER
// =============================

const statsSection =
document.querySelector(".stats-section");

if(statsSection){

    const counterObserver =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                startCounter();

                counterObserver.unobserve(
                    statsSection
                );

            }

        });

    });

    counterObserver.observe(
        statsSection
    );

}

// =============================
// TESTIMONIAL SLIDER
// =============================

const testimonials =
document.querySelectorAll(".testimonial");

let testimonialIndex = 0;

function showTestimonial(){

    testimonials.forEach(item => {

        item.classList.remove("active");

    });

    testimonials[testimonialIndex]
    .classList.add("active");

    testimonialIndex++;

    if(
        testimonialIndex >=
        testimonials.length
    ){

        testimonialIndex = 0;

    }

}

if(testimonials.length > 0){

    showTestimonial();

    setInterval(
        showTestimonial,
        3000
    );

}

// =============================
// SCROLL REVEAL
// =============================

const revealElements =
document.querySelectorAll(
`
.about-card,
.program-card,
.trainer-card,
.stat-card,
.pricing-card,
.contact-info,
.contact-form
`
);

const revealObserver =
new IntersectionObserver(

entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform =
            "translateY(0)";

        }

    });

},

{
    threshold:0.15
}

);

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
    "translateY(40px)";

    element.style.transition =
    "0.8s ease";

    revealObserver.observe(element);

});

// =============================
// CONTACT FORM
// =============================

const contactForm =
document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener(
        "submit",
        function(e){

            e.preventDefault();

            alert(
                "Thank you for contacting Power Fitness Club. We will get back to you soon."
            );

            contactForm.reset();

        }
    );

}

// =============================
// BUTTON HOVER EFFECT
// =============================

const buttons =
document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener(
        "mouseenter",
        () => {

            button.style.transition =
            "0.3s";

        }
    );

});

// =============================
// SMOOTH PAGE LOAD
// =============================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

// =============================
// CONSOLE
// =============================

console.log(
    "Power Fitness Club Loaded"
);