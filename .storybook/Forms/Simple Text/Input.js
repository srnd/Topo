import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { Input } from '../../../src/Field/SimpleText'

class DemoComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      val: 'johnpeter@srnd.org',
    }
  }

  render() {
    return (
      <Input
        label="What is your email, John?"
        value={this.state.val}
        onChange={e => this.setState({ val: e.target.value })}
        error={
          this.state.val !== 'johnpeter@srnd.org' &&
          "That's not your email, John!"
        }
      />
    )
  }
}

storiesOf('Forms|Simple Text/Input', module)
  .add('One-line', () => <DemoComponent />)
  .add('One-line w/ Error', () => (
    <Input
      label="Full Name"
      value="John Peter"
      error="Go back to the server room, John."
    />
  ))
