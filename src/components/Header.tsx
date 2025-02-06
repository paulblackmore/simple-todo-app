import styles from './Header.module.css';
import { TodoCount } from './TodoCount';

export const Header = () => {
  return (
    <header className={styles.root}>
      <h1>Todos</h1>
      <TodoCount />
    </header>
  );
};
