---
title: email_action
description: Standard javascript object
---
Official Docs: [email_action](https://docs.servicenow.com/search?q=email_action)

Standard javascript object


## action_insert
Send an [email](/reference/email/) whenever a new record is inserted into the selected table

## action_update
Send an [email](/reference/email/) whenever a record in the selected table is modified

## affected_field_on_event
The field in the [event](/reference/event/) that must be affected for this notification to send to subscribed users

## category
The notification appears in the user notification preferences under the category provided. If no category is provided, it appears under 'Uncategorized'.

## condition
Send Notification when conditions evaluate to true

## content_type
Specify whether the message is sent with a format of HTML, plain text, or both

## event_parm_1
The first [event](/reference/event/) parameter contains a recipient, either a user sys_id, group sys_id or an [email](/reference/email/) address, who should receive this notification

## event_parm_2
The second [event](/reference/event/) parameter contains a recipient, either a user sys_id, group sys_id or an [email](/reference/email/) address, who should receive this notification

## exclude_delegates
Do not send the notification to any delegates of this notification's recipients

## force_delivery
Bypass settings that would normally prevent sending to the recipient (e.g., device.schedule, user.notification)

## from
[Email](/reference/email/) address you want to appear in the From field

## generation_type
Action that causes an [email](/reference/email/) to be sent. Specifies whether to send [email](/reference/email/) based on a trigger, an [event](/reference/event/) firing, or an action against a record.

## importance
Importance\/Priority flag for the [email](/reference/email/)

## include_attachments
Send all attachments from the triggering record as [email](/reference/email/) attachments 

## item
The sys_id of the subscribed item

## item_table
The table that the subscribed item resides in

## mandatory
Prevent users from unsubscribing\/filtering-out this notification

## omit_watermark
Omitting watermark prevents any [email](/reference/email/) replies from updating the triggering record

## recipient_fields
Field in the currently-selected table that contains a reference to a user or group that will receive an [email](/reference/email/) notification

## recipient_groups
List of groups that will receive an [email](/reference/email/) notification

## recipient_users
List of users or [email](/reference/email/) addresses that will receive an [email](/reference/email/) notification

## reply_to
[Email](/reference/email/) address to be used when replying to the [email](/reference/email/) notification

## subscribable
Allow users to choose this notification when subscribing to their messages

## sys_domain
Domain to which the rule belongs

## sys_name
Display name for this application file

## sys_overrides
Rule being overridden by the [current](/reference/current/) record

## sys_policy
Determines how application files are protected when downloaded or installed

## sys_scope
Application containing this record

## sys_version
Notification Version

## weight
Used to decide which notification takes precedence when more than one qualifies
