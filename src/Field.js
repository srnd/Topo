import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Text from './Text'
import Input from './Input'
import Box from './Box'
import theme from './theme'

const FieldSet = styled(Box)``

const Label = styled(Box)``
const LabelText = styled(Text)`
  display: inline;
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
`
const LabelError = styled(Text)`
  display: inline;
  margin-left: 0.4em;
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  color: ${({ theme }) => theme.colors.error};

  &:before {
    content: '(';
  }

  &:after {
    content: ')';
  }
`

const Description = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  color: ${({ theme }) => theme.colors.gray};
`

const Field = ({ label, description, error, type, children, ...other }) => {
  const Component = {
    text: Input,
    email: Input,
    url: Input,
    'datetime-local': Input,
  }[type || 'text']

  return (
    <FieldSet>
      <Label>
        <LabelText>{label}</LabelText>
        {error && typeof error === 'string' && <LabelError>{error}</LabelError>}
      </Label>
      {React.Children.map(children, child =>
        React.cloneElement(child, { error })
      ) || <Component error={Boolean(error)} type={type} {...other} />}
      {description && <Description>{description}</Description>}
    </FieldSet>
  )
}

Field.displayName = 'Field'

Field.propTypes = {
  /** Field name */
  label: PropTypes.string,

  /** help text */
  optionalDescription: PropTypes.string,

  /** error to display, if any */
  optionalError: PropTypes.oneOf([PropTypes.bool, PropTypes.string]),

  /** what to display for the type, if children are not provided */
  optionalType: PropTypes.string,

  /** what to display for the input element, if type is omitted */
  optionalChildren: PropTypes.node,

  /** what the field says before it's filled out */
  optionalPlaceholder: PropTypes.string,

  /** current text value */
  value: PropTypes.string,

  /** function to run when the user types new text */
  onChange: PropTypes.func,
}

Field.defaultProps = {
  theme,
}

export default Field
