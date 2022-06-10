import { ChangeEvent, FormEvent } from 'react';
import styles from './styles.module.css'

import { AiOutlinePlusCircle } from 'react-icons/ai';

interface ISubmitTaskProps {
  addNewTaskInput: string;
  setAddNewTaskInput: React.Dispatch<React.SetStateAction<string>>;
  hadleSubmitTask: (event: FormEvent<HTMLFormElement>) => void;
}

export function SubmitTask({ hadleSubmitTask, addNewTaskInput, setAddNewTaskInput }: ISubmitTaskProps) {
  return (
    <form className={styles.container} onSubmit={event => hadleSubmitTask(event)} >
      <input 
        placeholder='Adicione uma nova tarefa'
        onChange={event => setAddNewTaskInput(event.target.value)}
        value={addNewTaskInput}
      />
      <button type='submit'>Criar <AiOutlinePlusCircle /></button>
    </form>
  );
}
