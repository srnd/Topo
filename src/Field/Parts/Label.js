import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../../theme'

const Error = styled.span`
  transition: all 0.5s ease;
  display: inline;
  opacity: 0;

  color: ${({ theme }) => theme.colors.error};
  ${({ children }) =>
    children &&
    css`
      &:before {
        content: ' — ';
      }
    `}
`

const Container = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  color: ${({ theme }) => theme.colors.grayDark};
  overflow: hidden;
  cursor: text;

  transition: all 0.5s ease;
  ${({ moveDown }) =>
    moveDown &&
    css`
      padding-top: ${({ theme }) =>
        theme.fontSizes[0] - (theme.fontSizes[1] - theme.fontSizes[0] + 1)}px;
      margin-bottom: -${({ theme }) => theme.fontSizes[0]}px;
      font-size: ${({ theme }) => theme.fontSizes[1]}px;
    `}

  ${({ error }) =>
    error &&
    css`
      ${Error} {
        opacity: 1;
      }
    `}
`

const Label = ({ children, error, htmlFor, moveDown }) => (
  <Container htmlFor={htmlFor} error={Boolean(error)} moveDown={moveDown}>
    {children}
    <Error>{error}</Error>
  </Container>
)

Label.displayName = 'Label'

Label.propTypes = {
  /** field name */
  children: PropTypes.string,

  /** error to display, if any */
  optionalError: PropTypes.string,
}

Label.defaultProps = {
  theme,
}

export { Container, Error }
export default Label
