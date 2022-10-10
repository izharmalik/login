import React, { useEffect, useState } from "react";
import small from "../images/small.png";
import { Button } from "../component/button";
import { Alert } from "bootstrap";
import validation from "./validation";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

export const Login = () => {
  const [FormData, setFormData] = useState({
    username: "",
    password: "",
    checked: false,
  });

  const Navigate = useNavigate();

  const fetch = (e) => {
    e.preventDefault();

    console.log("first");
    axios
      .post("https://test1-login.immunify.me/api/entry/email", {
        email: "izhar.himtreasure@gmail.com",
        deviceId: "6514511",
      })
      .then((result) => { 
        console.log(result);  
        Navigate('/banner');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) =>
    setFormData({ ...FormData, [e.target.name]: e.target.value });

  const [errors, setErrors] = useState({
    username: false,
    password: false,
  });

  const onSubmit = (e) =>
    setFormData({ ...FormData, [e.target.name]: e.target.value });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(FormData);
    setFormData({
      username: "",
      password: "",
      checked: false,
    });
    setErrors(validation(FormData));
   }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 mt-5">
          <form onSubmit={fetch}>
            <h4>Welcome !</h4>
            <h2 className="mb-3">Sign in to </h2>
            <p>Lorem Ipsum is simply </p>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                User name
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                placeholder="Enter your user name"
                value={FormData.username}
                onChange={handleChange}
              />
              {errors.username && (
                <p className="errors text-danger">{errors.username}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter your Password"
                id="Password1"
                value={FormData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="errors text-danger">{errors.password}</p>
              )}
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                value={FormData.checked}
                checked={FormData.checked}
                onChange={() =>
                  setFormData({ ...FormData, checked: !FormData.checked })
                }
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember me
              </label>
              <Button>Login</Button>
              <p className="text-center mt-3">
                Don’t have an Account ? <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
        <div className="col-md-7">
          <img src={small} />
        </div>
      </div>
    </div>
  );
};
