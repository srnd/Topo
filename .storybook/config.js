import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { ThemeProvider, Box } from '../src'

import srndTheme from './srndTheme'

addParameters({
  options: {
    theme: srndTheme,
  },
})

addDecorator(story => (
  <ThemeProvider webfonts>
    <Box p={3}>{story()}</Box>
  </ThemeProvider>
))

const req = require.context('.', true, /\.js$/)

const load = () => {
  req.keys().forEach(req)
}

configure(load, module)
