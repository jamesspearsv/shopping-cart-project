import Button from './Button';
import ItemCard from '../components/ItemCard';
import styles from './Cart.module.css';

function Cart({ cart, setCart, cartOpen, setCartOpen }) {
  function handleClick(e) {
    e.preventDefault();
    setCartOpen(false);
  }

  function sumTotal() {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return Math.round(total * 100) / 100;
  }

  const total = sumTotal();

  return (
    <div
      className={`${styles.cart} ${cartOpen ? styles.visible : styles.hidden}`}
    >
      <div className={styles.headingContainer}>
        <Button
          content={'+'}
          style={{ transform: 'rotate(45deg)', margin: 'auto' }}
          className={styles.button}
          onClick={handleClick}
        />
        <h3>Shopping Cart</h3>
        <hr />
      </div>

      <div>
        {cart.length < 1 ? (
          <p>
            There's nothing here. Add some things to your cart to get started
          </p>
        ) : (
          <>
            <div>Estimated total: ${total}</div>
            <button
              className={styles.checkout}
              onClick={(e) => {
                e.preventDefault();
                alert(
                  'Thanks for testing out my app! You are awesome! Bye, James!'
                );
              }}
            >
              Checkout
            </button>
            <div className={styles.cartContainer}>
              {cart.map((item) => (
                <ItemCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  quantity={item.quantity}
                  cart={cart}
                  setCart={setCart}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
