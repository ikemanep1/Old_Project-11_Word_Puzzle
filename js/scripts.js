$(document).ready(function() {
  $("#sentence_input").submit(function(event) {
    event.preventDefault();
    var sentence = $("#item1").val();
    sentence.split(" ");
    output = []
    for (var index = 1; index <= sentence.length;  index++) {
      checkee = sentence.toLowerCase().charAt(index);
      if (checkee.includes("a") || checkee.includes("e") || checkee.includes("i") || checkee.includes("o") || checkee.includes("u")) {
        checkee = "-";
        output.push(checkee);
      } else {
        output.push(checkee);
      }
    }
    result = output.join(" ");
    $(".results").append("<li>" + result + "</li>")
    console.log(output);
});
});
