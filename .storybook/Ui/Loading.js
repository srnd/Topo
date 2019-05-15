import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Loading } from '../../src'

storiesOf('UI|Loading', module).add(
  'Loading component',
  withInfo({
    inline: true,
    text: 'Use the <Loading /> component to render a "spinner".',
  })(() => <Loading />)
)
