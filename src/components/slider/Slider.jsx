import React from 'react';
import './slider.css';


import { Carousel } from 'react-bootstrap';

import t1 from "../../media/t1.jpeg";
import t2 from "../../media/t2.jpeg";
import t3 from "../../media/t3.jpeg";

export const Slider = () => {
    return (
        <div className="slider" id="slider">

            <div className="container">

                <div className="row">
                    <div className="slide-contain">
                        <h1>Proyectos</h1>
                        <h3>Lorem, ipsum dolor sit amet consectetur
                            adipisicing elit. A aperiam modi obcaecati
                            nulla quo animi nesciunt architecto similique
                            sit corporis, saepe repellendus eum quidem,
                            fugit vero deleniti ut quas unde.
                        </h3>
                    </div>

                </div>
                <div className="row">

                    <div className="carousel-container">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className=" d-block "
                                    src={t1}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>PROYECTO UNO</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className=" d-block"
                                    src={t2}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block"
                                    src={t3}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>


        </div>
    )
}
