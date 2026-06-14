/* =====================================
   WANDERWAVE JAVASCRIPT
   ===================================== */

/* ==========================
   HAMBURGER MENU
========================== */

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* Close menu after clicking link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});

/* ==========================
   STICKY NAVBAR EFFECT
========================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.padding = "15px 8%";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

    } else {

        navbar.style.padding = "20px 8%";
        navbar.style.boxShadow = "none";
    }

});

/* ==========================
   ACTIVE NAV LINK
========================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active-link");
        }

    });

});

/* ==========================
   SCROLL REVEAL
========================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");
    observer.observe(section);

});

/* ==========================
   COUNTER ANIMATION
========================== */

const counters = document.querySelectorAll(".stat-box h2");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const targetText = counter.innerText;

            const target = parseInt(targetText);

            let count = 0;

            const increment = target / 100;

            const updateCounter = () => {

                count += increment;

                if (count < target) {

                    counter.innerText = Math.floor(count);

                    if (targetText.includes("+")) {
                        counter.innerText += "+";
                    }

                    if (targetText.includes("%")) {
                        counter.innerText += "%";
                    }

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = targetText;
                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});

/* ==========================
   CONTACT FORM VALIDATION
========================== */

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = form.querySelector('input[type="text"]');
        const email = form.querySelector('input[type="email"]');

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name.value.trim().length < 3) {

            alert("Please enter a valid name.");
            return;

        }

        if (!emailPattern.test(email.value)) {

            alert("Please enter a valid email address.");
            return;

        }

        const submitBtn = form.querySelector("button");

        submitBtn.innerHTML = "Sending...";
        submitBtn.disabled = true;

        setTimeout(() => {

            alert(
                "Thank you for contacting WanderWave! 🌿\n\nOur travel experts will reach out shortly."
            );

            form.reset();

            submitBtn.innerHTML = "Submit";
            submitBtn.disabled = false;

        }, 1500);

    });

}

/* ==========================
   BACK TO TOP BUTTON
========================== */

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.classList.add("back-to-top");

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show-top");

    } else {

        backToTop.classList.remove("show-top");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* ==========================
   DESTINATION CARD EFFECT
========================== */

const cards = document.querySelectorAll(
    ".destination-card"
);

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.transform =
            `perspective(1000px)
             rotateX(${-(y - rect.height / 2) / 25}deg)
             rotateY(${(x - rect.width / 2) / 25}deg)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";

    });

});

/* ==========================
   NEWSLETTER VALIDATION
========================== */

const newsletterInput =
    document.querySelector(".footer-newsletter input");

if (newsletterInput) {

    newsletterInput.addEventListener("keypress", e => {

        if (e.key === "Enter") {

            e.preventDefault();

            const value = newsletterInput.value.trim();

            if (value === "") {

                alert("Please enter your email.");
                return;

            }

            alert(
                "🌎 Thank you for subscribing to WanderWave!"
            );

            newsletterInput.value = "";
        }

    });

}

/* ==========================
   HERO BUTTON RIPPLE EFFECT
========================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        const rect = button.getBoundingClientRect();

        ripple.style.left =
            `${e.clientX - rect.left}px`;

        ripple.style.top =
            `${e.clientY - rect.top}px`;

        button.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

/* ==========================
   PAGE LOADED ANIMATION
========================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log(
        "🌿 WanderWave Loaded Successfully"
    );

});