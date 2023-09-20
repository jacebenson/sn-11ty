---
layout: "docspage.njk"
pagination:
  data: snScriptIncludeLocal
  size: 0
permalink: "script-include/{{ pagination.items[0].api_name | slugify }}/index.html"
tags: "scriptinclude"
---
{%- for item in pagination.items %}

  ## Name
  
  `{{ item.api_name }}`

  ## Description

  {{ item.description }}

  ## Script

  ```javascript
  {{ item.script }}
  ```

  ## Sys ID

  `{{ item.sysid }}`

  ## Offical Documentation

  Official Docs: [{{item.name}}](https://docs.servicenow.com/search?q={{item.name}})

{% endfor -%}