import React from 'react';
import './sideDrawer.css';

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
    <nav className={drawerClasses}>
        <ul>
            {/* <li>
                <a href="/">
                    Pet 2 Person
                </a>
            </li> */}
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
    </nav>);
};

export default SideDrawer;