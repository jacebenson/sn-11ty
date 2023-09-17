---
title: Syntax Highlighting
---

This site is built on [11ty](https://11ty.dev/) and uses [@11ty/eleventy-plugin-syntaxhighlight](https://github.com/11ty/eleventy-plugin-syntaxhighlight) to highlight code blocks.

Code blocks can be highlighted by passing a language to the section.

## Available languages

There are a lot of available languages for syntax highlighting.

Here's a [link to the list on PrismJs](https://prismjs.com/#languages-list).

## Highlighting code in markdown

Use ` ```js ` and the section will be highlighted like so.

```js
function myFunction() {
  console.log('Hello World');
  console.log('Hello World');
  return true;
}
```

## Markdown Line Highlighting

Use ` ```js/3/1-2 ` and the section will be highlighted.

So the first numbers in the two /, are the line adds.  
The second number after the last /, are the line removes

```js/3/1-2
function myFunction() {
  console.log('Hello World');
  console.log('Hello World');
  return true;
}
```

## Highlighting code in a template

Use `{{% highlight js %}}` and `{{% endhighlight %}}` and the section will be highlighted

Because this is a markdown file, I cannot show what this looks like here but on the [home page](/#organized) is an example with highlighted a shell script.  

## Diff highlighting

[Diff highlighting is possible](https://github.com/11ty/eleventy-plugin-syntaxhighlight/issues/46) with the ... bizarre / syntax but there is also a [plugin that is not currently supported](https://github.com/11ty/eleventy-plugin-syntaxhighlight/issues/28).
