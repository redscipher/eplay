import HeaderBar, {
  LinkItem,
  Links,
  CartButton,
  Hamburger,
  HeaderRow,
  NavMobile
} from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)

  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <HeaderBar>
        <HeaderRow>
          <div>
            <Hamburger onClick={() => setMenuOpened(!menuOpened)}>
              <span></span>
              <span></span>
              <span></span>
            </Hamburger>
            <Link to="/">
              <img src={logo} alt="EPLAY" />
            </Link>
            <nav>
              <Links>
                <LinkItem title="Clique aqui para acessar categorias">
                  <Link to="/categorias">Categorias</Link>
                </LinkItem>
                <LinkItem title="Clique aqui para acessar novidades">
                  <a href="#">Novidades</a>
                </LinkItem>
                <LinkItem title="Clique aqui para acessar promoções">
                  <a href="#">Promoçoes</a>
                </LinkItem>
              </Links>
            </nav>
          </div>
          <CartButton onClick={openCart}>
            {items.length} <span> - Produto(s)</span>
            <img src={carrinho} alt="carrinho" />
          </CartButton>
        </HeaderRow>
        <NavMobile className={menuOpened ? 'is-open' : ''}>
          <Links>
            <LinkItem title="Clique aqui para acessar categorias">
              <Link to="/categorias" onClick={() => setMenuOpened(false)}>
                Categorias
              </Link>
            </LinkItem>
            <LinkItem title="Clique aqui para acessar novidades">
              <HashLink to="/#coming-soon" onClick={() => setMenuOpened(false)}>
                Novidades
              </HashLink>
            </LinkItem>
            <LinkItem title="Clique aqui para acessar promoções">
              <HashLink to="/#on-sale" onClick={() => setMenuOpened(false)}>
                Promoçoes
              </HashLink>
            </LinkItem>
          </Links>
        </NavMobile>
      </HeaderBar>
    </>
  )
}

export default Header
