/*!
 * jQuery scrollInTurn plugin -version 1.0.1
 *
 *
 * Copyright 2014, Mayumi Tanji
 * Released under the MIT license
 * http://www.opensource.org/licenses/mit-license.php
 */

 (function( $ ){

  $.fn.scrollInTurn = function( options ) {

    var defaults = $.extend( {
      selector : '.target',
      delaySpeed : 300,
      fadeInSpeed : 500,
      fadeOutSpeed : 300,
      easing : 'swing',
      delayHeight : 400,
      fadeOutEvent : true
    }, options);

    return this.each(function() {

      var self = $(this);

      $(window).on('load',function(){
        self.find(defaults.selector).css({opacity: 0});
      });

      $(window).on('load scroll resize',function(){
        var target = self.find(defaults.selector);
        var elmTop = self.offset().top;
        var scrTop = $(window).scrollTop();
        var elmHeight = self.height();
        var windowHeight = $(window).height();
        if (scrTop > elmTop - defaults.delayHeight || scrTop + windowHeight > elmTop + elmHeight){
          if (!self.hasClass('on')) {
            target.each(function(i){
              $(this).delay(i*(defaults.delaySpeed)).animate({opacity:'1'}, defaults.fadeInSpeed, defaults.easing);
            });
            self.addClass('on');
          }
        }
        if (scrTop + windowHeight < elmTop){
          if (self.hasClass('on') && defaults.fadeOutEvent === true) {
            target.stop(true, true).animate({'opacity': 0}, defaults.fadeOutSpeed, defaults.easing);
            self.removeClass('on');
          }
        }
      });

    });

  };

})( jQuery );