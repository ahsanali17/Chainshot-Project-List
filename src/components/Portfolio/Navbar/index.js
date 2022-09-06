import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavNameText } from "./NavbarElement";

const Navbar = () => {
    return (
       <>
       <Nav>
           <NavLink to="/">
                <NavNameText>Ahsan Syed</NavNameText>
           </NavLink>
           <Bars />
           <NavMenu>
               <NavLink to="/about" activestyle="true">
                   About
               </NavLink>
               <NavLink to="/work" activestyle="true">
                   Work
               </NavLink>
               <NavLink to="/contact" activestyle="true">
                   Contact Me
               </NavLink>
                {/* <NavBtnLink to="/contact">
                    <span>Contact</span> 
                </NavBtnLink> */}
           </NavMenu>
       </Nav>
       </>

    )
};

export default Navbar;