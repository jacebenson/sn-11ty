---
title: "⠀⠀└─ Routes.js"
order: 1465
---

> Redwood features its own router that brings some awesome innovation to this often overlooked (but important) part of your app. Named routes let you reference a route by a name you define, route param types take care of coercing values based on data type or custom functions, and more.
> - RedwoodJS <https://redwoodjs.com/docs/redwood-router>

## What are Routes

`./web/src/Routes.js` is a file that defines the routes for your app.

Routes have a three components, each have some differences to each other.
### `<Route>`

Route takes a `path` to match, a `page` to render, and a `name` to reference the route by.

In the `path` you can use `:` to match a parameter and convert to the proper types.  The types availabe are `Int`, `Float`, `Boolean`.

You can also define your own custom types as well.  More about that here: <https://redwoodjs.com/docs/redwood-router#user-route-parameter-types>

You will want to ensure you have a notfound route.  This is your 404 route.

```jsx
<Route path="/users/" page={UsersPage} name="users" />
<Route path="/user/{id:Int}" page={UsersPage} name="users" />
<Route notfound page={NotFoundPage} />
```

### `<Set>`

Set are great.  They let you group routes together and apply a `wrap` to them.  Any props your give (except `wrap`) a Set will be passed to the wrapped component.

What can you `wrap`?  [Layouts](/docs/web/layouts) and [Contexts](/docs/web/contexts).  This will keep your components DRY.

```jsx
<Set wrap={Standard}>
    <Route path="/logout" page={LogoutPage} name="logout" />
    <Route path="/" page={HomePage} name="home" />
    <Route path="/about" page={AboutPage} name="about" />
</Set>
```

### `<Private>`

Private restricts access to a route.  It takes an `unauthenticated` parameter that will redirect users if they don't have access.  It can also take a `role` parameter that will restrict access to a user with that role.

```jsx
<Private unauthenticated="home" role={['admin', 'userRead']}>
    <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
    <Route path="/users" page={UserUsersPage} name="users" />
</Private>
```