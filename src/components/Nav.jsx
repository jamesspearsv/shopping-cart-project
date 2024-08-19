import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';
import CartButton from './CartButton.jsx';

function Nav() {
  const [scroll, setScroll] = useState(window.scrollY);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  function handleMenuOpen() {
    setMenuOpen((menuOpen) => !menuOpen);
  }

  return (
    <nav className={scrolled ? `${styles.nav} ${styles.scrolled}` : styles.nav}>
      <div className={styles.mobileMenu}>
        <button onClick={handleMenuOpen}>
          <div
            style={
              menuOpen
                ? {
                    transform: `rotate(45deg)`,
                  }
                : {}
            }
          >
            +
          </div>
        </button>
        <CartButton />
      </div>
      <div className={menuOpen ? `${styles.menu} ${styles.open}` : styles.menu}>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/store'>Store</NavLink>
          </li>
        </ul>
        <CartButton desktop />
      </div>
    </nav>
  );
}

export default Nav;
