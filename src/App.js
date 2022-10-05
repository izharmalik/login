import { Link, Route, Routes } from "react-router-dom";

import { Input } from "./component/Input";
import { Login } from "./component/login";
 

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Input />} />
        <Route path="/api" element={<fetchfile />} />
      </Routes>
    </>
  );
}

export default App;
