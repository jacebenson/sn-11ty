---
title: gs
description: The scoped GlideSystem (referred to by the variable name 'gs' in any server-side JavaScript) API provides a number of convenient methods to get information about the system, the current logged in user, etc.
---
Official Docs: [gs](https://docs.servicenow.com/search?q=gs)

The scoped GlideSystem (referred to by the variable name 'gs' in any server-side JavaScript) API provides a number of convenient methods to get information about the system, the [current](/reference/current/) logged in user, etc.


## addErrorMessage
Adds an error message for the [current](/reference/current/) session

## addInfoMessage
Adds an info message for the [current](/reference/current/) session

## beginningOfLastMonth
Gets the date and time for the beginning of last month in UTC, adjusted for the timezone of the server

## beginningOfLastWeek
Gets the date and time for the beginning of last week in UTC, adjusted for the timezone of the server

## beginningOfLastYear
Gets the date and time for the beginning of last year in UTC, adjusted for the timezone of the server

## beginningOfNextMonth
Gets the date and time for the beginning of next month in UTC, adjusted for the timezone of the server

## beginningOfNextWeek
Gets the date and time for the beginning of next week in UTC, adjusted for the timezone of the server

## beginningOfNextYear
Gets the date and time for the beginning of next year in UTC, adjusted for the timezone of the server

## beginningOfThisMonth
Gets the date and time for the beginning of this month in UTC, adjusted for the timezone of the server

## beginningOfThisQuarter
Gets the date and time for the beginning of this quarter in UTC, adjusted for the timezone of the server

## beginningOfThisWeek
Gets the date and time for the beginning of this week in UTC, adjusted for the timezone of the server

## beginningOfThisYear
Gets the date and time for the beginning of this year in UTC, adjusted for the timezone of the server

## beginningOfWeek
Returns the (UTC) beginning of the specified week adjusted for the timezone of the [current](/reference/current/) session

## datePart
Returns a String of the form :interval,value,operator

## daysAgo
Returns the (UTC) start of the day that was the specified number of days ago adjusted for the timezone of the server

## daysAgoEnd
Returns the (UTC) end of the day that was the specified number of days ago adjusted for the timezone of the server

## daysAgoStart
Returns the (UTC) start of the day that was the specified number of days ago adjusted for the timezone of the server

## debug
Uses the debug level to log a message to the system log

## endOfLastMonth
Gets the date and time for the end of last month in UTC, adjusted for the timezone of the server

## endOfLastWeek
Returns the (UTC) end of last week adjusted for the timezone of the server

## endOfLastYear
Gets the date and time for the end of last year in UTC, adjusted for the timezone of the server

## endOfNextMonth
Gets the date and time for the end of next month in UTC, adjusted for the timezone of the server

## endOfNextWeek
Returns the (UTC) end of next week adjusted for the timezone of the server

## endOfNextYear
Gets the date and time for the end of next year in UTC, adjusted for the timezone of the server

## endOfThisMonth
Gets the date and time for the end of this month in UTC, adjusted for the timezone of the server

## endOfThisQuarter
Gets the date and time for the end of this quarter in UTC, adjusted for the timezone of the server

## endOfThisWeek
Gets the date and time for the end of this week in UTC, adjusted for the timezone of the server

## endOfThisYear
Gets the date and time for the end of this year in UTC, adjusted for the timezone of the server

## endOfWeek
Returns the (UTC) end of the specified week adjusted for the timezone of the [current](/reference/current/) session

## error
Uses the error level to log a message to the system log

## eventQueue
Queues an [event](/reference/event/) for the [event](/reference/event/) manager

## generateGUID
Generates a GUID that can be used when a unique identifier is required

## getCallerScopeName
Gets the caller scope name, or returns null if there is no caller

## getCssCacheVersionString
Gets a string representing the cache version for a CSS file

## getCurrentApplicationId
Gets the ID of [current](/reference/current/) application, defined as a user preference and set by the application picker

## getCurrentScopeName
Gets the name of the [current](/reference/current/) scope

## getDurationDate
Returns the date of the duration time after January 1

## getMessage
Retrieves a message from UI messages. args is an optional paramter

## getProperty
Retrieves a message from UI messages

## getSession
Gets a reference to the [current](/reference/current/) Glide session

## getSessionID
Gets the [GlideSession](/reference/glidesession/) Session ID

## getUrlOnStack
Gets the [current](/reference/current/) URI for the session

## getUser
Returns a reference to the [GlideUser](/reference/glideuser/) object for the [current](/reference/current/) user

## getUserDisplayName
Gets the display name of the [current](/reference/current/) user (e.g., Abel Tuter, as opposed to abel.tuter)

## getUserID
Gets the sys_id of the [current](/reference/current/) user

## getUserName
Gets the username, or User ID, of the [current](/reference/current/) user (e.g., abel.tuter)

## hasRole
Determines if the [current](/reference/current/) user has the specified role

## hoursAgo
number of hours ago

## hoursAgoEnd
Returns the (UTC) end of the hour that was the specified number of hours ago adjusted for the timezone of the server

## hoursAgoStart
Returns the (UTC) start of the hour that was the specified number of hours ago adjusted for the timezone of the server

## include
Provides a safe way to call from the sandbox, allowing only trusted scripts to be included

## info
Uses the info level to log a message to the system log

## isDebugging
Determines if debugging is active for a specific scope

## isInteractive
Checks if the [current](/reference/current/) session is interactive

## isLoggedIn
Determines if the [current](/reference/current/) user is currently logged in

## isMobile
Determines if the UI is running as mobile

## minutesAgo
number of minutes ago

## minutesAgoEnd
Returns the (UTC) end of the minute that was the specified number of minutes ago adjusted for the timezone of the serve

## minutesAgoStart
Returns the (UTC) start of the minute that was the specified number of minutes ago adjusted for the timezone of the serve

## monthsAgo
Returns the (UTC) start of the quarter that was the specified number of months ago adjusted for the timezone of the server

## monthsAgoStart
Returns the (UTC) start of the quarter that was the specified number of months ago adjusted for the timezone of the server

## nil
Queries an object and returns true if the object is null, undefined, or contains an empty string

## quartersAgoEnd
Returns the (UTC) end of the quarter that was the specified number of quarters ago adjusted for the timezone of the server

## quartersAgoStart
Returns the (UTC) start of the quarter that was the specified number of quarters ago adjusted for the timezone of the server

## setRedirect
Set the redirect URI for this transaction. This determines the next page the user will see

## tableExists
Determines if a database table exists

## warn
Uses the warn level to log a message to the system log

## yesterday
Returns (UTC) 24 hours ago adjusted for the timezone of the [current](/reference/current/) session
