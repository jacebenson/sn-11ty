---
eleventyExcludeFromCollections: true
---
# Welcome to the Eleventy Documentation

Lets take this time to show off the standard markdown rendering.

# Heading 1

## Heading 2   

### Heading 3   

#### Heading 4      

##### Heading 5

###### Heading 6


# Text
## Paragraphs are separated by a blank line.

I really like using Markdown.

I think I'll use it to format all of my documents from now on.

## Line Breaks

This is the first line with two spaces after the period.  
And this is the second line.

## Emphasis

You can add emphasis by making text bold or italic.

### Bold

I **really** like using **Markdown**.

I just love __bold text__.

Love**is**bold


### Italic

    
Italicized text is the *cat's meow*.

Italicized text is the _cat's meow_.

A*cat*meow

### Bold and Italic

This text is ***really important***.	

This text is ___really important___.	

This text is __*really important*__.	

This text is **_really important_**.	

This is really***very***important text.	

## Blockquotes

> Dorothy followed her through many of the beautiful rooms in her castle.

## Blockquotes with multiple paragraphs

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

## Nested Blockquotes

> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

## Blockquotes with Other Elements

> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.

# Lists

You can organize items into ordered and unordered lists.

## Ordered Lists

### Numerically in order

1. First item(1)
2. Second item(2)
3. Third item(3)
4. Fourth item(4)

### Using all 1's

1. First item(1)
1. Second item(1)
1. Third item(1)
1. Fourth item(1)

### Using random numbers

1. First item(1)
8. Second item(8)
3. Third item(3)
5. Fourth item(5)

### Nested Ordered Lists

1. First item
2. Second item
3. Third item
    1. Indented item
    2. Indented item
4. Fourth item

## Unordered Lists

### With dashes

- First item
- Second item
- Third item

### With asterisks

* First item
* Second item
* Third item

### With plus signs

+ First item
+ Second item
+ Third item

### Nested Unordered Lists

- First item
- Second item
- Third item
    - Indented item
    - Indented item
- Fourth item

### Adding elements in lists

To add another element in a list while preserving the continuity of the list, indent the element four spaces or one tab, as shown in the following examples.

#### Adding paragraph in a list

* This is the first list item.
* Here's the second list item.

    I need to add another paragraph below the second list item.

* And here's the third list item.

#### Adding blockquote in a list

* This is the first list item.
* Here's the second list item.

    > A blockquote would look great below the second list item.

* And here's the third list item.

#### Adding code in a list

1. Open the file.
2. Find the following code block on line 21:

        <html>
          <head>
            <title>Test</title>
          </head>

3. Update the title to match the name of your website.

#### Adding images in a list

1. Open the file containing the Linux mascot.
2. Marvel at its beauty.

    ![Tux, the Linux mascot](/images/tux.png)

3. Close the file.

## Code

To denote a word or phrase as code, enclose it in backticks (`).

At the command prompt, type `nano`.

### Escaping backticks

``Use `code` in your Markdown file.``

### Code Blocks

To create code blocks, indent every line of the block by at least four spaces or one tab.

    <html>
      <head>
      </head>
    </html>

### Fenced Code Blocks

#### JS

```js
function hello() {
  console.log('Hello, world!');
}
```
    
#### JSX

```jsx
import { Form, Label, TextAreaField, FieldError, Submit } from "@redwoodjs/web"

export const Comment = () => {
  const onSubmit = (data) => {
    console.info(`Submitted: ${data}`)
  }
  return (
    <Form onSubmit={onSubmit}>
      <Label name="comment" errorStyle={{ color: "red" }} />
      <TextAreaField
        name="comment"
        errorStyle={{ borderColor: "red" }}
        validation={{ required: true }}
      />
      <FieldError name="comment" errorStyle={{ color: "red" }} />
      <Submit>Send</Submit>
    </Form>
  )
}
```

#### Prisma (using JS)

` ```js//17,29-36 `

```js//17,29-36
// api/db/schema.prisma

datasource DS {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

generator client {
  provider      = "prisma-client-js"
  binaryTargets = "native"
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  body      String
  comments  Comment[]
  createdAt DateTime @default(now())
}

model Contact {
  id        Int      @id @default(autoincrement())
  name      String
  email     String
  message   String
  createdAt DateTime @default(now())
}

model Comment {
  id        Int      @id @default(autoincrement())
  name      String
  body      String
  post      Post     @relation(fields: [postId], references: [id])
  postId    Int
  createdAt DateTime @default(now())
}
```