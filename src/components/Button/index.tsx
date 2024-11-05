import { ButtonContainer, ButtonLink } from './styels'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  } else {
    return (
      <ButtonLink to={to as string} title={title}>
        {children}
      </ButtonLink>
    )
  }
}

export default Button
export type { Props }
