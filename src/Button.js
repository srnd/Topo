import React from 'react'
import { ConfettiBox } from './Box'
import styled, { css } from 'styled-components'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'

class ExtendedButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = { revealDangerous: false, timeout: null }
  }

  render() {
    const { children, onClick, ...props } = this.props

    return (
      <ConfettiBox onClick={(e, f) => this.dispatchClick(e, f)} {...props}>
        {!this.state.revealDangerous ? (
          children
        ) : (
          <FormattedMessage
            id="button.cta.danger-confirm"
            description="When the user clicks for the first time on a dangerous button."
          />
        )}
      </ConfettiBox>
    )
  }

  dispatchClick(e, f) {
    if (this.props.danger && !this.state.revealDangerous) {
      // This is a danger button, show the danger text
      const t = setTimeout(
        () => this.setState({ revealDangerous: false, resetTimeoutId: null }),
        10000
      )
      this.setState({ revealDangerous: true, timeout: t })
      return false
    } else {
      // Run the onclick handler
      clearTimeout(this.state.timeout)
      this.setState({ revealDangerous: false, timeout: null })
      return this.props.onClick(e, f)
    }
  }
}

const Button = styled(ExtendedButton)`
  padding: 0.5rem 1rem;
  display: inline-block;
  cursor: pointer;

  font-size: ${({ theme }) => theme.fontSizes[0]};
  font-weight: 500;
  text-decoration: none;

  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radii[1]};

  margin: ${({ theme }) => theme.space[1]}px;
  margin-left: 0;
  transition: all 0.2s ease-in-out;

  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  color: ${({ theme }) => theme.colors.black};
  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadows[0]};
    background-color: ${({ theme }) => theme.colors.grayLightest};
  }
  &:active:hover {
    box-shadow: ${({ theme }) => theme.boxShadows[1]};
  }
  &:active {
    transform: scale(0.98);
    background-color: ${({ theme }) => theme.colors.grayLightest};
  }

  ${({ theme, primary, bg }) =>
    (primary || bg) &&
    css`
      border: 1px solid ${theme.colors.primary};
      background-color: ${bg || theme.colors.primary};
      color: ${theme.colors.white};
      &:hover {
        background-color: ${theme.hexa(bg || theme.colors.primary, 0.9)};
      }
      &:active {
        background-color: ${theme.hexa(bg || theme.colors.primary, 0.7)};
      }
    `}

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
  fontSize: 0,
  m: 0,
}

Button.button = Button.withComponent('button')
Button.a = Button.withComponent('a')

Button.submit = props => (
  <Button {...props}>
    <FormattedMessage
      id="button.cta.submit"
      description="When the user submits information in a form."
    />
  </Button>
)
Button.send = props => (
  <Button {...props}>
    <FormattedMessage
      id="button.cta.send"
      description="When the user submits a message."
    />
  </Button>
)
Button.save = props => (
  <Button {...props}>
    <FormattedMessage
      id="button.cta.save"
      description="When the user saves their edits."
    />
  </Button>
)
Button.create = props => (
  <Button {...props}>
    <FormattedMessage
      id="button.cta.create"
      description="When the user creates a new resource."
    />
  </Button>
)
Button.cancel = props => (
  <Button {...props}>
    <FormattedMessage
      id="button.cta.cancel"
      description="When the user wants to undo their planned changes."
    />
  </Button>
)

export default Button
