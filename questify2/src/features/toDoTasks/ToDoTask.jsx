import { React, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./ToDoTask.module.css";
import { toDoReducer } from "./ToDoSlice";
import ellipseBlue from "../../icons/ellipse-blue.svg";
import ellipseRed from "../../icons/ellipse-red.svg";
import ellipseGreen from "../../icons/ellipse-green.svg";
import starIcon from "../../icons/star.svg";

//import ToDoStar from "../../images/toDoTask/ToDoStar";

const ToDoTask = ({ id, difficulty, title, date, time, category }) => {
  const dispatch = useDispatch();

  const handleDoubleClick = (id) => {
    dispatch(toDoReducer.actions.updateEditedCardId(id));
  };


  return (
    <li
      className={styles.CardItem}
      id={id}
      onDoubleClick={() => handleDoubleClick(id)}>

      <div className={styles.header__wrapper}>
          <div className={styles.level__wrapper}>
            <button className={styles.level__button} type="button">
              {difficulty === "Hard" ? (
                <img
                  className={styles.ellipse}
                  src={ellipseRed}
                  alt="star"
                  tabIndex="1"></img>
              ) : difficulty === "Normal" ? (
                <img
                  className={styles.ellipse}
                  src={ellipseGreen}
                  alt="star"
                  tabIndex="1"></img>
              ) : difficulty === "Easy" ? (
                <img
                  className={styles.ellipse}
                  src={ellipseBlue}
                  alt="star"
                  tabIndex="1"></img>
              ) : (
                <></>
              )}
            </button>
            <div className={styles.level__select}>{difficulty}</div>
            <img
              className={styles.star__icon}
              src={starIcon}
              alt="star"
              tabIndex="1"></img>
          </div>
        </div>

        <div className={styles.TitleWrapper}>
          <h2 className={styles.form__title}>{title}</h2>
          <div className={styles.date__wrapper}>{date}, {time}</div>
        </div>

        <div className={styles.category__wrapper}>
            <div 
              className={
                category === "Stuff"
                ? `${styles.category__select} ${styles.stuff}`
                : category === "Work"
                ? `${styles.category__select} ${styles.work}`
                : category === "Family"
                ? `${styles.category__select} ${styles.family}`
                : category === "Health"
                ? `${styles.category__select} ${styles.health}`
                : category === "Learning"
                ? `${styles.category__select} ${styles.learning}`
                : category === "Leisure"
                ? `${styles.category__select} ${styles.leisure}`
                : styles.category__select
              }>
              {category}
            </div>
        </div>
       
    </li>
  );
};

export default ToDoTask;
