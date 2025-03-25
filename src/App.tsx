import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductsPage from './Pages/ProductsPage';
import Navbar from './Components/Navbar';
import ProductPage from './Pages/ProductPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/products' element={<ProductsPage />}/>
        <Route path='/products/:id' element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
