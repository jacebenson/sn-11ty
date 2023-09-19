---
title: GlideServletResponse
description: ServiceNow processors are equivalent to Java servlets. Processors provide a customizable URL endpoint that can execute arbitrary server-side Javascript code and produce output such as TEXT, JSON, or HTML. The GlideServletResponse API is used in processor scripts to access the HttpServletResponse object. The GlideServletResponse object provides a subset of the HttpServletResponse APIs. The methods are called using the global variable g_response. A useful global variable, g_target, is available in processor scripts. It contains the table name extracted from the URL. The URL to a processor has the format&#58; https&#58;//<instance name.servicenow.com>/<path endpoint>.do?<parameter endpoint>=<value> where the path endpoint and parameter endpoint are defined on the processor form
---
Official Docs: [GlideServletResponse](https://docs.servicenow.com/search?q=GlideServletResponse)

ServiceNow processors are equivalent to Java servlets. Processors provide a customizable URL endpoint that can execute arbitrary server-side Javascript code and produce output such as TEXT, JSON, or HTML. The [GlideServletResponse](/reference/glideservletresponse/) API is used in processor scripts to access the HttpServletResponse object. The [GlideServletResponse](/reference/glideservletresponse/) object provides a subset of the HttpServletResponse APIs. The methods are called using the global variable g_response. A useful global variable, g_target, is available in processor scripts. It contains the table name extracted from the URL. The URL to a processor has the format: https://<instance name.servicenow.com>/<path endpoint>.do?<parameter endpoint>=<value> where the path endpoint and parameter endpoint are defined on the processor form

## setContentType
Sets the MIME type of the response
## sendRedirect
Sends a temporary redirect to the client
## setStatus
Sets the status code for the response
## setHeader
Sets a response header to the specified value
