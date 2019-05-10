import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import theme from './theme'

const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
`

const InputBorder = styled.span`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.accentLight};
  transform-origin: center;
  transition: transform 0.5s ease;

  ${({ role }) =>
    (role === 'top' || role === 'bottom') &&
    css`
      height: ${({ theme }) => theme.borderThickness};
      left: ${({ theme }) => theme.radii[1]};
      right: ${({ theme }) => theme.radii[1]};
      transform: scaleX(0);
    `}

  ${({ role }) =>
    (role === 'left' || role === 'right') &&
    css`
      width: ${({ theme }) => theme.borderThickness};
      top: ${({ theme }) => theme.radii[1]};
      bottom: ${({ theme }) => theme.radii[1]};
      transform: scaleY(0);
    `}

  ${({ role }) => role}: 0;
`

const InputField = styled.input`
  padding: 0.35em 0.45em;

  border: ${({ theme }) => theme.borderThickness} solid
    ${({ theme }) => theme.colors.grayLight};
  border-radius: ${({ theme }) => theme.radii[1]};

  ${({ error }) =>
    error &&
    css`
      border-color: ${({ theme }) => theme.colors.red};
      &:not(:focus) {
        color: ${({ theme }) =>
          theme.colors.red}; /* TODO(@tylermenezes): Dark red? */
      }
    `}

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  transition: all 0.3s ease-in-out;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accentLight};
  }
  &:focus ~ ${InputBorder} {
    transform: scaleX(1) scaleY(1);
  }
`

const Input = props => (
  <InputWrapper>
    <InputField {...props} />
    {['bottom', 'right', 'top', 'left'].map(role => (
      <InputBorder role={role} />
    ))}
  </InputWrapper>
)

Input.displayName = 'Input'

Input.propTypes = {
  /** what the field says before it's filled out */
  placeholder: PropTypes.string,
  /** what the field says */
  value: PropTypes.bool,
  /** if true, there was an error in this field */
  error: PropTypes.bool,
}
/* TODO(@tylermenezes): Onchange */

Input.defaultProps = {
  theme,
}

export default Input
