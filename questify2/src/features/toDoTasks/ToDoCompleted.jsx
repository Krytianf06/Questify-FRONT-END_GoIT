import { React } from "react";
import { useDispatch } from "react-redux";
import styles from "./ToDoCompleted.module.css";
import { toDoReducer } from "./ToDoSlice";


const ToDoCompleted = ({id, title}) => {
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(toDoReducer.actions.deleteToDoCard(id));
  };

  return (
    <li className={styles.todo__completed} id={id}>
      <div className={styles.completed}>
        <div className={styles.second__section}>
          <p className={styles.task__title}>COMPLETED: {title}</p>
        </div>

        <button className={styles.destroy} onClick={() => onDelete(id)}>
          <p>Continue</p>
        </button>
      </div>
    </li>
  );
};

export default ToDoCompleted;
