// Javascript code to toggle on and off the navigation sidebar
const toggleNav = document.querySelector(".toggle-nav");
const toggleBars = document.querySelector(".fa-bars");
const navSidebar = document.querySelector(".nav_smaller-screen");
const closeSidebar = document.getElementsByClassName("fa-xmark")[0];

toggleBars.addEventListener("click", function() {
    // toggleBars.style.transform = "skew(30deg, 30deg)";
    navSidebar.classList.add("show");
    toggleBars.style.display = "none";
    closeSidebar.style.display = "block";
});


closeSidebar.addEventListener("click", function() {
    navSidebar.classList.remove("show");
    closeSidebar.style.display = "none";
    toggleBars.style.display = "block";
});