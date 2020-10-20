import React, { useState } from 'react';
import styles from './pageIndicator.module.css';

const PageIndicator = props => {
    const [currentPage, setCurrentPage] = useState(1);
    let pages = [];
    for (let i = 1; i <= props.pages; i++) {
        pages.push(<span className={currentPage === i ? styles.active : ''} onClick={() => setCurrentPage(i)} key={i}>{i}</span>)
    }
    console.log(currentPage);
    return (
        <div className={styles.PageIndicator}>
            <span onClick={() => currentPage !== 1 ? setCurrentPage(currentPage - 1) : null}>&lt;</span>
            {pages}
            <span onClick={() => currentPage !== props.pages ? setCurrentPage(currentPage + 1) : null}>&gt;</span>
        </div>
    )
}

export default PageIndicator;