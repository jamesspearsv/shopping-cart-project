import { useEffect, useState } from 'react';
import { Basket } from '../assets/Basket';
import styles from './CartButton.module.css';

function CartButton({ cart, setCartOpen }) {
  const [itemsInCart, setItemsInCart] = useState();

  useEffect(() => {
    let items = 0;
    for (const item of cart) {
      items += item.quantity;
    }

    setItemsInCart(items);
    return console.log('unmounted');
  }, [cart]);

  function handleClick(e) {
    e.preventDefault();
    setCartOpen(true);
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      {Basket}
      {itemsInCart > 0 && <span>{itemsInCart}</span>}
    </button>
  );
}

export default CartButton;
