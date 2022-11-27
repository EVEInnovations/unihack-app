import React, { useEffect } from 'react';
import HomeButton from '../components/homebutton';
import Splash from '../components/splash';

import styles from '../styles/home.module.scss';
import bleft from '../assets/vectors/Homepage/bleft.svg';
import bright from '../assets/vectors/Homepage/bright.svg';
import upleft from '../assets/vectors/Homepage/upleft.svg';
import upright from '../assets/vectors/Homepage/upright.svg';
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import { faCoffee,faSearch,faCalendarAlt,faHeart,faStar } from '@fortawesome/free-solid-svg-icons'

export default function Homepage() {
    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 600);

    const [startup, setSplash] = React.useState(window.localStorage.getItem("started") == "false" );
    useEffect(() => {
        setTimeout(() => {
            setSplash(false);
            window.localStorage.setItem("started", "true");
        }, 3000);
    }, []);

    return (
        <>
            {startup ? <Splash /> : null}

            <img src={bleft} className={styles.bleft} />
            <img src={bright} className={styles.bright} />
            <img src={upleft} className={styles.upleft} />
            <img src={upright} className={styles.upright} />
          
          

            <div className={styles.container}>
                <div className={styles.grid}>
                    <HomeButton icon={faSearch} text="Explore" destination="/explore" />
                    <HomeButton icon={faCalendarAlt} text="Events" destination="/events" />
                    <HomeButton icon={faStar} text="Goodies" destination="/goodies" />
                    <HomeButton icon={faHeart} text="Favourites" destination="/favourites" />
                </div>
            </div>
        </>
    );
}