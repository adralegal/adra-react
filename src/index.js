import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { Route, Router, Switch } from "react-router-dom";

import history from "./utils/history";
import "./fonts/fonts.css";
import './index.css';
import App from './App';
import ProtectedRoute from "./components/hoc/ProtectedRoute";
import UploadPage from "./components/uploadPage/upload.js";
import * as serviceWorker from './serviceWorker';


const userReducer = require("./store/userReducer");
const { FirebaseContext, default: Firebase } = require("./components/firebase");
const store = configureStore({
  reducer: userReducer
});

let isMobile = false;
if(window.innerWidth <= 500) {
  isMobile = true
}
else isMobile = false;

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Provider store={store}>
        <FirebaseContext.Provider value={new Firebase()}>
          <Switch>
            <ProtectedRoute exact path={"/upload"} component={UploadPage} />
            <Route path={"/"} render={() => <App isMobile={isMobile}/>} />
          </Switch>
        </FirebaseContext.Provider>
      </Provider>
    </Router>
  </React.StrictMode >,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
