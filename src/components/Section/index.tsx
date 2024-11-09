import { Container, Title } from './styles'

type Props = {
  title: string
  background: 'black' | 'gray'
  children: JSX.Element
}

const Section = ({ title, background, children }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <Title>{title}</Title>
        {children}
      </div>
    </Container>
  )
}

export default Section
export type { Props }