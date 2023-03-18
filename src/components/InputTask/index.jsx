import React, { useState } from 'react';
import styles from './index.module.scss';

function InputTask({ addTask }) {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className={styles.inputTask}>
      <input
        type="text"
        placeholder="Add a new task"
        className={styles.inputValue}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addTask(inputValue);
            setInputValue('');
          }
        }}
      />
      <button
        className={styles.inputButton}
        onClick={() => {
          addTask(inputValue);
          setInputValue('');
        }}>
        Add
      </button>
    </div>
  );
}

export default InputTask;
