import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Field } from '../src'

storiesOf('Field', module)
  .add(
    'Input component',
    withInfo({
      inline: true,
      text: '<Field> component',
    })(() => (
      <Field
        label="Employee ID number"
        description="Your employee ID was assigned to you when you first joined. Check your ID badge."
        value="12345"
      />
    ))
  )
  .add(
    'Input component with error',
    withInfo({
      inline: true,
      text: '<Field> component with validation',
    })(() => (
      <Field
        label="Employee ID number"
        description="Your employee ID was assigned to you when you first joined. Check your ID badge."
        error="should be a number"
        value="hello"
      />
    ))
  )
  .add(
    'Input component with children',
    withInfo({
      inline: true,
      text: '<Field> component with children',
    })(() => (
      <Field label="Custom Hello World element" description="This is a test">
        <p>Hello, world!</p>
      </Field>
    ))
  )
