import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='bg-success p-3 '>
           <div className='container link-container'>
            <Link className='text-decoration-none p-1 mx-3 text-white links' to='/home'>Home</Link>
            <Link className='text-decoration-none p-1 mx-3 text-white links' to='/reviews'>Reviews</Link>
            <Link className='text-decoration-none p-1 mx-3 text-white links' to='/dashboard'>Dashboard</Link>
            <Link className='text-decoration-none p-1 mx-3 text-white links' to='/blogs'>Blogs</Link>
            <Link className='text-decoration-none p-1 mx-3 text-white links' to='/about'>About</Link>
           </div>
            
        </div>
    );
};

export default Header;