import { Header } from "./components/Header";
import { SubmitTask } from "./components/submitTask";

import "./global.css";
import styles from './app.module.css'

function App() {
  return( 
    <body className={styles.body}>
      <Header />
      <SubmitTask />
      <h1>Hello world</h1>;
    </body>
  )
}

export default App;
