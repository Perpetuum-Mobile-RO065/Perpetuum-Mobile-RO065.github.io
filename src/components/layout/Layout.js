import React from "react";
import {NavLink, Outlet} from "react-router-dom";

export default function Layout() {
    return (
        <>
            <nav className="navigation--bar">
                <ul className="navigation--links">
                    <li className="nagivation--link"><NavLink to={"/"} end>Acasa</NavLink></li>
                    <li className="nagivation--link"><NavLink to={"/echipa"}>Echipa noastra</NavLink></li>
                    <li className="nagivation--link"><NavLink to={"/sponsori"}>Sponsorii nostri</NavLink></li>
                    <li className="nagivation--link"><NavLink to={"/voluntariat"}>Alatura-te echipei</NavLink></li>
                    <li className="nagivation--link"><NavLink to={"/contact"}>Contact</NavLink></li>
                </ul>
            </nav>
            <Outlet/>
            <footer>
                {
                    /*
                    Imagini cu github patreon etc
                     */
                }
            </footer>
        </>

    )
}