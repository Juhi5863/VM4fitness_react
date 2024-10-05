import React from 'react';
import {Link} from 'react-router-dom';

const Navbar=()=>{
    return (
        <div className='navBar'>
            <div className='stocks'>
                <Link to="/">Home</Link>
            </div>
            <div className='favourites'>
                <Link to="/about">About</Link>
            </div>

        </div>
    )

}

export default Navbar;