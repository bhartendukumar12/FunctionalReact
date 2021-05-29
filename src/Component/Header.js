import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = props => {
    return (
        <>
            <div className='header-container'>
                <ul className='nav-container'>
                    <li>
                        <Link className='nav-link' to='/'>Home</Link>
                    </li>
                </ul>
                <ul className='nav-container'>
                    <li>
                        <Link className="nav-link" to='/feature'>Features</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to='/about'>About</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to='contact'>Contact</Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

Header.propTypes = {

};

export default Header;