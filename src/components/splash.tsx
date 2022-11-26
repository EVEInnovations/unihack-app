import styles from '../styles/splash.module.scss';

import lu from '../assets/vectors/Homepage/lu.svg';
import ru from '../assets/vectors/Homepage/ru.svg';
import ld from '../assets/vectors/Homepage/ld.svg';
import rd from '../assets/vectors/Homepage/rd.svg';

import logo from '../assets/vectors/Homepage/logo.svg';
import text from '../assets/vectors/Homepage/text.svg';


export default function Splash() {
    return (
        <div className={styles.container}>
            <img src={lu} className={styles.lu} />
            <img src={ru} className={styles.ru} />
            <img src={ld} className={styles.ld} />
            <img src={rd} className={styles.rd} />

            <img src={logo} className={styles.logo} />
            <img src={text} className={styles.text} />
        </div>
    );
}
