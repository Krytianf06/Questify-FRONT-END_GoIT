import React from "react";
import styles from "./mainPage.module.css";
import { useEffect } from "react";
import { Navigation } from "../../components/navigation/navigation";
import { PlusBtn } from "../../components/plusBtn/plusBtn";
import TodoList from "../../features/toDoTasks/ToDoList";
import { useDispatch} from "react-redux";
import { toDoReducer } from "../../features/toDoTasks/ToDoSlice";
import { fetchToDos } from "../../api/request";


const MainPage = () => {
  const dispatch = useDispatch();
  const setFormActive = () => {
    dispatch(toDoReducer.actions.openForm());
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getCardsFromApi = () => dispatch(fetchToDos());

  useEffect(()=>{
    getCardsFromApi();
  },[getCardsFromApi]);
  
return (
  <div className={styles.homepage}>
    <Navigation />
    <div className={styles.container}>
      <TodoList />
      <PlusBtn fnt={setFormActive} />
    </div>
  </div>
);
};

export default MainPage;
