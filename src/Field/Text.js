import React from 'react'
import styled from 'styled-components'
import { propTypes } from 'styled-system'
import PropTypes from 'prop-types'
import theme from '../theme'
import TextWrapper from './Parts/TextWrapper'
import Label from './Parts/Label'
import Description from './Parts/Description'
import _ from 'lodash'

const Container = styled.div`
  width: 100%;
`

const BaseInner = styled.div`
  outline: 0;
  border: none;
  background-color: transparent;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  font-family: ${({ theme }) => theme.font};
`

class Base extends React.Component {
  constructor(props) {
    super(props)
    this.fieldId = _.uniqueId()
    this.state = {
      hasFocusOrValue: Boolean(props.value),
    }
  }

  render() {
    const {
      type,
      label,
      description,
      error,
      onFocus,
      onBlur,
      simple,
      ...other
    } = this.props

    const labelElement = (
      <Label
        htmlFor={this.fieldId}
        error={this.state.hasFocusOrValue && error}
        moveDown={simple && !this.state.hasFocusOrValue}
      >
        {label}
      </Label>
    )

    return (
      <Container className={this.props.className}>
        {simple || labelElement}
        <TextWrapper error={error} {...other}>
          {simple && labelElement}
          <BaseInner
            as={type}
            id={this.fieldId}
            onFocus={e => {
              this.setState({ hasFocusOrValue: true })
              onFocus && onFocus(e)
            }}
            onBlur={e => {
              this.setState({ hasFocusOrValue: Boolean(e.target.value) })
              onBlur && onBlur(e)
            }}
            {...other}
          />
        </TextWrapper>
        <Description>{description}</Description>
      </Container>
    )
  }
}

Base.propTypes = {
  /** Field name */
  label: propTypes.string,

  /** help text */
  optionalDescription: propTypes.string,

  /** error to display, if any */
  optionalError: PropTypes.oneOf([propTypes.bool, propTypes.string]),

  /** what to display for the type, if children are not provided */
  optionalType: propTypes.string,

  /** what to display for the input element, if type is omitted */
  optionalChildren: propTypes.node,

  /** what the field says before it's filled out */
  optionalPlaceholder: propTypes.string,

  /** current text value */
  value: propTypes.string,

  /** function to run when the user types new text */
  onChange: propTypes.func,
}

Base.defaultProps = {
  theme,
}

const Input = props => <Base type="input" {...props} />
const TextareaDefault = props => <Base type="textarea" {...props} />

const Textarea = styled(TextareaDefault)`
  textarea {
    height: ${({ size }) => {
      return { s: 3, m: 5, l: 9, xl: 20 }[size || 'm']
    }}rem;
  }
`

Input.displayName = 'Input'
// Input.propTypes = Base.propTypes
Input.defaultProps = Base.defaultProps

Textarea.displayName = 'Textarea'
// Textarea.propTypes = Base.propTypes
Textarea.defaultProps = Base.defaultProps

export { Input, Textarea }
