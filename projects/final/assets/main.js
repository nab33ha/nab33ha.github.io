$(document).ready(function(){
  $('.card-container').click(function(){
    $(this).toggleClass("spread");
  });
});

$('#container').click(function() {
  $(this).toggleClass('move');
});