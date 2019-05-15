import styled from 'styled-components'
import Text from './Text'
import theme from './theme'

const Badge = styled(Text.span)`
  border-radius: 2em;
  font-size: ${({ theme }) => theme.fontSizes[0]};
  display: inline-block;
  font-weight: normal;
  letter-spacing: 0.0375em;
  line-height: 1.25;
  padding: 0.2em 0.4em;

  background-color: ${({ theme }) => theme.colors.grayLight};

  /* TODO: theme doesn't seem to be available here?? */
  ${({ positive }) =>
    positive &&
    `
    background-color: green;
  `}
  ${({ negative }) =>
    negative &&
    `
    background-color: red; 
  `}
`

Badge.displayName = 'Badge'

Badge.defaultProps = {
  theme,
  positive: false,
  negative: false,
}

export default Badge
