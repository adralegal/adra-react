import React, {FunctionComponent} from "react";
import classes from "./sidebar.module.css";
import {SIDEBAR_ITEMS} from "../../utils/sidebar-subitems";
import NavbarItem from "../navbar/navbar-items/navbar-item";

const Sidebar: FunctionComponent = () => {

    const items: Array<JSX.Element> = SIDEBAR_ITEMS.map((item:string) => {
        return (<NavbarItem parent="sidebar">{item}</NavbarItem>)
    })

    return (
        <ul className={classes.Wrapper}>
            {items}
        </ul>
    )
}

export default Sidebar;