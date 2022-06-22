let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 0){
     document.querySelector('.header').classList.add('active');
     document.getElementById('img-logo').src='../images/logos/logo-color.svg';
  }else{
     document.querySelector('.header').classList.remove('active');
     document.getElementById('img-logo').src='../images/logos/logo-white.svg';
  }
}

$('#customers-testimonials').owlCarousel({
  nav: true,
  navText: ["<div class='nav-button owl-next'>‹</div>", "<div class='nav-button owl-prev'>›</div>"],
  items: 3,
  margin: 0,
  autoplay: false,
  dots: false,

  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1170: {
      items: 3
    },
    3840: {
      items: 3
    }
  }
});

var owl = $('.owl-carousel').owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  items:3,
});

$('.owl-filter').on('click', '.item', function() {
  var $item = $(this);
  var filter = $item.data('owl-filter')
  owl.owlcarousel2_filter(filter);
});

var totalItems = $('.item').length;
if (totalItems > 3) {
  $('.owl-carousel .item').each(function () {
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    if (next.next().length > 0) {
      next.next().children(':first-child').clone().appendTo($(this)).addClass('rightest');
    }
    else {
      $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
  });
}
else {
  (function () {
    $('.owl-carousel .item').each(function () {
      var itemToClone = $(this);
      for (var i = 1; i < 2; i++) {
        itemToClone = itemToClone.next();
        if (!itemToClone.length) {
          itemToClone = $(this).siblings(':first');
        }
        itemToClone.children(':first-child').clone()
          .addClass("cloneditem-" + (i))
          .appendTo($(this));
        jQuery('.owl-carousel').on('slid.bs.carousel', function () {
          var totalItems = jQuery('.owl-carousel .item').length;
          var currentIndex = jQuery('.owl-carousel .item div.active').index() + 1;
          if (totalItems == currentIndex) {
            clearInterval(jQuery('.owl-carousel .item').data('bs.carousel').interval);
          }
        });
      }
    });
  }());
}

/*------------------
        Accordin Active
    --------------------*/
    $('.collapse').on('shown.bs.collapse', function () {
      $(this).prev().addClass('active');
  });

  $('.collapse').on('hidden.bs.collapse', function () {
      $(this).prev().removeClass('active');
  });

  $(".nice-scroll").niceScroll({
        cursorcolor: "#0d0d0d",
        cursorwidth: "5px",
        background: "#e5e5e5",
        cursorborder: "",
        autohidemode: true,
        horizrailenabled: false
    });


popupWhatsApp = () => {
  
   let btnClosePopup = document.querySelector('.closePopup');
   let btnOpenPopup = document.querySelector('.whatsapp-button');
   let popup = document.querySelector('.popup-whatsapp');
   let sendBtn = document.getElementById('send-btn');
 
   btnClosePopup.addEventListener("click",  () => {
     popup.classList.toggle('is-active-whatsapp-popup')
   })
   
   btnOpenPopup.addEventListener("click",  () => {
     popup.classList.toggle('is-active-whatsapp-popup')
      popup.style.animation = "fadeIn .6s 0.0s both";
   })
   
   sendBtn.addEventListener("click", () => {
   let msg = document.getElementById('whats-in').value;
   let relmsg = msg.replace(/ /g,"%20");
     //just change the numbers "1515551234567" for your number. Don't use +001-(555)1234567     
    window.open('https://wa.me/573137059591?text='+relmsg, '_blank'); 
   
   });
 
   /* Open pop-up in 15 seconds */
   /* setTimeout(() => {
     popup.classList.toggle('is-active-whatsapp-popup');
   }, 15000); */
 
 }

popupWhatsApp();