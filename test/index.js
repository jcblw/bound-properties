var 
test = require( 'tape' ),
bound = require( '..' )

test( 'testing _bindMethods', function( t ) {
  var 
  foo = { 
    bar: function(){
      return this.baz;
    },
    baz: 'qux'
  },
  bar

  t.equals( typeof bound._bindMethods, 'function', '_bindMethods is defined and is a function' )
  t.equals( typeof bound._bindMethods(), 'function', '_bindMethods when called returns a function' )
  t.throws( bound._bindMethods(), '_bindMethods throws when returned function is called without an object is not passed into first argument of the initial function call' )
  
  bound._bindMethods( foo )( 'bar' )
  bar = foo.bar

  t.equals( bar(), 'qux', '_bindMethods will keep the correct context ( the first argument ) on a method with the key that is passed to the second argument' )
  // need test more test plz.
  t.end();
} );

test( 'testing bound', function( t ) {
  var
  foo = {
    bar: function(){ return this },
    baz: function(){ return this },
    qux: 'foo'
  },
  bar

  t.throws( bound, 'bound will throw an error when executed without passing an object' );
  t.equals( typeof bound( foo ), 'object', 'bound when passed an object returns an object' );
  t.equals( bound( foo ).qux, 'foo', 'bound returns the object that is passed into bound' );
  
  bar = foo.bar

  t.equals( bar().bar, foo.bar, 'when calling bound with a method in it will bind method even when called with a diffent accessor' );
  t.end();
});
