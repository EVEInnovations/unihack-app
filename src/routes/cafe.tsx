import React, { useEffect } from 'react';
import ListItem from '../components/listitem';
import styles from '../styles/cafe.module.scss';

import lu from "../assets/vectors/Explore/lu.svg";
import ld from "../assets/vectors/Explore/ld.svg";
import ru from "../assets/vectors/Explore/ru.svg";
import rd from "../assets/vectors/Explore/rd.svg";
import { faChair, faPlug, faBoltLightning, faPhone, faWifi, faMapPin, faGlobe, faStar } from '@fortawesome/free-solid-svg-icons'

import shops from "../data/shops.json";
import top from "../data/top.json";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import goodies from '../data/goodies.json';
import events from '../data/events.json';
import GoodieItem from '../components/goodieitem';
import EventItem from '../components/eventitem';
import Faver from '../components/faver';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Cafe() {
    let { id } = useParams();
    //convert id to number

    const [props, setProps] = React.useState(() => {
        if (id !== undefined) {
            return shops[parseInt(id) - 1];
        }
        return shops[0];
    });

    let nav = useNavigate();

    console.log(props);

    return (
        <div className={styles.container}>
            <img src={lu} className={styles.lu} />
            <img src={ld} className={styles.ld} />
            <img src={ru} className={styles.ru} />
            <img src={rd} className={styles.rd} />
            <div className={styles.topBar}>
                <span onClick={() => {nav(-1)}} className={styles.backButton} ><FontAwesomeIcon icon={faArrowLeft} /></span>
                {/* <input type="text" placeholder="Search" className={styles.bar} onInput={handle} /> */}
                <Faver id={props.id} />
            </div>
            <div className={styles.imageContainer}><img src={props.image} alt={props.name} className={styles.image} /></div>
            <div className={styles.dataContainer}>
                <h1 className={styles.name}>{props.name}</h1>
                <h2 className={styles.address}><FontAwesomeIcon icon={faStar} className={styles.icon} />Rating: {props.rating}/5</h2>
                <h2 className={styles.address}><FontAwesomeIcon icon={faGlobe} className={styles.icon} /><a href={props.website}>Website</a></h2>
                <h2 className={styles.address}><FontAwesomeIcon icon={faPhone} className={styles.icon} /><a href={"tel:" + props.phone}>{props.phone}</a></h2>
                <h2 className={styles.address}><FontAwesomeIcon icon={faMapPin} className={styles.icon} /><a href={"https://maps.google.com/?q=" + props.address}>{props.address}</a></h2>
                <hr style={{ border: "0", borderBottom: "1px solid #628068" }} />
                <h2 className={styles.wifi}><FontAwesomeIcon icon={faWifi} className={styles.icon} />{props.wifi ? <>{props.wifiPassword ? "Wifi password: " + props.wifiPassword : "Open Network"}</> : "No Wifi"}</h2>
                {props.wifi ? <h2 className={styles.wifi}><FontAwesomeIcon icon={faBoltLightning} className={styles.icon} />{props.wifi ? <>{props.wifiSpeed ? "Wifi speed: " + props.wifiSpeed : "unknown"}</> : null}</h2> : null}
                <hr style={{ border: "0", borderBottom: "1px solid #628068" }} />
                <h2 className={styles.wifi}><FontAwesomeIcon icon={faChair} className={styles.icon} />{"Tables: " + props.tablesAvailable + "/" + props.tables}</h2>
                <h2 className={styles.wifi}><FontAwesomeIcon icon={faPlug} className={styles.icon} />{"Sockets: " + props.outletsAvailable + "/" + props.outlets}</h2>

            </div>

            <div className={styles.dataContainer}>
                <h1 className={styles.name}>Open Hours</h1>
                <h2 className={styles.address}>Monday-Friday: {props.openWeek}</h2>
                <h2 className={styles.address}>Weekend: {props.openWeekend}</h2>
            </div>

            <div className={styles.dataContainer}>
                <h1 className={styles.name}>Usual traffic</h1>
                <BarChart height={150} width={200} className={styles.chart} data={props.traffic}>
                    <Bar dataKey="traffic" fill="#8E412E" />
                    <XAxis dataKey="span" />
                </BarChart>
            </div>

            {props.goodies.length > 0 ?
                <>
                    <h1 className={styles.header}>Best from us:</h1>
                    <div className={styles.wantedWrapper}>
                        <ul className={styles.wanted}>
                            {goodies.map((goodie: any) => {
                                if (goodie.addId == props.id) {
                                    return <GoodieItem id={goodie.id} price={goodie.price} name={goodie.name} image={goodie.image} />
                                }
                            })}
                        </ul>
                    </div>
                </>
                : null}

            {props.events.length > 0 ?
                <>
                    <h1 className={styles.header}>Upcoming Events:</h1>
                    <div className={styles.wantedWrapper}>
                        <ul className={styles.wanted}>
                            {events.map((e: any) => {
                                if (e.addId == props.id) {
                                    let args = JSON.stringify(e.datetime).trim().toLocaleLowerCase().substring(1, JSON.stringify(e.datetime).length - 1).split(" ");
                                    return <EventItem id={e.id} date={args[0]} time={args[1]} price={e.price} name={e.name} image={e.image} />
                                }
                            })}
                        </ul>
                    </div>
                </>
                : null}

            <div className={styles.dataContainer}>
                <h1 className={styles.name}>{"Notes:"}</h1>
                <ul className={styles.address} style={{ paddingLeft: "10px" }}>
                    {props.notes.map((note) => {
                        return <li>{note}</li>
                    })}
                </ul>
            </div>
        </div>

    );
}