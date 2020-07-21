import React, { FunctionComponent } from "react";
import classes from "./navbar-item.module.css";

type NavbarItemProps = {
    subItems?: Array<String>,
    parent: string
}

const NavbarItem: FunctionComponent<NavbarItemProps> = ({subItems, children, parent}) => {
  const style: string= parent === "sidebar"? classes.SidebarItem : classes.NavbarItem;
    return (
      <li title={children + ""} className={style}>
        <span>{children}</span>
      </li>
    )
}

export default NavbarItem;
