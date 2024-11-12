import { createGlobalStyle } from 'styled-components'

const cores = {
  verde: '#10AC84',
  preta: '#111111',
  branca: '#EEEEEE',
  cinza: '#333',
  branco_puro: '#fff',
  cinza_claro: '#A3A3A3'
}

const breakpoint = {
  desktop: '1024px',
  tablet: '768px'
}

const GlobalCSS = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.preta};
    color: ${cores.branca};
    padding-top: 40px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoint.desktop}) {
      max-width: 80%;
    }
  }
`

export default GlobalCSS
export { cores, breakpoint }
