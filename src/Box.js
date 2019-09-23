import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Confetti from 'react-dom-confetti'
import {
  space,
  width,
  color,
  fontSize,
  textAlign,
  maxWidth,
  minWidth,
  maxHeight,
  minHeight,
  propTypes,
} from 'styled-system'
import theme from './theme'

const Base = props => {
  return <div {...props} />
}

const Box = styled(Base)(
  [],
  space,
  width,
  color,
  fontSize,
  textAlign,
  maxWidth,
  minWidth,
  maxHeight,
  minHeight
)

Box.displayName = 'Box'
Box.header = Box.withComponent('header')
Box.main = Box.withComponent('main')
Box.article = Box.withComponent('article')
Box.section = Box.withComponent('section')
Box.footer = Box.withComponent('footer')
Box.wrapper = styled(Box)`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`

Box.defaultProps = {
  theme,
}

Box.propTypes = {
  ...propTypes.textAlign,
  ...propTypes.fontSize,
  ...propTypes.space,
  ...propTypes.color,
}

export default Box

export class ConfettiBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showConfetti: false,
    }
  }

  render() {
    const { confettiOnClick, children, onClick, ...props } = this.props

    return (
      <Box
        onClick={(e, f) => {
          confettiOnClick && this.showConfetti()
          return onClick(e, f)
        }}
        {...props}
      >
        {children}
        <Confetti
          active={this.state.showConfetti}
          config={{
            colors: [
              theme.colors.red,
              theme.colors.green,
              theme.colors.blue,
              theme.colors.gray,
            ],
          }}
        />
      </Box>
    )
  }

  showConfetti() {
    this.setState({ showConfetti: true })
    setTimeout(() => this.setState({ showConfetti: false }), 1000)
  }

  // TODO(@tylermenezes): Show confetti if props.confetti changed and props.confetti is now true.
}

ConfettiBox.displayName = 'ConfettiBox'
ConfettiBox.defaultProps = {
  ...Box.defaultProps,
  confettiOnClick: false,
}

ConfettiBox.propTypes = {
  ...Box.propTypes,
  confettiOnClick: PropTypes.bool,
}
