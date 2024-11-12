import Button from '../Button'
import * as E from './styles'
import starwars from '../../assets/images/star_wars.png'
import Tag from '../Tag'

const Cart = () => {
  return (
    <E.CartContainer>
      <E.default></E.default>
      <E.SideBar>
        <ul>
          <E.CartItem>
            <img src={starwars} alt="Foto do jogo" />
            <div>
              <h3>Nome do jogo</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 150,00</span>
            </div>
            <button type="button"></button>
          </E.CartItem>
          <E.CartItem>
            <img src={starwars} alt="Foto do jogo" />
            <div>
              <h3>Nome do jogo</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 150,00</span>
            </div>
            <button type="button"></button>
          </E.CartItem>
        </ul>
        <E.Quantity>2 jogo(s) no carrinho</E.Quantity>
        <E.Prices>
          Total de R$ 250,00 <span>Em até 6x sem juros</span>
        </E.Prices>
        <Button
          type={'button'}
          title={'Clique aqui para continuar com a compra'}
        >
          Continuar com a compra
        </Button>
      </E.SideBar>
    </E.CartContainer>
  )
}

export default Cart
