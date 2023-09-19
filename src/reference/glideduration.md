---
title: GlideDuration
description: The scoped GlideDuration class provides methods for working with spans of time or durations. GlideDuration objects store the duration as a date and time from January 1, 1970, 00&#58;00&#58;00. As a result, setValue() and getValue() use the GlideDateTime object for parameters and return values
---
Official Docs: [GlideDuration](https://docs.servicenow.com/search?q=GlideDuration)

The scoped [GlideDuration](/reference/glideduration/) class provides methods for working with spans of time or durations. [GlideDuration](/reference/glideduration/) objects store the duration as a date and time from January 1, 1970, 00:00:00. As a result, setValue() and getValue() use the [GlideDateTime](/reference/glidedatetime/) object for parameters and return values

## add
Adds a given duration to the [current](/reference/current/) duration
## getByFormat
Gets the [current](/reference/current/) duration in the given format
## getValue
Gets internal value of the this duration object. GlidDuration is stored as DateTime
## subtract

## getDisplayValue
Gets the display value of the duration in number of days, hours, and minutes
## setValue
Sets the internal value of the [GlideDuration](/reference/glideduration/) object. Internally, [GlideDuration](/reference/glideduration/) is stored as DateTime
## getDayPart
Gets the number of days
## setDisplayValue
Sets the display value
## getRoundedDayPart
Gets the rounded number of days. If the time part is more than 12 hours, the return value is rounded up. Otherwise, it is rounded down
## getDurationValue
Gets the duration value in d HH:mm:ss format
