import { useEffect, useState } from 'react';
import styles from './Store.module.css';
import ItemCard from '../components/ItemCard';
import Category from '../components/Category';
import { useOutletContext } from 'react-router-dom';

let hasRun = false;

function Store() {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [activeCatetory, setActiveCategory] = useState('');

  const [cart, setCart] = useOutletContext();

  useEffect(() => {
    // skip second mount in dev mode
    if (hasRun) return;
    else hasRun = true;

    // Fetch api data and set inventory state
    (async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');

        if (!response.ok) throw new Error();

        const json = await response.json();
        let categories = [];

        await json.forEach((item) => {
          if (!categories.includes(item.category)) {
            categories.push(item.category);
          }
        });

        setCategories(categories);
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

  function resetFilters() {
    setActiveCategory('');
  }

  function itemPlaceholder(item) {
    return (
      <ItemCard
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        image={item.image}
        cart={cart}
        setCart={setCart}
      />
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.categoryPanel}>
        <h3>Categories</h3>
        <button
          className={activeCatetory !== '' ? styles.visible : styles.hidden}
          onClick={resetFilters}
        >
          Reset Filters
        </button>
        <hr />
        <div className={styles.categories}>
          {categories.map((category, index) => (
            <Category
              key={index}
              category={category}
              active={category === activeCatetory}
              setActiveCategory={setActiveCategory}
            />
          ))}
        </div>
      </div>
      {loading ? (
        <div className={styles.loadingContainer}>
          <div className={styles.loading}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div className={styles.items}>
          {inventory.map((item) => {
            if (!activeCatetory) {
              return itemPlaceholder(item);
            } else if (activeCatetory === item.category) {
              return itemPlaceholder(item);
            }
          })}
        </div>
      )}
    </section>
  );
}

export default Store;
