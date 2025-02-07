import { TodoItem } from './TodoItem';
import { useFetchTodos } from '../hooks/useFetchTodos';
import { Todo } from '../types';
import styles from './TodoList.module.css';

export const TodoList = () => {
  const { isLoading, isError, data } = useFetchTodos();

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
      {data?.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </article>
  );
};
