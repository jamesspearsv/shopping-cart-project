import styles from './ItemCard.module.css';

function ItemCard({ id, title, price, image, quantity, cart, setCart }) {
  // check if item is in cart
  const check = (element) => element.id === id;

  function addToCart() {
    const updatedCart = [...cart];

    const item = {
      id,
      title,
      price,
      image,
      quantity: 1,
    };

    updatedCart.push(item);

    setCart(updatedCart);
  }

  function incrementQuantity() {
    console.log('increment');

    const updatedCart = [...cart];

    for (const item of updatedCart) {
      if (item.id === id) {
        item.quantity++;
      }
    }

    setCart(updatedCart);
  }

  function decrementQuantity() {
    console.log('decrement');
    const updatedCart = [...cart];

    for (const item of updatedCart) {
      if (item.id === id) {
        if (item.quantity === 1) {
          removeFromCart();
          return;
        }
        item.quantity--;
      }
    }

    setCart(updatedCart);
  }

  function removeFromCart() {
    const updatedCart = [...cart];

    for (const item of updatedCart) {
      if (item.id === id) {
        const index = updatedCart.indexOf(item);

        updatedCart.splice(index, 1);
      }
    }

    setCart(updatedCart);
  }

  return (
    <div className={styles.card} data-id={id}>
      <img className={styles.img} src={image} />
      <div>{title}</div>
      <div className={styles.price}>
        ${price}
        {quantity && <span> x{quantity}</span>}
      </div>
      {quantity && (
        <div className={styles.price}>
          Total: ${Math.round(price * quantity * 100) / 100}
        </div>
      )}
      <div className={styles.actionBtns}>
        {cart.some(check) ? (
          <>
            <button className={styles.quantityBtn} onClick={decrementQuantity}>
              -
            </button>

            {cart.map((item) => {
              if (item.id === id) {
                return (
                  <div key={id} className={styles.quantity}>
                    <p className={styles.quantityCount}>{item.quantity}</p>
                    <p className={styles.quantityLabel}>in cart</p>
                  </div>
                );
              }
            })}

            <button className={styles.quantityBtn} onClick={incrementQuantity}>
              +
            </button>
          </>
        ) : (
          <button className={styles.addToCartBtn} onClick={addToCart}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ItemCard;
