import styles from './TodoForm.module.css';
export const TodoForm = () => {
  return (
    <form className={styles.root}>
      <input type='text' placeholder='What do you need to do?' />
      <button type='submit'>Add Todo</button>
    </form>
  );
};
