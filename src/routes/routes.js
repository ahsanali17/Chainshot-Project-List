import React from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/Main/homePage";
import { ContactMe, Work } from ".././components/Portfolio/index";
import DashboardChainshot from '../components/Main/DashboardChainshot';
import DashboardCodeboxx from '../components/Main/DashboardChainshot';
export default function Routing() {
 return (
  <Routes>
   <Route exact path="/" element={<HomePage/>}></Route>
   <Route exact path="/Contact" element={<ContactMe/>}></Route>
   <Route exact path="/Work" element={<Work/>}></Route>
   <Route exact path="/Dashboard/:Chainshot" element={<DashboardChainshot/>}></Route>
   <Route exact path="/Dashboard/:Codeboxx" element={<DashboardCodeboxx/>}></Route>
  </Routes>
 )
}