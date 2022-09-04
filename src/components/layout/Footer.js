import React from "react";
import './Layout.css';

export function Footer() {
    return <footer className="footer">
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
    </footer>;
}