import styled, { css } from 'styled-components'
import Text from './Text'

const Badge = styled(Text.span)`
  border-radius: ${({ theme }) => theme.pill};
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  font-weight: 500;
  display: inline-block;
  font-weight: normal;
  letter-spacing: 0.0375em;
  line-height: 1.25;
  text-transform: uppercase;
`

Badge.displayName = 'Badge'

Badge.defaultProps = {
  theme,
  px: 2,
  py: 1,
  bg: 'primary',
  color: 'white',
  fontSize: 1,
}

export default Badge
