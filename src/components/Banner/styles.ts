import styled from 'styled-components'
import TagContainer from '../Tag/styles'

type Props = {
  url: string
}

const Imagem = styled.div<Props>`
  width: 100%;
  height: 560px;
  display: block;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  position: relative;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 1;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
`

const Titulo = styled.h2`
  font-size: 36px;
  max-width: 450px;
`

const Precos = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`

export { Imagem, Titulo, Precos }
