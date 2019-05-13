import React from 'react'
import styled, { css } from 'styled-components'
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
      Inner,
      label,
      description,
      error,
      onFocus,
      onBlur,
      ...other
    } = this.props
    return (
      <Container className={this.props.className}>
        <TextWrapper error={error} {...other}>
          <Label
            htmlFor={this.fieldId}
            error={this.state.hasFocusOrValue && error}
            moveDown={!this.state.hasFocusOrValue}
          >
            {label}
          </Label>
          <Inner
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

Base.defaultProps = {
  theme,
}

const Input = props => (
  <Base Inner={BaseInner.withComponent('input')} {...props} />
)
const Textarea = props => (
  <Base Inner={BaseInner.withComponent('textarea')} {...props} />
)

Input.displayName = 'Input'
Input.propTypes = Base.propTypes
Input.defaultProps = Base.defaultProps

Textarea.displayName = 'Textarea'
Textarea.propTypes = Base.propTypes
Textarea.defaultProps = Base.defaultProps

export { Input, Textarea }
