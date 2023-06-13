import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import Nav from './component/nav/Nav';
import QuemSomos from './pages/QuemSomos';
import ErrorPage from './pages/ErrorPage';
import ProductDetail from './component/product-detail/ProductDetail';




function App() {


  return (
    <div className='body'>
    <Nav />
      <Routes>
            <Route path="/" element={ <HomePage /> }/>
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/login" element={ <LoginPage /> }/>
            <Route path="/quem-somos" element={ <QuemSomos /> }/>
            <Route path = "*" element={<ErrorPage />} />
        </Routes>
    </div>
  )
}

export default App
