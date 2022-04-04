import React from 'react';
import styles from './SearchBar.module.css';

export const SearchBar = () => {
    return (
        <div className={styles['search-bar']}>
            <input className={styles['search-input']} type="text" />
            <button className={styles['search-button']} type="submit"></button>
        </div>
    )
}
