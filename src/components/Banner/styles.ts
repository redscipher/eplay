import styled from 'styled-components'
import bannerImg from '../../assets/images/banner-homem-aranha.png'
import TagContainer from '../Tag/styles'

const Imagem = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-image: url(${bannerImg});
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
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
