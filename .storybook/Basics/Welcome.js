import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { Box, Flex, Heading, Text, Link, Button } from '../../src'
import styled from 'styled-components'

const List = Box.withComponent('ul')
const Item = Text.withComponent('li')
const Code = Text.withComponent('pre')

storiesOf('Basics|👋 Welcome!', module).add('About Topo', () => (
  <Fragment>
    <Text as="h1" f={6}>
      Welcome!
    </Text>
    <Text f={3} my={2}>
      This is <Link as="a" href="https://srnd.org" underline children="SRND" />
      ’s Design System.
    </Text>
    <Text>It’s a collection of React components designed to:</Text>
    <List>
      <Item>Descrese the speed of design and development</Item>
      <Item>
        Allow for the easy iteration of our brand guidelines across all products
      </Item>
    </List>
    <Text>To use it, just</Text>
    <Code bg="blueLightest" p={3} my={3}>
      yarn add @srnd/topo
    </Code>
    <Flex align="center" wrap>
      <Button href="https://github.com/srnd/topo" mr={2} children="GitHub" />
      <Button
        href="https://www.npmjs.com/package/@srnd/topo"
        inverted
        children="npm"
      />
    </Flex>
    <Flex align="center" mt={4}>
      <Text>- @SRND Team</Text>
    </Flex>
  </Fragment>
))
