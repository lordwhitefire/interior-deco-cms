// schemas/session.ts

import { defineType, defineField } from "sanity";


// sanity/schemaTypes/session.ts
export const session = defineType({
  name: "session",
  title: "User Session",
  type: "document",
  fields: [
    defineField({
      name: "sessionId",
      title: "Session ID",
      type: "string",
    }),
  ],
});