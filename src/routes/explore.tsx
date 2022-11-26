import React, { useEffect } from 'react';
import ListItem from '../components/listitem';
import styles from '../styles/explore.module.scss';

import lu from "../assets/vectors/Explore/lu.svg";
import ld from "../assets/vectors/Explore/ld.svg";
import ru from "../assets/vectors/Explore/ru.svg";
import rd from "../assets/vectors/Explore/rd.svg";
import HorizListItem from '../components/horizlistitem';

import shops from "../data/shops.json";
import top from "../data/top.json";

export default function Explore() {
    

    return (
        <div className={styles.container}>
            <img src={lu} className={styles.lu} />
            <img src={ld} className={styles.ld} />
            <img src={ru} className={styles.ru} />
            <img src={rd} className={styles.rd} />

            <input type="text" placeholder="Search" className={styles.bar} />
            <h1 className={styles.header}>Most Wanted</h1>
            <div className={styles.wantedWrapper}>
                <ul className={styles.wanted}>
                    {shops.map((shop: any) => {
                        if(top.includes(shop.id)) {
                            return <ListItem address={shop.address} rating={shop.rating} name={shop.name} password={shop.password} image={shop.image} />
                        }    
                    })}
                </ul>
            </div>
            <h1 className={styles.header}>Close to you</h1>
            <div className={styles.horiz}>
            {shops.map((shop: any) => {
                            return <HorizListItem wifi={shop.wifi} address={shop.address} rating={shop.rating} name={shop.name} image={shop.image} /> 
                    })}
                    </div>
        </div>
    );
}