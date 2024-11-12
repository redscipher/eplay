import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductList'
import { Game } from '../Home'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRPGGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: gamesAcao, isLoading: estaCarregandoAcao } =
    useGetActionGamesQuery()
  const { data: gamesEsportes, isLoading: estaCarregandoEsportes } =
    useGetSportGamesQuery()
  const { data: gamesSimulacao, isLoading: estaCarregandoSimu } =
    useGetSimulationGamesQuery()
  const { data: gamesLuta, isLoading: estaCarregandoLuta } =
    useGetFightGamesQuery()
  const { data: gamesRPG, isLoading: estaCarregandoRPG } = useGetRPGGamesQuery()

  if (gamesAcao && gamesEsportes && gamesSimulacao && gamesLuta && gamesRPG) {
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

  return <h4>Carregando</h4>
}

export default Categories
