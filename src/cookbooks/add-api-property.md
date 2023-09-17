---
title: "Add API Properties"
---

## Add an API Property

API properties are used to define the properties of the api-side of this service.

So far I've come up against the following problem and this is how I solved it. I have a [rule](/docs/api/rules) that emails users when they create an account. I don't want to email users when I'm working on my fork, so I'm going to add a property to the rule that will prevent it from being sent.

API Properties are just record on the property table.

To access them in rules you can do a direct query. Below is code from a rule I use before I send an email.

### Setting properties

Just create or update a record.

### Reading properties

1. Update the `./api/src/rule/users/emailUserWelcome.js` file.

    ```js/1,8-10,12-14,16-18/
    import { logger } from 'src/lib/logger'
    import { db } from 'src/lib/db'
    let Mailgun = require('mailgun-js')
    module.exports = {
      // ... hiding props for brevity
      command: async function ({ record }) {
        try {
          if (record.email.includes('@example.com')) return { record }
          let activeProperty = await db.property.findFirst({
            where: { entity: 'email' },
          })
          if (activeProperty.value !== 'active') return { record }
          let apiKey = await db.property.findFirst({
            where: { entity: 'MAILGUN_API_KEY' },
          })
          apiKey = apiKey.value
          let domain = await db.property.findFirst({
            where: { entity: 'MAILGUN_DOMAIN' },
          })
          domain = domain.value
          let mailgun = new Mailgun({ apiKey, domain })
          let email = record.email
          let name = record.name
          // email the user
        } catch (e) {
            logger.error(e)
        }
        return await incomingData
      },
      // properties of rule
    }
    ```
