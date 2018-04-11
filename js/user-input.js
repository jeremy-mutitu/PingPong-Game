

$(document).ready(function () {

  $(".ping-pong").submit(function (event) {
    event.preventDefault();
    $("ul").empty();
    var userInput = $("#user-input").val();

    for (index = 1; index <= userInput; index++) {
      theResult = condition(index);
      $("ul").append("<li>" + theResult + "</li>");
    }
  });
  var effectsJumbo = function () {
    if ($("#top-heading").offset().top > 40) {
      $("#top-heading").addClass("jumbotron-transparent");
    } else {
      $("#top-heading").removeClass("jumbotron-transparent");
    }
  }
  effectsJumbo();
  $(window).scroll(effectsJumbo);
});
