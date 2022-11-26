import React, { useEffect } from 'react';
import HomeButton from '../components/homebutton';
import Splash from '../components/splash';

import styles from '../styles/home.module.scss';

export default function Homepage() {
    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 600);

    const [startup, setSplash] = React.useState(true);
    useEffect (() => {
        setTimeout(() => {
            setSplash(false);
        }, 3000);
    }, []);

    return (
        <>
            {startup ? <Splash /> : null}

            <div className={styles.container}>
                <div className={styles.grid}>
                    <HomeButton icon={null} text="Explore" destination="/explore" />
                    <HomeButton icon={null} text="Events" destination="/events" />
                    <HomeButton icon={null} text="Goodies" destination="/goodies" />
                    <HomeButton icon={null} text="Favourites" destination="/favourites" />
                </div>
            </div>
        </>
    );
}