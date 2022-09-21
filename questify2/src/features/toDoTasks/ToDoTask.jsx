import React from "react";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toDoReducer } from '../../features/toDoTasks/ToDoSlice';
import { nanoid } from "nanoid";

// import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";




const ToDoTask = () => {
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

   const handleSubmit = (event) => {
     event.preventDefault();

     const { title, difficulty, category, type, date } = formValues;
     const newToDoTask = { id: nanoid(), title: title, difficulty: difficulty, category: category, type: 'quest', date: date };

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
    
    
    const [value, setValue] = React.useState(dayjs());


  return (
    <li>
      <form onSubmit={handleSubmit} id={formId.current}>
        <div className="">
          <div className="">
            <select
              className="difficultyPicker"
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

          {/* <div className="">
            <input
              className=""
              type="checkbox"
              checked={completed}
              onChange={handleInputValueChange}
            />
          </div> */}

          <div>
            <input
              ref={inputRef}
              id={titleId.current}
              name="title"
              placeholder="Enter your task"
              value={formValues.title}
              onChange={handleInputValueChange}
              className=""
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
          </div>

          {/* <button className="destroy" onClick={onDelete}>
            X
          </button> */}
        </div>

        <button type="submit" className="">
          START
        </button>
      </form>
    </li>
  );
};

export default ToDoTask;
