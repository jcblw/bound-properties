# Bound Properties

[![Greenkeeper badge](https://badges.greenkeeper.io/jcblw/bound-properties.svg)](https://greenkeeper.io/)

binds an objects methods to its own context

[![Build Status](https://travis-ci.org/jcblw/bound-properties.svg?branch=master)](https://travis-ci.org/jcblw/bound-properties)

## Usage

```javascript
var 
foo = { 
  bar: function( ) {
    return this.baz
  },
  baz: 'qux'
},
baz = foo.bar

console.log( baz() ) // undefined

baz = bound( foo ) // modifies exsisting ref to foo

console.log( baz() ) // qux
```
