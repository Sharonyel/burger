$(function() {
    $(".eat-burger").on("click", function(event) {
         event.preventDefault();

      var id = $(this).data("id");
      
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

     $(".create-form").on("submit", function(event){
      event.preventDefault();


      var str = $("#burgername").val().trim()
   
      const chgCase = str.charAt(0).toUpperCase() + str.substring(1);
      
      var newBurger = {
        burger_name: chgCase
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
    });

    $(".del-burger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        console.log("id " + id)
    
        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    

});