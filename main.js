$(function() {
  $('.opskrifter').hide();
  $('.ingredienser').hide();
  $('.howto').hide();

  $('#foldOutFoldIn').on('click', function() {
    if ($(this)[0].value == 'unfold') {
      show();
    } else {
      hide();
    }
  });

  function hide() {
    $('.opskrifter').hide();
    $('.ingredienser').hide();
    $('.howto').hide();

    $('#foldOutFoldIn')[0].value = 'unfold';
  }

  function show() {
    $('.opskrifter').show();
    $('.ingredienser').show();
    $('.howto').show();

    $('#foldOutFoldIn')[0].value = 'fold';
  }

  $('.slut').on('click', function() {
    $('input').prop("checked", false);
    hide();
  });

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
