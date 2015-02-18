# Bound Properties

binds an objects methods to its own context

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
