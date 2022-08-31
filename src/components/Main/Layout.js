import React from "react";
import Header from "./header";
import FooterContainer from '../Portfolio/Footer/footerContainer';
import { Container } from "@chakra-ui/react";

const Layout = (props) => {
 return (
  <Container maxW="80%">
   <Header />
   {props.children}
   <FooterContainer/>
  </Container>
 );
};

export default Layout;