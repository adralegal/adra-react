import React from "react";
import styles from "./backdrop.module.css";

const Backdrop = props => {
    const classes = [styles.Wrapper];
    if(props.isVisible) {
        classes.push(styles.Visible);
    }
    else classes.push(styles.Hidden);
    console.log(props.isVisible);
    return (
        <>
            <div className={classes.join(' ')}>
                {props.component}
                {/* <div onClick={props.onCloseHandler} className={styles.CloseBtn}>
                    X
            </div> */}
            </div>

        </>
    )
}

export default Backdrop;