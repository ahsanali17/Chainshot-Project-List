import React from "react";
import {Heading, Flex} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Navbar } from "./Portfolio";


const Header = () => {
 
 return (
  <Flex justifyContent="center" mb={10} mt={5} w="100%">
   <Navbar/>
  </Flex>
 );
};

export default Header;