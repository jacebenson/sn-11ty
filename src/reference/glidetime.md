---
title: GlideTime
description: The scoped GlideTime class provides methods for performing operations on GlideTime objects, such as instantiating GlideTime objects or working with GlideTime fields
---
Official Docs: [GlideTime](https://docs.servicenow.com/search?q=GlideTime)

The scoped [GlideTime](/reference/glidetime/) class provides methods for performing operations on [GlideTime](/reference/glidetime/) objects, such as instantiating [GlideTime](/reference/glidetime/) objects or working with [GlideTime](/reference/glidetime/) fields

## getByFormat
Gets the time in the given time format
## subtract
Gets the duration difference between two [GlideTime](/reference/glidetime/) values
## getHourLocalTime
Returns hour part of local time 0-11
## setDisplayValue
Sets a time value using the [current](/reference/current/) user's display format and time zone
## getHourUTC
Returns hour part of UTC time 0-11
## getValue
Gets the time value stored in the database by the [GlideTime](/reference/glidetime/) object in the internal format, HH:mm:ss, and the system time zone, UTC by default
## getMinutesUTC
Returns minutes part of UTC time
## getSeconds
Returns seconds part of time
## getDisplayValue
Gets the time in the [current](/reference/current/) user's display format and time zone
## setValue
Sets the time of the [GlideTime](/reference/glidetime/) object in the internal time zone, which is UTC by default or the value of the glide.sys.internal.tz property, if set
## getDisplayValueInternal
Gets the display value in the [current](/reference/current/) user's time zone and the internal format (HH:mm:ss). Useful for date/time fields, but not for date fields
## getHourOfDayLocalTime
Returns hour-of-the-day part of local time 0-23
## getHourOfDayUTC
Returns the hour-of-the-day part of UTC time 0-23
## getMinutesLocalTime
Returns minutes part of local time
