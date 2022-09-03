import React from "react";
import {NavLink, Outlet} from "react-router-dom";
import './Layout.css';

export default function Layout() {
    const activeStyle = {
        color: "rgb(169, 204, 141)",
        textDecoration: "underline",
        textShadow: "-1.5px 1.5px 0 rgb(26, 105, 66), 1.5px 1.5px 0 rgb(26, 105, 66), 1.5px -1.5px 0 rgb(26, 105, 66), -1.5px -1.5px 0 rgb(26, 105, 66)",
    }

    const logoStyle = {
        filter: "drop-shadow(0px 0px 8p #222)",
        WebkitFilter: "drop-shadow(0px 0px 8px #222)",
    }

    return (
        <>
            <nav className="navigation--bar">
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
                <img className={"hamburger-menu"} alt={""} src={"/icons/menu-icon.png"}/>
            </nav>
            <div className="main-body">
                <Outlet/>
            </div>
            <footer className="footer">
                <div className="social--links">
                    <a href="https://github.com/Perpetuum-Mobile-RO065" target="_blank" className="social--link"
                       rel="noreferrer">
                        <img className="git--icon icon" src="/icons/github-logo.png" alt="Github social link"/>
                    </a>
                    <a href="https://www.instagram.com/perpetuummobileftc/" target="_blank" className="social--link"
                       rel="noreferrer">
                        <img className="insta--icon icon" src="/icons/instagram-logo.png" alt="Instagram social link"/>
                    </a>
                    <a href="https://discord.gg/8CPhWQCHhY" target="_blank" className="social--link" rel="noreferrer">
                        <img className="dis--icon icon" src="/icons/discord-logo.png" alt="Discord social link"/>
                    </a>
                    <a href="https://www.facebook.com/perpetuummobilefirsttech/" target="_blank"
                       className="social--link" rel="noreferrer">
                        <img className="fb--icon icon" src="/icons/facebook-logo.png" alt="Facebook social link"/>
                    </a>
                    <a href="https://www.printables.com/social/273911-perpetuum-mobile-065/about" target="_blank"
                       className="social--link" rel="noreferrer">
                        <img className="icon printables--icon" src="/icons/printables-logo.png"
                             alt="Printables social link"/>
                    </a>
                    <a href="mailto:perpetuum.mobile@eminescusm.ro" target="_blank" className="social--link"
                       rel="noreferrer">
                        <img className="icon mail--icon" src="/icons/form-icon-email.png" alt="Email us"/>
                    </a>
                </div>
                <p className="copyright">Copyright&copy; 2022 Perpetuum Mobile. Toate drepturile rezervate. Made with 🖤
                    by
                    Alex David and
                    Alexandra Moroz.</p>
            </footer>
        </>

    )
}