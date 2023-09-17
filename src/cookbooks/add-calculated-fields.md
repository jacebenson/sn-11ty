---
title: Add Calculated Fields
---

## Add Calculated Fields

Calculated fields are fields that are calculated from other fields.

There's no reason to add calculated fields to the actual database.  Just add it to the service, and sdl.js files.

You can add these fields to the `./api/src/services/*.js` files where appropriate.

The examples I've seen so far are;
- I came across was calculating the md5 hash of the user's email address for [gravatar](https://en.gravatar.com/site/implement/profiles/json/) profile data.
- Calculating the number of days since the account has been created

> If you need access to this data from the prisma db calls, you may need to calculate it at runtime.  I wrote up how to do that for the md5 hash of the user's email address on the [session variables cookbook](/cookbooks/add-session-variables).

### Getting Gravatar Image

1.  Update the `./api/src/services/users.js` file to include the following
    > Here we're adding a calculated field to the user model.

  ```js/6/
  import CryptoJS from 'crypto-js'
  // ... other imports
  // ... export consts for the service
  export const User = {
    GroupMember: (_obj, { root }) =>
      db.user.findUnique({ where: { id: root.id } }).GroupMember(),
    md5Email: (_args, { root }) => CryptoJS.MD5(root.email).toString(),
  }
  ```
2. Update the `./api/src/graphql/users.sdl.js` file to include the following
   > Here we add the calculated field to the schema as a mandatory String type.
  ```js/10/
  export const schema = gql`
  type User {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    email: String!
    name: String!
    preferences: JSON!
    hashedPassword: String!
    salt: String!
    md5Email: String!
    GroupMember: [GroupMember]!
  }
  //... other types
  ```



### Calculating Days Since Created

1.  Update the `./api/src/services/users.js` file to include the following
    > Here we do some math to calculate the number of days since the account was created.
```js/4/
  // ... imports
  // ... export consts for the service
  export const Users = {
    GroupMember: (_obj, { root }) => db.user.findUnique({ where: { id: root.id } }).GroupMember(),
    ageInDays: (_args, { root }) => Math.floor((new Date() - root.createdAt) / (1000 * 60 * 60 * 24)),
  }
```

2. Update the `./api/src/graphql/users.sdl.js` file to include the following
   > Here we add the calculated field to the schema as a mandatory Int type.
```js/10/
export const schema = gql`
  type User {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    email: String!
    name: String!
    preferences: JSON!
    hashedPassword: String!
    salt: String!
    ageInDays: Int!
    GroupMember: [GroupMember]!
  }
```