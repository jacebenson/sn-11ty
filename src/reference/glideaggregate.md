---
title: GlideAggregate
description: The scoped GlideAggregate class is an extension of GlideRecord and allows database aggregation (COUNT, SUM, MIN, MAX, AVG) queries to be done. This can be helpful in creating customized reports or in calculations for calculated fields. The GlideAggregate class works only on number fields. Since currency fields are strings, you can't use the GlideAggregate class on currency fields
---
Official Docs: [GlideAggregate](https://docs.servicenow.com/search?q=GlideAggregate)

The scoped [GlideAggregate](/reference/glideaggregate/) class is an extension of [GlideRecord](/reference/gliderecord/) and allows database aggregation (COUNT, SUM, MIN, MAX, AVG) queries to be done. This can be helpful in creating customized reports or in calculations for calculated fields. The [GlideAggregate](/reference/glideaggregate/) class works only on number fields. Since currency fields are strings, you can't use the [GlideAggregate](/reference/glideaggregate/) class on currency fields

## next
Moves to the next record in the [GlideAggregate](/reference/glideaggregate/)
## getRowCount
Retrieves the number of rows in the [GlideRecord](/reference/gliderecord/)
## getAggregateEncodedQuery
Gets the query necessary to return the [current](/reference/current/) aggregate
## addAggregate
Adds an aggregate
## query
Issues the query and gets the results
## getTableName
Retrieves the table name associated with this [GlideRecord](/reference/gliderecord/)
## getCategory
Gets the optional category value of the query
## orderBy
Orders the aggregates using the value of the specified field. The field will also be added to the group-by list
## orderByDesc
Sorts the aggregates into descending order based on the specified field
## hasNext
Determines if there are any more results in the [GlideAggregate](/reference/glideaggregate/)
## groupBy
Provides the name of a field to use in grouping the aggregates. May be called numerous times to set multiple group fields
## getEncodedQuery
Retrieves the encoded query
## addNotNullQuery
Adds a NOT NULL query to the aggregate
## orderByAggregate
Sorts the aggregates based on the specified aggregate and field
## addNullQuery
Adds a NULL query to the aggregate
## getValue
Gets the value of a field
## setGroup
Sets whether the results are to be grouped
## addEncodedQuery
Adds a query to the aggregate. Adds an encoded query to the other queries that may have been set for this aggregate
## setCategory
Sets the value of category for the query
## addQuery
Adds a query to the aggregate
## getAggregate
Gets the value of the specified aggregate
