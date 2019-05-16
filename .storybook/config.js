import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { Topo, Box } from '../src'
import { withA11y } from '@storybook/addon-a11y'

import srndTheme from './srndTheme'

addParameters({
  options: {
    theme: srndTheme,
    panelPosition: 'right',
  },
})

addDecorator(story => (
  <Topo lang="en">
    <Box p={3}>{story()}</Box>
  </Topo>
))

addDecorator(withA11y)

const req = require.context('.', true, /\.js$/)

const load = () => {
  req.keys().forEach(req)
}

configure(load, module)
