import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MembersPage.scss';

const MembersPage = () => (
    <div className={styles.content}>
        Welcome to the KCSARA members list!
        See <Link to="/members/jaime">Jaime</Link>
    </div>
);

export default MembersPage;
