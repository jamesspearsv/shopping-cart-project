import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>James Spears, V</p>
      <div>|</div>
      <a href='https://jspears.me'>https://jspears.me</a>
    </footer>
  );
}

export default Footer;
