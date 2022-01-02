import React from 'react'
import './about.css';

export const About = () => {
    return (
        <div className="about" id="about">

            <div className="row">
                <h1>About</h1>
                <h3>Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. A aperiam modi obcaecati
                    nulla quo animi nesciunt architecto similique
                    sit corporis, saepe repellendus eum quidem,
                    fugit vero deleniti ut quas unde.
                </h3>
            </div>
            <div className="row">
                <div className="about-info">
                    <h2>Sobre mí</h2>
                    <br />
                    <p>
                    Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. A aperiam modi obcaecati
                    nulla quo animi nesciunt architecto similique
                    sit corporis, saepe repellendus eum quidem,
                    fugit vero deleniti ut quas unde.
                    </p>
                    <p>
                    Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. A aperiam modi obcaecati
                    nulla quo animi nesciunt architecto similique
                    sit corporis, saepe repellendus eum quidem,
                    fugit vero deleniti ut quas unde.
                    </p>
                    <p>
                    Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. A aperiam modi obcaecati
                    nulla quo animi nesciunt architecto similique
                    sit corporis, saepe repellendus eum quidem,
                    fugit vero deleniti ut quas unde.
                    </p>
                </div>
                <div className="about-img">
                    <img src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                </div>
            </div>

        </div>
    )
}
