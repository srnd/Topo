import React from 'react'
import { storiesOf } from '@storybook/react'
import { loremIpsum } from 'lorem-ipsum'
import { Textarea } from '../../../src/Field/SimpleText'

storiesOf('Forms|Simple Text/Textarea', module)
  .add('Textarea', () => (
    <Textarea
      label="Give us some Latin text."
      value={loremIpsum({ count: 10 })}
    />
  ))
  .add('Different sizes', () => (
    <div style={{ maxWidth: '50rem' }}>
      <h2>size="s"</h2>
      <Textarea
        size="s"
        label="Briefly, what's your favorite thing in this Stylebook?"
        value={loremIpsum({ count: 2 })}
      />

      <h2>size="m"</h2>
      <Textarea
        size="m"
        label="Tell us a little more about why you love Cleverbot."
        value={loremIpsum({ count: 4 })}
        description="(Completely unrelated to our pal John.)"
      />

      <h2>size="l"</h2>
      <Textarea
        size="l"
        label="Write your love-letter to John below."
        value={loremIpsum({ count: 8 })}
        error="Insufficient praise!"
      />

      <h2>size="xl"</h2>
      <Textarea
        size="xl"
        label="Compose a 2,000-word essay on the meaning of humanity in an age of robots."
        value={loremIpsum({ count: 20 })}
      />
    </div>
  ))
