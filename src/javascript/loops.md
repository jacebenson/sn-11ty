---
title: "Loops"
order: 500
---

## Loops

Loops are used to repeat a block of code.  There are 4 common ways to do this in Javascript.

- `for`
- `while`
- `array.forEach`
- `array.map`

Another thing to note is that you can exit a loop early using `break` or skip an iteration using `continue`.

- `break` - exits the loop
- `continue` - skips the rest of the code in the loop and goes to the next iteration

### for

This is a common way to loop over an array or an objects keys.

I prefer to use `for` loops when I am working with an object and `array.forEach` when I am working with an array.

```javascript
var object = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3'
};
// loop over the keys in the object
for (var key in object) {
  // do something with the key
  gs.print(key);
  // do something with the value
  gs.print(object[key]);
}
```

### while

This is a common way to loop when a condition is true.

```javascript
var i = 0;
while (i < 10) {
  gs.print(i);
  i++;
}
```

Or in the context of a GlideRecord:

```javascript
var gr = new GlideRecord('incident');
gr.addQuery('active', true);
gr.setLimit(10);
gr.query();
while (gr.next()) { // gr.next() returns true if there is another record
  gs.print(gr.number);
}
```

### array.forEach

This is a common way to loop over an array.

```javascript
var array = ['value1', 'value2', 'value3'];
array.forEach(function(value) {
  gs.print(value);
});
```

### array.map

This is a common way to loop over an array and return a new array.

```javascript
var array = ['value1', 'value2', 'value3'];
var newArray = array.map(function(value) {
  return value + '!';
});
gs.print(newArray); // ['value1!', 'value2!', 'value3!']
```
