import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Badge } from '../src'

storiesOf('Badge', module).add(
  'Badge component',
  withInfo({
    inline: true,
    text: 'Use the <Badge /> component to render a content addition.',
  })(() => <Badge>Our spring CodeDay lineup has been announced.</Badge>)
)
