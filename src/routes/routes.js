import React from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/homePage";

export default function Routing() {
 return (
  <Routes>
   <Route exact path="/" element={<HomePage/>}></Route>
  </Routes>
 )
}