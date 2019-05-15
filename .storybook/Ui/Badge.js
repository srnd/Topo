import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Badge } from '../../src'

storiesOf('UI|Badge', module).add('Badge component', () => (
  <>
    <Badge positive>Update</Badge>
    <br />
    <Badge>6</Badge>
    <br />
    <Badge negative>3 reports</Badge>
  </>
))
