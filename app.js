 let menu= document.querySelector('#menu-icon');
 let navbar= document.querySelector('.navbar');

 menu.onclick=()=>
 {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
 }


 const sr=ScrollReveal(
    {
        distance:'40px',
        duration:2500,
        reset:true
    }
 );

 sr.reveal('.logo',{delay:200,origin:'left'});
 sr.reveal('.navbar',{delay:400,origin:'top'});
 sr.reveal('.menu-btn',{delay:520,origin:'right'});

 sr.reveal('.home-text span',{delay:600,origin:'top'});
 sr.reveal('.home-text h1,about-info ',{delay:680,origin:'left'});
 sr.reveal('.home-text p',{delay:750,origin:'right'});
 sr.reveal('.about-img',{delay:460,origin:'bottom'});
 sr.reveal('.professional',{delay:500,origin:'left'});
 sr.reveal('.main-btn',{delay:860,origin:'left'});
 sr.reveal('.about-txt',{delay:600,origin:'right'});
 
 sr.reveal('.home-img',{delay:950,origin:'right'});
 
 
var typed =new Typed('#job-title', {
   strings: ['Designer','Developer','Coder'],
   typeSpeed: 50,
   loop:true
 });


 var mixer = mixitup('.gallery');

// swiper
 var swiper = new Swiper(".client-swiper", {
   slidesPerView: 1,
   spaceBetween: 30,
   loop: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });