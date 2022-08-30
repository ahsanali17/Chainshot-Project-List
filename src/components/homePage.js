import React from "react";

// import { Button, Container, Box, Wrap, Stack } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
import Hero from './Portfolio/Hero/index';

import ProjectList from "./ProjectLists/projects";

const HomePage = () => {
 
 
 return (
  <div>
   <Hero/>
   <ProjectList />
   
   
  </div>
 );
}

export default HomePage;