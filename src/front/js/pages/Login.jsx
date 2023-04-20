import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

// Styles and/or assets
import "../../styles/login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { actions } = useContext(Context);

  const token = sessionStorage.getItem("token");
  console.log("This is your token", token);

  return (
    <form className="login__container">
      <h1 className="text__heading">Login</h1>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="youremail@email.com"
          required
          value={email}
          onChange={() => setEmail(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="secret-password"
          required
          value={password}
          onChange={() => setPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="login__btn"
        onClick={() => actions.handle_Login_Click(password)}
      >
        Login
      </button>
    </form>
  );
};
