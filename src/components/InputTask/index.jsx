import React from 'react';
import styles from './index.module.scss';

function InputTask() {
  return (
    <div className={styles.inputTask}>
      <input type="text" placeholder="Add a new task" className={styles.inputValue} />
      <button className={styles.inputButton}>Add</button>
    </div>
  );
}

export default InputTask;
