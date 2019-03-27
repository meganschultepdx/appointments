$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var serviceInput = $("input#service").val();
    var dateInput = $("input#date").val();
    var timeInput = $("input#time").val();

    $("#myModal").show();
    $("#formOne").hide();

    $(".name").text(nameInput);
    $(".date").text(dateInput);
    $(".service").text(serviceInput);
    $(".time").text(timeInput);

    event.preventDefault();
  });


});
