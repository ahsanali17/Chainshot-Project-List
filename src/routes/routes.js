import React from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/homePage";
import { ContactMe } from ".././components/Portfolio/index";
 
export default function Routing() {
 return (
  <Routes>
   <Route exact path="/" element={<HomePage/>}></Route>
   <Route exact path="/Contact" element={<ContactMe/>}></Route>
  </Routes>
 )
}