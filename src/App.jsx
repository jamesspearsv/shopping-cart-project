import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import './App.css';

function App() {
  const [cart, setCart] = useState(
    localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
  );

  // Sync local storage with App state
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify([...cart]));
  }, [cart]);

  return (
    <>
      <Nav />
      <main>
        <Outlet context={[cart, setCart]} />
      </main>
    </>
  );
}

export default App;
