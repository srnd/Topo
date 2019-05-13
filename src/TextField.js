import React, { useState } from 'react'
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

const InputBase = styled.input`
  padding: 0.35em 0.45em;

  border: ${({ theme }) => theme.borderThickness} solid
    ${({ theme }) => theme.colors.grayLight};
  border-radius: ${({ theme }) => theme.radii[1]};

  ${({ error }) =>
    error &&
    css`
      &:not(:focus) {
        border-color: ${({ theme }) => theme.colors.error};
        color: ${({ theme }) =>
          theme.colors.error}; /* TODO(@tylermenezes): Dark red? */
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
const InputText = InputBase.withComponent('input')
const InputTextarea = InputBase.withComponent('textarea')

const Input = props => {
  return (
    <InputWrapper>
      <InputText {...props} />
      {['bottom', 'right', 'top', 'left'].map(role => (
        <InputBorder role={role} />
      ))}
    </InputWrapper>
  )
}

Input.displayName = 'Input'

Input.propTypes = {
  /** field type, either text or textarea */
  optionalType: PropTypes.string,

  /** what the field says before it's filled out */
  optionalPlaceholder: PropTypes.string,

  /** if true, there was an error in this field */
  optionalError: PropTypes.bool,

  /** current text value */
  value: PropTypes.string,

  /** function to run when the user types new text */
  onChange: PropTypes.func,
}

Input.defaultProps = {
  theme,
}

export default Input
