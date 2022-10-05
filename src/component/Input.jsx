import React, { useState } from "react";
import small from "../images/small.png";
import  { Button }  from "../component/button";
import validation from "./validation";
import { Link } from "react-router-dom";


export const Input = () => {

  const [ formdata,setformdata]  = useState({
    email:"",
    username:"",
    password:"",
    cpassword:"",
    checked:false
  });

  const handleChange = e =>setformdata({...formdata, [e.target.name]: e.target.value });

  const [errors, setErrors] = useState({
    email:false,
    username:false,
    password:false,
    cpassword:false,
  });


 const onSubmit = e =>setformdata({...formdata, [e.target.name]: e.target.value})
 
 function handleSubmit(e){
  e.preventDefault()
   console.log(formdata);
  setformdata({
    email:"",
    username:"",
    password:"",
    cpassword:"",
    checked:false
  });
  setErrors(validation(formdata));
 }


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 mt-5">
          <form onSubmit={handleSubmit}>
            <h4>Welcome !</h4>
            <h2 className="mb-3">Sign up to </h2>
            <p>Lorem Ipsum is simply </p>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={formdata.email}
                onChange={handleChange}
              />
              {errors.email && <p className="errors text-danger">{errors.email}</p>}
            </div>
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
                value={formdata.username}
                onChange={handleChange}
              />
              {errors.username && <p className="errors text-danger">{errors.username}</p>}
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
                value={formdata.password}
                onChange={handleChange}
              />
              {errors.password && <p className="errors text-danger">{errors.password}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
              Confirm Password
              </label>
              <input
                type="password"
                name="cpassword"
                className="form-control"
                placeholder="Confirm your Password"
                id="confirm password"
                value={formdata.cpassword}
                onChange={handleChange}
              />
              {errors.cpassword && <p className="errors text-danger">{errors.cpassword}</p>}
            </div>  
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                value={formdata.checked}
              checked={formdata.checked}
               onChange={()=>setformdata({...formdata,checked:!formdata.checked})}
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
               Remember me  
              </label>
              <Button children="login">Register</Button>
              <p className="text-center mt-2">Already have an Account ? <Link to="/">Login</Link></p>
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
