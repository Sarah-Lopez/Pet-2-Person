import React from 'react';
import './sideDrawer.css';

const SideDrawer = () => (
    <nav className="side-drawer">
        <ul>
            <li>    
                <a href="/dogs">Dogs</a>
            </li>
            <li>
                <a href="/cats">Cats</a>
            </li>
            <li>
                <a href="smallnfurry">Small n' furry</a>
            </li>
            <li>        
                <a href="/rabbits">Rabbits</a>
            </li>
            <li>       
                <a href="/birds">Birds</a>
            </li>
            <li>        
                <a href="/scalesfinsother">Scales, fins, other</a>
            </li>
            <li>        
                <a href="/horses">Horses</a>
            </li>
            <li>        
                <a href="/barnyard">Barnyard</a>
            </li>
            <li>        
                <a href="/favorites">Favorites</a>
            </li>
            <li>        
                <a href="/login">Login</a>
            </li>
        </ul>
    </nav>
);

export default SideDrawer;