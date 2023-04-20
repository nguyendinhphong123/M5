import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import ProductAdd from './pages/ProductAdd';
import ProductEdit from './pages/ProductEdit';
import ProductShow from './pages/ProductShow';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Products/>} />
            <Route path="/products/:id/edit" element={<ProductEdit />} />
            <Route path="/products/:id" element={<ProductShow/>} />
            <Route path="/products/create" element={<ProductAdd/>} /> 
          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
