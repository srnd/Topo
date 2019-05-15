import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  fontSize,
  fontWeight,
  textAlign,
  space,
  color,
  propTypes,
} from 'styled-system'
import theme, { filterProps } from './theme'

export const caps = props =>
  props.caps ? { textTransform: 'uppercase' } : null

export const regular = props => props.regular && { fontWeight: 'regular' }

export const bold = props => props.bold && { fontWeight: 'bold' }
export const italic = props => props.italic && { fontStyle: 'italic' }
export const underline = props =>
  props.underline && { textDecoration: 'underline' }
export const strikethrough = props =>
  props.strikethrough && { textDecoration: 'line-through' }
export const mono = props => props.mono && { fontFamily: props.theme.mono }

const Base = props => {
  // const next = filterProps(props)
  return <span {...props} />
}

const Text = styled(Base)(
  [],
  fontSize,
  space,
  color,
  caps,
  textAlign,
  bold,
  italic,
  underline,
  strikethrough,
  regular,
  fontWeight,
  mono
)

Text.displayName = 'Text'

Text.propTypes = {
  caps: PropTypes.bool,
  regular: PropTypes.bool,
  bold: PropTypes.bool,
  ...propTypes.fontSize,
  ...propTypes.fontWeight,
  ...propTypes.textAlign,
  ...propTypes.space,
  ...propTypes.color,
}

Text.defaultProps = {
  theme,
  m: 0,
}

Text.span = Text.withComponent('span')
Text.p = Text.withComponent('p')
Text.s = Text.withComponent('s')
Text.mark = styled(Text.withComponent('mark'))`
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    #faf7854d,
    #faf785b3 95%,
    #faf7851a
  );
`

export default Text
