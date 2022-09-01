import React, {useEffect} from "react";
import {NavLink, Outlet, useLocation, useNavigate} from "react-router-dom";
import './Sponsors.css';

export default function Sponsors() {
    const activeStyle = {
        color: 'rgb(169, 204, 141)',
        textDecoration: 'underline',
    }
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/sponsori' || location.pathname === '/sponsori/') {
            navigate("/sponsori/2021-2022");
        }
        // eslint-disable-next-line
    }, [location.pathname]);

    return (
        <div className={"sponsors-page"}>
            <nav className={"sponsors-navigation"}>
                <NavLink to="/sponsori/2021-2022" className={"sponsors-link"}
                         style={({isActive}) => isActive ? activeStyle : undefined}>2021-2022</NavLink>
                <p className={"sponsors-separator"}>|</p>
                <NavLink to="/sponsori/2020-2021" className={"sponsors-link"}
                         style={({isActive}) => isActive ? activeStyle : undefined}>2020-2021</NavLink>
                <p className={"sponsors-separator"}>|</p>
                <NavLink to="/sponsori/2019-2020" className={"sponsors-link"}
                         style={({isActive}) => isActive ? activeStyle : undefined}>2019-2020</NavLink>
                <p className={"sponsors-separator"}>|</p>
                <NavLink to="/sponsori/2018-2019" className={"sponsors-link"}
                         style={({isActive}) => isActive ? activeStyle : undefined}>2018-2019</NavLink>
                <p className={"sponsors-separator"}>|</p>
                <NavLink to="/sponsori/2017-2018" className={"sponsors-link"}
                         style={({isActive}) => isActive ? activeStyle : undefined}>2017-2018</NavLink>
            </nav>
            <div className={"sponsor-info"}>
                <Outlet/>
            </div>
        </div>
    )
}