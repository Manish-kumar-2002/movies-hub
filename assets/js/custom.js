$(document).ready(function(){
    // $('.banner-slider').slick({
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         arrows: false,
    //         dots:true
    //     });
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      // direction: 'vertical',
      effect: "fade",
      loop: true,
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    
      // Navigation arrows
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
    
      // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    });
    const swiperAnother = new Swiper('.swiper-another', {
      fadeEffect: { crossFade: true },
      effect: "fade",

      loop: true,
     
    });


    swiper.controller.control = swiperAnother;
    swiperAnother.controller.control = swiper;
});

// $(document).ready(function () {
//   $(window).scroll(function () {
//       var scrollTop = $(window).scrollTop();
//       var windowHeight = $(window).height();
//       var bannerHeight = $('.banner').height();

//       if (scrollTop < bannerHeight) {
//           var opacity = scrollTop / bannerHeight;

//           $('.banner').css({
//               'background': `linear-gradient(to bottom, rgba(0, 0, 0, ${opacity}), rgba(0, 0, 0, 1))`
//           });
//       } else {
//           $('.banner').css({
//               'background': 'black'
//           });
//       }

//       if (scrollTop <= 0) {
//           $('.banner').css({
//               'background': 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))'
//           });
//       }
//   });
// });



// $(document).ready(function () {
//   $(window).scroll(function () {
//       var scrollTop = $(window).scrollTop();
//       var windowHeight = $(window).height();
//       var bannerHeight = $('.banner').height();

//       if (scrollTop < bannerHeight) {
//           var opacity = scrollTop / bannerHeight;

//           $('.banner::after').css({
//             'content':`""`,
//               'background': `linear-gradient(to bottom, rgba(0, 0, 0, ${opacity}), rgba(0, 0, 0, 1))`
//           });
//       } else {
//           $('.banner::after').css({
//             'content':`""`,
//               'background': 'black'
//           });
//       }

//       if (scrollTop <= 0) {
//           $('.banner::after').css({
//               'background': 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))'
//           });
//       }
//   });
// });


$(document).ready(function() {
  $(window).on('scroll', function() {
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var bannerHeight = $('.banner').height();
    
    // Calculate how far the banner has scrolled as a percentage
    var scrollPercent = Math.min(scrollTop / (bannerHeight / 2), 1);
    
    if (scrollPercent >= 1) {
      // Determine the opacity for the gradient
      var opacity = (scrollPercent - 1) * 0.8; // Adjust the multiplier for the desired darkness
      
      // Set the background gradient
      // $('.banner::after').css('background', `linear-gradient(rgba(0,0,0,${opacity}), rgba(0,0,0,${opacity})), #fff`);
      $('.banner').addClass("add-after");
    } else {
      // Remove the gradient background
      // $('.banner::after').css('background', '#fff');
      $('.banner').removeClass("add-after");
    }
  });
});



var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");
    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("close");
    })
    searchBtn.addEventListener("click", () => {
      sidebar.classList.remove("close");
    })
    modeSwitch.addEventListener("click", () => {
      body.classList.toggle("dark");
      if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
      } else {
        modeText.innerText = "Dark mode";
      }
    });


  