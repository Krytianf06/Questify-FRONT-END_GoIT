import axios from "axios";
import { userSlice } from "../redux/reducers/userReducer";

const loginURL = "https://connections-api.herokuapp.com";

const loginUsers = (email, password) => (dispatch, getState) => {
  axios.post(loginURL, email, password).then((response) => {
    dispatch(userSlice.actions.loginUser(response.data.data.user));
  });
};

export { loginUsers };
