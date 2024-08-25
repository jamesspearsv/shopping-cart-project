import styles from './Home.module.css';
import GitHub from '../assets/GitHub';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className={styles.section}>
      <h1 className={styles.heading1}>Generic Store!</h1>
      <p>
        Welome to Generic Store. This is our online storefront. Checkout all
        that we have to offer.
      </p>

      <Link to={'/store'}>
        <button className={styles.button}>Start Shopping</button>
      </Link>
      <hr className={styles.divider} />
      <div>
        <p>
          This project is completed as part of The Odin Project's course on
          React. You can view the source code below.
        </p>
        <a
          href='https://github.com/jamesspearsv/shopping-cart-project'
          className={styles.linkBack}
        >
          <GitHub />
        </a>
      </div>
    </section>
  );
}

export default Home;
