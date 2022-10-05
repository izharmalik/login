import React from "react";
import "../btn.scss"

export const Button = ({children}) => {
  return (

        <button className="btn btn-dark">
          {children}
        </button>
  );
};
