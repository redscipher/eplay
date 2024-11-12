import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductList'
import { useEffect, useState } from 'react'
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

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
  const { data: promocoes, isLoading: estaCarregandoPromo } =
    useGetOnSaleQuery()
  const { data: emBreve, isLoading: estaCarregandoEB } = useGetSoonQuery()

  if (promocoes && emBreve) {
    return (
      <>
        <Banner></Banner>
        <ProductsList
          title={'Promoções'}
          background={'gray'}
          games={promocoes}
          id="on-sale"
        ></ProductsList>
        <ProductsList
          title={'Em breve'}
          background={'black'}
          games={emBreve}
          id="coming-soon"
        ></ProductsList>
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
export type { GalleryItem, Game }
