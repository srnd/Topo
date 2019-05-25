import React from 'react'
import { storiesOf } from '@storybook/react'
import { Legal, Text } from '../../src'

storiesOf('UI|Legal', module)
  .add('PII', () => (
    <>
      <Text>
        <Text mono>&lt;Legal.Pii /&gt;</Text> should be included anywhere likely
        to be the first place personally identifying information is collected.
      </Text>
      <Legal.Pii />
    </>
  ))
  .add('Financial', () => (
    <>
      <Text>
        <Text mono>&lt;Legal.Financial /&gt;</Text> should be included anywhere
        payment information is collected.
      </Text>
      <Legal.Financial />
    </>
  ))
  .add('GDPR Nagbar', () => (
    <>
      <Text>
        <Text mono>&lt;Legal.GdprNagbar /&gt;</Text> needs to be added to the
        header of each page, and can only be hidden once accepted.
      </Text>
      <Legal.GdprNagbar />
    </>
  ))
  .add('Legal Links', () => (
    <>
      <Text>
        <Text mono>&lt;Legal.Links /&gt;</Text> needs to be included in the
        footer of each page for legal reasons.
      </Text>
      <Legal.Links />
    </>
  ))
