import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Shop } from './pages/shop/Shop';
import { Cart } from './pages/cart/Cart';

import { Navbar } from './components/Navbar';
import { ShopContextProvider } from './context/shop-context';

function App() {

  
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />}/>
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
