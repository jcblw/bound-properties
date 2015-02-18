var 
test = require( 'tape' ),
bound = require( '..' )

test( 'testing _bindMethods', function( t ) {
  t.equals( typeof bound._bindMethods, 'function', '_bindMethods is defined and is a function' );
  t.equals( typeof bound._bindMethods(), 'function', '_bindMethods when called returns a function' );
  t.throws( bound._bindMethods(), '_bindMethods throws when returned function is called without an object is not passed into first argument of the initial function call' );

  // need test more test plz.
  t.end();
} );
