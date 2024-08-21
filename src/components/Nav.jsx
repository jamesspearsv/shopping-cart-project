import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';
import CartButton from './CartButton.jsx';

function Nav({ cart }) {
  const [scroll, setScroll] = useState(window.scrollY);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // useEffect to monitor scroll position
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

  // Toggle menuOpen state
  function handleMenuToggle() {
    setMenuOpen((menuOpen) => !menuOpen);
  }

  return (
    <nav className={scrolled ? `${styles.nav} ${styles.scrolled}` : styles.nav}>
      <div className={styles.mobileMenu}>
        <button
          onClick={handleMenuToggle}
          className={styles.mobileToggle}
          style={menuOpen ? { transform: `rotate(45deg)` } : {}}
        >
          <div>+</div>
        </button>
      </div>
      <div className={menuOpen ? `${styles.menu} ${styles.open}` : styles.menu}>
        <ul>
          <li>
            <NavLink to="/" onClick={handleMenuToggle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/store" onClick={handleMenuToggle}>
              Store
            </NavLink>
          </li>
        </ul>
      </div>
      <CartButton cart={cart} />
    </nav>
  );
}

export default Nav;
