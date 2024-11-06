import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import GlobalCSS from './styles'
import Rotas from './pages/routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
