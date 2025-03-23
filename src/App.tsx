import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductsPage from './Pages/ProductsPage';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/products' element={<ProductsPage />}/>
      </Routes>
    </div>
  );
}

export default App;
