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
        // $(".news-photo").colorbox();
        $(".news-photo").colorbox({
          open: true,
          onComplete:function(){
            // setTimeout($.colorbox.next, 500);
            setTimeout(function(){
              $.colorbox.next
            },1500);
          }
        });
      });
    }
  };

  $(function() {
    App.init();
  });

})(jQuery);
