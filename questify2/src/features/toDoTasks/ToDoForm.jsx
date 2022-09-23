import React from "react";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toDoReducer } from "./ToDoSlice";
import { nanoid } from "nanoid";
import styles from "./ToDoTask.module.css";

// import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import ClearButton from "../../images/toDoTask/ClearButton";
import ToDoStar from "../../images/toDoTask/ToDoStar";

const ToDoForm = () => {
  const dispatch = useDispatch();

  const inputRef = useRef();
  const formId = useRef(nanoid());
  const titleId = useRef(nanoid());

  const [formValues, setFormValues] = useState({
    title: "",
    difficulty: "",
    category: "",
    type: "",
    date: "",
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
      date: value,
    };

    dispatch(toDoReducer.actions.addToDoCard(newToDoTask));
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
    <ul>
      <li className={styles.todo__item}>
        <form onSubmit={handleSubmit} id={formId.current}>
          <div className="">
            <div className={styles.first__section}>
              <select
                className={styles.difficulty__bar}
                name="difficulty"
                value={formValues.difficulty}
                onChange={handleInputValueChange}
                form={formId.current}
              >
                <option value="Easy">Easy</option>
                <option value="Normal">Normal</option>
                <option value="Hard">Hard</option>
              </select>

              <ToDoStar />
            </div>

            <div className={styles.input__placeholder}>
              <p>create new quest</p>
            </div>

            <div className={styles.second__section}>
              <input
                ref={inputRef}
                id={titleId.current}
                name="title"
                value={formValues.title}
                onChange={handleInputValueChange}
                className={styles.input__field}
              />
            </div>

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

            <div className={styles.third__section}>
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

              <button className={styles.destroy} /*onClick={onDelete}*/>
                <ClearButton />
              </button>
            </div>
          </div>
        </form>
      </li>
    </ul>
  );
};

export default ToDoForm;
