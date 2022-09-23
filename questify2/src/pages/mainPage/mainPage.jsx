import React from "react";
import styles from "./mainPage.module.css";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import { Navigation } from "../../components/navigation/navigation";
import { PlusBtn } from "../../components/plusBtn/plusBtn";
import ToDoForm from '../../features/toDoTasks/ToDoForm'
import ToDoTask from "../../features/toDoTasks/ToDoTask";

 const MainPage = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.homepage}>
      <Navigation />

      <div className={styles.cards__wrapper}>
        <p>Today</p>
      </div>

      <div>
        <ToDoForm />
      </div>

      <div>
        <ToDoTask />
      </div>

      <div className={styles.cards__wrapper}>
        <p>Tomorrow</p>
      </div>

      <PlusBtn fnt={handleToggle} />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      ></Backdrop>
    </div>
  );
};

export default MainPage;;