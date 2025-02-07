import { StyledCheckbox } from './StyledCheckbox';
import styles from './TodoItem.module.css';
export const TodoItem = () => {
  return (
    <div className={styles.root} data-selected={true}>
      <span>Get food</span>
      <StyledCheckbox />
    </div>
  );
};
