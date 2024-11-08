import Section from '../Section'
import zelda from '../../assets/images/zelda.png'
import homem_aranha from '../../assets/images/banner-homem-aranha.png'
import Items, { Item } from './styles'

const Gallery = () => {
  return (
    <Section title="Galeria" background="black">
      <Items>
        <Item>
          <img src={zelda} alt="Imagem do jogo" />
        </Item>
        <Item>
          <img src={homem_aranha} alt="Imagem do jogo" />
        </Item>
        <Item>
          <img src={zelda} alt="Imagem do jogo" />
        </Item>
        <Item>
          <img src={zelda} alt="Imagem do jogo" />
        </Item>
      </Items>
    </Section>
  )
}

export default Gallery
