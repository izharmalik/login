import React from "react";
import { Route } from "react-router-dom";
import small from "../images/small.png";



export const Banner = () => {
  return (
    <>
      <div className="jumbotron">
        <div className="container-fluid text-center">
          <div className="row ">
          <div className="col-md-5 ">
        <h1 className="display-4 my-5">Hello, world!</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="m-5" />
        <p>
          It uses utility classNamees for typography and spacing to space
          content out within the larger container.
        </p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more  
          </a>
        </p>
        </div>
        <div className="col-md-5 ">
        <img src={small}/>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};
