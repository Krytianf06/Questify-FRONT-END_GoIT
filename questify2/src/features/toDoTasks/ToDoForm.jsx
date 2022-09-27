import React from "react";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toDoReducer } from "./ToDoSlice";
import { nanoid } from "nanoid";
import styles from "./ToDoForm.module.css";
import ellipseBlue from "../../icons/ellipse-blue.svg";
import ellipseRed from "../../icons/ellipse-red.svg";
import ellipseGreen from "../../icons/ellipse-green.svg";
import starIcon from "../../icons/star.svg";

// import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import ClearButton from "../../images/toDoTask/ClearButton";
import ToDoStar from "../../images/toDoTask/ToDoStar";

const ToDoForm = (saveFunction) => {
  const dispatch = useDispatch();

  const inputRef = useRef();
  const formId = useRef(nanoid());
  const titleId = useRef(nanoid());

  const [formValues, setFormValues] = useState({
    title: "",
    difficulty: "Normal",
    category: "Stuff",
    type: "",
    date: "",
    time: "",
  });

  
  const [value, setValue] = React.useState(dayjs());

  const handleSubmit = (event) => {
    event.preventDefault();

    const { title, difficulty, category, type } = formValues;
    const newToDoTask = {
      id: nanoid(),
      title: title,
      difficulty: difficulty,
      category: category,
      type: "quest",
      date: value.format("DD/MM/YYYY"),
      time: `${value.$H}:${value.$m}`,
    };

    dispatch(toDoReducer.actions.addToDoCard(newToDoTask));
    dispatch(toDoReducer.actions.closeForm());
  };

  const handleInputValueChange = (event) => {
    setFormValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

    
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
  
    <>
      <form className={styles.form}  onSubmit={handleSubmit} id={formId.current}>
        <div className={styles.header__wrapper}>
          <div className={styles.level__wrapper}>
            <div>
              <button 
                className={styles.level__button} 
                type="button">
                  {formValues.difficulty === "Hard" ? (
                    <img
                    className={styles.ellipse}
                    src={ellipseRed}
                    alt="star"
                    tabIndex="1"></img>
                  ) : formValues.difficulty === "Normal" ? (
                    <img
                    className={styles.ellipse}
                    src={ellipseGreen}
                    alt="star"
                    tabIndex="1"></img>
                  ) : formValues.difficulty === "Easy" ? (
                    <img
                    className={styles.ellipse}
                    src={ellipseBlue}
                    alt="star"
                    tabIndex="1"></img>
                  ) : (
                    <></>
                  )}
              </button>
              
              <select
                className={styles.level__select}
                name="difficulty"
                value={formValues.difficulty}
                onChange={handleInputValueChange}
                form={formId.current}
              >
                <option value="Easy">Easy</option>
                <option value="Normal">Normal</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
          </div>

          <img
              className={styles.star__icon}
              src={starIcon}
              alt="star"
              tabIndex="1"></img>
        </div>

        <div className={styles.TitleWrapper}>
          <h2 className={styles.form__title}>create new quest</h2>
          <input
            ref={inputRef}
            id={titleId.current}
            name="title"
            value={formValues.title}
            onChange={handleInputValueChange}
            className={styles.form__input}
            required
          />
          <div className={styles.date__wrapper}>
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
              <DateTimePicker
                label="Date&Time picker"
                name="date"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              </Stack>
              </LocalizationProvider>
            </div>
          </div>
        </div>
        


          
        
      

        
        <div className={styles.bottom__wrapper}>
          <select
            className="categoryPicker"
            name="category"
            value={formValues.category}
            onChange={handleInputValueChange}
            form={formId.current}
          >
            <option value="Stuff">Stuff</option>
            <option value="Family">Family</option>
            <option value="Health">Health</option>
            <option value="Learning">Learning</option>
            <option value="Leisure">Leisure</option>
            <option value="Work">Work</option>
          </select>

          <button type="submit" className={styles.submit__button}>
            START
          </button>

          <button
            type="button"
            className={styles.destroy}
            onClick={() => dispatch(toDoReducer.actions.closeForm())}
            /*onClick={onDelete}*/
          >
            <ClearButton />
          </button>
        </div>
        
      </form>
    </>

  );
};

export default ToDoForm;
