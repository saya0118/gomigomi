import React from 'react';
import styles from './Page.module.css';
import { SearchBar } from '../SearchBar';

export const Page = () => {
    return (
        <div className={styles['page']}>
            <SearchBar/>
        </div>
    )
}
