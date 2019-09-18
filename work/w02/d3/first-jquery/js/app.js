$('#addHome').removeClass('btn-danger').addClass('btn-success');
$('h1.jumbotron').addClass('text-center');

var $newLink = $('<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com</a>');

$('body').append($newLink);
$('#zillowLink').attr('target', '_blank');

$('#addHome').on('click', function(evt) {
  console.log(evt);
});

$('#homes tbody').on(
  'click',
  'button',
  function() {
    $(this).closest('tr').fadeOut(1000, function(){
      $(this).remove();
    });
  }
)