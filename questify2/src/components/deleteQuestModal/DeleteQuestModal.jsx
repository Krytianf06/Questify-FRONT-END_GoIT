import styles from './DeleteQuestModal.module.css'
import Backdrop from "@mui/material/Backdrop";
import { useState } from 'react';
export const DeleteTaskModal = ({ cancelFn,deleteFn}) => {
  
    return (
      <div className={styles.modal__wrapper}>
        <div className={styles.modal}>
          <p>Delete this Quest?</p>
          <div className={styles.buttons__wrapper}>
            <button
              type="button"
              onClick={cancelFn}
              className={styles.button_cancel}
            >
              CANCEL
            </button>
            <span className={styles.decor}>|</span>
            <button
              type="button"
              onClick={deleteFn}
              className={styles.button_delete}
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
    );
}
