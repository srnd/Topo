import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Input } from '../src'

storiesOf('Input', module)
  .add(
    'Input component',
    withInfo({
      inline: true,
      text: '<Input> component',
    })(() => <Input placeholder="John Peter" />)
  )
  .add(
    'Input component with an error',
    withInfo({
      inline: true,
      text: '<Input> component',
    })(() => (
      <Input placeholder="me@example.com" value="me@example" error={true} />
    ))
  )
