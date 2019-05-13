import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Input, Textarea } from '../src/Field'
import styled from 'styled-components'
import { loremIpsum } from 'lorem-ipsum'

storiesOf('Form Fields', module)
  .add(
    'One-line Textbox',
    withInfo({
      inline: true,
      text: '<Input> component with a label and description.',
    })(() => <Input label="First Name" />)
  )
  .add(
    'One-line Textbox w/ Error',
    withInfo({
      inline: true,
      text: '<Input> component with a label and description.',
    })(() => (
      <Input
        label="Full Name"
        value="John Peter"
        error="go back to the server room John"
      />
    ))
  )
  .add(
    'Textarea',
    withInfo({
      inline: true,
      text: '<Textarea> component with a label and description.',
    })(() => (
      <Textarea
        label="Give us some Latin text."
        value={loremIpsum({ count: 10 })}
      />
    ))
  )
