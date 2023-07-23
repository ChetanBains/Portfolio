// Use descriptive variable names
const hamburger = document.querySelector('.header .nav-bar .hamburger .bar');
const mobile_menu = document.querySelector('.header .nav-list ul');
const header = document.querySelector('#header');

hamburger.addEventListener('click', () => {
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 500) {
        header.style.backgroundColor = "blue";
    } else {
        header.style.backgroundColor = "white";
    }
});


/* --------------- MAP function -----------*/


// function initMap() {

//     var Jalandhar = { lat: 31.318648, lng: 75.634219 };
//     var map = new google.maps.Map(
//         document.getElementsByClassName('map'), { zoom: 4, center: Jalandhar });
//     var marker = new google.maps.Marker({ position: Jalandhar, map: map });
// }