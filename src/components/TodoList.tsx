import { TodoItem } from './TodoItem';
import styles from './TodoList.module.css';
export const TodoList = () => {
  return (
    <article className={styles.root}>
      <TodoItem />
      <TodoItem />
    </article>
  );
};
