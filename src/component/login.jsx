import React, { useEffect, useState } from "react";
import small from "../images/small.png";
import { Button } from "../component/button";
import { Alert } from "bootstrap";
import validation from "./validation";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    checked: false,
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const [errors, setErrors] = useState({
    username: false,
    password: false,
  });

  const onSubmit = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    setFormData({
      username: "",
      password: "",
      checked: false,
    });
    setErrors(validation(formData));
  }

  const Navigate = useNavigate();

  const fetch = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:4000/api/users/register",
        {
          name: formData.username,
          password: formData.password,
        },

        {
          headers: { "Content-Type": "application/json" },
        }
      )

      .then((result) => {
        console.log(result);

        setFormData({
          name: "",
          password: "",
        });

        localStorage.setItem("user", JSON.stringify(result.data));
        Navigate("/Banner");
      })
      
      .catch((error) => {
        console.log(error);
      });
  };

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
                value={formData.username}
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
                value={formData.password}
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
                value={formData.checked}
                checked={formData.checked}
                onChange={() =>
                  setFormData({ ...formData, checked: !formData.checked })
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
