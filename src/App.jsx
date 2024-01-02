import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./ProjectsContanier/Home";
import ToDoList from "./ProjectsContanier/ToDoList";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        {/* <Navbar /> */}
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/chatApp" element={<ChatApp/>} /> */}
          <Route path="/todolist" element={<ToDoList/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
