import { Header } from "./components/Header";
import { SubmitTask } from "./components/submitTask";
import { TaskList } from "./components/TaskList";

import { FormEvent, useState } from "react";

import "./global.css";
import styles from "./app.module.css";

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

  const handleDeleteTask = (taskSelectId: number) => {
    const newListTask = listTaskCreated.filter(value => {
      return value.id !== taskSelectId
    })

    setListTaskCreated(newListTask)
  }

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
          {listTaskCreated.map((task, index) => (
            <TaskList
              key={task.id}
              listTaskCreated={task}
              handleDeleteTask={handleDeleteTask}
              taskIndex={index}
            />
          ))}
        </div>
      </div>
    </body>
  );
}

export default App
