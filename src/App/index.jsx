import React, { useState } from 'react';
import Task from '../components/Task';
import InputTask from '../components/InputTask';

import styles from './index.module.scss';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      title: 'First',
    },
    {
      id: 1,
      title: 'Second',
    },
  ]);
  return (
    <article className={styles.article}>
      <h1 className={styles.title}>Todo App</h1>
      <section>
        <InputTask />
      </section>
      <section>
        {tasks.length <= 0 && <p className={styles.noTasks}>No tasks</p>}
        {tasks.map((task) => (
          <Task key={task.id} title={task.title} />
        ))}
      </section>
    </article>
  );
}

export default App;
