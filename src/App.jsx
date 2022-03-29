import "./App.scss"
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePage from './Pages/Home';
import ClassComponent from './Pages/ClassComponent';
import FunctionComponent from './Pages/Function Component';
import Navigation from './Pages/Nav';
import ByUseReducer from "./Pages/ByUseReducer";
import ByRedux from "./Pages/ByRedux";

const App = () => {
  return (
    <>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/functionComponent" element={<FunctionComponent />}></Route>
          <Route path="/classComponent" element={<ClassComponent />}></Route>
          <Route path="/useReducer" element={<ByUseReducer />}></Route>
          <Route path="/redux" element={<ByRedux />}></Route>
        </Routes>
      </div>
    </>

  );
};

export default App;