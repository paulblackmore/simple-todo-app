import { useUpdateTodo } from '../hooks';
import { Todo } from '../types';
import styles from './StyledCheckbox.module.css';

type Props = {
  todo: Todo;
};

export const StyledCheckbox = ({ todo }: Props) => {
  const handleUpdateTodo = useUpdateTodo();
  return (
    <label className={styles.root}>
      <input
        type='checkbox'
        defaultChecked={todo.done}
        onClick={() => handleUpdateTodo.mutate({ ...todo, done: !todo.done })}
      />
      <span className={styles.checkmark}></span>
    </label>
  );
};
