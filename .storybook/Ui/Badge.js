import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Badge } from '../../src'

storiesOf('UI|Badge', module).add('Badge component', () => (
  <>
    <Badge bg="success">Update</Badge>
    <br />
    <Badge my={1} bg="info">
      6
    </Badge>
    <br />
    <Badge negative>3 reports</Badge>
  </>
))
