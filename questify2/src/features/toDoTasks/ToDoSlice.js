import { createSlice } from "@reduxjs/toolkit";
// import { fetchToDos, saveToDo, removeToDo } from "../api/requests";

const initialState = {
  cards: [],
  status: "idle",
};

export const toDoReducer = createSlice({
  name: "toDos",
  initialState,
  reducers: {
    addToDoCard(state, action) {
      state.cards = [...state.cards, action.payload];
    },
    deleteToDoCard(state, action) {
      state.cards = state.cards.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       //GET
  //       .addCase(fetchToDos.pending, (state, action) => {
  //         state.status = "loading";
  //       })
  //       .addCase(fetchToDos.fulfilled, (state, action) => {
  //         state.cards = [...action.payload];
  //         state.status = "idle";
  //       })

  //       //POST
  //       .addCase(saveToDo.pending, (state, action) => {
  //         state.status = "loading";
  //       })
  //       .addCase(saveToDo.fulfilled, (state, action) => {
  //         state.cards = [...state.cards, action.payload];
  //         state.status = "idle";
  //       })

  //       //DELETE
  //       .addCase(removeToDo.pending, (state, action) => {
  //         state.status = "loading";
  //       })
  //       .addCase(removeToDo.fulfilled, (state, action) => {
  //         state.cards = state.cards.filter(
  //           (contact) => contact.id !== action.payload
  //         );
  //         state.status = "idle";
  //       });
  //   },
});
