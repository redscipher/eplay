import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductList'
import Game from '../../models/Games'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import fifa from '../../assets/images/fifa.png'
import star_wars from '../../assets/images/star_wars.png'
import street_fighter from '../../assets/images/street_fighter.png'
import zelda from '../../assets/images/zelda.png'

const promocoes: Game[] = [
  {
    categoria: 'Ação',
    descricao:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: resident,
    infos: ['-10%', 'R$ 199,90'],
    system: 'Windows',
    title: 'Resident Evil 4 - Remake'
  },
  {
    categoria: 'Esporte',
    descricao:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    image: fifa,
    infos: ['-10%', 'R$ 99,90'],
    system: 'PS5',
    title: 'FIFA 23'
  },
  {
    categoria: 'RPG',
    descricao:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    image: diablo,
    infos: ['-10%', 'R$ 149,90'],
    system: 'Windows',
    title: 'Nome do jogo'
  },
  {
    categoria: 'Aventura',
    descricao:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    image: star_wars,
    infos: ['-10%', 'R$ 129,90'],
    system: 'Windows',
    title: 'Star Wars Jedi Survivor'
  }
]

const em_breve: Game[] = [
  {
    categoria: 'Luta',
    descricao:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    image: street_fighter,
    infos: ['05/10'],
    system: 'Windows',
    title: 'Street Fighter 6'
  },
  {
    categoria: 'RPG',
    descricao:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    image: zelda,
    infos: ['05/10'],
    system: 'Switch',
    title: 'The Legend of Zelda - TOK'
  }
]

const Home = () => {
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
        games={em_breve}
      ></ProductsList>
    </>
  )
}

export default Home
