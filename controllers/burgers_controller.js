var express = require( "express" );
var router = express.Router();
var burgers = require( "../models/burger.js" );

//Selects all of the data from the whole database of the table burgers and renders it to the home index page. 
router.get( "/", function ( req, res ) {
  burgers.selectAll( function ( data ) {
    var hbsObject = {
      burgers: data
    };
    console.log( hbsObject );
    for ( i = 0; i < hbsObject.length; i++ ) {
      hbsObject.burgers[ i ].devoured = parseInt( hbsObject.burgers[ i ].devoured );
    }
    res.render( "index", hbsObject );
  });
});

//The post method allows the user to insert a new burger and display it on the page
router.post( "/api/burgers/", function ( req, res ) {
  var newBurger = req.body.burger_name.toString();
  console.log( newBurger );

  burgers.insertOne( newBurger, function ( result ) {
    // Send back the ID of the new quote
    res.json( { id: result.insertId } );

  })
  console.log( 'redirect line' )
});

//The put method allows the user to update their devoured status from false to true. 
router.put( "/api/burgers/update/:id", function ( req, res ) {

var condition = req.params.id;
  console.log( "condition", condition );

  burgers.updateOne(condition, function (result) {
    res.json(result);
  });
});

module.exports = router;
