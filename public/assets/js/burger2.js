$( function () {
    $( ".add-burger" ).on( "click", function ( event ) {
      event.preventDefault();

      var newBurger = {
        burger_name: $( "#burg" ).val().trim(),
      };
  
      console.log( newBurger.burger_name );
  
      //Post request to allow the user input burgers to display on the browser
      $.post( '/api/burgers', newBurger, function ( data ) {
        if ( data ) {
          location.reload();
        }
      })
    });
  
     //When user clicks the EAT button, the devoured status changes from false to true. 
    $( ".notdevoured" ).on( "click", function ( event ) {
        var id = $( this ).data( "id" );
  
        console.log( id );
  
        var newDevouredState = {
          devoured: true,
        };
  
        // Send the updated request.
        $.ajax( "/api/burgers/update/" + id, {
          type: "PUT",
          data: newDevouredState,
        } ).then(   
          function (data) {
              console.log(data);
            console.log( "Devoured burger #", id );
            location.reload();
          }
        );
    });
});