const homeDropdownBtn = document.getElementById("homeDropdownBtn");
const homeDropdown = document.getElementById("homeDropdown");
const icon = document.querySelector(".dropdown-icon");

homeDropdownBtn.addEventListener("click", () => {
    homeDropdown.classList.toggle("show");
    icon.classList.toggle("rotate");
});
document.addEventListener("click", (e) => {
    if (!homeDropdown.contains(e.target) && !homeDropdownBtn.contains(e.target)) {
        homeDropdown.classList.remove("show");
        icon.classList.remove("rotate");
    }
});



const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const closeMenu = document.getElementById("closeMenu");

function openMenu() {
    navMenu.classList.add("active");
    closeMenu.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeNav() {
    navMenu.classList.remove("active");
    closeMenu.classList.remove("active");
    document.body.style.overflow = "";
}

hamburger.addEventListener("click", openMenu);
closeMenu.addEventListener("click", closeNav);

document.querySelectorAll(".nav-items a").forEach(link => {
    link.addEventListener("click", closeNav);
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-up').forEach(el => {
    observer.observe(el);
});

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const sectionRect = counter.closest('.stats-section').getBoundingClientRect();
        const isVisible = sectionRect.top < window.innerHeight && sectionRect.bottom > 0;

        if (isVisible && !counter.classList.contains('counted')) {
            counter.classList.add('animate', 'counted');
            let current = 0;
            const duration = 2000;
            const increment = target / (duration / 16);
            const startTime = performance.now();

            function updateCounter(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                current = target * progress;

                if (progress < 1) {
                    counter.textContent = Math.floor(current).toLocaleString() + (target > 10 ? 'K+' : target === 4.95 ? '' : '+');
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target.toLocaleString() + (target > 10 ? 'K+' : target === 4.95 ? '' : '');
                }
            }
            requestAnimationFrame(updateCounter);
        }
    });
}

animateCounters();
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            animateCounters();
            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.works-step').forEach((step, index) => {
        step.style.transitionDelay = `${index * 0.15}s`;
    });
});
