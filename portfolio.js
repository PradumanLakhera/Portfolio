// 🔹 Wait until DOM loads
document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // 🔹 1. Typing Effect (Improved)
    // =========================
    const text = "Aspiring Software Engineer & AI Enthusiast";
    const typingElement = document.getElementById("typing");
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 35);
        }
    }

    typeEffect();


    // =========================
    // 🔹 2. Smooth Scroll with Offset
    // =========================
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            const offset = 80; // navbar height

            const topPosition = target.offsetTop - offset;

            window.scrollTo({
                top: topPosition,
                behavior: "smooth"
            });
        });
    });


    // =========================
    // 🔹 3. Hero Button Scroll
    // =========================
    window.scrollToProjects = function () {
        const section = document.getElementById("projects");
        window.scrollTo({
            top: section.offsetTop - 80,
            behavior: "smooth"
        });
    };


    // =========================
    // 🔹 4. Active Navbar Highlight (Better)
    // =========================
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    function updateActiveLink() {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);


    // =========================
    // 🔹 5. Reveal Animation (Staggered)
    // =========================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("show");
                }, i * 100); // stagger effect
            }
        });
    }, {
        threshold: 0.15
    });

    document.querySelectorAll("section, .card").forEach(el => {
        el.classList.add("hidden");
        observer.observe(el);
    });


    // =========================
    // 🔹 6. Theme Toggle (Persistent)
    // =========================
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
    }

    window.toggleTheme = function () {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }
    };

});