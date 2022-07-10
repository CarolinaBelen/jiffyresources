var elem = document.querySelector('.collapsible.popout');
var instance = M.Collapsible.init(elem, {
  accordion: false
});

$(document).ready(function(){
  $('.sidenav').sidenav();
});

$(document).ready(function(){
  $('.fixed-action-btn').floatingActionButton();
});
      
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, options);
});

$(document).ready(function(){
  $('.modal').modal();
});

$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true
});