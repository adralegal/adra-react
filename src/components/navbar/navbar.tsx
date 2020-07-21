import React, { FunctionComponent } from "react";
import classes from "./navbar.module.css";
import NavbarItems from "./navbar-items/navbar-items";
import { useEffect } from "react";
import { createRef } from "react";


let navHeight = 0;

const Navbar: FunctionComponent = () => {
    return (
        <div ref={el => {
            if(el !== null) {
                navHeight = el.clientHeight
                console.log(navHeight)
            }
        }} className={classes.Navbar}>
            <h1>ADRA.</h1>
            <NavbarItems/>
        </div>
    )
}

export default Navbar;
export {navHeight};
