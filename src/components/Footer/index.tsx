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
              <E.LinkItem>RPG</E.LinkItem>
            </li>
            <li>
              <E.LinkItem>Ação</E.LinkItem>
            </li>
            <li>
              <E.LinkItem>Aventura</E.LinkItem>
            </li>
            <li>
              <E.LinkItem>Esportes</E.LinkItem>
            </li>
            <li>
              <E.LinkItem>Simulação</E.LinkItem>
            </li>
            <li>
              <E.LinkItem>Estratégia</E.LinkItem>
            </li>
            <li>
              <E.LinkItem>FPS</E.LinkItem>
            </li>
          </E.Links>
        </E.FooterSection>
        <E.FooterSection>
          <E.Titulo>Acesso rápido</E.Titulo>
          <E.Links>
            <li>
              <E.LinkItem>Novidades</E.LinkItem>
            </li>
            <li>
              <E.LinkItem>Promoções</E.LinkItem>
            </li>
            <li>
              <E.LinkItem>Em breve</E.LinkItem>
            </li>
          </E.Links>
        </E.FooterSection>
        <p>{anoAtual} - &copy; E-PLAY Todos os direitos reservados</p>
      </div>
    </E.Container>
  )
}

export default Footer
