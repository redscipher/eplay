import { Game } from '../../pages/Home'
import Product from '../Product'
import * as E from './styles'

type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProductsList = ({ title, background, games }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(formataPreco(game.prices.current))
    }

    return tags
  }

  return (
    <E.Container background={background}>
      <div className="container">
        <h2>{title}</h2>
        <E.List>
          {games.map((jogo) => {
            return (
              <Product
                key={jogo.name}
                title={jogo.name}
                category={jogo.details.category}
                system={jogo.details.system}
                description={jogo.description}
                infos={getGameTags(jogo)}
                image={jogo.media.thumbnail}
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
export { formataPreco }
