import React, { useState } from 'react';
import styles from './index.module.scss';

function Task({ id, title, removeTask, editTask }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editValue, setEditValue] = useState(title);
  

  return (
    <div className={styles.task}>
      <label className={styles.taskLabel}>
        <input
          type="checkbox"
          className={styles.checkbox}
          onChange={() => setTimeout(() => removeTask(id), 1000)}
        />
        {isEditMode ? (
          <input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className={styles.inputEdit}
          />
        ) : (
          <h3 className={styles.taskTitle}>{title}</h3>
        )}
      </label>
      <div className={styles.buttonBlock}>
        {isEditMode ? (
          <button
            aria-label="Edit"
            className={styles.buttonEdit}
            onClick={() => {
              setIsEditMode(!isEditMode);
              editTask(id, editValue);
            }}>
            Save
          </button>
        ) : (
          <button
            aria-label="Edit"
            className={styles.buttonEdit}
            onClick={() => setIsEditMode(!isEditMode)}>
            Edit
          </button>
        )}

        <button onClick={() => removeTask(id)} aria-label="Delete" className={styles.buttonDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Task;
