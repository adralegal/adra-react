import React, { useReducer, useContext, useState } from "react";
import { useSelector } from "react-redux";
import firebase from "firebase";

import { FirebaseContext } from "../firebase";
import Input from "../ui/input/input";
import "./upload.css";
import Editor from "../ui/editor/editor";
import Button from "../ui/button/button";
import Select from "../ui/select/select";




const UploadPage = () => {

  const typeOptions = [
    "Constitutional Law",
    "Administrative Law",
    "Indian",
    "International",
    "Judgements Simplified",
    "Legislation Analysis",
    "Book Review",
    "Social Commentry",
    "Legal Reassessment Of Current Scenarios"
  ]
  const initialState = {
    type: typeOptions[0],
    title: "",
    summary: "",
    content: ``,
  }

  const reducer = (state, { field, value }) => {
    return {
      ...state,
      [field]: value,
    }
  }

  const [isLoading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const user = useSelector(state => state.default);
  const [state, dispatch] = useReducer(reducer, initialState);
  const fb = useContext(FirebaseContext);

  const onChange = (e) => {
    dispatch({
      field: (e.target).name,
      value: (e.target).value,
    })
    console.log(e.target.value);
  }



  const submitButtonHandler = async () => {
    console.log(user);
    if(state.title && state.type && state.content && state.summary) {
      setLoading(true);
      const res = await fb.db.collection('blogs').add({
        title: state.title,
        type: state.type,
        summary: state.summary,
        content: state.content,
        createdBy: user,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      setLoading(false);
      setSubmitted(true);
      console.log(res);
    }
  }

  const uploadForm = <div className="UploadForm">
    <div>
      <Input
        name={"title"}
        withLabel={true}
        label={"Title"}
        placeholder={"Blog Title"}
        onInput={onChange}
        value={state.title}
      />
      <Select
        name={"type"}
        withLabel={true}
        label={"Type"}
        handleChange={onChange}
        value={state.type}
        options={typeOptions}
      />
      <Input
        name={"summary"}
        withLabel={true}
        label={"Summary"}
        placeholder={"Blog Summary"}
        onInput={onChange}
        value={state.summary}
      />
      <Editor
        name={"content"}
        withLabel={true}
        label={"Content"}
        placeholder={"Blog Content (supports markdown)"}
        onInput={onChange}
        value={state.content}
      />
      <br />
      <div style={{ width: "25%", textAlign: "center" }}>
        <Button onClick={submitButtonHandler}>Submit</Button>
      </div>
    </div>
  </div>

  return <>
    {isLoading ? <h1 style={{fontFamily: "Old Sans"}}>Loading</h1> : null}
    {submitted? <h1 style={{fontFamily: "Old Sans"}}>Blog Submitted <br/>
    Reload to submit another one.
    </h1>: null}
    {!isLoading && !submitted ? uploadForm : null}
  </>
}

export default UploadPage;
