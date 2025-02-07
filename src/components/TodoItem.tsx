import { Todo } from '../types';
import { StyledCheckbox } from './StyledCheckbox';
import styles from './TodoItem.module.css';

type Props = {
  todo: Todo;
};

export const TodoItem = ({ todo }: Props) => (
  <div className={styles.root} data-completed={todo.done}>
    <span>{todo.value}</span>
    <StyledCheckbox todo={todo} />
  </div>
);
