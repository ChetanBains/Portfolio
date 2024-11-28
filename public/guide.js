const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list ul');
const navLinks = document.querySelectorAll('.nav-list ul li a');


hamburger.addEventListener('click', () => {
  navList.classList.toggle('open');
  hamburger.classList.toggle('active');
});


navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('open');
    hamburger.classList.remove('active');
  });
});
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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
  
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });


/* --------------- MAP function -----------*/


// function initMap() {

//     var Jalandhar = { lat: 31.318648, lng: 75.634219 };
//     var map = new google.maps.Map(
//         document.getElementsByClassName('map'), { zoom: 4, center: Jalandhar });
//     var marker = new google.maps.Marker({ position: Jalandhar, map: map });
// }