import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to='/posts'>Посты</Link>
            <Link to='/about'>To do</Link>
        </div>
    );
};

export default Navbar;