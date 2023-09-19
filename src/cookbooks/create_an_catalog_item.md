---
title: Create an Catalog Item
description: How to create a catalog item in ServiceNow.
---

There's a lot of opinions about catalog items, record producers, and order guides in ServiceNow.

Here's my opinion.  If you want to make any form in any system, you need to understand 3 things:
1. What is the process this form will be used for?
2. What information do I need to collect?
3. Who do I need to present the information to?

If you can answer those 3 questions, you can make any form in any system.

That being said, I avoid Order Guides at all costs as they generally lag for features and have enought limitations that I can't do what I want to do.

## Research

### Identify the process

Generally most items have 0-2 approvals, 0-2 fulfillment tasks and possibly some automation.

Diagram coming soon

### Identify the information

This part can be tricky.  You need to look at each step in the process and identify what information is needed to complete that step. 

For each step, ask yourself:
1. What information is needed to complete this step?
2. Who needs to see this information?

Once you do that, you can start to identify where the data is for the fields.  For example, if the field is, "What is the name of the server?"  You need to find the table and field that stores the server name.

### Identify the users

This has already been touched on in the previous section, but you need to identify who needs to see what information.  This will help you identify what fields need to be on what forms.

1. What does the initial form need to ask the user?  The fewer fields the better.
2. What data does each approver need to see?
3. What data does each fulfiller need to see?
4. Who has access to the form?

## Let's make it

### Create the catalog item

A few things you'll need to know before you start:
1. What catalog should this item be in?
2. What category should this item be in?
3. What is the name of the item?
4. What is the description of the item?
5. What is the short description of the item?

Once you have that information, you can create the catalog item.

1. Navigate to **Service Catalog > Catalog Definitions > Maintain Items**
2. Click **New**
3. Fill out the form
4. Click **Submit**


### Handle the access

Now that's handled add the appropriate access via the **User Criteria** related list.

### Set the Catalog and Categories

Now that's handled add the appropriate catalog and categories via the **Catalogs** and **Categories** related lists.

### Create the variables

Creating variables can also be tricky.  This is because you may have common variable sets, and typography standards.

If the question/variable is not in a common variable set, you'll need to create it.

1. Navigate to **Service Catalog > Catalog Definitions > Maintain Items**
2. Open the catalog item you just created
3. Click **Variables**
4. Click **New**
5. Fill out the form
6. Click **Submit**

If the question/variable is in a common variable set, you'll need to add it to the catalog item.

1. Navigate to **Service Catalog > Catalog Definitions > Maintain Items**
2. Open the catalog item you just created
3. Under the **Variable Sets** related list, click **Edit**
4. Look for the variable set you want to add
5. Click the **Add** button next to the variable set
6. Click **Save**

### Create the automation

There's still some folks using workflow, but many have moved to Flow Designer.  I'm going to show you how to do it in Flow Designer.

1. Navigate to **Flow Designer > Flow Designer**
2. Create a new flow
3. Add a **Start** trigger
4. Add a **Service Catalog Requested Item** trigger
5. Add a **Get Variables** action picking the catalog item you just created
6. Add approvals, fulfillment tasks, and automation as needed
7. Add a **Complete Catalog Task** action

## Test it

Now that you've created the catalog item, you need to test it.


### Happy path

1. Identify a user that should have access to the catalog item
2. Impersonate that user
3. Navigate to the catalog item
4. Fill out the form
5. Submit the form
6. Unimpersonate the user
7. Process the request
8. Verify the request was processed correctly

### Unhappy path

1. Identify a user that should **not** have access to the catalog item
2. Impersonate that user
3. Navigate to the catalog item
4. Verify the user cannot see the catalog item
5. Unimpersonate the user

## Troubleshooting

### I can't see the catalog item

1. Verify the user has access to the catalog item
2. Verify the user has access to the catalog
3. Verify the user has access to the category

### The form doesn't load

1. Check the reference variables have the proper fields set

### The form doesn't submit

1. Check the OnSubmit client scripts for a `return false;` statement

### The reference variable doesn't work

1. Check the browser console for errors

