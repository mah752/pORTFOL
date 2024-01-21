(function($) {
  "use strict";

  document.addEventListener("DOMContentLoaded", function(){
      window.addEventListener('scroll', function() {
          if (window.scrollY > 50) {
              document.getElementById('header-nav').classList.add('fixed-top');
          } else {
              document.getElementById('header-nav').classList.remove('fixed-top');
              document.body.style.paddingTop = '0';
          }
      });

      $(window).on('scroll', function(){
          if ($(window).scrollTop()){
              $('nav').addClass('nav-bg');
          } else {
              $('nav').removeClass('nav-bg');
          }
      });

      AOS.init({
          duration: 1200,
      });
  });

  $(document).ready(function() {
      var btn = $('#backToTop');

      $(window).on('scroll', function() {
          if ($(window).scrollTop() > 300) {
              btn.addClass('show');
          } else {
              btn.removeClass('show');
          }
      });

      btn.on('click', function(e) {
          e.preventDefault();
          $('html, body').animate({
              scrollTop: 0
          }, 300);
      });
  });
})(jQuery);
// Get the modal and the button that opens it
var modal = document.getElementById("contactModal");
var btn = document.getElementById("contactBtn");
var span = document.getElementsByClassName("close")[0];

// Open the modal when the button is clicked
btn.onclick = function() {
    modal.style.display = "block";
};

// Close the modal when the close button is clicked
span.onclick = function() {
    modal.style.display = "none";
};

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
