import ProductsList from '../../components/ProductList'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRPGGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: gamesAcao } = useGetActionGamesQuery()
  const { data: gamesEsportes } = useGetSportGamesQuery()
  const { data: gamesSimulacao } = useGetSimulationGamesQuery()
  const { data: gamesLuta } = useGetFightGamesQuery()
  const { data: gamesRPG } = useGetRPGGamesQuery()

  if (gamesAcao && gamesEsportes && gamesSimulacao && gamesLuta && gamesRPG) {
    return (
      <>
        <ProductsList
          title={'Ação'}
          background={'gray'}
          games={gamesAcao}
          id="acao"
        ></ProductsList>
        <ProductsList
          title={'Esportes'}
          background={'black'}
          games={gamesEsportes}
          id="esportes"
        ></ProductsList>
        <ProductsList
          title={'Simulação'}
          background={'gray'}
          games={gamesSimulacao}
          id="simulacao"
        ></ProductsList>
        <ProductsList
          title={'Luta'}
          background={'black'}
          games={gamesLuta}
          id="luta"
        ></ProductsList>
        <ProductsList
          title={'RPG'}
          background={'gray'}
          games={gamesRPG}
          id="RPG"
        ></ProductsList>
      </>
    )
  }

  return <h4>Carregando</h4>
}

export default Categories
