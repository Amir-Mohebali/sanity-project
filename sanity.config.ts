import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemas'

const config = defineConfig({
  name: 'next-sanity-site',
  title: 'Next Sanity',

  projectId: 'py8yioag',
  dataset: 'production',
  basePath: '/studio',

  plugins: [structureTool()],

  schema: { types: schemaTypes },
})

export default config