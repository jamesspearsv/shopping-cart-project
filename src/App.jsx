import { json, Outlet } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';

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
      <main>
        <Outlet context={[cart, setCart]} />
      </main>
    </>
  );
}

export default App;
