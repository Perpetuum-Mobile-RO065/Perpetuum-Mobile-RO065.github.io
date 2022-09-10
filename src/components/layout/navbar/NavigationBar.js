import React, {useRef} from "react";
import {NavLink} from "react-router-dom";
import styles from './NavigationBar.module.css';

export default function NavigationBar() {
    const activeStyle = {
        color: "rgb(169, 204, 141)",
        textDecoration: "underline",
        textShadow: "-1.5px 1.5px 0 rgb(26, 105, 66), 1.5px 1.5px 0 rgb(26, 105, 66), 1.5px -1.5px 0 rgb(26, 105, 66), -1.5px -1.5px 0 rgb(26, 105, 66)",
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

    return <nav className={styles.navigationBar}>
        <div className={styles.backgroundBlur} ref={backgroundBlur}></div>
        <div className={styles.logoContainer}>
            <NavLink to={"/"} end><img src="/logo.png" alt="Perpetuum Mobile Logo" className={styles.logo}/></NavLink>
        </div>
        <div className={styles.navigationLinks}>
            <NavLink to={"/"} end className={styles.navigationLink}
                     style={({isActive}) => isActive ? activeStyle : undefined}>Acasă</NavLink>
            <NavLink to={"/echipa"} className={styles.navigationLink}
                     style={({isActive}) => isActive ? activeStyle : undefined}>Echipa noastră</NavLink>
            <NavLink to={"/sponsori"} className={styles.navigationLink}
                     style={({isActive}) => isActive ? activeStyle : undefined}>Sponsori</NavLink>
            <NavLink to={"/voluntariat"} className={styles.navigationLink}
                     style={({isActive}) => isActive ? activeStyle : undefined}>Alătură-te echipei!</NavLink>
            <NavLink to={"/contact"} className={styles.navigationLink}
                     style={({isActive}) => isActive ? activeStyle : undefined}>Contact</NavLink>
        </div>
        <img alt={""} src={"/icons/menu-icon.png"} className={styles.hamburgerIcon}
             onClick={event => openHamburgerMenu(event)}/>
        <div className={styles.hamburgerMenu} ref={hamburgerBackground}>
            <img alt={""} src={"/menu-background.png"}/>
            <nav className={styles.mobileNavigationBar}>
                <NavLink to={"/"} end className={styles.mobileNavigationLink}
                         onClick={event => closeHamburgerMenu(event)}
                         style={({isActive}) => isActive ? activeStyle : undefined}>Acasă</NavLink>
                <NavLink to={"/echipa"} className={styles.mobileNavigationLink}
                         onClick={event => closeHamburgerMenu(event)}
                         style={({isActive}) => isActive ? activeStyle : undefined}>Echipa noastră</NavLink>
                <NavLink to={"/sponsori"} className={styles.mobileNavigationLink}
                         onClick={event => closeHamburgerMenu(event)}
                         style={({isActive}) => isActive ? activeStyle : undefined}>Sponsori</NavLink>
                <NavLink to={"/voluntariat"} className={styles.mobileNavigationLink}
                         onClick={event => closeHamburgerMenu(event)}
                         style={({isActive}) => isActive ? activeStyle : undefined}>Alătură-te
                    echipei!</NavLink>
                <NavLink to={"/contact"} className={styles.mobileNavigationLink}
                         onClick={event => closeHamburgerMenu(event)}
                         style={({isActive}) => isActive ? activeStyle : undefined}>Contact</NavLink>
            </nav>
            <p className={styles.mobileNavigationBarCloseButton} onClick={(event) => closeHamburgerMenu(event)}>X</p>
        </div>
    </nav>;
}