import React from 'react'
import './footer.css';


export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
            <div className="footer-info footer-item">
                <h1>Your Brand</h1>
                 <p>Based in your city</p>
            </div>
            <div className="footer-contact footer-item">
                <h3>Contacto</h3>
                <p>email@gmail.com</p>
                <p>+34 763 873 392</p>
            </div>
            <div className="footer-links footer-item">
                <h3>Designed by</h3>
                <p><a href="#">DanielDev</a></p>
                <p><a href="https://github.com/danigj86" target="_blank">GitHub Profile</a></p>
                <p></p>
            </div>
            </div>
        </footer>
    )
}
