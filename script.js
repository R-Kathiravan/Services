document.addEventListener('DOMContentLoaded', function () {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function () {

            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');

             if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }

        });
    }

    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    const header = document.querySelector('.header');
    if(!header) return;
    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            header.style.height = '70px';
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.height = '80px';
            header.style.background = 'rgba(255, 255, 255, 0.85)';
        }
    });
    const homeDropdownBtn = document.getElementById("homeDropdownBtn");
    const homeDropdown = document.getElementById("homeDropdown");
    const icon = document.querySelector(".dropdown-icon");
    if (!homeDropdown) return;
    if (!homeDropdown) return;
    if (!icon) return;
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
});
