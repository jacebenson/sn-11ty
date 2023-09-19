---
title: GlideRecord
description: Scoped GlideRecord is used for database operations instead of writing SQL queries. Provides data access APIs to retrieve, update, and delete records from a table
---
Official Docs: [GlideRecord](https://docs.servicenow.com/search?q=GlideRecord)

Scoped [GlideRecord](/reference/gliderecord/) is used for database operations instead of writing SQL queries. Provides data access APIs to retrieve, update, and delete records from a table

## getLastErrorMessage
Retrieves the last error message
## getLabel
The label of the field as a String
## addJoinQuery
Adds a filter to return records based on a relationship in a related table
## setCategory
Sets the value of category for the query
## addActiveQuery
Adds a filter to return active records
## canDelete
Determines if the Access Control Rules which include the user's roles permit deleting records in this table
## setAbortAction
Sets a flag to indicate if the next database action (insert, update, delete) is to be aborted
## getRowCount
Retrieves the number of rows in the [GlideRecord](/reference/gliderecord/)
## addFunction
Retrieve the specified platform function in addition of the field values
## query
Runs the query against the table based on the specified filters by addQuery and addEncodedQuery
## getTableName
Retrieves the table name associated with this [GlideRecord](/reference/gliderecord/)
## getCategory
Gets the optional category value of the query
## orderByDesc
Specifies a descending orderBy
## hasNext
Determines if there are any more records in the [GlideRecord](/reference/gliderecord/)
## getClassDisplayValue

## isNewRecord
Checks if the [current](/reference/current/) record is a new record that has not yet been inserted into the database
## getEncodedQuery
Retrieves the query condition of the [current](/reference/current/) result set as an encoded query string
## updateMultiple
Updates each [GlideRecord](/reference/gliderecord/) in the list with any changes that have been made
## getRecordClassName
Retrieves the class name for the [current](/reference/current/) record
## autoSysFields

## getDisplayName
Retrieves the name of the display field
## addQuery
Adds a filter to return records by specifying a field and value. You can use an optional 'operator' as a second parameter
## setLimit
Sets the maximum number of records in the [GlideRecord](/reference/gliderecord/) to be fetched in the next query
## getUniqueValue
Gets the primary key of the record, which is usually the sys_id unless otherwise specified
## next
Moves to the next record in the [GlideRecord](/reference/gliderecord/)
## deleteMultiple
Deletes records that satisfy [current](/reference/current/) query condition
## canRead
Determines if the Access Control Rules which include the user's roles permit reading records in this table
## insert
Insert a new record using the field values that have been set for the [current](/reference/current/) record
## update
Updates the [current](/reference/current/) [GlideRecord](/reference/gliderecord/) with any changes that have been made
## orderBy
Specifies an orderBy column
## addNotNullQuery
Adds a filter to return records where the specified field is not null
## addNullQuery
Adds a filter to return records where the specified field is null
## addEncodedQuery
Adds an encoded query to the other queries that may have been set
## getAttribute
Gets the attributes on the field in question from the dictionary
## get
Defines a [GlideRecord](/reference/gliderecord/) based on the specified expression of name = value
## isValidRecord
Determines if [current](/reference/current/) record is a valid record
## setNewGuidValue
Sets sys_id value for the [current](/reference/current/) record
## isValid
Determines whether the table exists or not
## isActionAborted
Determines whether the [current](/reference/current/) database action is to be aborted. Available in Fuji patch 3
## chooseWindow
Sets a range of rows to be returned by subsequent queries. If forceCount is true, getRowCount() method will return all possible records
## canWrite
Determines if the Access Control Rules which include the user's roles permit editing records in this table
## setTextSearchOpts
Provide additional options for text search query
## canCreate
Determines if the Access Control Rules which include the user's roles permit inserting new records in this table
## setWorkflow
Enables and disables the running of business rules and script engines. When disabled, inserts and updates are not audited
## getValue
Retrieves the underlying value of a field
## getLink
Retrieves a link to the [current](/reference/current/) record
## getElement
Retrieves the [GlideElement](/reference/glideelement/) for a specified field
## setValue
Sets the value for the specified field.
## getDisplayValue
Retrieves the display value for the [current](/reference/current/) record
## isValidField
Determines if the given field is defined in the [current](/reference/current/) table
## initialize
Creates an empty record suitable for population before an insert
## operation
Retrieves the [current](/reference/current/) operation being performed, such as insert, update, or delete
## newRecord
Creates a new GlideRecord, sets the default values for the fields, and assigns a unique ID to the record
## deleteRecord
Deletes the [current](/reference/current/) record
