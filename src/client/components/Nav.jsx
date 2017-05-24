import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () =>
    <nav className="sg-nav">
        <Link className="sg-nav__nav-item" to="/">Home</Link>
        <Link className="sg-nav__nav-item" to="/components">Components</Link>
    </nav>;

export default Nav;
