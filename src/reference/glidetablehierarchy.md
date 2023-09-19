---
title: GlideTableHierarchy
description: The Scoped GlideTableHierarchy API provides methods for handling information about table relationships
---
Official Docs: [GlideTableHierarchy](https://docs.servicenow.com/search?q=GlideTableHierarchy)

The Scoped [GlideTableHierarchy](/reference/glidetablehierarchy/) API provides methods for handling information about table relationships

## hasExtensions
Returns true of this class has been extended
## getName
Returns the table's name
## isSoloClass
Returns true if this table is not in a hierarchy
## getTables
Returns a list of the table names in the hierarchy
## getAllExtensions
Returns a list of all tables that extend the [current](/reference/current/) table and includes the [current](/reference/current/) table
## isBaseClass
Returns true if this is a base class
## getTableExtensions
Returns a list of all tables that extend the [current](/reference/current/) table
## getBase
Returns the parent class
## getRoot
Returns the top level class in the hierarchy
## getHierarchy
Returns a list of all classes in the hierarchy of the given table
