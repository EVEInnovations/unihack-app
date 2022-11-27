import React, { useEffect } from 'react';
import ListItem from '../components/listitem';
import styles from '../styles/explore.module.scss';

import lu from "../assets/vectors/Explore/lu.svg";
import ld from "../assets/vectors/Explore/ld.svg";
import ru from "../assets/vectors/Explore/ru.svg";
import rd from "../assets/vectors/Explore/rd.svg";
import back from "../assets/vectors/Explore/back.svg";
import HorizListItem from '../components/horizlistitem';

import events from "../data/events.json";
import top from "../data/top.json";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import DynamicItem from '../components/dynamicitem';

export default function Events() {
    const [query, setQuery] = React.useState("");

    const handle = (event: any) => {
        setQuery(event.target.value);
    };

    return (
        <div className={styles.container}>
            <img src={lu} className={styles.lu} />
            <img src={ld} className={styles.ld} />
            <img src={ru} className={styles.ru} />
            <img src={rd} className={styles.rd} />

            <div className={styles.topBar}>
                <Link to="/" className={styles.backButton} ><FontAwesomeIcon icon={faArrowLeft} /></Link>
                <input type="text" placeholder="Search" className={styles.bar} onInput={handle} />
            </div>
            {query.trim().length === 0 ?
                <>
                    <h1 className={styles.header}>Around You</h1>
                    <div className={styles.horiz}>
                        {events.map((e: any) => {
                            return <DynamicItem id={e.addId} address={e.address} price={e.price} name={e.name} image={e.image} />
                        })}
                    </div>
                </>
                : <>
                    <h1 className={styles.header}>Results</h1>
                    <div className={styles.horiz}>
                        {events.map((e: any) => {
                            console.log(JSON.stringify(e.name));
                            if (JSON.stringify(e.name).toLowerCase().includes(query.toLowerCase())) {
                                return <DynamicItem id={e.addId} address={e.address} price={e.price} name={e.name} image={e.image} />
                            }
                        })}
                    </div>
                </>
            }
            {/* <img src={back} className={styles.back} /> */}
        </div>
    );
}