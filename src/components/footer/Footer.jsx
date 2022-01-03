import React from 'react'
import './footer.css';


export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-item">
                    <h3>Your Brand</h3>
                    <p>Based in your city</p>
                    <p>+ Info</p>
                </div>
                <div className="footer-item">
                    <h3>Contacto</h3>
                    <p>email@gmail.com</p>
                    <p>+34 763 873 392</p>
                </div>
                <div className="footer-item">
                    <h3>Designed by</h3>
                    <p><a href="#">DanielDev</a></p>
                    <p><a href="https://github.com/danigj86" target="_blank">GitHub Profile</a></p>
                    
                </div>
            </div>
        </footer>
    )
}
