import styled from 'styled-components'
import banner from '../../assets/images/fundo_hogwarts.png'
import { cores } from '../../styles'
import TagContainer from '../Tag/styles'

type Props = {
  url: string
}

const Banner = styled.div<Props>`
  display: block;
  height: 480px;
  width: 100%;

  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  position: relative;

  padding-top: 16px;

  ${TagContainer} {
    margin-right: 8px;
  }

  &:after {
    content: '';
    position: absolute;
    background-color: rgba(0, 0, 0, 0.56);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0;
  }

  .container {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`

const Infos = styled.div`
  padding: 16px;
  background-color: ${cores.preta};
  max-width: 290px;
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`

export default Banner
export { Infos }
