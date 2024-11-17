import { ButtonContainer, ButtonLink } from './styels'

type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variant?: 'primary' | 'secondary'
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant = 'primary'
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonContainer
        type={type}
        title={title}
        onClick={onClick}
        variant={variant}
      >
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
