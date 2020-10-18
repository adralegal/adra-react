import React, {FunctionComponent} from 'react';

import classes from "./blogs-row.module.css";

type BlogsRowProps = {
    header: string,
    content: Array<any>
}

const BlogsRow:FunctionComponent<BlogsRowProps> = ({header, content}) => {


    return (
        <div className={classes.Wrapper}>
            <h3 style={{marginLeft: 30, fontSize: '1.5rem'}}>{header} &gt;&gt;</h3>
            <div className={classes.Content}>
                {content}
            </div>
        </div>
    )
}

export default BlogsRow;