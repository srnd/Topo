import Box from './Box'
import styled, { css } from 'styled-components'
import {
  space,
  width,
  color,
  fontSize,
  textAlign,
  propTypes,
} from 'styled-system'
import PropTypes from 'prop-types'

const Announcement = styled(Box)`
  display: block;
  width: 100%;
  text-align: center;
  text-decoration: none;
  background-color: ${props => props.theme.hexa(props.bg, 0.2)};
  font-weight: 500;
  border-bottom: 3px solid ${props => props.theme.hexa(props.bg, 0.4)};
`

Announcement.displayName = 'Announcement'

Announcement.defaultProps = {
  color: 'black',
  bg: 'success',
  fontSize: 1,
  m: 0,
  p: 2,
  pb: -1,
}

Announcement.button = Announcement.withComponent('button')
Announcement.input = Announcement.withComponent('input')

export default Announcement
