import styles from './styles.module.css'

import { FiTrash2 } from 'react-icons/fi';

export function TaskList() {
  return (
    <div className={styles.container}>
      <input type="radio" />
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <button><FiTrash2 /></button>
    </div>
  );
}
