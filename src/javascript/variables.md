---
title: "Variables"
order: 200
---
## Variables

Variables are used to store data in as you process it.  You can think of them as a temporary post-it note.  You can write to it, and read from it.  You can also change what is written on it.  There's only a few types of variables in Javascript.  They are:

- String
- Number
- Boolean
- Object
- Array
- Function

Technically everything in Javascript is an object, but we'll get to that later.  For now, let's just focus on the first 5.

### String

A string is a sequence of characters.  It can be a single character, or a whole book.

#### Methods

Common methods I use on strings are:
- `string.length` - returns the number of characters in the string
- `string.charAt(index)` - returns the character at the index
- `string.indexOf(searchValue)` - returns the index of the first occurance of the search value
- `string.lastIndexOf(searchValue)` - returns the index of the last occurance of the search value
- `string.substring(startIndex, endIndex)` - returns the characters between the start and end index
- `string.split(separator)` - returns an array of strings split by the separator
- `string.replace(searchValue, replaceValue)` - returns a new string with the search value replaced with the replace value

### Number

A number is a number.  It can be a whole number, or a decimal.

#### Methods
Common methods I use on numbers are:
- `number.toFixed(decimalPlaces)` - returns a string with the number rounded to the decimal places
- `number.toString()` - returns a string with the number
- `number.toPrecision(precision)` - returns a string with the number rounded to the precision
- `isNaN(number)` - returns true if the number is not a number
- `parseInt(string)` - returns the integer value of the string
- `parseFloat(string)` - returns the float value of the string

### Boolean

A boolean is a true or false value.


#### ServiceNow Gotcha

ServiceNow is notorius for returning a string instead of a boolean.  For example, `gs.hasRole('admin')` returns a string instead of a boolean.  To convert a string to a boolean, you can use the `Boolean(string)` function.

#### Truthy and Falsy
Additionally Javascript has a concept of truthy and falsy values.  What does this mean.  Well, when comparing values, unless you are using the `===` or `!==` operators, the values will be converted to a boolean.

Let's look at some examples:

```javascript

// these are all truthy values
if (true) { gs.print('true is truthy'); }
if ({}) { gs.print('{} is truthy'); }
if ([]) { gs.print('[] is truthy'); }
if (42) { gs.print('42 is truthy'); }

// these are all falsy values
if (false) { gs.print('false is falsy'); }
if (null) { gs.print('null is falsy'); }
if (undefined) { gs.print('undefined is falsy'); }
if (0) { gs.print('0 is falsy'); }
if (NaN) { gs.print('NaN is falsy'); }
if ('') { gs.print('\'\' is falsy'); }
```

### Object

An object is a collection of key value pairs.

#### Methods

Common methods I use on objects are:
- `object.hasOwnProperty(key)` - returns true if the object has the key
- `for (var key in object)` - iterates over the keys in the object
- `JSON.stringify(object)` - returns a string representation of the object
- `JSON.parse(string)` - returns an object from the string

### Array

An array is a collection of values.

#### Methods

Common methods I use on arrays are:
- `array.length` - returns the number of items in the array
- `array.push(value)` - adds the value to the end of the array
- `array.forEach(function)` - iterates over the array
- `array.map(function)` - returns a new array with the function applied to each item

### Function

A function is a block of code that can be called.  They can take parameters and return something.

Common patterns I use with functions are:

#### Parameters

```javascript
function printIt(param1, param2) {
  // do something
  gs.print(param1 + ' ' + param2);
}
var calledFunction = printIt('hello', 'world');
// this will print 'hello world'
// but will return undefined
gs.print('calledFunction: ' + calledFunction);// calledFunction: undefined
```

#### Return

```javascript
function returnIt(param1, param2) {
  // do something
  return param1 + ' ' + param2;
}
var calledFunction = returnIt('hello', 'world');
// this will only return 'hello world'
gs.print('calledFunction: ' + returnIt);// calledFunction: hello world
```

#### Immediately Invoked Function Expression (IIFE)

Wrapping code in a function is pretty common.  It protects the variables from being updated by other code.  The two reasons folks generally say don't use `gr` as a variable name are;
1. It's poorly named variable.  It's not descriptive.
2. It's a global variable.  It can be updated by other code.

However if you wrap your code in a function, you can use `gr` as a variable name and it won't be updated by other code.  This is called an Immediately Invoked Function Expression (IIFE).  It's a function that is called immediately.  It's a common pattern in Javascript.

```javascript
(function() {
  // do something
  gs.print('hello world');
})();
// this will print 'hello world'
```

#### Arrow Functions

This is a ES6 feature but it is very common so I'm just going to address it here.  Understanding it's structure will help you read other people's code.

```javascript
var multiLineArrowFx = (param1, param2) => {
  // do something
  return param1 + ' ' + param2;
}
// is the same as;
var multiLineFx = function(param1, param2) {
  // do something
  return param1 + ' ' + param2;
}
var singleLineArrowFx = (param1, param2) => param1 + ' ' + param2;
// is the same as;
var singleLineFx = function(param1, param2) { return param1 + ' ' + param2; }
```