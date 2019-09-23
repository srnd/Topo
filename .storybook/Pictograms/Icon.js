import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import Icon from '@srnd/topocons'
import { Eco, Stop } from '@srnd/topocons/icons'
import { Text } from '../../src'
import styled from 'styled-components'

const IconPreview = styled.div`
  width: 250px;
  display: inline-block;
  text-align: center;
  margin-bottom: 2rem;
`

const IconName = styled.pre`
  font-size: 0.8rem;
`

storiesOf('Pictograms|Icons', module)
  .add('All Icons', () => (
    <>
      <Text.h1>All Icons</Text.h1>
      <Text.p>
        <Text.span strong>Note:</Text.span> icons are not included by default in
        Topo, you'll need to import @srnd/topocons.
      </Text.p>
      {Object.keys(Icon).map(name => {
        const E = Icon[name]
        return (
          <IconPreview>
            <Text.span fontSize="1.25em">
              <E />
            </Text.span>
            <IconName>&lt;Icon.{name} /&gt;</IconName>
          </IconPreview>
        )
      })}
    </>
  ))
  .add('Single Icon', () => (
    <>
      <Text.p>
        If you just want a single icon, you can use import {'{'} IconName {'}'}{' '}
        from @srnd/topocons/icons.
      </Text.p>
      <Stop />
    </>
  ))
  .add('Color', () => (
    <p style={{ color: 'green' }}>
      Use fill to change the color, or let it inheret from the current text
      color!
      <Eco />
    </p>
  ))
