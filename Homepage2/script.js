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