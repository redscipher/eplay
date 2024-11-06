class Game {
  categoria: string
  descricao: string
  image: string
  infos: string[]
  system: string
  title: string
  id: number

  constructor(
    categoria: string,
    descricao: string,
    image: string,
    infos: string[],
    system: string,
    title: string,
    id: number
  ) {
    this.categoria = categoria
    this.descricao = descricao
    this.image = image
    this.infos = infos
    this.system = system
    this.title = title
    this.id = id
  }
}

export default Game
