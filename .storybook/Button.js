import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Button, Flex } from '../src'

storiesOf('Button', module)
  .add(
    'Button component',
    withInfo({
      inline: true,
      text: 'Use the <Button /> component to render a primitive button.'
    })(() => <Button>Button</Button>)
  )
  .add('Disabled', () => <Button disabled>Disabled</Button>)
