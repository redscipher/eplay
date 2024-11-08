import styled from 'styled-components'
import { cores } from '../../styles'

const Items = styled.ul`
  display: flex;
`

const Item = styled.li`
  margin-right: 16px;

  img {
    border: 2px solid ${cores.branca};
    border-radius: 8px;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
`

export default Items
export { Item }
