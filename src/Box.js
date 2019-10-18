import styled from 'styled-components'
// import PropTypes from 'prop-types'
import {
  space,
  width,
  color,
  fontSize,
  textAlign,
  maxWidth,
  minWidth,
  maxHeight,
  minHeight,
  borderRadius,
  propTypes,
} from 'styled-system'
import theme from './theme'

const Box = styled.div`
  ${color}
  ${borderRadius}
  ${color}
  ${fontSize}
  ${maxHeight}
  ${maxWidth}
  ${minHeight}
  ${minWidth}
  ${propTypes}
  ${space}
  ${textAlign}
  ${width}
`

Box.displayName = 'Box'
Box.header = Box.withComponent('header')
Box.main = Box.withComponent('main')
Box.article = Box.withComponent('article')
Box.section = Box.withComponent('section')
Box.footer = Box.withComponent('footer')
Box.wrapper = styled(Box)`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`

Box.defaultProps = {
  theme,
}

Box.propTypes = {
  ...propTypes.textAlign,
  ...propTypes.fontSize,
  ...propTypes.space,
  ...propTypes.color,
}

export default Box
