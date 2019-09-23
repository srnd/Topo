import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Button, Text } from '../../src'

storiesOf('Forms|Button', module)
  .add('Button component', () => (
    <>
      <Button>
        <Text mono>&lt;Button /&gt;</Text>
      </Button>
      <Button primary>
        <Text mono>&lt;Button primary/&gt;</Text>
      </Button>
      <Button disabled>
        <Text mono>&lt;Button disabled/&gt;</Text>
      </Button>
    </>
  ))
  .add('Button w/ Link', () => (
    <Button as="a" href="https://www.srnd.org">
      Button
    </Button>
  ))
  .add('Dangerous Button', () => (
    <>
      <Text.p>
        You can apply the <Text.code>dangerous</Text.code> prop to have the
        button confirm.
      </Text.p>
      <Button danger onClick={() => alert('Deleted!')}>
        Delete SRND?
      </Button>
    </>
  ))
  .add('Built-In Translations', () => (
    <>
      <Text.h4 mono>&lt;Button.submit /&gt;</Text.h4>
      <Button.submit />
      <Text.h4 mono>&lt;Button.send /&gt;</Text.h4>
      <Button.send />
      <Text.h4 mono>&lt;Button.save /&gt;</Text.h4>
      <Button.save />
      <Text.h4 mono>&lt;Button.create /&gt;</Text.h4>
      <Button.create />
      <Text.h4 mono>&lt;Button.cancel /&gt;</Text.h4>
      <Button.cancel />
    </>
  ))
  .add('Confetti', () => (
    <>
      <Text.h1>Ready to register?</Text.h1>
      <Text.p>
        To register, just click the button below.{' '}
        <Text.span mono>
          confettiOnClick={'{'}true{'}'}
        </Text.span>{' '}
        will greet you.
      </Text.p>
      <Button.submit confettiOnClick={true} />
    </>
  ))
