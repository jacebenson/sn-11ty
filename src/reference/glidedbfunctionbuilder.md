---
title: GlideDBFunctionBuilder
description: The Scoped GlideDBFunctionBuilder provides a builder API for creating platform function definition
---
Official Docs: [GlideDBFunctionBuilder](https://docs.servicenow.com/search?q=GlideDBFunctionBuilder)

The Scoped [GlideDBFunctionBuilder](/reference/glidedbfunctionbuilder/) provides a builder API for creating platform function definition

## add
Start an addition function
## constant
Add a constant parameter to the [current](/reference/current/) function
## endfunc
End the [current](/reference/current/) function
## subtract
Start a subtraction function
## length
Start a length function
## coalesce
Start a function that will return the first non-null value in a list of values
## concat
Start a concatenation function
## substring
Start a function that will return a substring when given a string and an integer position. Optionally a third length parameter can be included to limit the length of the resulting substring.
## datediff
Start a function that return the duration between 2 dates
## field
Add a field parameter to the [current](/reference/current/) function
## build
Return the completed function definition
## now
Start a function that returns the [current](/reference/current/) timestamp in the UTC timezone. This function should be used as a parameter to the datediff function to calculate a duration between the [current](/reference/current/) datetime and another datetime field or datetime constant
## dayofweek
Start a function that returns the day of the week of a given date
## divide
Start a division function
## position
Start a function that will return the first occurrence of a substring within a string. Takes optional search start position as third arg.
## multiply
Start a multiplication function
