---
title: "├─ db/"
order: 100
---
This folder contains all the [prisma](https://prisma.io) stuff.  When you want to add a new model / table, you'll want to add it here, then run `yarn rw prisma generate` to build the models for prisma, then run either the scaffold command, or the another generate command to build out the sdls, services, and components.  Once that's all done, you can generate a migration by running `yarn rw prisma migrate dev` and this will add SQL to the migrations folder.