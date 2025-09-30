// sanity.config.ts
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Interior Deco CMS',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'pzhistba',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
  apiVersion: '2024-09-30'
})