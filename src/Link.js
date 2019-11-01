import styled from 'styled-components'
import Text from './Text'
import PropTypes from 'prop-types'
import { propTypes } from 'styled-system'
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
  href: propTypes.string,
  /** enable text-decoration: underline */
  underline: propTypes.bool,
  /** enable text-decoration: underline on hover*/
  hoverline: propTypes.bool,
}

Link.defaultProps = {
  theme,
}

export default Link
