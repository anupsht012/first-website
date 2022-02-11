let hamburgerBtn = document.getElementById("hamburger-btn");
let navItems = document.getElementById("navlinks");
let navlinks = document.getElementById("navlinks");
let barIcon = document.getElementById("bar-icon");
let crossIcon = document.getElementById("cross-icon");
let searchBar = document.getElementById("search__bar");

hamburgerBtn.onclick = () => {
    barIcon.classList.toggle("hide");
    crossIcon.classList.toggle("show");
    navItems.classList.toggle("active");
    searchBar.classList.toggle("show");
}





