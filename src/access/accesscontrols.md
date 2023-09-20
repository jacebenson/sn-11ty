---
title: "Access Controls"
order: 1200
---

Access Controls(ACLs) are the most common way to restrict access to data in Servicenow.  However do not misunderstand.  Access controls do A LOT.

## Access Control Lists

With ACLs you can;
1. Restrict access to rows in a table
2. Restrict access to fields in a table
3. Restrict access to the page showing the table or form
4. Restrict access to reports

That being said, ACLs are not a "deny" mechanism.  You can have multiple ACLs on the same table, and they are all checked.  If any passes, the user is allowed to do take the action.  If none pass, the user is denied.

## When to use an ACL?

Access Controls are expensive.  I mean, they can take a long time to run and that is complicated.

Access controls run from the most broad rules to the most specific.  Let me give an example.

Let's say we looked at the User table and added a custom field called, "Do not rehire".  Now consider the user can generally see his own record.  Let's breakdown the ACLs that would be checked.
- `*` - This is the most broad rule.  It checks if the user can access any table.
- `*.*` - This is the most broad rule for a fields.  It checks if the user can access any field on any table.
- `user` - This checks if the user can access the user table.
- `user.*` - This checks if the user can access any field on the user table.
- `user.do_not_rehire` - This checks if the user can access the do_not_rehire field on the user table.

Now say you loaded a list of 100 users, the ACLs are checked on each row, and each field. So if you're displaying Name, Department, and Do Not Rehire, that's 
100 rows * 3 fields * 5 ACLs = 1500 ACL checks.

That being said, ACLs are the most common way to restrict access to data in Servicenow.


## Further Reading

- [Access Controls by Mike Kaufman](https://www.servicenowelite.com/blog/2019/10/2/access-controls)
- [Getting the most out of access controls by Ashok](https://www.servicenow.com/community/in-other-news/security-top-tips-part-4-keeping-to-your-lanes-getting-the-most/ba-p/2268033) [cached](https://web.archive.org/web/20230920050857/https://www.servicenow.com/community/in-other-news/security-top-tips-part-4-keeping-to-your-lanes-getting-the-most/ba-p/2268033)
- [Your ACLs and Business Rules are Broken by Tim Woodruff](https://snprotips.com/blog/2023/4/28/your-servicenow-acls-are-broken)
- [ACLs are like a lock and key](https://blog.wiz0floyd.do/2022/07/acls-are-like-lock-and-key.html)
- [Access Control Lists vs Before Query Business Rules by Jace Benson](https://jace.pro/post/2019-11-30-qbr-vs-acl/)