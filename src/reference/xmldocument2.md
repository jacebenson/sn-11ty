---
title: XMLDocument2
description: XMLDocument2 is a JavaScript Object wrapper for parsing and extracting XML data from an XML string. Use this JavaScript class to instantiate an object from an XML string, usually a return value from a Web Service invocation, or the XML payload of ECC Queue
---
Official Docs: [XMLDocument2](https://docs.servicenow.com/search?q=XMLDocument2)

[XMLDocument2](/reference/xmldocument2/) is a JavaScript Object wrapper for parsing and extracting XML data from an XML string. Use this JavaScript class to instantiate an object from an XML string, usually a return value from a Web Service invocation, or the XML payload of ECC Queue

## getFirstNode
Gets the first node in the specified xpath
## createElementWithTextValue
Creates an element node with a text child node and adds it to the [current](/reference/current/) node
## getNextNode
Gets the node after the specified node
## isValid
Checks if the XMLDocument is valid
## setCurrentElement
Makes the node passed in as a parameter the [current](/reference/current/) node
## getDocumentElement
Gets the document element node of the XMLDocument2. The document element node is the root node
## parseXML
Parses the XML string and loads it into the [XMLDocument2](/reference/xmldocument2/) object
## createElement
Creates and adds an element node to the [current](/reference/current/) node. The element name is the string passed in as a parameter. The new element node has no text child nodes
## toString
Returns a string containing the XML
## getNode
Gets the node specified in the xpath
## getNodeText
Gets all the text child nodes from the node referenced in the xpath
