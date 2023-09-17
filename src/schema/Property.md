---
title: "Property"
order: 600
---
This table is to store system things that control how this works.  If you want to toggle email, you can change the `email` property from active to anything but active as the `./api/src/lib/email.js` looks up this property and verifies it's value is `active`

Other things that are worth storing here are api keys and other sensitive data.  We have some rules to hide the data on readAll and read, but also you need either `admin` or `propertyRead` roles to view that data.