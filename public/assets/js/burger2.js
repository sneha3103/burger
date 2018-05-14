$( function () {
    $( ".add-burger" ).on( "click", function ( event ) {
      event.preventDefault();
  
      // var id = $( this ).attr( "data-id" );
    //   console.log( "This is the added burger id:" + id );
      var newBurger = {
        burger_name: $( "#burg" ).val().trim(),
      };
  
      console.log( newBurger.burger_name );
  
      // Send the POST request.
      //   $.ajax( "/api/burgers/", {
      //     type: "POST",
      //     data: newBurger
      //   } ).then(
      //     function ( data ) {
      //       console.log( "Created New Burger" );
      //       if ( data )
      //         // res.redirect( '/' )
      //         // Reload the page to get the updated list
      //         location.reload();
      //     }
      //   );
      // } );
  
      $.post( '/api/burgers', newBurger, function ( data ) {
        if ( data ) {
          location.reload()
        }
      })
    });
  
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
            location.reload()
            // Reload the page to get the updated list
            // location.reload();
          }
        );
  
      });
  
    // } );
  
});