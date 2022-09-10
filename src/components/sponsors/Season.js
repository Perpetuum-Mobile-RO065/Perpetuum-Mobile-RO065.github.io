import React from "react";
import {Navigate, useParams} from "react-router-dom";
import sponsors from "../../assets/data/sponsors";
import styles from './Season.module.css';

export default function Season() {
    const params = useParams();

    const searchSeason = (season) => {
        return sponsors.find(sponsor => sponsor.season === season);
    }

    const season = searchSeason(params.season);
    if (season === undefined) {
        return <Navigate to={"404"} replace={true}/>
    }

    return (
        <div className={styles.sponsorsList}>
            {season.type && season.type.map(type => <SponsorType key={type.name} type={type.name}
                                                                 sponsors={type.sponsors} season={season.season}/>)}
        </div>
    )
}

function SponsorType({type, sponsors, season}) {
    return (
        sponsors && sponsors.length > 0 && <>
            <h2>Sponsori de {type}</h2>
            <div className={styles.logoSection}>
                {sponsors.map(sponsor => <Sponsor key={sponsor.name} season={season} {...sponsor}/>)}
            </div>
        </>
    )
}

function Sponsor(props) {
    return (
        <div>
            <a href={props.link} target="_blank" rel="noreferrer">
                <img src={`/images/sponsors/${props.season}/${props.image}`} alt={props.name}
                     className={styles.sponsorsLogo}/>
            </a>
        </div>
    )
}