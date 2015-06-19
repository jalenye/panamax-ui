(function($) {
  $.fn.toggleTargetClass = function(selector) {

    var targetSelector = '[data-toggle-class]';

    $(this).on('click', targetSelector, function(e) {
      if (!($(e.target).data('passthru'))) {
        e.preventDefault();
      }
      var $el = $(e.currentTarget),
          target = ($el.data('toggle-target') || $el),
          cssClass = $el.data('toggle-class');

      $(target).toggleClass(cssClass);
    });
  };
})(jQuery);
