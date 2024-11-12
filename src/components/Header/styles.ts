import { styled } from 'styled-components'
import { breakpoint, cores } from '../../styles'

const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${cores.branca};
    text-decoration: none;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }

  @media (max-width: ${breakpoint.tablet}) {
    display: none;
  }
`

const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

const LinkItem = styled.li`
  margin-right: 16px;
`

const CartButton = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }
`

export default HeaderBar
export { Links, LinkItem, CartButton }
