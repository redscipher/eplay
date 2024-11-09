import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductList'
import { useEffect, useState } from 'react'

interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const [promocoes, setPromocoes] = useState<Game[]>([])
  const [emBreve, setEmBreve] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
      .then((res) => res.json())
      .then((res) => setPromocoes(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
      .then((res) => res.json())
      .then((res) => setEmBreve(res))
  }, [])

  return (
    <>
      <Banner></Banner>
      <ProductsList
        title={'Promoções'}
        background={'gray'}
        games={promocoes}
      ></ProductsList>
      <ProductsList
        title={'Em breve'}
        background={'black'}
        games={emBreve}
      ></ProductsList>
    </>
  )
}

export default Home
export type { GalleryItem, Game }
