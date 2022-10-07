import React from "react";
import small from "../images/small.png";
import { Link } from "react-router-dom";
import  { Button }  from "../component/button";

export const Cards = () => {
  return (
    <div className="container-fluid my-5 ">
      <div className="row">
        <div className="col-md-3">
          <div className="card" >
            <img src={small} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Button>Go somewhere</Button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card" >
            <img src={small} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Button>Go somewhere</Button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card" >
            <img src={small} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Button>Go somewhere</Button>
            </div>
          </div>
        </div>
        <div className="col-md-3            ">
          <div className="card" >
            <img src={small} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Button>Go somewhere</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
