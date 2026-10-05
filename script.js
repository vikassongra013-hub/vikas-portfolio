document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // MOBILE MENU
    // =========================

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("active");
            menuToggle.classList.toggle("active");

            const opened = navLinks.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                opened ? "true" : "false"
            );

        });

        navLinks.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");
                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    // =========================
    // NAVBAR SCROLL
    // =========================

    const navbar = document.querySelector(".navbar");

    if (navbar) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 40) {

                navbar.style.background =
                    "rgba(5, 7, 11, 0.92)";

            } else {

                navbar.style.background =
                    "rgba(5, 7, 11, 0.72)";

            }

        });

    }


    // =========================
    // SCROLL REVEAL
    // =========================

    const revealItems = document.querySelectorAll(
        ".section, .project-card, .skill-card, .stat-card, .contact-box"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

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

        revealItems.forEach(function (item) {

            item.style.opacity = "0";
            item.style.transform = "translateY(25px)";
            item.style.transition =
                "opacity 0.7s ease, transform 0.7s ease";

            observer.observe(item);

        });

    }


    // =========================
    // ACTIVE NAVIGATION
    // =========================

    const sections =
        document.querySelectorAll("section[id]");

    const navigationLinks =
        document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const top =
                section.offsetTop - 160;

            const height =
                section.offsetHeight;

            if (
                window.scrollY >= top &&
                window.scrollY < top + height
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });

        navigationLinks.forEach(function (link) {

            link.style.color = "";

            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {

                link.style.color = "#00e5ff";

            }

        });

    });


    // =========================
    // CURRENT YEAR
    // =========================

    const footerText =
        document.querySelector(".footer-content > p");

    if (footerText) {

        footerText.textContent =
            "© " +
            new Date().getFullYear() +
            " Vikas Kumar. All rights reserved.";

    }


    // =========================
    // BRANDING
    // =========================

    console.log(
        "%c VK — Vikas Kumar ",
        "color:#00e5ff;font-size:20px;font-weight:bold;"
    );

});
