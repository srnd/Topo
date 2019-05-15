import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { ThemeProvider, Box } from '../src'
import { withA11y } from '@storybook/addon-a11y'

import srndTheme from './srndTheme'

addParameters({
  options: {
    theme: srndTheme,
    panelPosition: 'right',
  },
})

addDecorator(story => (
  <ThemeProvider webfonts>
    <Box p={3}>{story()}</Box>
  </ThemeProvider>
))

addDecorator(withA11y)

const req = require.context('.', true, /\.js$/)

const load = () => {
  req.keys().forEach(req)
}

configure(load, module)
