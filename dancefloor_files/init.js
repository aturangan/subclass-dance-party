$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });


  $('.lineUp').on('click', function(event) {
   for (var i = 0; i < window.dancers.length; i++) {
     var increment = i * 100
     window.dancers[i].setPosition(650, 400 + increment)
   }
 })
});
