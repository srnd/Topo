import styled from 'styled-components'
import {
  fontSize,
  fontWeight,
  textAlign,
  space,
  color,
  propTypes,
} from 'styled-system'
import theme from './theme'

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

const Text = styled.span`
  ${fontSize}
  ${space}
  ${color}
  ${caps}
  ${textAlign}
  ${bold}
  ${italic}
  ${underline}
  ${strikethrough}
  ${regular}
  ${fontWeight}
  ${mono}
`

Text.displayName = 'Text'

Text.propTypes = {
  caps: propTypes.bool,
  regular: propTypes.bool,
  bold: propTypes.bool,
  ...propTypes.fontSize,
  ...propTypes.fontWeight,
  ...propTypes.textAlign,
  ...propTypes.space,
  ...propTypes.color,
}

Text.defaultProps = {
  theme,
  m: 0,
  fontSize: 1,
}

Text.span = Text.withComponent('span')
Text.p = Text.withComponent('p')
Text.s = Text.withComponent('s')
Text.h1 = Text.withComponent('h1')
Text.h2 = Text.withComponent('h2')
Text.h3 = Text.withComponent('h3')
Text.h4 = Text.withComponent('h4')
Text.h5 = Text.withComponent('h5')
Text.h6 = Text.withComponent('h6')
Text.mark = styled(Text.withComponent('mark'))`
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    #faf7854d,
    #faf785b3 95%,
    #faf7851a
  );
`
Text.code = styled(Text.withComponent('span'))`
  background-color: ${({ theme }) => theme.colors.grayLightest};
  font-family: ${({ theme }) => theme.mono};
  padding: 0 ${({ theme }) => theme.radius};
  border-radius: ${({ theme }) => theme.radius};
`

export default Text
