---
title: "Rules / Automation"
---

Rules are a way to run code before or after a request is processed.

This example below is a rule that proper cases the first letter of the
the user's first name.

It run's before the user is saved to the database at order 30 on all `create` and `update` transactions.

A few things to note;

- The properties are all functional
- They either control the order, or determine if this rule is run
- `command` takes different inputs depending on the `operation` as listed [here](/docs/api/rules/#available-data-for-rule)

```js
import { logger } from 'src/lib/logger'
module.exports = {
  active: true,
  order: 30,
  when: ['before'],
  operation: ['create', 'update'],
  table: 'user',
  file: __filename,
  command: async function ({ input, status }) {
    try {
      if (input?.name) {
        let name = input.name
        let firstCharacter = name.charAt(0)
        if (firstCharacter !== firstCharacter.toUpperCase()) {
          input.name = name[0].toUpperCase() + name.substring(1)
        }
      }
    } catch (e) {
      logger.error(e)
    }
    return await { input, status }
  },
}
```