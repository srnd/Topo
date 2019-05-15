import React, { Fragment } from 'react'
import {
  ThemeProvider as Root,
  createGlobalStyle,
  css,
} from 'styled-components'
import PropTypes from 'prop-types'
import theme from './theme'

const fontsCss = css`
  @font-face {
    font-family: 'Avenir Next';
    src: url(https://srnd-cdn.net/fonts/avenir-next/hinted-AvenirNext-Italic.eot);
    src: url(https://srnd-cdn.net/fonts/avenir-next/hinted-AvenirNext-Italic.eot?#iefix)
        format('embedded-opentype'),
      url(https://srnd-cdn.net/fonts/avenir-next/hinted-AvenirNext-Italic.woff)
        format('woff'),
      url(https://srnd-cdn.net/fonts/avenir-next/hinted-AvenirNext-Italic.ttf)
        format('truetype');
    font-weight: 400;
    font-style: italic;
  }
  @font-face {
    font-family: 'Avenir Next';
    src: url(https://srnd-cdn.net/fonts/avenir-next/hinted-AvenirNext-Regular.eot);
    src: url(https://srnd-cdn.net/fonts/avenir-next/hinted-AvenirNext-Regular.eot?#iefix)
        format('embedded-opentype'),
      url(https://srnd-cdn.net/fonts/avenir-next/hinted-AvenirNext-Regular.woff)
        format('woff'),
      url(https://srnd-cdn.net/fonts/avenir-next/hinted-AvenirNext-Regular.ttf)
        format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Avenir Next';
    src: url(https://srnd-cdn.net/fonts/avenir-next/hinted-AvenirNext-Bold.eot);
    src: url(https://srnd-cdn.net/fonts/avenir-next/hinted-AvenirNext-Bold.eot?#iefix)
        format('embedded-opentype'),
      url(https://srnd-cdn.net/fonts/avenir-next/hinted-AvenirNext-Bold.woff)
        format('woff'),
      url(https://srnd-cdn.net/fonts/avenir-next/hinted-AvenirNext-Bold.ttf)
        format('truetype');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Avenir Next';
    src: url(https://srnd-cdn.net/fonts/avenir-next/hinted-AvenirNext-Medium.eot);
    src: url(https://srnd-cdn.net/fonts/avenir-next/hinted-AvenirNext-Medium.eot?#iefix)
        format('embedded-opentype'),
      url(https://srnd-cdn.net/fonts/avenir-next/hinted-AvenirNext-Medium.woff)
        format('woff'),
      url(https://srnd-cdn.net/fonts/avenir-next/hinted-AvenirNext-Medium.ttf)
        format('truetype');
    font-weight: 500;
    font-style: normal;
  }
`

const GlobalStyle = createGlobalStyle`
  ${fontsCss}
  * {
    box-sizing: border-box;
    font-weight: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  html,
  body {
    min-height: 100%;
    min-width: 100%;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: ${theme.fontSizes[2]}px;
    font-family: ${theme.font};
    line-height: 1.375;
    position: relative;
    height: 100%;
    max-height: 100%;
    width: 100%;
  }
  a {
    color: currentColor;
    text-decoration: none;
  }
  svg {
    fill: currentColor;
  }
  textarea {
    resize: none;
  }
  strong {
    font-weight: bold;
  }
`

const ThemeProvider = ({ theme, ...props }) => {
  createGlobalStyle([], fontsCss)
  return (
    <Root
      theme={theme}
      {...props}
      children={
        <Fragment>
          <GlobalStyle />
          {props.children}
        </Fragment>
      }
    />
  )
}

ThemeProvider.propTypes = {
  theme: PropTypes.object,
}

ThemeProvider.defaultProps = {
  theme,
}

export default ThemeProvider
