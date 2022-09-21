import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { createUser } from "../../redux/auth/actions.js";
import { selectUserRequestStatus } from "../../redux/auth/selectors.js";

import s from "./Login.module.css";
import sc from "../../utils/Container.module.css";
import ButtonGo from "../ButtonGo/ButtonGo.jsx";

const Login = () => {
  const dispatch = useDispatch();
  const userRequestStatus = useSelector(selectUserRequestStatus);
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, password } = formValues;

    dispatch(
      createUser({
        name: name,
        email: email,
        password: password,
      }),
    );
  };
  

  return (
    <div className={s.landing}>
      <div className={s.position}>
        <div className={sc.container}>
          <h1 className={s.title}>Questify</h1>
          <p className={s.about}>
            Questify will turn your life into <br /> a thrilling game full of
            amazing <br />
            quests and exciting challenges.
          </p>
          <form onSubmit={handleSubmit}>
            <div className={s.spacer}>
              <h2 className={s.form__desc}>
                Write your email to sign up or log in
              </h2>
            </div>
            <div className={s.spacer__email}>
              <label htmlFor="name" className={s} required></label>
              <input
                type="text"
                name="name"
                required
                className={s.input}
                placeholder="Name"
                //defaultValue="John"
              ></input>
            </div>
            <div className={s.spacer__email}>
              <label htmlFor="email" className={s} required></label>
              <input
                type="text"
                name="email"
                required
                className={s.input}
                placeholder="Email"
                //defaultValue="email@mail.com"
              ></input>
            </div>
            <div className={s.spacer__password}>
              <label htmlFor="password" className={s} required></label>
              <input
                type="password"
                name="password"
                required
                className={s.input}
                placeholder="Password"
                minLength="6"
                //defaultValue="password123"
              ></input>
              <ButtonGo />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
