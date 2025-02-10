import { useMemo } from 'react';
import { useFetchTodos } from '../hooks/useFetchTodos';
import { Todo } from '../types';

export const TodoCount = () => {
  const { data } = useFetchTodos();

  const todoDoneCount = useMemo(() => {
    return data ? data.filter((todo: Todo) => todo.done).length : 0;
  }, [data]);

  return (
    <div>
      <span>{`Completed ${todoDoneCount} of ${data?.length}`}</span>
    </div>
  );
};
