import styles from './StyledCheckbox.module.css';

export const StyledCheckbox = () => {
  return (
    <label className={styles.root}>
      <input type='checkbox' />
      <span className={styles.checkmark}></span>
    </label>
  );
};
