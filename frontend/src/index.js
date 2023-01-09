import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import Diabetes from "./components/Diabetes/Diabetes";
// import Testing from "./components/Testing";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Result from "./components/Result";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="diabetes" element={<Diabetes />}/>
        <Route path="result" element={<Result/>}/>
      </Routes>
    </Router>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);