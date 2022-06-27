import React, { useState } from "react";

function Login(props) {
  let [user, setUser] = useState("");
  let [email, setEmail] = useState("");

  let handleUsername = function (e) {
    setUser(e.target.value);
  };
  let handleEmail = function (e) {
    setEmail(e.target.value);
  };

  let handleSubmit = function (e) {
    e.preventDefault();
    console.log(user, email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="username" onChange={handleUsername} />
      <input type="email" placeholder="Email" onChange={handleEmail} />

      <input type="submit" />
    </form>
  );
}

export default Login;
