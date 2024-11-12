import Section from '../Section'
import zoom from '../../assets/images/mais-zoom1.png'
import play from '../../assets/images/play.png'
import fechar from '../../assets/images/fechar.png'

import Items, { Action, Item, Modal, ModalContent } from './styles'
import { useState } from 'react'
import { GalleryItem } from '../../pages/Home'

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
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
          {items.map((i, ind) => (
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
