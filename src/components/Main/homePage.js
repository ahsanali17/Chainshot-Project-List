import React from "react";

// import { Button, Container, Box, Wrap, Stack } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
import {ContactMe, Hero, Skills, Work} from '../Portfolio/index';
import ProjectList from "../ProjectLists/projects";
import './homepage.scss';

const HomePage = () => {
 
 // TODO: Instead of styled components we should go for sass or chakra ui styles components
 return (
  <div id="homePage" >
   <Hero/> {/* TODO: Adding a photo here and styling it better with css animations  */}
   <Skills/> {/* TODO: Carousel for skills*/}
   <Work/> {/* TODO: Fixing this up and letting users enter a seperate dashboard to showcase what I built in Codeboxx and in Chainshot  */}
   <ContactMe/> {/* TODO: More of a styling issue here with the form*/}
  </div>
 );
}

export default HomePage;