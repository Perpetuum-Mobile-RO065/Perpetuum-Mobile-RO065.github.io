import React, {useRef} from "react";
import {NavLink} from "react-router-dom";

export default function NavigationBar() {
    const activeStyle = {
        color: "rgb(169, 204, 141)",
        textDecoration: "underline",
        textShadow: "-1.5px 1.5px 0 rgb(26, 105, 66), 1.5px 1.5px 0 rgb(26, 105, 66), 1.5px -1.5px 0 rgb(26, 105, 66), -1.5px -1.5px 0 rgb(26, 105, 66)",
    }

    const logoStyle = {
        filter: "drop-shadow(0px 0px 8p #222)",
        WebkitFilter: "drop-shadow(0px 0px 8px #222)",
    }

    const hamburgerBackground = useRef(null);
    const backgroundBlur = useRef(null);

    const openHamburgerMenu = (event) => {
        event.stopPropagation();
        hamburgerBackground.current.style.display = "block";
        backgroundBlur.current.style.display = "block";
    }

    const closeHamburgerMenu = (event) => {
        event.stopPropagation();
        hamburgerBackground.current.style.display = "none";
        backgroundBlur.current.style.display = "none";
    }

    return <nav className="navigation--bar">
        <div className={"background-blur"} ref={backgroundBlur}></div>
        <div style={logoStyle}>
            <NavLink to={"/"} end><img src="/logo.png" alt="Perpetuum Mobile Logo" className="logo"/></NavLink>
        </div>
        <div className="navigation--links">
            <NavLink to={"/"} end className="navigation--link"
                     style={({isActive}) => isActive ? activeStyle : undefined}>Acasă</NavLink>
            <NavLink to={"/echipa"} className="navigation--link"
                     style={({isActive}) => isActive ? activeStyle : undefined}>Echipa noastră</NavLink>
            <NavLink to={"/sponsori"} className="navigation--link"
                     style={({isActive}) => isActive ? activeStyle : undefined}>Sponsori</NavLink>
            <NavLink to={"/voluntariat"} className="navigation--link"
                     style={({isActive}) => isActive ? activeStyle : undefined}>Alătură-te echipei!</NavLink>
            <NavLink to={"/contact"} className="navigation--link"
                     style={({isActive}) => isActive ? activeStyle : undefined}>Contact</NavLink>
        </div>
        <img alt={""} src={"/icons/menu-icon.png"} className={"hamburger-icon"}
             onClick={event => openHamburgerMenu(event)}/>
        <div className={"hamburger-menu"} ref={hamburgerBackground}>
            <img alt={""} src={"/menu-background.png"}/>
            <nav className={"hamburger-navigation-links"}>
                <NavLink to={"/"} end className="hamburger-navigation-link"
                         onClick={event => closeHamburgerMenu(event)}
                         style={({isActive}) => isActive ? activeStyle : undefined}>Acasă</NavLink>
                <NavLink to={"/echipa"} className="hamburger-navigation-link"
                         onClick={event => closeHamburgerMenu(event)}
                         style={({isActive}) => isActive ? activeStyle : undefined}>Echipa noastră</NavLink>
                <NavLink to={"/sponsori"} className="hamburger-navigation-link"
                         onClick={event => closeHamburgerMenu(event)}
                         style={({isActive}) => isActive ? activeStyle : undefined}>Sponsori</NavLink>
                <NavLink to={"/voluntariat"} className="hamburger-navigation-link"
                         onClick={event => closeHamburgerMenu(event)}
                         style={({isActive}) => isActive ? activeStyle : undefined}>Alătură-te
                    echipei!</NavLink>
                <NavLink to={"/contact"} className="hamburger-navigation-link"
                         onClick={event => closeHamburgerMenu(event)}
                         style={({isActive}) => isActive ? activeStyle : undefined}>Contact</NavLink>
            </nav>
            <p className={"hamburger-close-button"} onClick={(event) => closeHamburgerMenu(event)}>X</p>
        </div>
    </nav>;
}