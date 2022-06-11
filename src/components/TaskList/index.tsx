import styles from './styles.module.css'

import { FiTrash2 } from 'react-icons/fi';

type IListTaskCreatedProps = {
  id: number;
  taskDescription: string;
}

interface ITaskListProps {
  listTaskCreated: IListTaskCreatedProps;
  handleDeleteTask: (taskSelectId: number) => void;
  taskIndex: number;
}

export function TaskList({ listTaskCreated, handleDeleteTask, taskIndex }: ITaskListProps) {
  return (
    <div className={styles.container}>
      <input type="radio" />
      <p>{listTaskCreated.taskDescription}.</p>
      <button onClick={() => handleDeleteTask(listTaskCreated.id)}><FiTrash2 /></button>
    </div>
  );
}
