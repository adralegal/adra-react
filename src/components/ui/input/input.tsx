import React, { FormEventHandler } from "react"
import classes from "./input.module.css"

type InputProps = {
  label?: string
  withLabel?: true
  placeholder?: string
  name: string,
  type?: string,
  onInput: FormEventHandler,
  value: string
}

const Input: React.FC<InputProps> = props => {
  return (
    <div className={classes.InputWrapper}>
      {props.withLabel ? (
        <label className={classes.InputLabel} htmlFor={props.name}>
          {props.label?.toUpperCase()}
        </label>
      ) : null}
      <br/>
      <input
        className={classes.Input}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onInput}
        value={props.value}
      />
    </div>
  )
}

export default Input;
