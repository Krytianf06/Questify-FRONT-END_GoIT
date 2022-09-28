import { authenticationApiClient, questifyApiClient } from "./client";
import { JWT_TOKEN_STORAGE_KEY, USER_NAME } from "../utils/constans.js";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Report } from "notiflix/build/notiflix-report-aio";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createUserRequest = async (payload) => {
  try {
    const { data, status } = await authenticationApiClient.post(
      "/auth/register",
      payload
    ); //change to register

    localStorage.setItem(USER_NAME, data.user.name);
    localStorage.setItem(JWT_TOKEN_STORAGE_KEY, data.token);

    if (status === 200) {
      Notify.success("You are looged in");
    } else if (status === 201) {
      Notify.success("You are registered and looged in");
    }
    
    return data;
  } catch (error) {
    console.log(error.message);
    Loading.remove();
    if (error.message === "Request failed with status code 401") {
      Report.failure("Unauthorized", "Email or password are wrong");
    } else if (error.message === "Network Error") {
      Notify.failure("Thee is something wrong with the net!");
    } else if (
      error.message === "Request failed with status code 500" ||
      error.message === "Request failed with status code 501"
    ) {
      Notify.failure("Sorry! There is something wrong with our serwer!");
    } else {
      Notify.failure("Oopss something went wrong!");
    }
  }
};

export const authenticateUserRequest = async (payload) => {
  const { data } = await authenticationApiClient.post(
    "/auth/register",
    payload
  ); // in case of adding login and register

  localStorage.setItem(JWT_TOKEN_STORAGE_KEY, data.token);

  return data;
};

export const getCurrentUserRequest = async () => {
  const { data } = await questifyApiClient.get("/auth/current"); // in case of adding get on current user data
  console.log(data);
  return data;
};
export const logoutCurrentUser = async (payload) => {
  try {
    await authenticationApiClient.post("/auth/logout", payload, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem(JWT_TOKEN_STORAGE_KEY),
      },
    });

    localStorage.removeItem(JWT_TOKEN_STORAGE_KEY);
    localStorage.removeItem(USER_NAME);
    Notify.info("You have succesfully logged out");
  } catch (error) {
    console.log(error.message);
  }
};


//TODOS
export const fetchToDos = createAsyncThunk("getFromApi", async () => {
  const response = await questifyApiClient.get("/auth/card");
  return response.data;
});

export const saveToDo = createAsyncThunk("postInApi", async (createdCard) => {
  const response = await questifyApiClient.post("/auth/card", createdCard);
  return response.data;
});
export const removeToDo = createAsyncThunk(
  "removeFromApi",
  async (cardId) => {
    const response = await questifyApiClient.delete(
      `/auth/card/?cardId=${cardId}`
    );
    return response.data;
  }
);
export const UpdateToDo = createAsyncThunk("updateInApi", async (payload) => {
  const { cardId, ...data } = payload;
  const response = await questifyApiClient.patch(
    `/auth/card/?cardId=${cardId}`, data
  );
  return response.data;
});
export const CompleteToDo = createAsyncThunk("completeInApi", async (payload) => {
  const { cardId, ...status } = payload;
  const response = await questifyApiClient.patch(
    `/auth/card/complete/?cardId=${cardId}`,
    status
  );
  return response.data;
});