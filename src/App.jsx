import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import ClassComponent from "./Pages/ClassComponent";
import FunctionComponent from "./Pages/Function Component";
import Navigation from "./Pages/Nav";
import ByUseReducer from "./Pages/ByUseReducer";
import ByRedux from "./Pages/ByRedux";
import Calculator from "./Calculator/calculator";

const App = () => {
  return (
    <div style={{ userSelect: "none" }}>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/functionComponent"
          element={<FunctionComponent />}
        ></Route>
        <Route path="/classComponent" element={<ClassComponent />}></Route>
        <Route path="/useReducer" element={<ByUseReducer />}></Route>
        <Route path="/redux" element={<ByRedux />}></Route>
        <Route path="/calculator" element={<Calculator />}></Route>
      </Routes>
    </div>
  );
};

export default App;
