import styles from '../styles/homebtn.module.scss';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'



export default function HomeButton(props: any) {
    return (
        <Link to={props.destination} className={styles.container}>
            <div className={styles.inner}>
                <FontAwesomeIcon icon={faCoffee} className={styles.icon}/>
                <p className={styles.text}>{props.text}</p>
            </div>
        </Link>
    );
}
