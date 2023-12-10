---
title: "The Basics"
order: 100
---

# The Basics

Here lets go over the basics of Javascript.  If you are new to Javascript, I'd recommend you start here.  If you are familiar with Javascript, you can skip this section.

We'll cover the following topics:

* [Setting Expectations](#setting-expectations)
* [Variables](/javascript/variables)
* [Functions](/javascript/variables#functions)
* [Objects](/javascript/variables#objects)
* [Arrays](/javascript/variables#arrays)
* [Loops](#loops)
* [Conditionals](#conditionals)

## Setting Expectations

ServiceNow is special.  Depending on your scope and and the version and possibly the phase of the moon may determine whet "new" version of ECMAScript you can use.  I don't like to keep in my mind all that so I'd recommend you learn ECMAScript 5 aka ES5.  It's not new, but it will work everywhere in ServiceNow.

### Converting ES6 to ES5

If you have a need to convert new code to you can use this website to convert it to ES5.  [https://babeljs.io/repl](https://babeljs.io/repl/#?browsers=ie%2010&build=&builtIns=false&corejs=false&spec=false&loose=false&code_lz=DYUwLgBAhgTjEF4IG0CMAaATOgzAXQgChRIBzcAVQGcQYrEIAKASkQD4IBvGcAVxgB2EMDF4gAvoUIBjAPYCqkKAwAMAbikkIcgA4BPWQDMAgnAbIAdFdgw8QA&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=false&timeTravel=false&sourceType=script&lineWrap=true&presets=env%2Cflow&prettier=false&targets=&version=7.23.5&externalPlugins=&assumptions=%7B%7D)

### Naming Things and Style

There's a lot of opinions about this and I'm not going to say one way is better than another.  I'm just going to tell you what I do and why.  This will give you the vocabulary to talk about it with other developers and you can decide what you like best.

For naming things, I like to use [camelCase](https://en.wikipedia.org/wiki/Camel_case), and [hungarian notation](https://en.wikipedia.org/wiki/Hungarian_notation).  Let me explain what those are.  One thing to note, naming things with an uppercase letter is generally reserved for constants and classes.  ES5 doesn't support const, and declaring classes is not common, I avoid doing this.  Additionally, naming things starting wiht an underscore is generally reserved for private variables.  ES5 again doesn't support this so it is just a convention.  I do this rarely but it's good to know.

For style it's called [One True Brace Style](https://en.wikipedia.org/wiki/Indentation_style#Variant:_1TBS_.28OTBS.29) or 1TBS.

Comments.  I think we should only comment "why" not "what".  The code should tell you what it is doing.  The comments should tell you why it's doing it if it's not obvious.  I also think we should avoid commenting out code.  If you don't need it, delete it.

#### camelCase

camelCase is a way of naming things.  It's called camelCase because it looks like a camel.  It's a way of writing words where the first letter of each word is capitalized except for the first word.  For example:

```javascript
var myVariable = 'hello world';
```

#### Hungarian Notation

Hungarian notation is a way of naming things.  It's called Hungarian notation because it was invented by a Hungarian guy.  It's a way of writing words where you prefix the variable name with a letter or letters that indicate what type of variable it is.  For example:

```javascript
// a gliderecord 
var userGr = new GlideRecord('sys_user');
// a glideaggregate
var userGa = new GlideAggregate('sys_user');
// a glideajax
var userGajax = new GlideAjax('sys_user');

```

#### One True Brace Style

One True Brace Style is a way of writing code.  It uses doesn't waste new lines and uses curly braces to indicate blocks of code.  For example:

```javascript
if (true) {
  // do something
} else {
  // do something else
}
```


## Resources

1. https://snprotips.com/blog/2018/10/20/how-to-learn-servicenow
1. https://www.youtube.com/playlist?list=PL3rNcyAiDYK2_87aRvXEmAyD8M9DARVGK
1. https://www.w3schools.com/js/js_es5.asp