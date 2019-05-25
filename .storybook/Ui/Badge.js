import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Badge } from '../../src'

storiesOf('UI|Badge', module)
  .add(
    'Badge component',
    withInfo({
      inline: true,
      text: 'Use the <Badge /> component to render a primitive badge.',
    })(() => <Badge> This is a Badge</Badge>)
  )
  .add('Colorful Badges', () => (
    <>
      <Badge bg="success">Update</Badge>
      <br />
      <Badge my={1} bg="info">
        6
      </Badge>
      <br />
      <Badge> 3 reports </Badge>
    </>
  ))
