import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => (
  <div>
    <ul>
      <li><Link to="/">Index</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/blog">Blog</Link></li>
    </ul>
  </div>
);
