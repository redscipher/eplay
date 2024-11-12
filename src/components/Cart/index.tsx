import Button from '../Button'
import * as E from './styles'
import Tag from '../Tag'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../ProductList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((soma, valorAtual) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return (soma += valorAtual.prices.current!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <E.CartContainer className={isOpen ? 'is-open' : ''}>
      <E.default onClick={closeCart} />
      <E.SideBar>
        <ul>
          {items.map((item) => {
            return (
              <E.CartItem key={item.id}>
                <img src={item.media.thumbnail} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <Tag>{item.details.category}</Tag>
                  <Tag>{item.details.system}</Tag>
                  <span>{formataPreco(item.prices.current)}</span>
                </div>
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                ></button>
              </E.CartItem>
            )
          })}
        </ul>
        <E.Quantity>{items.length} jogo(s) no carrinho</E.Quantity>
        <E.Prices>
          Total de {formataPreco(getTotalPrice())}{' '}
          <span>Em até 6x sem juros</span>
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
