import * as E from './styles'

type Props = {
  children: JSX.Element
  title: string
}

const Card = ({ children, title }: Props) => {
  return (
    <E.default>
      <h2>{title}</h2>
      {children}
    </E.default>
  )
}

export default Card
