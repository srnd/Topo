import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Text } from '../../src'

storiesOf('Primitives|Text', module)
  .add('Typography component', () => <Text m={3}>Hello</Text>)
  .add('Setting Font Size', () => (
    <div>
      <Text.p fontSize={6} mono>
        &lt;Text.p fontSize={'{'}6{'}'} /&gt;
      </Text.p>
      <Text.p fontSize={5} mono>
        &lt;Text.p fontSize={'{'}5{'}'} /&gt;
      </Text.p>
      <Text.p fontSize={4} mono>
        &lt;Text.p fontSize={'{'}4{'}'} /&gt;
      </Text.p>
      <Text.p fontSize={3} mono>
        &lt;Text.p fontSize={'{'}3{'}'} /&gt;
      </Text.p>
      <Text.p fontSize={2} mono>
        &lt;Text.p fontSize={'{'}2{'}'} /&gt;
      </Text.p>
      <Text.p fontSize={1} mono>
        &lt;Text.p fontSize={'{'}1{'}'} /&gt;
      </Text.p>
      <Text.p fontSize={0} mono>
        &lt;Text.p fontSize={'{'}0{'}'} /&gt;
      </Text.p>
    </div>
  ))
  .add('Aligning Text', () => (
    <div>
      <Text.p align="left">Hello Left</Text.p>
      <Text.p align="center">Hello Center</Text.p>
      <Text.p align="right">Hello Right</Text.p>
    </div>
  ))
  .add('Bold, Italics, and More', () => (
    <>
      <Text.p regular>
        I am rendered as <Text mono>&lt;Text regular /&gt;</Text>.
      </Text.p>
      <Text.p bold>
        I am rendered as <Text mono>&lt;Text bold /&gt;</Text>.
      </Text.p>
      <Text.p italic>
        I am rendered as <Text mono>&lt;Text italic /&gt;</Text>.
      </Text.p>
      <Text.p caps>
        I am rendered as <Text mono>&lt;Text caps /&gt;</Text>.
      </Text.p>
      <Text.p strikethrough>
        I am rendered as <Text mono>&lt;Text strikethrough /&gt;</Text>.
      </Text.p>
      <Text.p underline>
        I am rendered as <Text mono>&lt;Text underline /&gt;</Text>.
      </Text.p>
      <Text.p mono>
        I am rendered as <Text mono>&lt;Text mono /&gt;</Text>.
      </Text.p>
      <Text.p>
        Here is some <Text.code>&lt;Text.code /&gt;</Text.code>
      </Text.p>
    </>
  ))
  .add('Marker', () => (
    <>
      <Text.p>
        Use <Text mono>&lt;Text.mark&gt;&lt;/Text&gt;</Text> to highlight
        important facts.
      </Text.p>
      <Text.p>
        Although CodeDay is very fun, it is very important that you{' '}
        <Text.mark>remember to eat, drink, and breathe.</Text.mark>
      </Text.p>
    </>
  ))
  .add('Spacing', () => (
    <div>
      <Text.p mt={4} mb={2}>
        Hello Margin
      </Text.p>
      <Text.p p={3}>Hello Padding</Text.p>
    </div>
  ))
  .add('Color', () => (
    <div>
      <Text.p color="primary">Hello Primary</Text.p>
      <Text.p color="accent">Hello Accent</Text.p>
      <Text.p color="error">Hello Error</Text.p>
    </div>
  ))
