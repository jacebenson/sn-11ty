---
title: Add Session Variables
---
## Add Session Variables

If you need access to something you want to calculate for the currently logged in user and don't want to add that to your database, this is how to do it.

### Example

I want the Md5 hash of the current user's email address to be stored in a session variable.

1.  In the `./api/src/lib/auth.js` file, add the CryptoJS library.

    ```js/0/
    import CryptoJS from 'crypto-js';
    ```

2.  Then in the `returnUser` add the `md5Email` property.
    
    ```js/3/
    let returnUser = {
        roles,
        ...foundUser,
        md5Email: CryptoJS.MD5(foundUser.email).toString(),
    }
    ```
3.  Now you can access that session variable on the `currentUser` via the `useAuth()` from `@redwoodjs/auth`.

    ```js/11/
    import { Link, NavLink, routes } from '@redwoodjs/router'
    import { useAuth } from '@redwoodjs/auth'

    const NavSidebar = ({ children }) => {
      const { hasRole, currentUser } = useAuth()
       return (
        <div className="flex flex-wrap bg-gray-100 w-full h-screen">
          <div className="w-3/12 bg-white rounded p-3 shadow-lg">
            <div className="flex items-center space-x-4 p-2 mb-5">
            <img
              className="h-12 rounded-full"
              src={`http://www.gravatar.com/avatar/${currentUser.md5Email}?s=260&d=mp`}
              alt="{currentUser.name}"
            />
    ```

> If you need access to this for **all** users, you'll want to go ahead and [add a calculated field](/cookbooks/add-calculated-fields) to your application.
