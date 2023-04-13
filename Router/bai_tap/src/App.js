import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './router1/Home';
// import Login from './router1/Login';
import Login from './router2/Login';
import Employee from './router2/Employee';
import EmployeeDetail from './router2/EmployeeDetail';

function App(){
  return(
    <BrowserRouter>
    <Routes>
       {/* <Route path="/" element={<Login />} />
        <Route path="/home/:email" element={<Home />} /> */}
        <Route exact path="/" element={<Login />} />
      <Route path="/employee" element={<Employee />} />
      <Route path="/employee-detail/:id" element={<EmployeeDetail />} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;