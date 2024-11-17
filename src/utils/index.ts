import { Game } from '../pages/Home'

const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const getTotalPrice = (items: Game[]) => {
  return items.reduce((soma, valorAtual) => {
    if (valorAtual.prices.current) {
      return (soma += valorAtual.prices.current)
    } else {
      return 0
    }
  }, 0)
}

export { formataPreco, getTotalPrice }
