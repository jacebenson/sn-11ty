---
title: GlideScriptedProcessor
description: ServiceNow processors are equivalent to Java servlets. Processors provide a customizable URL endpoint that can execute arbitrary server-side Javascript code and produce output such as TEXT, JSON, or HTML. The GlideScriptedProcessor APIs are used in processor scripts to access the the processor (servlet) capabilities. There are no constructors for the GlideScriptedProcessor APIs. The methods are called using the global variable g_processor. A useful global variable, g_target, is available in processor scripts. It contains the table name extracted from the URL. The URL to a processor has the format&#58; https&#58;//<instance name.servicenow.com>/<path endpoint>.do?<parameter endpoint>=<value> where the path endpoint and parameter endpoint are defined on the processor form
---
Official Docs: [GlideScriptedProcessor](https://docs.servicenow.com/search?q=GlideScriptedProcessor)

ServiceNow processors are equivalent to Java servlets. Processors provide a customizable URL endpoint that can execute arbitrary server-side Javascript code and produce output such as TEXT, JSON, or HTML. The [GlideScriptedProcessor](/reference/glidescriptedprocessor/) APIs are used in processor scripts to access the the processor (servlet) capabilities. There are no constructors for the [GlideScriptedProcessor](/reference/glidescriptedprocessor/) APIs. The methods are called using the global variable g_processor. A useful global variable, g_target, is available in processor scripts. It contains the table name extracted from the URL. The URL to a processor has the format: https://<instance name.servicenow.com>/<path endpoint>.do?<parameter endpoint>=<value> where the path endpoint and parameter endpoint are defined on the processor form

## redirect
Redirects to the specified URL
## writeOutput
Writes the contents of the given string to the response
## writeJSON
Writes a JSON object to the [current](/reference/current/) URL. Note: Works only in scoped apps
