---
title: Save your changes
description: Saving changes in ServiceNow, has become complicated.
---
There are a number of ways to save your work in ServiceNow.  I'm going to go over each.


## Update sets
The most common way for customers to save their work, is to **create an update set** in the scope they are working in, and **set it as your default update set**.  Once you do that, all changes are saved in this update set.  You can save it to your computer by **setting it's state to complete** and **exporting it to XML** using the related link at the bottom of the update set.

1. Create an update set
2. Set it as your default update set
3. Make your changes
4. Set the update set to complete
5. Export the update set to XML

<!--## Update sets

Update sets are a way to track changes made to the system.  They are a collection of records that have been modified, and can be moved between instances.  However the only things that get tracked are configuration changes.  Data changes are not tracked.  You used to be able to set the dictionary attribute `update_synch` to true, and it would track data changes, but that was deprecated in the Istanbul release.-->

## Exporting XML

This isn't that much different than tracking your work in update sets, but I do not recommend it in any work environment.
1. Find the record(s) you want to export
2. Right click on the header of the record/list
3. Click **Export > XML**
4. Save the file

## Source control (coming soon)
<!--WIP

This is a newer way and I have yet to see this done well at any customer.

1. Create a git repo
2. Clone the repo to your local machine
3. Make your changes
4. Commit your changes
5. Push your changes to the remote repo-->

## Application repository

It's a lot like source control, but it's built into the platform.  It's also not available to customers yet.

1. Create an application
2. Make your changes
3. Commit your changes
4. Push your changes to the remote repo



