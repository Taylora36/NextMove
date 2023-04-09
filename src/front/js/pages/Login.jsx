import React, { useState } from "react";

// Styles and/or assets
import "../../styles/login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
    fetch(
      "https://3000-taylora36-nextmove-vmg9vgbafng.ws-us93.gitpod.io/api/token",
      options
    )
      .then((resp) => {
        if (resp.status === 200) return resp.json();
        else alert("An error has occurred!");
      })
      .then((data) => {})
      .catch((error) => {
        console.error("There was an error", error);
      });
  };

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
      <button type="submit" className="login__btn" onClick={handleClick}>
        Login
      </button>
    </form>
  );
};
