import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { Input, Textarea } from '../../src/Field/Text'

class DemoComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      val: '',
    }
  }

  render() {
    const E = this.props.textarea ? Textarea : Input
    return (
      <E
        simple={this.props.simple}
        label="Enter the text 'aaa'."
        value={this.state.val}
        onChange={e => this.setState({ val: e.target.value })}
        error={
          this.state.val !== 'aaa' &&
          this.state.val !== '' &&
          "You did not enter the text 'aaa'"
        }
      />
    )
  }
}

storiesOf('Forms|Input', module)
  .add('Normal', () => (
    <>
      <DemoComponent />
      <DemoComponent textarea />
    </>
  ))
  .add('Simple Text', () => (
    <>
      <DemoComponent simple />
      <DemoComponent simple textarea />
    </>
  ))
  .add('w/ Error', () => (
    <Input
      label="Full Name"
      value="John Peter"
      error="Go back to the server room, John."
    />
  ))
