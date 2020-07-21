import React from "react";
import classes from "./select.module.css";

const Select = (props) => {

    const options = props.options.map(option => {
        return <option key={option} value={option}>{option}</option>
    })
    return (
        <div className={classes.SelectWrapper}>
            {props.withLabel ? <label className={classes.SelectLabel}>{props.label.toUpperCase()}</label> : null}
            <br/>
            <select className={classes.Select} name={props.name} value={props.value} onChange={props.handleChange}>
                {options}
            </select>
        </div>
    )
}

export default Select;