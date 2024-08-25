import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Cart from './components/Cart';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [cart, setCart] = useState(
    localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
  );
  const [cartOpen, setCartOpen] = useState(false);

  // Sync local storage with App state
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify([...cart]));
  }, [cart]);

  return (
    <>
      <Nav cart={cart} setCartOpen={setCartOpen} />
      <Cart
        cart={cart}
        setCart={setCart}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
      />
      <main>
        <Outlet context={[cart, setCart]} />
      </main>
      <Footer />
    </>
  );
}

export default App;
