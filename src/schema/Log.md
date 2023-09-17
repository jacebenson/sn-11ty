---
title: "Log"
order: 800
---
The purpose of the Log table is to debug or note things have occured by calling log() from `./api/src/lib/util.js`.

This will log up to two parameters a string message and a string source.  This also modified the current `context` by removing auth data and logs that.  The context is not visible unless you go into one of the records and it's displayed as JSON.