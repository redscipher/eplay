import HeaderBar, { LinkItem, Links, LinkCart } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => {
  return (
    <>
      <HeaderBar>
        <div>
          <img src={logo} alt="EPLAY" />
          <nav>
            <Links>
              <LinkItem>
                <a href="#">Categoria</a>
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
