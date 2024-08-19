import { Basket } from '../assets/Basket';
import styles from './CartButton.module.css';

function CartButton({ desktop }) {
  return (
    <button className={`${styles.button} ${desktop ? styles.desktop : ''}`}>
      {Basket}
    </button>
  );
}

export default CartButton;
