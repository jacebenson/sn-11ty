---
title: GlideElement
description: The Scoped GlideElement API provides methods for dealing with fields and their values. Scoped GlideElement methods are available for the fields of the current GlideRecord
---
Official Docs: [GlideElement](https://docs.servicenow.com/search?q=GlideElement)

The Scoped [GlideElement](/reference/glideelement/) API provides methods for dealing with fields and their values. Scoped [GlideElement](/reference/glideelement/) methods are available for the fields of the [current](/reference/current/) [GlideRecord](/reference/gliderecord/)

## getCurrencyCode
Gets the currency ISO code for a record
## getLabel
Gets the object's label
## getName
Gets the name of the field
## getBooleanAttribute
Gets the value of the attribute on the field in question from the dictionary as a string. To get the value as a string, use getAttribute(string)
## canRead
Determines if the [GlideRecord](/reference/gliderecord/) table can be read from
## changes
Determines if the [current](/reference/current/) field has been modified
## getReferenceDisplayValue
Gets the display value
## getCurrencyString
Gets currency in a string
## getReferenceTable
Gets table name for a reference field
## getReferenceValue
Gets the reference value
## nil
Determines whether the field is null
## getSessionDisplayValue
Gets the currency value in the sessions currency format
## getDecryptedValue
Gets the decrypted value
## getAttribute
Gets the value of the attribute on the field in question from the dictionary as a string. If the attribute is a boolean attribute, use getBooleanAttribute(String) to get the value as a boolean rather than as a string
## getCurrencyDisplayValue
Gets the currency display value
## getSessionCurrencyCode
Gets the sessions currency ISO code
## getCurrencyValue
Gets a currency value
## getReferenceCurrencyCode
The currency ISO code, in the base system currency
## changesTo
Determines if the new value of a field after a change matches a certain object
## getChoices
Retrieves the choice list for a field
## getTableName
Gets the table name
## hasAttribute
Determines whether a field has a particular attribute
## setDateNumericValue
Sets a date to a numeric value
## setDisplayValue
Sets the display value of the field
## getRefRecord
Gets a [GlideRecord](/reference/gliderecord/) object for a reference element
## canWrite
Determines if the [GlideRecord](/reference/gliderecord/) table can be written to
## changesFrom
Determines the previous value of the [current](/reference/current/) field matched a certain object
## canCreate
Determines if the user's role permits creation of new records in this field
## getED
Gets the field's element descriptor
## getSessionValue
Gets the ammount in the sessions currency
## dateNumericValue
Gets date in numberic value
## setError
Adds an error message. Can be retrieved using getError()
## setValue
Sets the display value of the field
## getDisplayValue
Gets the formatted display value of the field
## toString
Converts the value to a string
