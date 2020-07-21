import React, { FunctionComponent } from "react"
import classes from './navbar-items.module.css';
import NavbarItem from "./navbar-item";

const NavbarItems: FunctionComponent = () => {
    return (
        <ul className={classes.Wrapper}>

            <NavbarItem parent="navbar">Law</NavbarItem>
            <NavbarItem parent="navbar">Politics</NavbarItem>
            <NavbarItem parent="navbar">Judgements &amp; Legislations</NavbarItem>
            <NavbarItem parent="navbar">Critique</NavbarItem>
            <NavbarItem parent="navbar">Misc</NavbarItem>
            
        </ul>
    )
}

export default NavbarItems;
