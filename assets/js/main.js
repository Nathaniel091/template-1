
!(function($) {
  "use strict";

  // Hero typed.js
  if ($('.typed').length) {
    var typed_strings = $(".typed").data('typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: false,
      typeSpeed: 110,
      backSpeed: 25,
      backDelay: 2000,
    });
  }



  // Nav-menu toggle button
  $(document).on('click', '.mobile-nav-toggle', function(e) {
    $('body').toggleClass('mobile-nav-active');
    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
  });



// ---------- Back-to-top ----------------------------------
  // back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  // for smooth back-to-top transition
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });
// ---------- End back-to-top ----------


  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Porfolio isotope and filter
  // $(window).on('load', function() {
  //   var portfolioIsotope = $('.portfolio-container').isotope({
  //     itemSelector: '.portfolio-item',
  //     layoutMode: 'fitRows'
  //   });

  //   $('#portfolio-flters li').on('click', function() {
  //     $("#portfolio-flters li").removeClass('filter-active');
  //     $(this).addClass('filter-active');

  //     portfolioIsotope.isotope({
  //       filter: $(this).data('filter')
  //     });
  //     aos_init();
  //   });

  //   // Initiate venobox (lightbox feature used in portofilo)
  //   $(document).ready(function() {
  //     $('.venobox').venobox();
  //   });
  // });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Portfolio details carousel
  // $(".portfolio-details-carousel").owlCarousel({
  //   autoplay: true,
  //   dots: true,
  //   loop: true,
  //   items: 1
  // });



// ---------- Animation On Scroll (AOS library) ----------------------
  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-back",
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);

// ---------- End AOS ----------



// ---------- MY FUNCTIONS

// ---------- add .active to the current nav-item ----------
function addActiveClassToCurrentNavItem() {
  const currentPagePathName = location.pathname.replace(/^\//, ''); // gets the "pathname" of the current/active webpage
  let navItem = document.querySelectorAll(".nav-menu ul li > a"); // selects the "a" tags in all "li" tags in the nav-menu

  for(let i=0; i<navItem.length; i++){
    let navItem_href = navItem[i].getAttribute("href"); // gets the "href" attribute of the a tags

    if(currentPagePathName == navItem_href) {
      let parentElementOfNavItem = navItem[i].parentNode;
      parentElementOfNavItem.classList.add("active");
    }
  }
}
addActiveClassToCurrentNavItem();
// ---------- End addActiveClassToCurrentNavItem()

// -------------------- get current year --------------------------------
function currentYear() {
  let year = document.getElementById("year")
  let originalYear = '2021'
  let currentYear = new Date().getFullYear();

  if(originalYear >= currentYear) {
    year.textContent = `${originalYear}`
  } else {
    year.textContent = `${originalYear}-${currentYear}`
  }
}
currentYear()
// ---------- End get current year

// function removeBackgroundAttachmentFixed() {
//   function isDeviceIOS(){
//      return !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
//   }
//   if(isDeviceIOS()){
//     const currentPagePathName = location.pathname.replace(/^\//, '');
//     if(currentPagePathName === "index.html"){
//       let sectionTags = document.getElementsByTagName("section");
//       sectionTags[0].style.backgroundAttachment = "initial";
//       console.log(sectionTags)
//     }
//   }
//   console.log(currentPagePathName)
// }
// console.log(removeBackgroundAttachmentFixed());
 

