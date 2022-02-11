$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        768:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
})

// let hamburgerBtn = document.getElementById("hamburger-btn");
// let navlinks = document.getElementById("navlinks");
// let barIcon = document.getElementById("bar-icon");
// let crossIcon = document.getElementById("cross-icon");
// hamburgerBtn.onClick = function() {
//     barIcon.classList.toggle("hide");
//     crossIcon.classList.toggle("active");
//     navlinks.classList.toggle("active");
// };

let hamburgerMenu = document.getElementsById("hamburger-btn");
hamburgerMenu.onClick = function() {
    console.log("hi")
}

