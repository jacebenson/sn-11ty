---
layout: "docspage.njk"
pagination:
  data: snPropertiesLocal
  size: 1
permalink: "property/{{ pagination.items[0].name | slugify }}/index.html"
tags: "property"
---
{%- for item in pagination.items %}

  ## Name
  
  `{{ item.name }}`
  ## Description

  {{ item.description }}

  ## Value

  `{{ item.value }}`

  ## Sys ID

  `{{ item.sysid }}`

  ## Offical Documentation

  Official Docs: [{{item.name}}](https://docs.servicenow.com/search?q={{item.name}})

{% endfor -%}