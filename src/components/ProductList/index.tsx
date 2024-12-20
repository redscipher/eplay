import { Game } from '../../pages/Home'
import { formataPreco } from '../../utils'
import Product from '../Product'
import * as E from './styles'

type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
  id?: string
}

const ProductsList = ({ title, background, games, id }: Props) => {
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
    <E.Container id={id} background={background}>
      <div className="container">
        <h2>{title}</h2>
        <E.List>
          {games.map((jogo) => {
            return (
              <li key={jogo.name}>
                <Product
                  id={jogo.id}
                  title={jogo.name}
                  category={jogo.details.category}
                  system={jogo.details.system}
                  description={jogo.description}
                  infos={getGameTags(jogo)}
                  image={jogo.media.thumbnail}
                ></Product>
              </li>
            )
          })}
        </E.List>
      </div>
    </E.Container>
  )
}

export default ProductsList
export type { Props }
