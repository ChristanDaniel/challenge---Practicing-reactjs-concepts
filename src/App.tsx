import { Header } from "./components/Header";
import { SubmitTask } from "./components/submitTask";
import { TaskList } from "./components/TaskList";

import "./global.css";
import styles from "./app.module.css";
import { FormEvent, useState } from "react";

type IListTaskCreatedProps = {
  id: number;
  taskDescription: string;
}

function App() {
  const [addNewTaskInput, setAddNewTaskInput] = useState('')
  const [listTaskCreated, setListTaskCreated] = useState<IListTaskCreatedProps[]>([])

  const hadleSubmitTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (addNewTaskInput !== '') {
      setListTaskCreated([
        ...listTaskCreated,
        {
          id: Math.random(),
          taskDescription: addNewTaskInput,
        }
      ])
      setAddNewTaskInput('')
    }
  }

  const handleDeleteTask = (taskSelectId: number, taskIndex: number) => {
    listTaskCreated.map(task => {
      if(task.id === taskSelectId) {
        listTaskCreated.splice(0, taskIndex)
      }
    })
  }

  console.log('', listTaskCreated)

  return (
    <body className={styles.body}>
      <Header />
      <SubmitTask 
        hadleSubmitTask={hadleSubmitTask}
        addNewTaskInput={addNewTaskInput}
        setAddNewTaskInput={setAddNewTaskInput} 
      />
      <div className={styles.bodyContent}>
        <header>
          <p className={styles.taskCreated}>
            Tarefa criadas <span>{listTaskCreated.length}</span>
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

export default App
