import Button from '../Button'
import Tag from '../Tag'
import { Imagem, Titulo, Precos } from './styles'
import { useGetFeaturedGamesQuery } from '../../services/api'
import { formataPreco } from '../../utils'

const Banner = () => {
  const { data: game } = useGetFeaturedGamesQuery()

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Imagem url={game.media.cover as string}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game?.name}</Titulo>
          <Precos>
            De <span>{formataPreco(game.prices.old)}</span> <br />
            por apenas {formataPreco(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/produtos/${game.id}`}
          title="Clique aqui para aproveitar a oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
