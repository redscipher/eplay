import Tag from '../Tag'
import * as E from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 92) + '...'
    }
    return descricao
  }

  return (
    <E.Card
      title={`Clique aqui para ver mais detalhes so o jogo ${title}`}
      to={`/produtos/${id}`}
    >
      <img src={image} alt={title} />
      <E.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </E.Infos>
      <E.Titulo>{title}</E.Titulo>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <E.Descricao>{getDescricao(description)}</E.Descricao>
    </E.Card>
  )
}

export default Product
