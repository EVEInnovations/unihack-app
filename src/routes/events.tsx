import React, { useEffect } from 'react';
import ListItem from '../components/listitem';
import styles from '../styles/explore.module.scss';

import lu from "../assets/vectors/Explore/lu.svg";
import ld from "../assets/vectors/Explore/ld.svg";
import ru from "../assets/vectors/Explore/ru.svg";
import rd from "../assets/vectors/Explore/rd.svg";
import back from "../assets/vectors/Explore/back.svg";
import HorizListItem from '../components/horizlistitem';

import shops from "../data/shops.json";
import top from "../data/top.json";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function Events() {


    return (
        <div className={styles.container}>
            <img src={lu} className={styles.lu} />
            <img src={ld} className={styles.ld} />
            <img src={ru} className={styles.ru} />
            <img src={rd} className={styles.rd} />

            <div className={styles.topBar}>
                <Link to="/" className={styles.backButton} ><FontAwesomeIcon icon={faArrowLeft}/></Link>
                <input type="text" placeholder="Search" className={styles.bar} />
            </div>
            <h1 className={styles.header}>Around You</h1>
            <div className={styles.horiz}>
                {shops.map((shop: any) => {
                    return <HorizListItem wifi={shop.wifi} address={shop.address} rating={shop.rating} name={shop.name} image={shop.image} />
                })}
            </div>
            {/* <img src={back} className={styles.back} /> */}
        </div>
    );
}