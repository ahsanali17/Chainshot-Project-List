import React from "react";
import {Heading, Flex} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
 
 return (
  <Flex justifyContent="center" mb={10} mt={5} w="100%">
   <Link to={"/"}>
    <Heading as="h2" color="black">Chainshot Projects</Heading>
   </Link>
  </Flex>
 );
};

export default Header;