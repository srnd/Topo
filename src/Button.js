import Box from './Box'
import theme, { cx, hexa } from './theme'
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

const Button = styled(Box)`
  padding: 0.5rem 1rem;
  display: inline-block;
  cursor: pointer;

  font-size: ${({ theme }) => theme.fontSizes[0]};
  font-weight: 500;
  text-decoration: none;

  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radii[1]};

  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadows[0]};
    background-color: ${props => hexa(props.bg, 0.9)};
  }
  &:active:hover {
    box-shadow: ${({ theme }) => theme.boxShadows[1]};
  }
  &:active {
    background-color: ${props => hexa(props.bg, 0.7)};
    transform: scale(0.98);
  }
  @media (hover: none) {
    box-shadow: ${({ theme }) => theme.boxShadows[1]};
  }
  ${props => props.disabled && { opacity: 0.5, cursor: 'not-allowed' }};
`

Button.displayName = 'Button'

Button.propTypes = {
  /** flip colors */
  inverted: PropTypes.bool,
  /** add hover/focus animation */
  scale: PropTypes.bool,
  /** add left text arrows */
  chevronLeft: PropTypes.bool,
  /** add right text arrows */
  chevronRight: PropTypes.bool,
}

Button.defaultProps = {
  theme,
  bg: 'primary',
  color: 'white',
  fontSize: 2,
  m: 0,
}

Button.button = Button.withComponent('button')
Button.input = Button.withComponent('input')

export default Button
