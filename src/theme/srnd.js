import { createGlobalStyle } from 'styled-components'
import {
  filterProps,
  addAliases,
  createMediaQuery,
  makeCx,
  makeHexa,
  makeGradient,
} from './helpers'

const palette = {
  red: '#ff686b',
  redLight: '#ffe0e1',
  redLightest: '#ffebeb',
  green: '#84dcc6',
  greenLight: '#c3eee3',
  greenLightest: '#ebf9f6',
  blue: '#3f97cc',
  blueLight: '#aad1e9',
  blueLightest: '#ebf4fa',
  white: '#fff',
  grayDark: '#8a8a8a',
  gray: '#bdbdbd',
  grayLight: '#e6e6e6',
  grayLightest: '#f9f9f9',
  black: '#484848',
  vantablack: '#000000',
}

const brand = {
  primary: palette.red,
  accent: palette.blue,
  accentLight: palette.blueLight,
  success: palette.green,
  info: palette.blue,
  // warning: palette.orange[5],
  error: palette.red,
  // muted: grays.silver
}

export const colors = {
  ...brand,
  ...palette,
}

const aliases = ['sm', 'md', 'lg', 'xl']
export const breakpoints = [32, 48, 64, 80]

export const mediaQueries = {
  ...breakpoints.map(createMediaQuery),
  reduceMotion: '@media (prefers-reduced-motion: reduce)',
  reduceTransparency: '@media (prefers-reduced-transparency: reduce)',
}

addAliases(breakpoints, aliases)
addAliases(mediaQueries, aliases)

export const space = [0, 6, 12, 18, 24, 36, 72, 108, 144, 288, 432]

const emoji = '"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
export const font = `"Avenir Next", "Helvetica", "Arial", sans-serif,${emoji}`
export const mono = 'SFMono-Regular,"Roboto Mono",Menlo,monospace'

export const fontSizes = [13.5, 16, 18, 24, 27, 36, 48, 54, 72, 96]

// TODO: This needs to be recalculated based on a new design guidline

//export const fontSizes = [4.9, 7.33, 11, 16.5, 24.75, 37.125, 55.67, 83.5, 125.3, 188, 282, 423, 634, 951]

// const huge = fontSizes[6]
// const big = fontSizes[5]
// const h1 = fontSizes[4]
// const h2 = fontSizes[3]
// const h3 = fontSizes[2]
// const body = fontSizes[2]
// const Caption = fontSizes[1]

export const regular = 'regular'
export const bold = 'bold'

// styled-system's `fontWeight` function can hook into the `fontWeights` object
export const fontWeights = { regular, bold }

export const scaleFactor = 17 / 16
export const transition = `${3 / 16}s cubic-bezier(0.375, 0, 0.675, 1)`

// styled-system’s `borderRadius` function can hook into the `radii` object/array
export const pill = '9999px'
export const radii = ['0px', '2px', '4px', '8px', '16px', pill]
export const radius = '2px'
export const borderThickness = '1px'

export const shadowColor = 'rgba(0,0,0,0.13)'
export const baseShadow = '0 0 2px 0 rgba(0, 0, 0, 0.04),'
export const boxShadows = [
  baseShadow + `0 2px 2px 0 ${shadowColor}`,
  baseShadow + `1px 3px 4px 0 ${shadowColor}`,
  baseShadow + `0 12px 12px 0 ${shadowColor}`,
  baseShadow + `0 24px 24px 0 ${shadowColor}`,
]

export const GlobalStyle = createGlobalStyle`
  body {
    font-size: ${fontSizes[2]}px;
    font-family: ${font};
  }
`

export const cx = makeCx(colors)
export const hexa = makeHexa(cx, shadowColor)
export const gradient = makeGradient(cx)

const theme = {
  breakpoints,
  mediaQueries,
  space,
  mono,
  font,
  fontSizes,
  fontWeights,
  regular,
  bold,
  colors,
  radii,
  radius,
  borderThickness,
  pill,
  scaleFactor,
  transition,
  boxShadows,
  shadowColor,
  cx,
  hexa,
  gradient,
  filterProps,
  GlobalStyle,
}

export default theme
