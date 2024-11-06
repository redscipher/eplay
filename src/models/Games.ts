class Game {
  categoria: string
  descricao: string
  image: string
  infos: string[]
  system: string
  title: string

  constructor(
    categoria: string,
    descricao: string,
    image: string,
    infos: string[],
    system: string,
    title: string
  ) {
    this.categoria = categoria
    this.descricao = descricao
    this.image = image
    this.infos = infos
    this.system = system
    this.title = title
  }
}

export default Game
