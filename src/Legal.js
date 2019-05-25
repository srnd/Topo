import React from 'react'
import styled from 'styled-components'
import { Promise, ShieldOk } from '@srnd/topocons/icons'
import Text from './Text'
import Link from './Link'
import Box from './Box'
import Navigation from './Navigation'
import { FormattedMessage } from 'react-intl'

const LegalIcon = styled(Box)`
  float: left;
  font-size: ${({ theme }) => theme.fontSizes[0] * 3}px;
  margin-right: ${({ theme }) => theme.space[1]}px;
`

const Nagbar = styled(Box)`
  background-color: ${({ theme }) => theme.colors.grayLightest};
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.grayDark};
  padding: ${({ theme }) => theme.space[2]}px 0;
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
`

const MoreInfo = () => (
  <Link href="https://www.srnd.org/privacy" target="_blank">
    <FormattedMessage
      id="legal.more-info"
      description="Provides a link to additional information about SRND's privacy policy."
    />
  </Link>
)

const Pii = props => (
  <Box color="grayDark" maxWidth={1000} {...props}>
    <LegalIcon>
      <Promise />
    </LegalIcon>
    <Text.p fontSize={0}>
      <FormattedMessage
        id="legal.pii"
        description="Shown under forms that collect personally identifying information."
      />
      &nbsp;
      <MoreInfo />
    </Text.p>
  </Box>
)

const Financial = props => (
  <Box color="grayDark" maxWidth={1000} {...props}>
    <LegalIcon>
      <ShieldOk />
    </LegalIcon>
    <Text.p fontSize={0}>
      <FormattedMessage
        id="legal.financial"
        description="Shown under forms that collect financial information."
      />
      &nbsp;
      <MoreInfo />
    </Text.p>
  </Box>
)

// TODO(@tylermenezes): Add accept button
const GdprNagbar = ({ onConfirm }) => (
  <Nagbar>
    <Box.wrapper>
      <FormattedMessage
        id="legal.gdpr-nagbar"
        description="Shown at the top of all pages."
      />
    </Box.wrapper>
  </Nagbar>
)

const Links = () => (
  <Navigation.Bottom>
    <Navigation.Link href="https://www.srnd.org/privacy" target="_blank">
      <FormattedMessage
        id="legal.links.privacy"
        description="Link to privacy page; must mention both privacy and cookies."
      />
    </Navigation.Link>
    <Navigation.Link href="https://www.srnd.org/conduct" target="_blank">
      <FormattedMessage
        id="legal.links.conduct"
        description="Link to SRND's policies describing how participants must behave."
      />
    </Navigation.Link>
    <Navigation.Link href="https://www.srnd.org/trademarks" target="_blank">
      <FormattedMessage
        id="legal.links.trademarks"
        description="Link to SRND's list of trademark registrations."
      />
    </Navigation.Link>
  </Navigation.Bottom>
)

export default {
  Pii,
  Financial,
  GdprNagbar,
  Links,
}
