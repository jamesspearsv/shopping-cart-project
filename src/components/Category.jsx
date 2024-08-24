import styles from './Category.module.css';

function Category({ category, active, setActiveCategory }) {
  function handleClick(e) {
    e.preventDefault();
    setActiveCategory(category);
  }

  return (
    <div className={styles.categoryContainer}>
      <button
        className={active && styles.active}
        onClick={handleClick}
      ></button>
      <div className={styles.label}>{category}</div>
    </div>
  );
}

export default Category;
