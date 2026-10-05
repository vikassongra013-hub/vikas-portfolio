/* =================================
   VIKAS KUMAR — PORTFOLIO
   Interactive JavaScript
================================ */

document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       Navbar scroll effect
    ================================= */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            navbar.style.background = "rgba(5, 7, 11, 0.92)";
        } else {
            navbar.style.background = "rgba(5, 7, 11, 0.72)";
        }
    });


    /* ================================
       Scroll reveal
    ================================= */

    const revealItems = document.querySelectorAll(
        ".section, .project-card, .skill-card, .stat-card, .contact-box"
    );

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealItems.forEach((item) => {

        item.style.opacity = "0";
        item.style.transform = "translateY(25px)";
        item.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        revealObserver.observe(item);

    });


    /* ================================
       Active navigation
    ================================= */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach((section) => {

            const sectionTop = section.offsetTop - 160;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach((link) => {

            link.style.color = "";

            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {
                link.style.color = "#00e5ff";
            }

        });

    });


    /* ================================
       Current year
    ================================= */

    const year = new Date().getFullYear();

    const footerText = document.querySelector(
        ".footer-content > p"
    );

    if (footerText) {
        footerText.textContent =
            `© ${year} Vikas Kumar. All rights reserved.`;
    }


    /* ================================
       Console branding
    ================================= */

    console.log(
        "%c VK — Vikas Kumar ",
        "color:#00e5ff;font-size:20px;font-weight:bold;"
    );

    console.log(
        "%c Web Developer Portfolio ",
        "color:#98a4b6;font-size:13px;"
    );


   /* ================================
   MOBILE MENU
================================ */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        menuToggle.classList.toggle("active");
        navLinks.classList.toggle("active");

    });


    navLinks.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            menuToggle.classList.remove("active");
            navLinks.classList.remove("active");

        });

    });

}
});
