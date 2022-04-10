import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home";
import List from "./pages/list";
import User from "./pages/user";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/listagem' element={<List/>} />
      <Route path='/user' element={<User/>} />
    </Routes>
  )
}

export default App;