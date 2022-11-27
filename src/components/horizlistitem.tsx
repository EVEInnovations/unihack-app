import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import styles from '../styles/horizli.module.scss';
import { faStar, faWifi, faMapPin } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

export default function HorizListItem(props: any) {
    //TODO: Change map address pin icon to map location pin
    const navigate = useNavigate();
    const handleClick = () => navigate('/cafe/' + props.id);
    return (
        <li className={styles.container} key={props.name} onClick={handleClick}>
            {props.image ? <div className={styles.imageContainer}><img src={props.image} alt={props.name} className={styles.image} /></div> : null}
            <div className={styles.content}>
                <h1 className={styles.name}>{props.name}{props.wifi ? <FontAwesomeIcon icon={faWifi} className={styles.wifi} /> : null}</h1>
                <h2 className={styles.address}><FontAwesomeIcon icon={faMapPin} className={styles.icon} />{props.address}</h2>
            </div>
            <h2 className={styles.rating}><FontAwesomeIcon icon={faStar} className={styles.ratingIcon} />{props.rating}</h2>

        </li>
    );
}