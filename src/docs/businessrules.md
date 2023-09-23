---
title: Business Rules
description: Business Rules are a great way to automate things in ServiceNow.
---

Business rules are really versatile. They can be used to do things like;

- Set a field to a value
- Set a field to a value based on another field
- Execute a script
- Restrict access to a record
- Create a new record
- Update a record
- Delete a record
- Send an email
- Log a message

That's a lot of things! I'm going to go over a few of these things in this article.

Let's first break down the "types" of business rules. There are three types of business rules;

## CRUD Business Rules

[There's a whole page on these](/automations/crud-business-rules).  I'll just give a quick overview here.

At a high level, these are the business rules that run when you create, read, update, or delete a record.  They are the most common type of business rule.  They run when you create, read, update, or delete a record.

## Async Business Rules

These rules run LATER.  When the system has time it will run.  This is a great way to do things that don't need to happen right away.  Perhaps you want to send an email when a record is created.  You could do that in an Async Business Rule.  I have more information on these in the [Async Business Rules](/automations/asyncbusinessrules) article.

## Before Query Business Rules

These rules RESTRICT access to records.  They run before a query is run.  This is a great way to restrict access to records.  I have more information on these in the [Before Query Business Rules](/automations/beforequerybusinessrules) article.
