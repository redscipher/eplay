import styled from 'styled-components'
import { Props } from '.'
import { breakpoint, cores } from '../../styles'
import { Card } from '../Product/styles'

const Container = styled.div<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? cores.preta : cores.cinza};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? cores.cinza : cores.preta};
  }
`

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  margin-top: 40px;

  @media (max-width: ${breakpoint.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoint.tablet}) {
    grid-template-columns: 1fr;
  }
`

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`

export { Container, List, Title }
