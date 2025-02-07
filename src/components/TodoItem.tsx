import { Todo } from '../types';
import { StyledCheckbox } from './StyledCheckbox';
import styles from './TodoItem.module.css';

type Props = {
  todo: Todo;
};
export const TodoItem = ({ todo }: Props) => {
  return (
    <div className={styles.root} data-selected={todo.done}>
      <span>{todo.value}</span>
      <StyledCheckbox done={todo.done} />
    </div>
  );
};
