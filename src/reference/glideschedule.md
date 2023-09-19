---
title: GlideSchedule
description: The scoped GlideSchedule API provides methods for performing operations on GlideSchedule objects, such as adding new schedule segments to a schedule, determining if a datetime is within the schedule, or setting the schedule timezone
---
Official Docs: [GlideSchedule](https://docs.servicenow.com/search?q=GlideSchedule)

The scoped [GlideSchedule](/reference/glideschedule/) API provides methods for performing operations on [GlideSchedule](/reference/glideschedule/) objects, such as adding new schedule segments to a schedule, determining if a datetime is within the schedule, or setting the schedule timezone

## add
Adds a new schedule segment to the [current](/reference/current/) schedule
## duration
Determines the elapsed time in the schedule between two date time values using the timezone of the schedule or, if that is not specified, the timezone of the session
## getName
Gets the [current](/reference/current/) schedule name
## load
Loads a schedule with the schedule information. If a timezone is not specified or is nil, the [current](/reference/current/) session timezone is used for the schedule
## isValid
Determines if the [current](/reference/current/) schedule is valid. A schedule is valid if it has at least one schedule span
## setTimeZone
Sets the timezone for the [current](/reference/current/) schedule
