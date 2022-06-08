import styles from './styles.module.css'

import { AiOutlinePlusCircle } from 'react-icons/ai';

export function SubmitTask() {
  return (
    <div className={styles.container}>
      <input  placeholder='Adicione uma nova tarefa' />
      <button type='submit'>Criar <AiOutlinePlusCircle /></button>
    </div>
  );
}
