import * as E from './styles'

const Footer = () => {
  const anoAtual = new Date().getFullYear()

  return (
    <E.Container>
      <div className="container">
        <E.FooterSection>
          <E.Titulo>Categorias</E.Titulo>
          <E.Links>
            <li>
              <E.LinkItem
                title="Clique aqui para acessar jogos de RPG"
                to="/categorias#RPG"
              >
                RPG
              </E.LinkItem>
            </li>
            <li>
              <E.LinkItem
                title="Clique aqui para acessar jogos de ação"
                to="/categorias#acao"
              >
                Ação
              </E.LinkItem>
            </li>
            <li>
              <E.LinkItem
                title="Clique aqui para acessar jogos de esportes"
                to="/categorias#esportes"
              >
                Esportes
              </E.LinkItem>
            </li>
            <li>
              <E.LinkItem
                title="Clique aqui para acessar jogos de simulação"
                to="/categorias#simulacao"
              >
                Simulação
              </E.LinkItem>
            </li>
          </E.Links>
        </E.FooterSection>
        <E.FooterSection>
          <E.Titulo>Acesso rápido</E.Titulo>
          <E.Links>
            <li>
              <E.LinkItem
                title="Clique aqui para acessar promoções"
                to="/#on-sale"
              >
                Promoções
              </E.LinkItem>
            </li>
            <li>
              <E.LinkItem
                title="Clique aqui para acessar aba em-breve"
                to="/#coming-soon"
              >
                Em breve
              </E.LinkItem>
            </li>
          </E.Links>
        </E.FooterSection>
        <p>{anoAtual} - &copy; E-PLAY Todos os direitos reservados</p>
      </div>
    </E.Container>
  )
}

export default Footer
