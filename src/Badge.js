import styled, { css } from 'styled-components'
import Text from './Text'

const Badge = styled(Text.span)`
  border-radius: 2em;
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  font-weight: 500;
  display: inline-block;
  font-weight: normal;
  letter-spacing: 0.0375em;
  line-height: 1.25;
  padding: 0.2em 0.5em;

  background-color: ${({ theme }) => theme.colors.grayLight};
  color: ${({ theme }) => theme.colors.grayDark};

  ${({ positive, theme }) =>
    positive &&
    css`
      background-color: ${theme.colors.greenLight};
      color: ${theme.colors.green};
    `}
  ${({ negative, theme }) =>
    negative &&
    css`
      background-color: ${theme.colors.redLight};
      color: ${theme.colors.red};
    `}
`

Badge.displayName = 'Badge'

Badge.defaultProps = {
  positive: false,
  negative: false,
}

export default Badge
