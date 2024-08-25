import styles from './Button.module.css';

function Button({ content, className, onClick, style }) {
  return (
    <button
      className={`${className} ${styles.button}`}
      onClick={onClick}
      style={style}
    >
      <div>{content}</div>
    </button>
  );
}

export default Button;
