---
title: api/Rules
---

# Rules

Rules is a way to extend the functionality of the application. If you wanted to

- Make a REST call when a user updates their record
- Create a record on another table
- Abort the operation the user is attempting

Rules are where you'd do that.

> Disclaimer: This is a work in progress.  We recently pulled out of using Prisma Middleware as we couldn't raise errors to the user when we should in the middleware, so we went with a custom solution.  It's possible we move back to Prisma's middleware, but the code will only have slight changes then.

The rules are invoked on each [services](/docs/api/services) file. It read the content of the `./api/src/rules/<table>/*.js` directory and loads them into the service so they can be executed.

## Rules Attributes
These middleware files have some important attributes.

- `active` - If this is set to `false`, the rule will not be loaded.
- `order` - This is the order in which the rule will be executed.
- `when` - This is an array of when e.g. `before`, or `after` the database call.
- `type` - This is the type or operation that the rule is being executed for. e.g. `create`, `read`, `update`, `delete`.
- `command` - This is the code that is executed. You need to return the incoming variables at the end of command.
- `file` - This is the file name of the rule. (default is `__filename`) this may be used for reducing the code in the services eventually.


## Available data for rule
In vague terms, the desire is to make the available options as simple as possible. In some cases some of the data is just not available.

For instance on create, there is no record, just the data. So we just pass your the data.

| Operation | When   | Data Available     |
| --------- | ------ | ------------------ |
| create    | before | `status`, `input`  |
| create    | after  | `record`           |
| readall   | before | `status`           |
| readall   | after  | `records`          |
| read      | before | `status`, `id`     |
| read      | after  | `record`           |
| update    | before | `status`, `input`  |
| update    | after  | `record`           |
| delete    | before | `status`, `id`     |
| delete    | after  | `record`           |

On the before, if you need the full record before the database call, you can use the prisma client to read the data.  

### status
`status` is a special object in rules.  If you don't update status at all, the rule you write will work.  However, if you want to stop the action from happening and all later rules, set the status.code to something other than `success` and set the `message` to convey that to the user taking this action.

Status is only available on before rules.  After rules will compete with the `toast.success` of the [form component](/docs/web/forms).  

> Eventually it would be nice to queue these messages up and show them, we just aren't there yet.
### id

`id` is the id of the record read.  If you want to ensure something is protected from deletion, you can invoke a database read using the ID and then conditionally

### input

`input` is the JSON content of the create or update operations.  

### record

`record` is the record returned from the database after the operation.