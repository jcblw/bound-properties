
'use strict'

/*
 * Main export
 * takes an object and loops though methods and binds them to the object 
 * =============================================================================
 *
 * @param obj { Object } - the object to loop through
 * @returns obj { Object } - the same obj
 *
 */

module.exports = function( obj ) {

  if ( !obj || typeof obj !== 'object' || Array.isArray( obj ) ) {
    throw new Error( 'Cannot bind methods in a non object' )
  }

  var keys = Object.keys( obj )
  keys.forEach( bindMethods( obj ) )  
  return obj;
}

/*
 * _bindMethods
 * takes an object initially and then returns an iterator function
 * =============================================================================
 * 
 * @param obj { Object } - an object to bind each key thats a function to
 * @returns iterator { Function } - a function that is meant to be used in a 
 * forEach loop
 */


var bindMethods =
module.exports._bindMethods =
function bindMethods( obj ) {
  
  return function iterator( key ) {

    if ( typeof obj[ key ] === 'function' ) {
      obj[key] = obj[key].bind( obj )
    }
  }
}
