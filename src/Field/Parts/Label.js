import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { propTypes } from 'styled-system'
import { UiWarning as ErrorIcon } from '@srnd/topocons/icons'
import theme from '../../theme'

const Error = styled.span`
  transition: all 0.5s ease;
  display: inline;
  opacity: 0;
  padding-left: 0.8em;

  color: ${({ theme }) => theme.colors.error};

  svg {
    position: relative;
    top: 1px;
  }
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
    <Error>
      {error && (
        <>
          <ErrorIcon /> {error}
        </>
      )}
    </Error>
  </Container>
)

Label.displayName = 'Label'

Label.propTypes = {
  /** field name */
  children: propTypes.string,

  /** error to display, if any */
  optionalError: propTypes.string,
}

Label.defaultProps = {
  theme,
}

export { Container, Error }
export default Label
