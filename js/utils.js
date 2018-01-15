/*

Logger

*/
const Utils = (function() {

  /*

  Logger

  */
  const log = function(msg) {
    console.log(msg);
  };


  /*

  Get Classes

  */
  const getClasses = function($element) {
    return $element.attr('class').split(/\s+/);
  };


  /*

  Filter Classes

  */
  const filterClasses = function(classes) {
    return classes.filter(function(classItem) {
      if(classItem !== 'active') {
        return classItem !== 'rule-heading';
      }
    });
  };


  /*

  Match Classes

  */
  const matchClasses = function($element) {
    var classes = getClasses($element);
    var classesOk = filterClasses(classes);

    toggleRuleContent(classesOk[0]);

  };


  /*

  Calculate current rule height

  */
  const calculateRuleHeight = function() {
    if($('.rule.fadeInUp').length) {
      var height = $('.rule.fadeInUp').height();
      $('.rules-content').css('height', height);
    }
  };


  /*

  Toggle Rule Content

  */
  var toggleRuleContent = function(idname) {

    var id = "#" + idname;
    var $elements = $('.rules-content').find('.fadeInUp');

    //$elements.addClass('fadeOutDown');
    $elements.removeClass('fadeInUp');





    // $(id).removeClass('fadeOutDown');
    $(id).toggleClass('fadeInUp');

    calculateRuleHeight();

  };


  /*

  Scroll to element

  */
  var scrollToElement = function($element) {
    $('html, body').animate({
      scrollTop: $element.offset().top + -20
    }, 500);
  };


  /*

  Check if mobile

  */
  var isMobile = function() {
    if($(window).width() < 768 && $.browser.mobile) {
      return true;
    }
  };


  return {
    log: log,
    matchClasses: matchClasses,
    calculateRuleHeight: calculateRuleHeight,
    isMobile: isMobile,
    scrollToElement: scrollToElement
  };

})();

export default Utils;
