import React, { useState } from "react";
//APIs
import { Alert } from "react-bootstrap";
//package
import axios from "axios";

const AddClient = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  console.log("🚀 ~ file: login.js ~ line 9 ~ AddClient ~ login", login);

  const [showAlter, setShowAlter] = useState(false);

  const OnSubmit = (event) => {
    event.preventDefault();
  };

  const handleVisible = () => {
    setShowAlter(true);
    setTimeout(() => {
      setShowAlter(false);
    }, 3000);
  };

  return (
    <div className="addUser-form-container">
      <h2>Login</h2>
      {showAlter ? (
        <Alert variant={"success"}>client a été ajouté</Alert>
      ) : (
        <div style={{ height: 66 }} />
      )}
      <form onSubmit={OnSubmit}>
        {/* email */}
        <div className="form-group">
          <label>Email: </label>
          <input
            type="text"
            required
            minlength="3"
            className="form-control"
            value={login.email}
            onChange={(e) => {
              setLogin({ ...login, email: e.target.value });
            }}
          />
        </div>
        {/* password */}
        <div className="form-group">
          <label>Password: </label>
          <input
            type="password"
            required
            minlength="3"
            className="form-control"
            value={login.password}
            onChange={(e) => {
              setLogin({ ...login, password: e.target.value });
            }}
          />
        </div>

        <div className="form-group">
          <br />
          <input type="submit" value="login" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default AddClient;
