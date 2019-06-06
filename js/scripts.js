$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    console.log("test");
    var sideOne = parseInt($("#sideOne").val());
    var sideTwo = parseInt($("#sideTwo").val());
    var sideThree = parseInt($("#sideThree").val());

    if (sideOne + sideTwo <= sideThree || sideTwo + sideThree <= sideOne || sideThree + sideOne <= sideTwo) {
      $(".answer").text("This is a not triangle.");
    }
    else if (sideOne === sideTwo && sideOne === sideThree) {
      $(".answer").text("This is an equilateral triangle.");
    } else if (sideOne === sideTwo || sideOne === sideThree || sideTwo === sideThree) {
      $(".answer").text("This is an isosceles triangle.");
    } else if (sideOne != sideTwo && sideOne != sideThree && sideTwo != sideThree) {
      $(".answer").text("This is a Scalene triangle.");
    } else {
      $(".answer").text("I dunno what you did!");
    }



  });

});
