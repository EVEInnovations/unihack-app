// let ls = window.localStorage.getItem("favourites")?.split(",") ?? [];

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Faver(props: any) {
    let check = () => {
        let ls = window.localStorage.getItem("favourites")?.split(",") ?? [];
        if (ls.includes(JSON.stringify(props.id))) {
            return true;
        } else {
            return false;
        }
    }
    let [faved, setFaved] = useState(check());
    let fav = () => {
        let ls = window.localStorage.getItem("favourites")?.split(",") ?? [];
        if (ls.includes(JSON.stringify(props.id))) {
            ls = ls.filter((item: any) => item !== JSON.stringify(props.id));
            window.localStorage.setItem("favourites", ls.join(","));
            setFaved(false);
        } else {
            ls.push(JSON.stringify(props.id));
            window.localStorage.setItem("favourites", ls.join(","));
            setFaved(true);
        }
    }


    return (
        <FontAwesomeIcon onClick={fav} icon={faHeart} style={Object.assign({}, { borderRadius: "25px", backgroundColor: "rgb(187, 111, 77)", height: "30px", width: "30px", padding: "5px" }, faved ? { color: "#831d1c" } : { color: "#E6CEBD" })} />
    );
}

export default Faver;
