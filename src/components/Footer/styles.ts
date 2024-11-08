import styled from 'styled-components'
import { cores } from '../../styles'

const Container = styled.footer`
  background-color: ${cores.cinza};
  padding: 32px 0;
  font-size: 14px;
`

const Titulo = styled.h4`
  color: ${cores.branco_puro};
  font-size: 16px;
  font-weight: bold;
`

const Links = styled.ul`
  display: flex;
  margin-top: 16px;
`

const LinkItem = styled.a`
  color: ${cores.cinza_claro};
  text-decoration: none;
  margin-right: 8px;
`

const FooterSection = styled.div`
  margin-bottom: 64px;
`

export { Container, Titulo, Links, LinkItem, FooterSection }
