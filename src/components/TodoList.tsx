import { TodoItem } from './TodoItem';
import { useFetchTodos } from '../hooks/useFetchTodos';
import { Todo } from '../types';
import styles from './TodoList.module.css';

export const TodoList = () => {
  const { isLoading, isError, data } = useFetchTodos();
  const isEmpty = !isLoading && !data?.length;

  return isLoading ? (
    <div className={styles['fallback-layout']}>
      <h2>Loading...</h2>
    </div>
  ) : isError ? (
    <div className={styles['fallback-layout']}>
      <h2>We're sorry!</h2>
      <span>We have experienced a issue fetching your Todos</span>
    </div>
  ) : isEmpty ? (
    <div className={styles['fallback-layout']}>
      <h2>Nothing to do...</h2>
      <span>Start adding some todos above</span>
    </div>
  ) : (
    <article className={styles.root}>
      {data?.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </article>
  );
};
