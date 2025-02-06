import { Header } from './components/Header';
import { TodoForm } from './components/TodoForm';
import styles from './App.module.css';

function App() {
  return (
    <main>
      <Header />
      <section className={styles.content}>
        <TodoForm />
      </section>
    </main>
  );
}

export default App;
