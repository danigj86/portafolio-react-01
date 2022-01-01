import React from 'react';
import './navbar.css';


export const Navbar = ({scrollHeight}) => {

const goToTop = () =>{
   window.scrollTo(0,0);
}

    return (
        <nav className= {`navbar ${scrollHeight > 20 ? "scrolling" : null}`}>
            <div className="logo" onClick={goToTop}>Your Name</div>
        </nav>
    )
}
