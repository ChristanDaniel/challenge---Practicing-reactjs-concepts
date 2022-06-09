import { Header } from "./components/Header";
import { SubmitTask } from "./components/submitTask";
import { TaskList } from "./components/TaskList";

import "./global.css";
import styles from "./app.module.css";

function App() {
  return (
    <body className={styles.body}>
      <Header />
      <SubmitTask />
      <div className={styles.bodyContent}>
        <header>
          <p className={styles.taskCreated}>
            Tarefa criadas <span>5</span>
          </p>
          <p className={styles.taskCompleted}>
            Concluídas <span>2 de 5</span>
          </p>
        </header>
        <div>
          <TaskList />
          <TaskList />
          <TaskList />
          <TaskList />
        </div>
      </div>
    </body>
  );
}

export default App;
