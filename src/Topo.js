import React from 'react'
import PropTypes from 'prop-types'
import { propTypes } from 'styled-system'
import { ThemeProvider } from 'styled-components'
import { IntlProvider } from 'react-intl'
import { GlobalStyle, srndTheme } from './theme'

import { addLocaleData } from 'react-intl'
import { en, es } from '../translations'
import locale_en from 'react-intl/locale-data/en'
import locale_es from 'react-intl/locale-data/es'
import locale_th from 'react-intl/locale-data/th'
import locale_zh from 'react-intl/locale-data/zh'

const Topo = ({ theme, locale, ...props }) => {
  const ThemeStyle =
    typeof theme.GlobalStyle !== 'undefined' ? theme.GlobalStyle : null
  const messages = { en, es }
  addLocaleData([...locale_en, ...locale_es, ...locale_th, ...locale_zh])

  return (
    <ThemeProvider theme={theme} {...props}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <>
          <GlobalStyle />
          <ThemeStyle />
          {props.children}
        </>
      </IntlProvider>
    </ThemeProvider>
  )
}

Topo.propTypes = {
  theme: propTypes.object,
  locale: propTypes.string,
}

Topo.defaultProps = {
  theme: srndTheme,
  locale: 'en',
}

export default Topo
