import React from "react";
import {NavLink, Outlet} from "react-router-dom";
import './Layout.css';

export default function Layout() {
    const activeStyle = {
        color: "rgb(169, 204, 141)",
        textShadow: "-1.5px 1.5px 0 rgb(26, 105, 66), 1.5px 1.5px 0 rgb(26, 105, 66), 1.5px -1.5px 0 rgb(26, 105, 66), -1.5px -1.5px 0 rgb(26, 105, 66)",
    }

    return (
        <>
            <nav className="navigation--bar">
                <div className="logo">
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
            </nav>
            <Outlet/>
            <footer className="footer">
                <div className="social--links">
                    <a href="https://github.com/Perpetuum-Mobile-RO065" target="_blank" className="social--link" rel="noreferrer">
                        <img className="git--icon icon" src="/icons/github-logo.png" alt="Github social link"/>
                    </a>
                    <a href="https://www.instagram.com/perpetuummobileftc/" target="_blank" className="social--link" rel="noreferrer">
                        <img className="insta--icon icon" src="/icons/instagram-logo.png" alt="Instagram social link"/>
                    </a>
                    <a href="https://discord.gg/8CPhWQCHhY" target="_blank" className="social--link" rel="noreferrer">
                        <img className="dis--icon icon" src="/icons/discord-logo.png" alt="Discord social link"/>
                    </a>
                    <a href="https://www.facebook.com/perpetuummobilefirsttech/" target="_blank" className="social--link" rel="noreferrer">
                        <img className="fb--icon icon" src="/icons/facebook-logo.png" alt="Facebook social link"/>
                    </a>
                </div>
                <p className="copyright">Copyright&copy; 2022 Perpetuum Mobile. Toate drepturile rezervate. Made with 🖤 by
                    Alex David and
                    Alexandra Moroz.</p>
            </footer>
        </>

    )
}