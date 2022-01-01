import React from 'react'
import './cover.css';
import marketing from "../../media/marketing.mp4";


export const Cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={marketing} autoPlay loop muted></video>
            <h1>Name | Last Name</h1>
            <p>Developer | Designer | Content Creator</p>

        </div>
    )
}
