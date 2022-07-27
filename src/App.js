import React, {useEffect, useState} from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from './pages/Dashboard';
// import "antd/dist/antd.css";
const App = () => {
  const [authentication, setAuthentication] = useState(true)
  return(
    <Routes>
      {
        authentication
        ?
        (
          <Route path="/" element={<Home />} />
        )
        :
        (
          <Route path="/" element={<Dashboard />} />
        )
      }
    </Routes>
  )
};

export default App;