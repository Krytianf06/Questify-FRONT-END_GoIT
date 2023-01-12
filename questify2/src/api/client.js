import axios from "axios";
import { JWT_TOKEN_STORAGE_KEY } from "../utils/constans.js";

export const authenticationApiClient = axios.create({
  baseURL: "https://questify-ssa3.onrender.com/",
});

export const questifyApiClient = axios.create({
  baseURL: "https://questify-ssa3.onrender.com/",
  headers: {
    Authorization: "Bearer " + localStorage.getItem(JWT_TOKEN_STORAGE_KEY),
  },
});
