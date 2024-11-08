import HeaderBar, { LinkItem, Links, LinkCart } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <HeaderBar>
        <div>
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
        <LinkCart>
          0 - Produto(s)
          <img src={carrinho} alt="carrinho" />
        </LinkCart>
      </HeaderBar>
    </>
  )
}

export default Header
