import React from 'react'
import { storiesOf } from '@storybook/react'
import { Legal, Text } from '../../src'

storiesOf('UI|Legal', module)
  .add('PII', () => (
    <>
      <Text>
        <Text.code>&lt;Legal.Pii /&gt;</Text.code> should be included anywhere
        likely to be the first place personally identifying information is
        collected.
      </Text>
      <Legal.Pii />
    </>
  ))
  .add('Financial', () => (
    <>
      <Text>
        <Text.code>&lt;Legal.Financial /&gt;</Text.code> should be included
        anywhere payment information is collected.
      </Text>
      <Legal.Financial />
    </>
  ))
  .add('GDPR Nagbar', () => (
    <>
      <Text>
        <Text.code>&lt;Legal.GdprNagbar /&gt;</Text.code> needs to be added to
        the header of each page, and can only be hidden once accepted.
      </Text>
      <Legal.GdprNagbar />
    </>
  ))
  .add('Legal Links', () => (
    <>
      <Text>
        <Text.code>&lt;Legal.Links /&gt;</Text.code> needs to be included in the
        footer of each page for legal reasons.
      </Text>
      <Legal.Links />
    </>
  ))
