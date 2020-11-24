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

  $('p').on('click', function() {
    $(this).children()[0].checked = !$(this).children()[0].checked;
  });

  function hide() {
    $('.opskrifter').hide();
    $('.ingredienser').hide();
    $('.howto').hide();

    $('#foldOutFoldIn')[0].value = 'unfold';
    $('#foldOutFoldIn')[0].textContent = 'Fold alt ud (for at kunne s\u00f8ge)';
  }

  function show() {
    $('.opskrifter').show();
    $('.ingredienser').show();
    $('.howto').show();

    $('#foldOutFoldIn')[0].value = 'fold';
    $('#foldOutFoldIn')[0].textContent = 'Fold alt ind';
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
