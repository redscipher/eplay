import TagContainer from './styles'

type Props = {
  size?: 'small' | 'big'
  children: string
}

const Tag = ({ size = 'small', children }: Props) => {
  return <TagContainer size={size}>{children}</TagContainer>
}

export default Tag
export type { Props }
