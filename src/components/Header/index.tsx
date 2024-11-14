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
                <LinkItem>
                  <Link to="/categorias">Categorias</Link>
                </LinkItem>
                <LinkItem>
                  <a href="#">Novidades</a>
                </LinkItem>
                <LinkItem>
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
            <LinkItem>
              <Link to="/categorias">Categorias</Link>
            </LinkItem>
            <LinkItem>
              <a href="#">Novidades</a>
            </LinkItem>
            <LinkItem>
              <a href="#">Promoçoes</a>
            </LinkItem>
          </Links>
        </NavMobile>
      </HeaderBar>
    </>
  )
}

export default Header
