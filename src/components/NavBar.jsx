
import React from 'react';
import { Link } from 'react-router-dom';

// ნავიგაციის ბარის ბმულები
const links = [
  {
    to: '/',
    label: 'Home'
  },
  {
    to: '/new-post',
    label: 'New Post'
  }
];

// აქტიური ბმულის კლასის განსაზღვრა
const NavBar = () => {
  const isActive = (path) => {
    return window.location.pathname === path ? 'active' : '';
  };

  return (
    <nav className='navbar'>
      <div className='nav-brand'>
        <Link to="/">My Blog</Link>
      </div>
      <ul className='nav-links'>
        {links.map(link => (
          <li key={link.to} className={`nav-item`}>
            <Link className={isActive(link.to)} to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;