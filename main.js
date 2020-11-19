$(function() {
  $('.opskrifter').hide();
  $('.ingredienser').hide();
  $('.howto').hide();

  $('.oversigt').on('click', '.kategori', function(event) {
    event.preventDefault();
    $(this).next('.opskrifter').not('animated').slideToggle();
  });

  $('.opskrifter').on('click', '.recipe', function(event) {
    event.preventDefault();
    $(this).next('.ingredienser').not('animated').slideToggle();
    $(this).next('.ingredienser').next('.howto').not('animated').slideToggle();
  });
})
