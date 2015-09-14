/* ==========================================================================

    Project: X-Plosion
    Author: XHTMLized
    Last updated: @@timestamp

   ========================================================================== */

(function($) {

  'use strict';

  var App = {

    /**
     * Init Function
     */
    init: function() {
      App.newsPopup();
    },

    /**
     * News Popup
     */
    newsPopup: function() {
      $(document).ready(function(){

        var countPhoto = $( ".news-photo" ).length;
        var i = 0;

        $(".news-photo").colorbox({
          open: true,
          closeButton: false,
          current: "",
          onComplete: function(){
            if (i < countPhoto) {
              window.setTimeout($.colorbox.next, 2000);
              i += 1;
            } else {
              $.colorbox.close();
            }
          }
        });
      });
    }
  };

  $(function() {
    App.init();
  });

})(jQuery);
