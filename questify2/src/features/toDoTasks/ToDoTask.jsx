import React from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import styles from "./ToDoTask.module.css";

import ClearButton from "../../images/toDoTask/ClearButton";
import ToDoStar from "../../images/toDoTask/ToDoStar";

const ToDoTask = () => {

  const inputRef = useRef();
  const itemId = useRef(nanoid());

  const cards = useSelector((state) => state.toDos.cards);
  console.log(cards);

  return (
    <li className={styles.todo__item} id={itemId.current}>
      <div className="">
        <div className="">
          <p className={styles.difficulty__bar}></p>

          <ToDoStar />
        </div>

        {/* <div className={styles.input__placeholder}>
              <p>create new quest</p>
            </div>

            <div>
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

            <div className="">
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

              <button className={styles.destroy}>
                <ClearButton />
              </button> 
        </div>*/}
      </div>
    </li>
  );
};

export default ToDoTask;
