---
title: "Conditionals"
order: 600
---

## Conditionals

Conditionals are used to execute code based on a condition.  There are 3 common ways to do this in Javascript.

- if
- if else
- switch
- ternary

I avoid using `switch` because it's syntax is different enough that I often forget about it's spacing or the `default` keyword.  I prefer to use `if` and rarely `ternary` instead.

Book Source: [Javascript: The Good Parts](https://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742)
Web Source: [Doug Crockford's Javascript Code Conventions](https://www.crockford.com/code.html#switch%20statement)

### if

This is a common way to execute code when a condition is true.

```javascript
var i = 0;
if (i < 10) {
  gs.print(i);
}
```

### if else

I generally avoid using `else` if possible and instead exit the code early and often.  This is called [guard clauses](https://refactoring.com/catalog/replaceNestedConditionalWithGuardClauses.html).

What does this look like?  Lets consider an example where we want to only allow users with the `itil` role to run a script.

```javascript
// this is using if else
var user = gs.getUser();
if (user.hasRole('itil')) {
  // do something
} else {
  gs.print('You do not have permission to run this script');
}

// this is using guard clauses
var user = gs.getUser();
if (!user.hasRole('itil')) {
  gs.print('You do not have permission to run this script');
  return;
}
// do something
```

The reason I prefer guard clauses is because it's easier to read and understand.  It's also easier to test.  I can test the guard clause and the `if` statement separately.  I can't test the `if` statement without the `else` statement.

### ternary

This is a common way to execute code when a condition is true or false.

```javascript
var i = 0;
var result = i < 10 ? 'less than 10' : 'greater than 10';
gs.print(result);
```

It's important to understand how this works and for me that's seeing the same function converted to an `if` statement.

```javascript
var i = 0;
if(i < 10) {
  gs.print('less than 10');
} else {
  gs.print('greater than 10');
}
```