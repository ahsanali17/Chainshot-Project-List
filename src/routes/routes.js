import React from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/Main/homePage";
import { ContactMe } from ".././components/Portfolio/index";
import Dashboard from '../components/Main/dashboard';
 
export default function Routing() {
 return (
  <Routes>
   <Route exact path="/" element={<HomePage/>}></Route>
   <Route exact path="/Contact" element={<ContactMe/>}></Route>
   <Route exact path="/Dashboard" element={<Dashboard/>}></Route>
  </Routes>
 )
}