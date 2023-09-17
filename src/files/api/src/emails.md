---
title: "⠀⠀├─ emails/"
order: 320
---

## Email

Emailing is something we all love to hate. I think emails should always be used with caution. Emailing too much and everyone will treat it like spam, to little, and you lose touch with your users.

That being said, a few things you can do to improve your emailing experience are, making your emails responsive, and have a call to action.

Making emails responsive is a tall order with how wild west the email client landscape is. Just look at [caniuse.email](https://caniuse.email/). To ease this, we've included [mjml](https://mjml.io) as a dependency. It's a great tool for making emails.

Additionally, right now we've only configured [Mailgun](https://mailgun.com) as our email provider, but we've abstracted the call and plan to expand that to include mailchimp, mailjet, sendinblue. Other providers could be added in the future.

Below is an example of how to use mjml and the abstracted call to email.

## Emailing from a Rule

This is an example of how to email a user from a rule. The rule is in the `./api/src/rule/users/emailUserWelcome.js` file.

```js
import { logger } from "src/lib/logger";
import { email } from "src/lib/email";
import { render } from "src/emails/welcomeemail.mjml.js";
module.exports = {
  active: true,
  order: 100,
  when: ["after"],
  operation: ["create"],
  file: __filename,
  table: "user",
  command: async function ({ record }) {
    try {
      let to = record.email;
      let name = record.name;
      let rendered = render({ name });
      let client = await email({ provider: "mailgun" });
      await client.send(
        {
          to: to,
          from: `Tskr <jace@${client.domain}>`,
          "h:Reply-To": `jace@$tskr.io`, //not working
          subject: `Welcome to Tskr`,
          html: rendered.html,
        },
        (error, body) => {
          if (error) console.log(error);
          console.log(body);
        }
      );
    } catch (e) {
      logger.error(e);
    }
    return await { record };
  },
};
```

The mjml template is included as a js file at the top, then we use the `render` function to render the email. The `render` function takes whatever properties you defined over there for substitutions. This then transforms the mjml syntax to html.

The provider is defined in the `email` function. This is where we abstract the call to email.