import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Banner from './components/Banner'
import Header from './components/Header'
import GlobalCSS from './styles'
import path from 'path'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Banner></Banner>
  }
])

function App() {
  return (
    <>
      <GlobalCSS />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
