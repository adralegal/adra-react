import React, { useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import firebase from "firebase";
import { StyledFirebaseAuth } from "react-firebaseui";
import { Route } from "react-router-dom";
import _ from "lodash";

import Button from "../ui/button/button";
import { FirebaseContext } from "../firebase";
import { setUser } from "../../store/userReducer";

const ProtectedRoute = ({ component: Component, path, ...rest }) => {
    const logged = useSelector(state => state);
    const fb = useContext(FirebaseContext);
    const dispatch = useDispatch();


    const uiConfig = {
        signInFlow: "popup",
        signInSuccessUrl: path,
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
    };


    useEffect(() => {
        const unsubscribe = fb.auth.onAuthStateChanged(user => {
            if (user) {
                if (_.isEmpty(logged.default))
                    dispatch(setUser({
                        name: user.displayName,
                        email: user.email,
                        emailverified: user.emailVerified,
                        photoURL: user.photoURL,
                    }));
            }
        });
        return () => {
            unsubscribe();
        }
    });

    const logoutHandler = () => {
        dispatch(setUser({}));
        fb.auth.signOut();
    }
    const render = () => _.isEmpty(logged.default) ? <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fb.auth} /> :

        <>
            <Button onClick={logoutHandler}>Logout</Button>
            <Component {...rest} />

        </>
    return (<Route path={path} component={render} />)
}

export default ProtectedRoute;