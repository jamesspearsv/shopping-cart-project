import { isValidElement, useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import ItemCard from '../components/ItemCard';

let hasRun = false;

function Store() {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (hasRun) return;
    else hasRun = true;

    // Fetch api data and set inventory state
    (async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');

        if (!response.ok) throw new Error();

        const json = await response.json();
        setInventory(json);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();

    // useEffect cleanup
    return (() => {
      setLoading(true);
      hasRun = false;
    })();
  }, []);

  return (
    <section
      style={{
        display: 'flex',
        gap: '1rem',
        width: '100%',
      }}
    >
      <div
        style={{
          minWidth: '10%',
        }}
      >
        Filters
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'start',
            gap: '1rem',
          }}
        >
          {inventory.map((item) => (
            <ItemCard
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Store;
