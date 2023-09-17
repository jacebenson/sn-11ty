---
title: "cli/Scaffold"
---

# Scaffolding your model

First thing to do is create/update the schema then, scaffold the api and web sides, then update the references.

To get started just open `./api/db/schema.prisma`, edit it by adding your new model, or editing an existing.

Then migrate those changes to the database with this command.

```bash
yarn rw prisma migrate dev
```

Then scaffold the model

```bash
yarn rw scaffold thing
```

This will create bunch of files.  We've tried to simplify adding search, filtering, paging, take options, and form setup here, however, **you will need to do some manual steps**.

## API side

On the API side this will generate the [Schema Definition Language](/docs/api/sdl) file and a [Services](/docs/api/services) file.

```
./api/src
├─ graphql/model.sdl.js                         # created
└─ services/model.js                            # created
```

### SDL 

  If you want to change table, and field permissions you'll need to modify that with `@requireAuth` appropriately.  If you want to mask or modify the values with Directives like `@masked`, you again will have to add those manually.

#### Directive Example

```js/4/
// ./api/src/graphql/users.sdl.js
export const schema = gql`
  type User {
    id: Int!
    email: String! @masked
    name: String!
  }
```

#### Permissions Example

```js/9/
// ./api/src/graphql/users.sdl.js
export const schema = gql`
  type Query {
    users(
      filter: String
      skip: Int
      take: Int
      orderBy: OrderByInput
      q: String
    ): Users! @requireAuth(roles: ["userRead", "admin"])

    user(id: Int!): User @requireAuth(roles: ["userRead", "admin"])
  }
```

### Service

You will need to manually define what fields are used for the fuzzy query search in the plural named function.  If we stick with the above examples that would be `users`.  So in the `users` export of `./api/src/services/users.js` file there's a `where` variable that has a `// TODO: You need to manually add the fields to search` comment.  Below is an example of the Prisma syntax of how to search you'll need to add.

#### Service Example
```js/6,7/
// ./api/src/services/users.js
export const users = async ({ filter, skip, orderBy, q, take }) => {
    //...
    let where = (() => {
        if (filter) {
            let OR = [
                { email: { contains: filter, mode: 'insensitive' } },
                { name: { contains: filter, mode: 'insensitive' } },
            ]
        }
    })()
    //...
}
```

## Web side

On the web side a bunch of things are made and updated, we'll keep using `users` for these examples, but in your case it will be whatever table you're scaffolding.

```
./web/src
├─ Routes.js                           # modified
├─ layouts/                            # created
│   └─ UsersLayout/
│       └─ UsersLayout.js              # created
├─ pages/
│   └─ User
|       ├─EditUserPage/EditUserPage.js # created
|       ├─NewUserPage/NewUserPage.js   # created
|       ├─UserPage/UserPage.js         # created
|       └─UsersPage/UsersPage.js       # created
└─ components/
    └─ User
        ├─EditUserCell/EditUserPage.js # created
        ├─NewUser/NewUser.js           # created
        ├─User/User.js                 # created
        ├─UserCell/UserCell.js         # created
        ├─UserForm/UserForm.js         # created
        ├─Users/Users.js               # created
        ├─UsersCell/UsersCell.js       # created
        └─UserCell/UsersPage.js        # created
```
That's a lot of files.  The things that need modification to get working are;

- `Routes.js` to put the new `<Set>` in the proper place.
- If the new scheme has any references to another table you likely want to allow a dropdown or reference field.  I haven't figured out a way to programatically do this yet, but I'm working on it.  In the meantime if the scaffold detects the field is a integer and isn't the id of the form, it will add a large comment block with instructions to enable this.

### Enabling Reference fields on forms

The edit form and the new form are nearly identical in this modification.

1. Goto the "Cell" for the activity e.g. `EditGroupRoleCell.js` 
2. Add the relate details to the `QUERY` graphql call, in that case we'll add group like so
   
    ```js/8-11/
    export const QUERY = gql`
      query EditGroupRoleById($id: Int!) {
        groupRole: groupRole(id: $id) {
          id
          createdAt
          updatedAt
          role
          groupId
          group {
            name
            id
          }
        }
      }
    `
    ```
3. That gives the Form Component access to the data needed to load the default value for the field, you'll want the id, and the display field here.
4. Then update the `fields` const in the `EditGroupRoleCell.js` file by uncommenting and modifing the query for subsequent searches like below
    ```js/8-28/
    {
      name: 'groupId',
      prettyName: 'Group id',
      required: 'This is required',
      // If this is a reference you probably want this below
      // update the query above "EditGroupRoleById"
      // to include the referenced data
      // and uncomment and edit below to your needs
      type: 'reference',
      display: 'name',
      value: 'id',
      defaultValue: groupRole?._referencedModelHere_?.id,
      defaultDisplay: groupRole?._referencedModelHere_?.name,
      QUERY: gql`
        query Find_referencedModelHere_FromGroupRoles(
          $filter: String
          $skip: Int
        ) {
          search: _referencedPluralModelHere_(filter: $filter, skip: $skip) {
            count
            take
            skip
            results {
              id
              name
            }
          }
        }
      `,
    },
    ```
    > Note lines that have `_referenced*_` as they will need to be modified to match your use case.  For groups `_referencedModelHere_` would be `group`, the `id`, and `name` match up.  for `_referencedPluarlModelHere_` would be `groups`, and the `results` includes `id`, and `name`.

    > The difference between `EditGroupRoleCell` and the `NewGroupRole` component would be the `defaultValue` and `defaultDisplay` as a new record would not necessarily have a default.
5. That should be it for the forms.

### Enabling the List to show Referenced values

To enable this on the list both the `/GroupRoles/GroupRoles.js` and `GroupRolesCell/GroupRolesCell.js`.

- On `GroupRolesCell.js` you need to include the data needed to present in the list.  To do this update the `QUERY` export to include the related values.  Here's part of the `QUERY` const;
  ```js/8-11/
    // ./web/src/components/GroupRolesCell/GroupRolesCell.js
    // ...
     results {
        id
        createdAt
        updatedAt
        role
        groupId
        group {
          id
          name
        }
      }
    // ...
    ```
- On `GroupsRoles.js` you need to update the fields array to include this new data on the list.  Below is an example of the code generated and changes needed to enable this.
  ```js/4,6,17-23/3,5,9
  // ./web/src/components/GroupRole/GroupRole.js
  // ...
  {
    Header: 'Group Id',
    Header: 'Group',
    accessor: 'groupId',
    accessor: 'group',
    showMatching,
    filterOut,
    dataType: 'integer',
    // If this is a reference
    // you may want to show a field
    // instead of the number here.
    // todo that remove type,
    // updated your query on the cell to include the model
    // update the accessor to a name not used by a column
    // and add;
    canSort: false,
    reference: true,
    model: 'group',
    field: 'name',
    link: (givenId) => {
      return routes.group({ id: givenId })
    },
  },
  ```
  > 