import styles from './TodoItem.module.css';
export const TodoItem = () => {
  return (
    <div className={styles.root}>
      <span>Get food</span>
      <input type='checkbox' />
    </div>
  );
};
