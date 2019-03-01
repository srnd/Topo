import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Link } from '../src'

storiesOf('Link', module)
  .add(
    'Link component',
    withInfo({
      inline: true,
      text: '<Text> extension for links.',
    })(() => (
      <Link as="a" href="https://srnd.org" target="_blank">
        Homepage
      </Link>
    ))
  )
  .add('Open in same tab', () => (
    <Link as="a" href="https://srnd.org" target="_self">
      Open the homepage in same tab
    </Link>
  ))
  .add('Color underline', () => (
    <Link as="a" href="https://srnd.org" color="primary" bold underline>
      I’m extra SRND
    </Link>
  ))
  .add('Hoverline', () => (
    <Link
      as="a"
      href="https://srnd.org"
      fontSize={5}
      hoverline
      bold
      chevronRight
    >
      Explore more
    </Link>
  ))
