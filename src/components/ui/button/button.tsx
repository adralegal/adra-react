import React from "react";
import classes from "./button.module.css";

type ButtonProps = {
    onClick?: React.MouseEventHandler
}

const Button: React.FC<ButtonProps> = ({onClick, children}) => {
    return(
        <div onClick={onClick} className={classes.Button}>
            {children}
        </div>
    )
}
export default Button;