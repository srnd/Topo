import React from 'react'
import styled from 'styled-components'
import Text from './Text'
import TopoLink from './Link'

export const Link = ({ children, as, href, target, ...other }) => (
  <Text as="li" {...other}>
    <TopoLink href={href} target={target}>
      {children}
    </TopoLink>
  </Text>
)

export const Bottom = styled.ul`
  padding: 0;
  list-style-type: none;
  color: ${({ theme }) => theme.colors.gray};
  li {
    font-size: ${({ theme }) => theme.fontSizes[0]}px;
  }
`

export default {
  Link,
  Bottom,
}
