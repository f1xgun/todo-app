import React, { useState } from 'react';
import Task from '../components/Task';
import InputTask from '../components/InputTask';

import styles from './index.module.scss';

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(title) {
    if (title) setTasks([...tasks, { id: Date.now(), title }]);
  }

  function removeTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function editTask(id, title) {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, title } : task)));
  }

  return (
    <article className={styles.article}>
      <h1 className={styles.title}>Todo App</h1>
      <section>
        <InputTask addTask={addTask} />
      </section>
      <section>
        {tasks.length <= 0 && <p className={styles.noTasks}>No tasks</p>}
        {tasks.map((task) => (
          <Task key={task.id} id={task.id} title={task.title} removeTask={removeTask} editTask={editTask}/>
        ))}
      </section>
    </article>
  );
}

export default App;
