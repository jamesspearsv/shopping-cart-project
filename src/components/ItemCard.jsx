import { useOutletContext } from 'react-router-dom';

function ItemCard({ id, title, price, img, inCart }) {
  const [cart, setCart] = useOutletContext();

  return (
    <div
      style={{
        width: '25%',
        padding: '1rem',
        backgroundColor: 'white',
        border: '1px solid black',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        gap: '1rem',
      }}
      data-id={id}
    >
      <img
        src={img}
        alt=''
        style={{
          maxHeight: '50%',
          width: 'auto',
          marginBottom: '1rem',
        }}
      />
      <div>{title}</div>
      <div>${price}</div>
      <button
        style={{
          marginTop: 'auto',
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

export default ItemCard;
