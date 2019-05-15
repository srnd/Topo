import React from 'react'
import { storiesOf } from '@storybook/react'
import { BoxingGlove, Bowling } from '@srnd/topomoji/activity'
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

storiesOf('Pictograms|Emoji', module).add('All Emoji', () => (
  <>
    <p>
      Emoji are not included by default in Topo, you'll need to add
      @srnd/topomoji and then import {'{'} EmojiName {'}'}{' '}
      @srnd/topomoji/emojiset.
    </p>
    <IconPreview>
      <BoxingGlove />
      <IconName>&lt;BoxingGlove /&gt;</IconName>
    </IconPreview>
    <IconPreview>
      <Bowling />
      <IconName>&lt;Bowling /&gt;</IconName>
    </IconPreview>
  </>
))
