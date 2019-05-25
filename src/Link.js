import styled from 'styled-components'
import Text from './Text'
import PropTypes from 'prop-types'
import { css } from 'styled-components'
import theme from './theme'

const Link = styled(Text)`
  display: inline-block;
  position: relative;
  color: currentColor;

  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  ${({ underline }) =>
    (typeof underline === 'undefined' || underline) &&
    css`
      text-decoration: underline;
      text-decoration-skip-ink: auto;
    `}
`.withComponent('a')

Link.displayName = 'Link'

Link.propTypes = {
  /** you know, where the link goes */
  href: PropTypes.string,
  /** enable text-decoration: underline */
  underline: PropTypes.bool,
  /** enable text-decoration: underline on hover*/
  hoverline: PropTypes.bool,
}

Link.defaultProps = {
  theme,
}

export default Link
