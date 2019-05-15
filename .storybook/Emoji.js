import React from 'react'
import { storiesOf } from '@storybook/react'
import * as activity from '@srnd/topomoji/activity'
import * as diversity from '@srnd/topomoji/diversity'
import * as flags from '@srnd/topomoji/flags'
import * as food from '@srnd/topomoji/food'
import * as nature from '@srnd/topomoji/nature'
import * as objects from '@srnd/topomoji/objects'
import * as people from '@srnd/topomoji/people'
import * as regional from '@srnd/topomoji/regional'
import * as symbols from '@srnd/topomoji/symbols'
import * as travel from '@srnd/topomoji/travel'
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

const showAllEmoji = (i, m) => (
  <div>
    <p>
      <strong>Note:</strong> emoji are not included by default in Topo, you'll
      need to add @srnd/topomoji and then import {'{'} EmojiName {'}'}{' '}
      @srnd/topomoji/{i}.
    </p>
    {Object.keys(m)
      .slice(0, 20)
      .map(name => {
        const E = m[name]
        return (
          <IconPreview>
            <E />
            <IconName>&lt;{name} /&gt;</IconName>
          </IconPreview>
        )
      })}
    <p>
      <em>
        <a
          href={`https://github.com/srnd/Topomoji/tree/master/${i}`}
          target="_blank"
        >
          Only the first 20 emoji are shown here for performance reasons. See
          all here.
        </a>
      </em>
    </p>
  </div>
)

storiesOf('Emoji', module)
  .add('Activity', () => showAllEmoji('activity', activity))
  .add('Diversity', () => showAllEmoji('diversity', diversity))
  .add('Flags', () => showAllEmoji('flags', flags))
  .add('Food', () => showAllEmoji('food', food))
  .add('Nature', () => showAllEmoji('nature', nature))
  .add('Objects', () => showAllEmoji('objects', objects))
  .add('People', () => showAllEmoji('people', people))
  .add('Regional', () => showAllEmoji('regional', regional))
  .add('Symbols', () => showAllEmoji('symbols', symbols))
  .add('Travel', () => showAllEmoji('travel', travel))
