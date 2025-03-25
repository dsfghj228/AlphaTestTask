import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductsPage from './Pages/ProductsPage';
import Navbar from './Components/Navbar';
import ProductPage from './Pages/ProductPage';
import CreateProductPage from './Pages/CreateProductPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/products' element={<ProductsPage />}/>
        <Route path='/products/:id' element={<ProductPage />} />
        <Route path='/create-product' element={<CreateProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
