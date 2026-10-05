document.addEventListener("DOMContentLoaded", () => {

    // Navbar scroll effect
    const navbar = document.querySelector(".navbar");

    if (navbar) {
        window.addEventListener("scroll", () => {
            navbar.style.background =
                window.scrollY > 40
                    ? "rgba(5, 7, 11, 0.92)"
                    : "rgba(5, 7, 11, 0.72)";
        });
    }


    // Mobile menu
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("active");
            menuToggle.classList.toggle("active");

            const isOpen =
                navLinks.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );
        });


        navLinks.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");
                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            });

        });
    }


    // Scroll reveal
    const revealItems = document.querySelectorAll(
        ".section, .project-card, .skill-card, .stat-card, .contact-box"
    );

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

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


    // Active navigation
    const sections =
        document.querySelectorAll("section[id]");

    const navigationLinks =
        document.querySelectorAll(".nav-links a");


    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 160;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {
                currentSection =
                    section.getAttribute("id");
            }

        });


        navigationLinks.forEach((link) => {

            link.style.color = "";

            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {
                link.style.color = "#00e5ff";
            }

        });

    });


    // Current year
    const footerText =
        document.querySelector(".footer-content > p");

    if (footerText) {

        footerText.textContent =
            `© ${new Date().getFullYear()} Vikas Kumar. All rights reserved.`;

    }


    // Console branding
    console.log(
        "%c VK — Vikas Kumar ",
        "color:#00e5ff;font-size:20px;font-weight:bold;"
    );

});
