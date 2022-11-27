import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import styles from '../styles/eventli.module.scss';
import { faMoneyBill, faWifi, faMapPin, faCalendar, faClock } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

export default function EventItem(props: any) {
    //TODO: Change map address pin icon to map location pin
    const navigate = useNavigate();
    const handleClick = () => navigate('/cafe/' + props.id);
    return (
        <li className={styles.container} key={props.name} onClick={handleClick}>
            {props.image ? <div className={styles.imageContainer}><img src={props.image} alt={props.name} className={styles.image} /></div> : null}
            <div className={styles.content}>
                <h1 className={styles.name}>{props.name}</h1>
                {props.wifi ? <h2 className={styles.wifi}><FontAwesomeIcon icon={faWifi} className={styles.icon} />{props.password ? "Password needed" : "Open Network"}</h2> : null}
                {props.address ? <h2 className={styles.address}><FontAwesomeIcon icon={faMapPin} className={styles.icon} />{props.address}</h2> : null}
                {props.date ? <h2 className={styles.address}><FontAwesomeIcon icon={faCalendar} className={styles.icon} />{props.date}</h2> : null}
                {props.time ? <h2 className={styles.address}><FontAwesomeIcon icon={faClock} className={styles.icon} />{props.time}</h2> : null}
                <h2 className={styles.rating}><FontAwesomeIcon icon={faMoneyBill} className={styles.ratingIcon} />{props.price + " RON"}</h2>

            </div>

        </li>
    );
}