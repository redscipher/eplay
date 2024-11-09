import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductList'
import { Game } from '../Home'

const Categories = () => {
  const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  const [gamesEsportes, setGamesEsportes] = useState<Game[]>([])
  const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
  const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  const [gamesRPG, setGamesRPG] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGamesAcao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGamesEsportes(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGamesSimulacao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGamesLuta(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGamesRPG(res))
  }, [])

  return (
    <>
      <ProductsList
        title={'Ação'}
        background={'gray'}
        games={gamesAcao}
      ></ProductsList>
      <ProductsList
        title={'Esportes'}
        background={'black'}
        games={gamesEsportes}
      ></ProductsList>
      <ProductsList
        title={'Simulação'}
        background={'gray'}
        games={gamesSimulacao}
      ></ProductsList>
      <ProductsList
        title={'Luta'}
        background={'black'}
        games={gamesLuta}
      ></ProductsList>
      <ProductsList
        title={'RPG'}
        background={'gray'}
        games={gamesRPG}
      ></ProductsList>
    </>
  )
}

export default Categories
