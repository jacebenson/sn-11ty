---
eleventyExcludeFromCollections: true
---
# Welcome to the docs!
Look at the docs over 👈 

There's the specific docs, cookbooks, videos and tutorial to get started.  If you have any questions the best way to get help is to open an issue on the [GitHub repo](https://github.com/tskrio/Tskr).

I suppose this is as good a place as any to go over how this works.

## What is this built on

Tskr is built on top of [RedwoodJS](https://redwoodjs.com).  We just have a specific scope.  The main reason for this is to make it easier to get started.  We don't want to have to learn all the RedwoodJS stuff.  We just want to get started.  

That being said, you bring the following bits to your fork.
 - A database supported by [Prisma](https://www.prisma.io/)
 - A host to load your html files from like [Netlify](https://www.netlify.com/), [Vercel](https://vercel.com/) or [Render](https://render.com/)
 - A host to run your functions from like [Netlify](https://www.netlify.com/), [Vercel](https://vercel.com/) or [Render](https://render.com/)

RedwoodJS then takes your code, and builds it into the right parts so it can be hosted appropriately on those hosts while connecting to that database.

## Okay, so why not just use RedwoodJS?

Well, with a RedwoodJS project you need to configure 
- [Authentication](/docs/api/auth)
- [Table and Field Permissions](/docs/api/permissions)
- [Table Schema](/docs/api/schema)
- [Services](/docs/api/services)
- [Middleware](/docs/api/rules)
- [GraphQL Types, Mutations, and Queries](/docs/api/graphql)
- [Routes](/docs/web/routes)
- [Layouts](/docs/web/layouts)
- [Components](/docs/web/components)
- [Cells](/docs/web/cells)


You can do that, this is just an opinionated way to get started.

## Contributors

<div class="flex flex-wrap -mb-4">
{% for user in contributors %}
   <div class="flex justify-center pb-1 ">
      <span><a href="{{ user.html_url }}" alt="{{ user.login }}" title="{{ user.login }}">
      <img src="{{ user.avatar_url }}" class="w-16 h-16 rounded-full" /></a><span>
    </div>
{% endfor %}
</div>


## Docs Contributors
<div class="flex flex-wrap -mb-4">

{% for docUser in docsContributors   %}
   <div class="flex justify-center pb-1 ">
      <span><a href="{{ docUser.html_url }}" alt="{{ docUser.login }}" title="{{ docUser.login }}">
      <img src="{{ docUser.avatar_url }}" class="w-16 h-16 rounded-full" /></a><span>
    </div>
{% endfor %}
</div>
