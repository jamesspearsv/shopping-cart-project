import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';
import { Basket } from '../assets/Basket.jsx';
import Button from './Button.jsx';

function Nav() {
  const [scroll, setScroll] = useState(window.scrollY);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // handle scroll
    function handleScroll() {
      scroll > 50 ? setScrolled(true) : setScrolled(false);
      setScroll(window.scrollY);
    }

    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);
    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scroll]);

  return (
    <nav className={scrolled ? `${styles.nav} ${styles.scrolled}` : styles.nav}>
      <ul className='flexRow'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/store'>Store</NavLink>
        </li>
      </ul>
      <button>{Basket}</button>
    </nav>
  );
}

export default Nav;
