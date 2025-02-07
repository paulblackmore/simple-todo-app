import styles from './StyledCheckbox.module.css';

type Props = {
  done: boolean;
};

export const StyledCheckbox = ({ done }: Props) => {
  return (
    <label className={styles.root}>
      <input type='checkbox' defaultChecked={done} />
      <span className={styles.checkmark}></span>
    </label>
  );
};
