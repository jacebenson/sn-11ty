---
title: GlideUser
description: The Scoped GlideUser API provides access to information about the current user and current user roles. Using the Scoped GlideUser API avoids the need to use the slower GlideRecord queries to get user information
---
Official Docs: [GlideUser](https://docs.servicenow.com/search?q=GlideUser)

The Scoped [GlideUser](/reference/glideuser/) API provides access to information about the [current](/reference/current/) user and [current](/reference/current/) user roles. Using the Scoped [GlideUser](/reference/glideuser/) API avoids the need to use the slower [GlideRecord](/reference/gliderecord/) queries to get user information

## getName
Gets the user id, or login name, of the [current](/reference/current/) user
## getDisplayName
Gets the display name of the [current](/reference/current/) user
## getCompanyID
Gets the Company ID of the [current](/reference/current/) user
## hasRole
Determines if the [current](/reference/current/) user has the specified role
## getID
Gets the sys_id of [current](/reference/current/) user
## isMemberOf
Determines if the [current](/reference/current/) user is a member of the specified group
## savePreference
Saves a user preference value to the database
## getPreference
Gets the specified user preference value for the [current](/reference/current/) user
