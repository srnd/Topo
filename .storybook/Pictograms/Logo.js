import React from 'react'
import { storiesOf } from '@storybook/react'
import { BoxingGlove, Bowling } from '@srnd/topomoji/activity'
import { Logo } from '../../src'
import styled from 'styled-components'

const LogoPreview = styled.div`
  width: 500px;
  display: inline-block;
  text-align: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.red};
`

const LogoName = styled.pre`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.black};
`

storiesOf('Pictograms|Logos', module)
  .add('CodeDay', () => (
    <>
      <LogoPreview>
        <Logo.CodeDayHeart />
        <LogoName>&lt;Logo.CodeDayHeart /&gt;</LogoName>
      </LogoPreview>
    </>
  ))
  .add('SRND', () => (
    <>
      <LogoPreview>
        <Logo.Srnd />
        <LogoName>&lt;Logo.Srnd /&gt;</LogoName>
      </LogoPreview>
    </>
  ))
