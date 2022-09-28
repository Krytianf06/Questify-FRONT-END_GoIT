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
import { createTheme, ThemeProvider } from "@mui/material/styles";

// import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import ClearButton from "../../images/toDoTask/ClearButton";
//import ToDoStar from "../../images/toDoTask/ToDoStar";

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

  //mui styles

  // const theme = createTheme({
  //   components: {
  //     MuiOutlinedInput: {
  //       input: {
  //         border: '4px solid green'
  //         // .. other styling that you want
  //       }
  //     }
  //   }
  // })

  const theme = createTheme({
    overrides: {
      MuiInputBase: {
        input: {
          color: "red",
        },
      },
      MuiFormLabel: {
        root: {
          color: "red",
        },
      },
      MuiOutlinedInput: {
        notchedOutline: {
          borderColor: "red",
        },
      },
    },
  });

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={styles.questsWrapper}>
      <form className={styles.form} onSubmit={handleSubmit} id={formId.current}>
        <div className={styles.header__wrapper}>
          <div className={styles.level__wrapper}>
            <button className={styles.level__button} type="button">
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
              form={formId.current}>
              <option value="Easy">Easy</option>
              <option value="Normal">Normal</option>
              <option value="Hard">Hard</option>
            </select>
            <img
              className={styles.star__icon}
              src={starIcon}
              alt="star"
              tabIndex="1"></img>
          </div>
        </div>

        <div className={styles.TitleWrapper}>
          <h2 className={styles.form__title}>CREATE A NEW QUEST</h2>
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
                  <ThemeProvider theme={theme}>
                    <DateTimePicker
                      name="date"
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          id="standard-basic"
                          variant="standard"
                          label="Date "
                          margin="normal"
                          {...params}
                        />
                      )}
                    />
                  </ThemeProvider>
                </Stack>
              </LocalizationProvider>
            </div>
          </div>
        </div>

        <div className={styles.bottom__wrapper}>
          <div className={styles.category__wrapper}>
            <div>
              <select
                name="category"
                value={formValues.category}
                onChange={handleInputValueChange}
                form={formId.current}
                className={
                  formValues.category === "Stuff"
                    ? `${styles.category__select} ${styles.stuff}`
                    : formValues.category === "Work"
                    ? `${styles.category__select} ${styles.work}`
                    : formValues.category === "Family"
                    ? `${styles.category__select} ${styles.family}`
                    : formValues.category === "Health"
                    ? `${styles.category__select} ${styles.health}`
                    : formValues.category === "Learning"
                    ? `${styles.category__select} ${styles.learning}`
                    : formValues.category === "Leisure"
                    ? `${styles.category__select} ${styles.leisure}`
                    : styles.category__select
                }>
                <option value="Stuff">Stuff</option>
                <option value="Family">Family</option>
                <option value="Health">Health</option>
                <option value="Learning">Learning</option>
                <option value="Leisure">Leisure</option>
                <option value="Work">Work</option>
              </select>
            </div>
          </div>

          <div className={styles.button__wrapper}>
            <button
              className={styles.button__cancel}
              onClick={() => dispatch(toDoReducer.actions.closeForm())}
              /*onClick={onDelete}*/
            >
              <ClearButton />
            </button>
            <button className={styles.button__create} type="submit">
              CREATE
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ToDoForm;
