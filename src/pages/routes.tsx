import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Categories from '../pages/Categories'
import Product from './Product'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/categorias" element={<Categories></Categories>}></Route>
      {/* cria um parametros p/ url: ':nome_parametro' */}
      <Route path="/produtos/:id" element={<Product></Product>}></Route>
    </Routes>
  )
}

export default Rotas
