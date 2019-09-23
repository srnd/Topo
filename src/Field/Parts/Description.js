import styled from 'styled-components'

export default styled.div`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  color: ${({ theme }) => theme.colors.grayDark};
  margin-top: ${({ theme }) => theme.space[1]}px;
`
