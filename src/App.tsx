import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductsPage from './Pages/ProductsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/products' element={<ProductsPage />}/>
      </Routes>
    </div>
  );
}

export default App;
