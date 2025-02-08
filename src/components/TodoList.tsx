import { TodoItem } from './TodoItem';
import { useFetchTodos } from '../hooks/useFetchTodos';
import { Todo } from '../types';
import styles from './TodoList.module.css';
import { PropsWithChildren } from 'react';

const FallbackLayout = ({ children }: PropsWithChildren) => (
  <div className={styles['fallback-layout']}>{children}</div>
);

export const TodoList = () => {
  const { isLoading, isError, data } = useFetchTodos();
  const isEmpty = !isLoading && !data?.length;

  return isLoading ? (
    <FallbackLayout>
      <h2>Your todos are loading...</h2>
      <span>Please be patient, this may take some time</span>
    </FallbackLayout>
  ) : isError ? (
    <FallbackLayout>
      <h2>We're sorry!</h2>
      <span>We have experienced a issue fetching your Todos</span>
    </FallbackLayout>
  ) : isEmpty ? (
    <FallbackLayout>
      <h2>Nothing to do...</h2>
      <span>Start adding some todos above</span>
    </FallbackLayout>
  ) : (
    <article className={styles.root}>
      {data?.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </article>
  );
};
