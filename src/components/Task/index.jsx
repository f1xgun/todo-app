import React from 'react';
import styles from './index.module.scss';
import EditIcon from '@mui/icons-material/Edit';

function Task({ title }) {
  return (
    <div className={styles.task}>
      <label className={styles.taskLabel}>
        <input type="checkbox" className={styles.checkbox} />
        <h3 className={styles.taskTitle}>{title}</h3>
      </label>
      <div className={styles.buttonBlock}>
        <button onClick={() => {}} aria-label="Edit" className={styles.buttonEdit}>
          Edit
        </button>
        <button onClick={() => {}} aria-label="Delete" className={styles.buttonDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Task;
