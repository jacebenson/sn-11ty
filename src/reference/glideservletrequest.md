---
title: GlideServletRequest
description: ServiceNow processors are equivalent to Java servlets. Processors provide a customizable URL endpoint that can execute arbitrary server-side Javascript code and produce output such as TEXT, JSON, or HTML. The GlideServletRequest API is used in processor scripts to access the HttpServletRequest object. The GlideServletRequest object provides a subset of the HttpServletRequest APIs. The methods are called using the global variable g_request. A useful global variable, g_target, is available in processor scripts. It contains the table name extracted from the URL. The URL to a processor has the format&#58; https&#58;//<instance name.servicenow.com>/<path endpoint>.do?<parameter endpoint>=<value> where the path endpoint and parameter endpoint are defined on the processor form
---
Official Docs: [GlideServletRequest](https://docs.servicenow.com/search?q=GlideServletRequest)

ServiceNow processors are equivalent to Java servlets. Processors provide a customizable URL endpoint that can execute arbitrary server-side Javascript code and produce output such as TEXT, JSON, or HTML. The [GlideServletRequest](/reference/glideservletrequest/) API is used in processor scripts to access the HttpServletRequest object. The [GlideServletRequest](/reference/glideservletrequest/) object provides a subset of the HttpServletRequest APIs. The methods are called using the global variable g_request. A useful global variable, g_target, is available in processor scripts. It contains the table name extracted from the URL. The URL to a processor has the format: https://<instance name.servicenow.com>/<path endpoint>.do?<parameter endpoint>=<value> where the path endpoint and parameter endpoint are defined on the processor form

## getHeaders
Returns an array of headers as a string
## getHeaderNames
Returns an array of header names as a string
## getQueryString
Returns the query string from the request
## getContentType
Returns the content type
## getParameterNames
Returns an array of parameter names as a string
## getHeader
Returns the header
## getParameter
Returns an object
