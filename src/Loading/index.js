import React from 'react'
// import PropTypes from 'prop-types'
import theme from '../theme'
import loadGif from './load.gif'
import loadSvg from './load.svg'

const smilSupport = () => {
  return typeof window === 'undefined'
    ? true
    : window.document
        .createElementNS('http://www.w3.org/2000/svg', 'animate')
        .toString()
        .indexOf('SVG') > -1
}

const Loading = () => (
  <div style={{ width: '100%', textAlign: 'center' }}>
    <img src={smilSupport() ? loadSvg : loadGif} alt="" />
  </div>
)

Loading.displayName = 'Loading'
// Loading.propTypes = {}
Loading.defaultProps = {
  theme,
}
export default Loading
