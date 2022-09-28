import React from "react";
import styles from "./mainPage.module.css";
import { useState, useEffect } from "react";
import { Navigation } from "../../components/navigation/navigation";
import { PlusBtn } from "../../components/plusBtn/plusBtn";
import ToDoForm from "../../features/toDoTasks/ToDoForm";
import TodoList from "../../features/toDoTasks/ToDoList";
import { useDispatch, useSelector } from "react-redux";
import { toDoReducer } from "../../features/toDoTasks/ToDoSlice";
import { fetchToDos } from "../../api/request";

const MainPage = () => {
  const dispatch = useDispatch();
  const setFormActive = () => {
    dispatch(toDoReducer.actions.openForm());
  };
  const getCardsFromApi = () => dispatch(fetchToDos());

  useEffect(()=>{
    getCardsFromApi();
  },[]);
  
return (
    <div className={styles.homepage}>
      <Navigation />
      <TodoList />
      <PlusBtn fnt={setFormActive} />
    </div>
  );
};

export default MainPage;
