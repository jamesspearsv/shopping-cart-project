import { useOutletContext, Link } from 'react-router-dom';

function Store() {
  const [cart, setCart] = useOutletContext();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.item.value);
    setCart([...cart, e.target.item.value]);
  }

  return (
    <div>
      <Link to='/'>Home</Link>
      {cart.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
      <form onSubmit={handleSubmit}>
        <input type='text' name='item' />
        <button type='submit'>Add item</button>
      </form>
    </div>
  );
}

export default Store;
