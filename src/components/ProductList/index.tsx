import Game from '../../models/Games'
import Product from '../Product'
import * as E from './styles'

type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ title, background, games }: Props) => {
  return (
    <E.Container background={background}>
      <div className="container">
        <h2>{title}</h2>
        <E.List>
          {games.map((jogo) => {
            return (
              <Product
                key={jogo.title}
                title={jogo.title}
                category={jogo.categoria}
                system={jogo.system}
                description={jogo.descricao}
                infos={jogo.infos}
                image={jogo.image}
              ></Product>
            )
          })}
        </E.List>
      </div>
    </E.Container>
  )
}

export default ProductsList
export type { Props }
