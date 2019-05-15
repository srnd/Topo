import React from 'react'
import { storiesOf } from '@storybook/react'
import { Announcement } from '../../src'

storiesOf('UI|Announcment', module).add(
  'Announcement component',
  () => (
    <Announcement>Our spring CodeDay lineup has been announced.</Announcement>
  ),
  {
    notes: `
    The announcement component.
  `,
  }
)
