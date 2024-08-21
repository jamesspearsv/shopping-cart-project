import { useEffect, useState } from 'react';
import { Basket } from '../assets/Basket';
import styles from './CartButton.module.css';

function CartButton({ cart }) {
  const [itemsInCart, setItemsInCart] = useState();

  useEffect(() => {
    let items = 0;
    for (const item of cart) {
      items += item.quantity;
    }

    setItemsInCart(items);
    return console.log('unmounted');
  }, [cart]);

  return (
    <button className={styles.button}>
      {Basket}
      {itemsInCart > 0 && <span>{itemsInCart}</span>}
    </button>
  );
}

export default CartButton;
