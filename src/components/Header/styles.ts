import { styled } from 'styled-components'
import { breakpoint, cores } from '../../styles'

const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media (max-width: ${breakpoint.tablet}) {
    margin-left: 0;
    display: block;
  }
`
const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;

  a {
    color: ${cores.branca};
    text-decoration: none;
    font-weight: bold;
  }
`

const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: block;
  }
`

const LinkItem = styled.li`
  margin-right: 16px;

  @media (max-width: ${breakpoint.tablet}) {
    margin-right: 0;

    a {
      display: block;
      padding: 16px 0;
      text-align: center;
    }
  }
`

const CartButton = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }

  @media (max-width: ${breakpoint.tablet}) {
    span {
      display: none;
    }
  }
`

const Hamburger = styled.div`
  width: 32px;

  span {
    height: 2px;
    display: block;
    width: 100%;
    background-color: ${cores.branca};
    margin-bottom: 4px;
  }

  @media (min-width: ${breakpoint.tablet}) {
    display: none;
  }
`

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    @media (max-width: ${breakpoint.tablet}) {
      flex: 1;
      justify-content: space-between;

      ${Links} {
        display: none;
      }
    }
  }
`

export default HeaderBar
export { Links, LinkItem, CartButton, Hamburger, HeaderRow, NavMobile }
