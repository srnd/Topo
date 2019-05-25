import { omit, includes, get } from 'lodash'

export const filterProps = props =>
  omit(props, [
    'theme',
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'color',
    'bg',
    'fill',
    'fontSize',
    'f',
    'image',
    'maxWidth',
    'bold',
    'regular',
    'caps',
    'wrap',
    'size',
    'height',
    'boxShadowSize',
  ])

export const createMediaQuery = n => `@media screen and (min-width:${n}em)`

export const addAliases = (arr, aliases) =>
  aliases.forEach((key, i) =>
    Object.defineProperty(arr, key, {
      enumerable: false,
      get() {
        return this[i]
      },
    })
  )

export const makeCx = colors => key => get(colors, key, key)

export const makeHexa = (cx, shadowColor) => (color, alpha) => {
  const hex = cx(color)
  if (!includes(hex, '#')) return shadowColor
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16)

  if (alpha >= 0) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  } else {
    return `rgb(${r}, ${g}, ${b})`
  }
}

export const makeGradient = cx => (color1, color2) =>
  `radial-gradient(
    ellipse farthest-corner at top left,
    ${cx(color1)} 0%, ${cx(color2)} 100%
  )`
