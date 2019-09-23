import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from '@srnd/topocons'
import { Eco, Stop } from '@srnd/topocons/icons'
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
    <div>
      <p>
        <strong>Note:</strong> icons are not included by default in Topo, you'll
        need to import @srnd/topocons.
      </p>
      {Object.keys(Icon).map(name => {
        const E = Icon[name]
        return (
          <IconPreview>
            <E />
            <IconName>&lt;Icon.{name} /&gt;</IconName>
          </IconPreview>
        )
      })}
    </div>
  ))
  .add('Single Icon', () => (
    <div>
      <p>
        If you just want a single icon, you can use import {'{'} IconName {'}'}{' '}
        from @srnd/topocons/icons.
      </p>
      <Stop />
    </div>
  ))
  .add('Color', () => (
    <p style={{ color: 'green' }}>
      Use fill to change the color, or let it inheret from the current text
      color!
      <Eco />
    </p>
  ))
