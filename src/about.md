---
title: About
layout: page.njk
---

## Who is behind this and why?

Hi.

I'm Jace.  I wanted a tool that I could own all the parts too.  Or, better said, that I could choose where I want all the parts to run.  

I've seen sites change in ways that drive me away from them.  As much as I liked their service once, I have to look for a comparable service somewhere else.  This is no fun.  

## How do you plan to make this sustainable?

I've been thinking about how to make this sustainable and I think it's just too early to really sort that out.  I have a few ideas but they don't impact this base project.  Tskr at it's heart will be a way to start your own application with some solid opinions.  A lot of this is enabled by the great folks working on [RedwoodJS](https://redwoodjs.com)

So here's the plan to for Tskr.

- Always open source.
- Opinionated about authentication.  (You can still use your own, but it's pre-configured to use it's own)
- Opinionated about the permissions.  (We came up with some solid ideas to keep those maintainable)

This project should only ever have Users, Groups, Group Roles, Group Members as tables.  The idea is you add tables/models as you need after that following how those tables were configured.  This is a way to keep the project as simple as possible.

## What's next?

Well initially I'd like to see the following happen.

- A place to store email templates.  Regardless what email provider you use, you'll eventually need html to send.  So some place to store those.  Probably under `./api/src/`.
- A place to store table actions.  When you click the vertical elipsis, you'll see a list of actions.  These bits of code need to exist somewhere.  Another folder under `./web/src/` 
- Rewriting the Table Component to be individual components for the `TableHeader`, `TableBody`, and `TableRow`.
- Building a `QueryComponent` to let the queries be defined on the page for the table component.
- Updating the existing Forms to use the current html.

## And then?

- See if there's a way to have the site actually make git commits (which would enable the creation of tables, rules, and other files from the site)
- Add a reporting Component with D3 to report on the data in the tables.