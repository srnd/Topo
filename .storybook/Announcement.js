import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Announcement, Flex } from '../src'

storiesOf('Announcment', module).add(
  'Announcement component',
  withInfo({
    inline: true,
    text:
      'Use the <Announcement /> component to render a featured announcement.'
  })(() => (
    <Announcement>Our spring CodeDay lineup has been announced.</Announcement>
  ))
)
