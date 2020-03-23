$(function() {
    $("img.lazy").lazyload({effect : "fadeIn"});
});
$(document).ready(function() {
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });
});

$(window).scroll(function(){
    if ($(window).scrollTop() > 150) {
        $('.header--fixed').addClass('head__scrolled');
    }
    else {
        $('.header--fixed').removeClass('head__scrolled')
    }
});


$('.b-slick__items').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: true,
    infinite: true,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
                slidesToShow: 5,
                arrows: false,
            }
    },
     {
      breakpoint: 1300,
      settings: {
                slidesToShow: 4,
            }
    },
   {
      breakpoint: 1000,
      settings: {
                slidesToShow: 3,
            }
    },
      {
      breakpoint: 700,
      settings: {
                slidesToShow: 2,

            }
    }
  
  ]
    });

$('.popup__hamb').click(function(e){
    $('body').addClass("popup-opened");
});


jQuery(function($){
    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".menu__box"); // тут указываем ID элемента
        if (!div.is(e.target) && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $('body').removeClass("popup-opened");
        }

    });
});

 $('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    adaptiveHeight: true,
    infinite: true,
    useTransform: true,
    speed: 400,
    variableWidth: true,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
 });

 $('.slider-nav')
    .on('init', function(event, slick) {
        $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        focusOnSelect: false,
        infinite: false,
   
    });

 $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
 });

 $('.slider-nav').on('click', '.slick-slide', function(event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    $('.slider-single').slick('slickGoTo', goToSingleSlide);
 });



 $(document).ready(function () {
        $('.accordion__header').click(function () {
            $(this).toggleClass('in').next().slideToggle();
            $('.accordion__header').not(this).removeClass('in').next().slideUp();
        });
    });
