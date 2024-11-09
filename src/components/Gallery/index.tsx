import Section from '../Section'
import homem_aranha from '../../assets/images/banner-homem-aranha.png'
import hogwarts from '../../assets/images/fundo_hogwarts.png'
import zoom from '../../assets/images/mais-zoom1.png'
import play from '../../assets/images/play.png'
import fechar from '../../assets/images/fechar.png'

import Items, { Action, Item, Modal, ModalContent } from './styles'
import { useState } from 'react'

interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

type Props = {
  defaultCover: string
  name: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: homem_aranha
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/uHGShqcAHlQ?si=hOXZFZ_yemKUhsKD'
  }
]

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((i, ind) => (
            <Item
              key={i.url}
              onClick={() =>
                setModal({
                  isVisible: true,
                  type: i.type,
                  url: i.url
                })
              }
            >
              <img src={getMediaCover(i)} alt={`Midia ${ind + 1} de ${name}`} />
              <Action>
                <img src={getMediaIcon(i)} alt="Clique para maximar a midia" />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={fechar}
              alt="Icone de fechar"
              onClick={() => closeModal()}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt="Imagem do Jogo" />
          ) : (
            <iframe src={modal.url} frameBorder={0}></iframe>
          )}
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default Gallery
