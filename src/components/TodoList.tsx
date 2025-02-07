import { TodoItem } from './TodoItem';
import styles from './TodoList.module.css';
export const TodoList = () => {
  const isLoading = false;
  const isError = false;

  return isLoading ? (
    <div className={styles['fallback-layout']}>
      <h2>Loading...</h2>
    </div>
  ) : isError ? (
    <div className={styles['fallback-layout']}>
      <h2>We're sorry!</h2>
      <span>We have experienced a issue fetching your Todos</span>
    </div>
  ) : (
    <article className={styles.root}>
      <TodoItem />
      <TodoItem />
    </article>
  );
};
