console.log('page load')
$(function() {
    console.log('loaded')
    // $(document).on("click",".change-devoured", function(event) {
    //     event.preventDefault();

    $(".eat-burger").on("click", function(event) {
      var id = $(this).data("id");
      
    //   console.log(newDev);

      var newDevState = {
        devoured: 1
      };
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevState
      }).then(function() {
          console.log("New dev is");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    //$(document).on("click",".create-form", function(event) {

     $(".create-form").on("submit", function(event){
      event.preventDefault();

      var newBurger = {
        burger_name: $("#burgername").val().trim()
      };

      $.ajax("/api/burgers", { 
        type: "POST",
        data: newBurger
      }).then(function()
      {
          console.log("Added new burger " + newBurger);

          location.reload();
        }
      )
    })
});