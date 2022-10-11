import { Link, Route, Routes } from "react-router-dom";

import { Input } from "./component/Input";
import { Login } from "./component/login";
import { Navbar } from "./component/navbar";
import  { Banner } from "./component/banner";
import  { Cards }   from "./component/cards";


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  return ( 
    <>
       <Navbar />
      <Routes>
       <Route path="/banner" element={<Banner />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Input />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
      
    </>

  );
}

export default App;
