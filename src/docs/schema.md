---
title: api/Table Schema
---

# Table Schema

The table schema is a defined... in a two places. The Prisma schema file, and then in each schema definition language file.

- `./api/db/schema.prisma`
- `./api/src/graphql/user.sdl.js`


## User And Group Scheme

![User Scheme](/images/scheme-user.png)
![Group Scheme](/images/scheme-group.png)

You can generate this same data from [GraphQL Voyager](https://apis.guru/graphql-voyager/).
## Prisma Schema

The Prisma schema file (short: schema file, Prisma schema or schema) is the main configuration file for your Prisma setup. It is typically called schema.prisma and consists of the following parts. We're going to skip [Generators](https://www.prisma.io/docs/concepts/components/prisma-schema/generators) as that's not generally unchanging.

- Data sources
- Data model

### Data sources

[Prisma supports only one data source](https://www.prisma.io/docs/concepts/components/prisma-schema/data-sources/). That value is set from your `./.env` file as `DATABASE_URL` and is used to connect to your database.

### Data model definition

The data model definition is where you define what models, fields, and relationships they have. Additionally, this is where at the database level you would define the type, default value, and other properties of the fields. Prisma has the most complete documentation on this [here](https://www.prisma.io/docs/concepts/components/prisma-schema/data-model).

We'll highlight a few things that I think are important to understand.

#### Field Types

There's 10 [types of fields](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#model-fields) in Prisma. They map to the actual types in your database depending on the database you use.

| Prisma Type             | PostgreSQL                  | Microsoft SQL               | MySQL                      | MongoDB                  | SQLite                   |
| ----------------------- | --------------------------- | --------------------------- | -------------------------- | ------------------------ | ------------------------ |
| [`String`][pr-str]      | [`text`][ps-str]            | [`nvarchar(1000)`][ms-str]  | [`varchar(191)`][my-str]   | [`String`][mo-str]       | [`TEXT`][sl-str]         |
| [`Boolean`][pr-bool]    | [`boolean`][ps-bool]        | [`tinyint`][ms-bool]        | [`TINYINT(1)`][my-bool]    | [`Bool`][mo-bool]        | [`INTEGER`][sl-bool]     |
| [`Int`][pr-int]         | [`integer`][ps-int]         | [`int`][ms-int]             | [`INT`][my-int]            | [`Int`][mo-int]          | [`INTEGER`][sl-int]      |
| [`BigInt`][pr-bigint]   | [`integer`][ps-bigint]      | [`int`][ms-bigint]          | [`INT`][my-bigint]         | [`Long`][mo-bigint]      | [`INTEGER`][sl-bigint]   |
| [`Float`][pr-fl]        | [`double precision`][ps-fl] | [`float`][ms-fl]            | [`DOUBLE`][my-fl]          | [`Double`][mo-fl]        | [`REAL`][sl-fl]          |
| [`Decimal`][pr-dec]     | [`decimal(65,30)`][ps-dec]  | [`decimal(32,16)`][ms-dec]  | [`DECIMAL(65,30)`][my-dec] | [`Decimal`][mo-dec]      | [`DECIMAL`][sl-dec]      |
| [`DateTime`][pr-dt]     | [`timestamp(3)`][ps-dt]     | [`datetime2`][ms-dt]        | [`DATETIME(3)`][my-dt]     | [`Timestamp`][mo-dt]     | [`NUMERIC`][sl-dt]       |
| [`Json`][pr-json]       | [`jsonb`][ps-json]          | [`nvarchar(1000)`][ms-json] | [`JSON`][my-json]          | [`BSON Object`][mo-json] | [Not supported][sl-json] |
| [`Bytes`][pr-byte]      | [`bytea`][ps-byte]          | [`varbinary`][ms-byte]      | [`LONGBLOB`][my-byte]      | [`BinData`][mo-byte]     | [Not supported][sl-byte] |
| [`Unsupported`][pr-uns] | [`Unsupported`][ps-uns]     | [`Unsupported`][ms-uns]     | [`Unsupported`][my-uns]    | [Not supported][mo-uns]  | [`Unsupported`][sl-uns]  |

#### Attributes

> Attributes modify the behavior of a field or block (e.g. models). There are two ways to add attributes to your data model:
>
> Field attributes are prefixed with @
> Block attributes are prefixed with @@
> Some attributes take arguments. Arguments in attributes are always named, but in most cases the argument name can be omitted.
>
> - [Prisma Schema Reference#Attributes](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#attributes)

MongoDB is special in all of these cases, so I'm going to just omit them here.

| Attribute                     | Database Type | Description                                                         | Notes                                                                                                                                                |
| ----------------------------- | ------------- | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`@id`][pr-@id]               | `PRIMARY KEY` | Defines a single-field ID on the model.                             | Cannot by defined on a relation field. Cannot be optional. Functions can be used to auto-generate, `autoincrement()`, `cuid()`, and `uuid()` |
| [`@@id`][pr-@@id]             | `PRIMARY KEY` | Defines a multi-field ID (composite ID) on the model.               | See above                                                                                                                                            |
| [`@default`][pr-@default]     | `DEFAULT`     | Defines a default value for a field .                               | Not allowed on relation fields. Functions can be used to auto-generate, `autoincrement()`, `dbgenerated()`, `cuid()`, `uuid()`, `now()`          |
| [`@unique`][pr-@unique]       | `UNIQUE`      | Defines a unique constraint on the field.                           | Not allowed on relation fields                                                                                                                       |
| [`@@unique`][pr-@@unique]     | `UNIQUE`      | Defines a compound unique constraint for the specified fields.      | See above                                                                                                                                            |
| [`@@index`][pr-@@index]       | `INDEX`       | Defines an index in the database.                                   |                                                                                                                                                      |
| [`@relation`][pr-@relation]   | `FOREIGN KEY` | Defines meta information about the relation.                        | Takes 3 arguments, `name`, `fields`, `references`                                                                                                    |
| [`@map`][pr-@map]             |               | Maps a field name or enum value from the Prisma schema to a column. | Takes 1 argument, `name`                                                                                                                             |
| [`@@map`][pr-@@map]           |               | Maps the Prisma schema model name to a table.                       | Takes 1 argument, `name`                                                                                                                             |
| [`@updatedAt`][pr-@updatedat] |               | Automatically stores the time when a record was last updated.       | Compatible with DateTime fields                                                                                                                      |
| [`@ignore`][pr-@ignore]       |               | Ignores field when you introspect, excluded when generating client  |                                                                                                                                                      |
| [`@ignore`][pr-@@ignore]      |               | Ignores model when you introspect, excluded when generating client  |                                                                                                                                                      |

### Commands to promote the migrations

The Prisma Schema file is where you would update the tables and columns on the database. When you modify your schema, you will need to run `yarn rw prisma migrate dev` to promote those changes to the database.

You can interact directly with your database by running `yarn rw prisma studio` to see the data as it exists in your database.

## Schema Definition Language files

Once you have a Prisma Schema file, you still need to define your [GraphQL](/docs/api/graphql) Schema Definitions.  Redwood has a generator for this `yarn rw g sdl <table_name>`.

Schema Definition files have [types](https://graphql.org/learn/schema/#object-types-and-fields), [enums](https://graphql.org/learn/schema/#enumeration-types), [queries and mutations](https://www.apollographql.com/blog/graphql/basics/mutation-vs-query-when-to-use-graphql-mutation/). Those queries and mutations use functions defined in the [services](/docs/api/services) files.

Below is a SDL file query, and below that is the services file with it's appropriate function.

```js/6/
// api/src/graphql/user.sdl.js
export const schema = gql`
  type User {
    ...
  }
  type Query {
    users: [User!]! @requireAuth(roles: ["userRead", "admin"])
    user(id: Int!): User @requireAuth(roles: ["userRead", "admin"])
  }
  ...
`
```

```js/4/
// api/src/services/users.js
import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

export const users = async () => {
  let records = await db.user.findMany({})
  return records
}
```

## Further Reading
Redwood has some [documentation](https://redwoodjs.com/docs/deploy.html#3-prisma-and-database) but there's more on [Prisma](https://www.prisma.io/docs/concepts/components/prisma-schema).

  [pr-@id]: https://prisma.io/docs/reference/api-reference/prisma-schema-reference#id
  [pr-@@id]: https://prisma.io/docs/reference/api-reference/prisma-schema-reference#id-1
  [pr-@default]: https://prisma.io/docs/reference/api-reference/prisma-schema-reference#default
  [pr-@unique]: https://prisma.io/docs/reference/api-reference/prisma-schema-reference#unique
  [pr-@@unique]: https://prisma.io/docs/reference/api-reference/prisma-schema-reference#unique-1
  [pr-@@index]: https://prisma.io/docs/reference/api-reference/prisma-schema-reference#index
  [pr-@relation]: https://prisma.io/docs/reference/api-reference/prisma-schema-reference#relation
  [pr-@map]: https://prisma.io/docs/reference/api-reference/prisma-schema-reference#map
  [pr-@@map]: https://prisma.io/docs/reference/api-reference/prisma-schema-reference#map-1
  [pr-@updatedat]: https://prisma.io/docs/reference/api-reference/prisma-schema-reference#updatedat
  [pr-@ignore]: https://prisma.io/docs/reference/api-reference/prisma-schema-reference#ignore
  [pr-@@ignore]: https://prisma.io/docs/reference/api-reference/prisma-schema-reference#ignore-1
  
  [pr-str]: https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#string
  [pr-bool]: https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#boolean
  [pr-int]: https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#int
  [pr-bigint]: https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#bigint
  [pr-fl]: https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#float
  [pr-dec]: https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#decimal
  [pr-dt]: https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#datetime
  [pr-json]: https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#json
  [pr-byte]: https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#bytes
  [pr-uns]: https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#unsupported
  [ps-str]: https://www.postgresql.org/docs/9.1/datatype-character.html
  [ps-bool]: https://www.postgresql.org/docs/9.5/datatype-boolean.html
  [ps-int]: https://www.postgresql.org/docs/9.1/datatype-numeric.html
  [ps-bigint]: https://www.postgresql.org/docs/9.1/datatype-numeric.html
  [ps-fl]: https://www.postgresql.org/docs/9.1/datatype-numeric.html
  [ps-dec]: https://www.postgresql.org/docs/9.1/datatype-numeric.html
  [ps-dt]: https://www.postgresql.org/docs/9.1/datatype-datetime.html
  [ps-json]: https://www.postgresql.org/docs/current/datatype-json.html
  [ps-byte]: https://www.postgresql.org/docs/9.1/datatype-binary.html
  [ps-uns]: https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#unsupported
  [ms-str]: https://docs.microsoft.com/en-us/sql/t-sql/data-types/nchar-and-nvarchar-transact-sql?view=sql-server-ver15
  [ms-bool]: https://docs.microsoft.com/en-us/sql/t-sql/data-types/int-bigint-smallint-and-tinyint-transact-sql?view=sql-server-ver15
  [ms-int]: https://docs.microsoft.com/en-us/sql/t-sql/data-types/int-bigint-smallint-and-tinyint-transact-sql?view=sql-server-ver15
  [ms-bigint]: https://docs.microsoft.com/en-us/sql/t-sql/data-types/int-bigint-smallint-and-tinyint-transact-sql?view=sql-server-ver15
  [ms-fl]: https://docs.microsoft.com/en-us/sql/t-sql/data-types/float-and-real-transact-sql?view=sql-server-ver15
  [ms-dec]: https://docs.microsoft.com/en-us/sql/t-sql/data-types/decimal-and-numeric-transact-sql?view=sql-server-ver15
  [ms-dt]: https://docs.microsoft.com/en-us/sql/t-sql/data-types/datetime2-transact-sql?view=sql-server-ver15
  [ms-json]: https://docs.microsoft.com/en-us/sql/t-sql/data-types/nchar-and-nvarchar-transact-sql?view=sql-server-ver15
  [ms-byte]: https://docs.microsoft.com/en-us/sql/t-sql/data-types/binary-and-varbinary-transact-sql?view=sql-server-ver15
  [ms-uns]: https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#unsupported
  [my-str]: https://dev.mysql.com/doc/refman/8.0/en/char.html
  [my-bool]: https://dev.mysql.com/doc/refman/5.7/en/integer-types.html
  [my-int]: https://dev.mysql.com/doc/refman/5.7/en/integer-types.html
  [my-bigint]: https://dev.mysql.com/doc/refman/5.7/en/integer-types.html
  [my-fl]: https://dev.mysql.com/doc/refman/8.0/en/floating-point-types.html
  [my-dec]: https://dev.mysql.com/doc/refman/5.7/en/precision-math-decimal-characteristics.html
  [my-dt]: https://dev.mysql.com/doc/refman/5.7/en/date-and-time-types.html
  [my-json]: https://dev.mysql.com/doc/refman/5.7/en/json.html
  [my-byte]: https://dev.mysql.com/doc/refman/8.0/en/blob.html
  [my-uns]: https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#unsupported
  [mo-str]: https://docs.mongodb.com/manual/reference/operator/query/type/#available-types
  [mo-bool]: https://docs.mongodb.com/manual/reference/operator/query/type/#available-types
  [mo-int]: https://docs.mongodb.com/manual/reference/operator/query/type/#available-types
  [mo-bigint]: https://docs.mongodb.com/manual/reference/operator/query/type/#available-types
  [mo-fl]: https://docs.mongodb.com/manual/reference/operator/query/type/#available-types
  [mo-dec]: https://docs.mongodb.com/manual/reference/operator/query/type/#available-types
  [mo-dt]: https://docs.mongodb.com/manual/reference/operator/query/type/#available-types
  [mo-json]: https://docs.mongodb.com/manual/reference/mongodb-extended-json/
  [mo-byte]: https://docs.mongodb.com/manual/reference/operator/query/type/#available-types
  [mo-uns]: https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#unsupported
  [sl-str]: https://sqlite.org/datatype3.html
  [sl-bool]: https://sqlite.org/datatype3.html
  [sl-int]: https://sqlite.org/datatype3.html
  [sl-bigint]: https://sqlite.org/datatype3.html
  [sl-fl]: https://sqlite.org/datatype3.html
  [sl-dec]: https://sqlite.org/datatype3.html
  [sl-dt]: https://sqlite.org/datatype3.html
  [sl-json]: https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#json
  [sl-byte]: https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#bytes
  [sl-uns]: https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#unsupported
  