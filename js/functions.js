// leadpages_input_data variables come from the template.json "variables" section
import Utils from './utils';

const bootstrap = (function() {

  var $marquees = $(".l-marquee"),
      $marqueeImgs = $('.marquee-img'),
      resizeTimer,
      leadpages_input_data = {};

  /*

  Check if URL contains PAR

  */
  const containsPAR = function() {
    if(window.location.search.split('&PAR=')[1]) {
      return true;
    }
  };


  /*

  Check if URL contains params

  */
  const containsURLParams = function(url) {

    if(url.indexOf("?") > -1) {
      var arr = url.split('?');

      if (url.length > 1 && arr[1] !== '') {
        return true;

      } else {
        return false
      }

    } else {
      return false
    }

  }


  /*

  Get PAR

  */
  const getPARValue = function() {
    return window.location.search.split('&PAR=')[1];
  };


  /*

  Add PAR Links

  */
  const addPAR = function($element, token, value) {
    var href = $element.attr('href');
    href = href + token + 'PAR=' + value;
    $element.attr('href', href);
  }



  /*

  Toggle Active Rule

  */
  const toggleActiveRule = function() {

    var $headings = $('.rule-heading');

    $headings.click(function() {

      // $('.rule.fadeOutDown').removeClass('fadeOutDown');

      Utils.matchClasses($(this));

      var $elements = $('.rules-nav').find('.active');
      $elements.removeClass('active');
      $(this).toggleClass('active');

      if ( Utils.isMobile() ) {
        moveAccordionHeader();
        Utils.scrollToElement($(this));
      }



    });

  };


  const insertGoogleFonts = function() {
    $('head').append('<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">');
  };








  const moveAccordionHeader = function() {
    var $activeHeading = $('.rule-heading.active');
    var $nav = $('.rules-nav');

    $nav.append( $activeHeading.detach() );

  }




  /*

  Resize

  */
  const resizeFunction = function() {
    Utils.calculateRuleHeight();
  };


  const initMarqueeSlider = function() {
    $(".l-marquee").not('.slick-initialized').slick({
      dots: true,
      arrows: false,
      infinite: false,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: true
          }
        }

      ]
    });


    if( Utils.isMobile() ) {
      $('.marquee-img').attr('src', 'http://simpleblend.net/marquee_header_keno_new.png');
    }


    $(".l-marquee").on('breakpoint', function(event, slick, currentSlide, nextSlide) {
      console.log('is breaking');

      if( Utils.isMobile() ) {
        console.log('is mobile');
        $('.marquee-img').attr('src', 'http://simpleblend.net/marquee_header_keno_new.png');

      } else {
        console.log('is not mobile');
        $('.marquee-img').attr('src', '../img/marquee-keno-desktop.jpg');

      }

    });
  };

  const initWindowSizeChecker = function() {
    $(window).resize(function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resizeFunction, 250);
    });
  };


  const initMobileLinks = function() {
    $('.link-login').attr('href', 'https://info.michiganlottery.com/?NeoDL=Login');
    $('.link-signup').attr('href', 'https://info.michiganlottery.com/?NeoDL=Registration');
    $('.link-playnow').attr('href', 'https://info.michiganlottery.com/?NeoDL=Registration');
    $('.link-game1').attr('href', 'https://info.michiganlottery.com/?NeoDL=Game&PlayMode=D&GID=265');
    $('.link-game2').attr('href', 'https://info.michiganlottery.com/?NeoDL=Game&PlayMode=D&GID=354');
    $('.link-game3').attr('href', 'https://info.michiganlottery.com/?NeoDL=Game&PlayMode=D&GID=410');
    $('.link-game4').attr('href', 'https://info.michiganlottery.com/?NeoDL=Game&PlayMode=D&GID=565');
    $('.banner-link').attr('href', 'https://m.michiganlottery.com/m_promotions?&c=m');
  };


  /*

  Init app

  */
  const init = function() {

    Utils.calculateRuleHeight();
    toggleActiveRule();
    resizeFunction();
    initMarqueeSlider();
    initWindowSizeChecker();
    insertGoogleFonts();

    if( Utils.isMobile() ) {
      initMobileLinks();
      moveAccordionHeader();
    }


    if( containsPAR() ) {
      var parValue = getPARValue();

      $('a:not("#footer_phone_text")').each(function() {

        if($(this).attr('href').length) {
          if(containsURLParams( $(this).attr('href') )) {
            addPAR($(this), '&', parValue);

          } else {
            addPAR($(this), '?', parValue);
          }
        }

      });

    }


  };


  return {
    init: init
  };


})();

export default bootstrap;
