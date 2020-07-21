import React, {FunctionComponent} from 'react';
import ScrollMenu from "react-horizontal-scrolling-menu";

import classes from "./blogs-row.module.css";

type BlogsRowProps = {
    header: string,
    content: Array<any>
}

const BlogsRow:FunctionComponent<BlogsRowProps> = ({header, content}) => {



    const ArrowLeft = ()=> {
        return(
            <div className={classes.Arrow}>&lt;</div>
        )
    }
    const ArrowRight = () => {
      return <div className={classes.Arrow}>&gt;</div>
    }


    return (
        <div className={classes.Wrapper}>
            <h3 style={{marginLeft: 30}}>{header} &gt;&gt;</h3>
            <div className={classes.Content}>
                <ScrollMenu
                data={content}
                wrapperStyle={{width: '100%'}}
                menuStyle={{alignItems: 'center',width: '90vw', transform: 'translate3d(0,0,0)'}}
                itemStyle={{width: 'max(20vw,300px)', padding: '0 40px', boxSizing: 'border-box'}}
                innerWrapperStyle={{}}
                wheel={true}
                onSelect={(key) => {
                    console.log(key);
                }}
                />
            </div>
        </div>
    )
}

export default BlogsRow;