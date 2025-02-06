import { Header } from './components/Header';
import { TodoForm } from './components/TodoForm';
import styles from './App.module.css';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <main>
      <Header />
      <section className={styles.content}>
        <TodoForm />
        <TodoList />
      </section>
    </main>
  );
}

export default App;
