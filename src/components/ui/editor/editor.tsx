import React, { FormEventHandler, useState } from "react"
import ReactMarkDown from "react-markdown"
import classes from "./editor.module.css"

type EditorProps = {
  label?: string
  withLabel?: true
  placeholder?: string
  name: string
  onInput: FormEventHandler
  value: string
}

const Editor: React.FC<EditorProps> = props => {
  const [isPreview, setPreview] = useState(false);
  const editorStyle = [classes.EditorItem];
  const previewStyle = [classes.EditorItem];
  if(isPreview) {
    previewStyle.push(classes.Active);
  }
  else
  editorStyle.push(classes.Active);

  return (
    <div className={classes.EditorWrapper}>
      {props.withLabel ? (
        <label className={classes.EditorLabel} htmlFor={props.name}>
          {props.label?.toUpperCase()}
        </label>
      ) : null}
      <br />
      <div>
        <div className={classes.EditorOptions}>
          <span
            className={editorStyle.join(" ")}
            onClick={() => setPreview(false)}
          >
            Editor
          </span>
          &nbsp;
          <span className={previewStyle.join(" ")} onClick={() => setPreview(true)}>
            Preview
          </span>
        </div>
        {isPreview ? (
          <ReactMarkDown className={classes.Editor} source={props.value} />
        ) : (
          <textarea
            className={classes.Editor}
            name={props.name}
            placeholder={props.placeholder}
            onChange={props.onInput}
            value={props.value}
          />
        )}
      </div>
    </div>
  )
}

export default Editor
