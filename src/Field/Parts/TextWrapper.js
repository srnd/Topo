import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../../theme'

const Border = styled.span`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.accentLight};
  transform-origin: center;
  transition: transform 0.5s ease;

  ${({ position }) =>
    (position === 'top' || position === 'bottom') &&
    css`
      height: ${({ theme }) => theme.borderThickness};
      left: ${({ theme }) => theme.radii[1]};
      right: ${({ theme }) => theme.radii[1]};
      transform: scaleX(0);
    `}

  ${({ position }) =>
    (position === 'left' || position === 'right') &&
    css`
      width: ${({ theme }) => theme.borderThickness};
      top: ${({ theme }) => theme.radii[1]};
      bottom: ${({ theme }) => theme.radii[1]};
      transform: scaleY(0);
    `}

  ${({ position }) => position}: -1px;
`
const Outer = styled.div`
  position: relative;
  display: block;
  padding: 0.35em 0.45em;

  border: ${({ theme }) => theme.borderThickness} solid
    ${({ theme }) => theme.colors.grayLight};
  border-radius: ${({ theme }) => theme.radii[1]};

  ${({ error }) =>
    error &&
    css`
      &:not(:focus) {
        border-color: ${({ theme }) => theme.colors.error};
      }
    `}

  transition: all 0.3s ease-in-out;
  &:focus-within {
    border-color: ${({ theme }) => theme.colors.accentLight};
  }
  &:focus-within ${Border}, *:focus ~ ${Border} {
    transform: scaleX(1) scaleY(1);
  }
`

const TextWrapper = ({ error, children }) => (
  <Outer error={error}>
    {children}
    {['bottom', 'right', 'top', 'left'].map(position => (
      <Border position={position} />
    ))}
  </Outer>
)

TextWrapper.displayName = 'TextWrapper'

TextWrapper.propTypes = {
  /** if true, there was an error in this field and it should be displayed with a red border when unfocused */
  error: PropTypes.bool,
}

TextWrapper.defaultProps = {
  theme,
  error: false,
}

export default TextWrapper
