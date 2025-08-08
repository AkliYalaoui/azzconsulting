'use client'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

import {dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({structure})
  ],
})
