import React from "react";
import styles from './Footer.module.css';

export function Footer() {
    return <footer className={styles.footer}>
        <div className={styles.socialLinks}>
            <a href="https://github.com/Perpetuum-Mobile-RO065" target="_blank" className={styles.socialLink}
               rel="noreferrer">
                <img className={styles.githubIcon} src="/icons/github-logo.png" alt="Github social link"/>
            </a>
            <a href="src/components/layout/footer/Footer" target="_blank" className={styles.socialLink}
               rel="noreferrer">
                <img className={styles.instagramIcon} src="/icons/instagram-logo.png" alt="Instagram social link"/>
            </a>
            <a href="https://discord.gg/8CPhWQCHhY" target="_blank" className={styles.socialLink} rel="noreferrer">
                <img className={styles.discordIcon} src="/icons/discord-logo.png" alt="Discord social link"/>
            </a>
            <a href="src/components/layout/footer/Footer" target="_blank"
               className={styles.socialLink} rel="noreferrer">
                <img className={styles.facebookIcon} src="/icons/facebook-logo.png" alt="Facebook social link"/>
            </a>
            <a href="https://www.printables.com/social/273911-perpetuum-mobile-065/about" target="_blank"
               className={styles.socialLink} rel="noreferrer">
                <img className={styles.printablesIcon} src="/icons/printables-logo.png"
                     alt="Printables social link"/>
            </a>
            <a href="mailto:perpetuum.mobile@eminescusm.ro" target="_blank" className={styles.socialLink}
               rel="noreferrer">
                <img className={styles.mailIcon} src="/icons/form-icon-email.png" alt="Email us"/>
            </a>
        </div>
        <p className={styles.copyrightNotice}>Copyright&copy; 2022 Perpetuum Mobile. Toate drepturile rezervate. Made with 🖤
            by
            Alex David and
            Alexandra Moroz.</p>
    </footer>;
}