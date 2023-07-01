import React, { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label className="col-lg-6">
        Name:
        <input
          type="text"
          placeholder="Please enter your name"
          className="form-control"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
      </label>
      <button type="submit" className="btn btn-success">
        Login
      </button>
    </form>
  );
}

export default Login;