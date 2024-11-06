import Tag from '../Tag'
import * as E from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image
}: Props) => {
  return (
    <E.Card>
      <img src={image} alt={title} />
      <E.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </E.Infos>
      <E.Titulo>{title}</E.Titulo>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <E.Descricao>{description}</E.Descricao>
    </E.Card>
  )
}

export default Product
