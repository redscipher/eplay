import styled, { createGlobalStyle } from 'styled-components'

const cores = {
  verde: '#10AC84',
  preta: '#111111',
  branca: '#EEEEEE',
  cinza: '#333'
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
  }
`

const Tag = styled.div`
  width: 148px;
  height: 35px;
  top: 228px;
  left: 179px;
  gap: 0px;
  border-radius: 8px 0px 0px 0px;
  opacity: 0px;
`

export default GlobalCSS
export { cores, Tag }
