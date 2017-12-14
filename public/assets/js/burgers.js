$(function() {

$("#createburger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newBurger = {
    burger_name: $("#createburger [name=burger]").val().trim()
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        //console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

//   $("#updateburger").on("submit", function(event) {
//     // Make sure to preventDefault on a submit event.
//     console.log("d")
//     event.preventDefault();
//     var id = $("[name=id]").val().trim();
//     var updatedBurger = {
//       movie: $("#updateburger [name=burger]").val().trim()
//     };
//       // Send the PUT request.
//       $.ajax("/api/burgers/" + id, {
//         type: "PUT",
//         data: updatedBurger
//       }).then(
//         function() {
//           console.log("updated id ", id);
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });


  $(".delburger").on("click", function(event) {
    var id = $(this).attr("data-burgerid");
    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT"
    }).then(
      function() {
        console.log("deleted id ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#clearburger").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "DELETE",
    }).then(
      function() {
        //console.log("deleted eaten burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


});