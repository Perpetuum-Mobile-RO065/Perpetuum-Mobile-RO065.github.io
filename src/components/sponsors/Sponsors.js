import React, {useEffect} from "react";
import {NavLink, Outlet, useLocation, useNavigate} from "react-router-dom";
import './Sponsors.css';
import sponsors from "../../assets/data/sponsors";

export default function Sponsors() {
    const navigate = useNavigate();
    const location = useLocation();

    const sponsorSeasons = sponsors.map(sponsor => sponsor.season);
    const currentSeason = sponsorSeasons[0];

    useEffect(() => {
        if (location.pathname === '/sponsori' || location.pathname === '/sponsori/') {
            navigate(`/sponsori/${currentSeason}`);
        }
        // eslint-disable-next-line
    }, [location.pathname]);

    return (
        <div className={"sponsors-page"}>
            <nav className={"sponsors-navigation"}>
                {sponsorSeasons.map((season, index) => {
                    if (index !== sponsorSeasons.length - 1) {
                        return <>
                            <SeasonLink key={season} season={season}/>
                            <p className={"sponsors-separator"}></p>
                        </>
                    }
                    return <SeasonLink key={season} season={season}/>
                })}
            </nav>
            <div className={"sponsor-info"}>
                <Outlet/>
            </div>
        </div>
    )
}

function SeasonLink({season}) {
    const activeStyle = {
        color: 'rgb(169, 204, 141)',
        textDecoration: 'underline',
    };

    return (
        <NavLink style={({isActive}) => isActive ? activeStyle : undefined} className={"sponsors-link"}
                 to={`/sponsori/${season}`}>{season.slice(0, 5)}<wbr/>{season.slice(5, 9)}
        </NavLink>
    )
}