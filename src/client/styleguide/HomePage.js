import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () =>
    <div>
        <p>This is the HomePage</p>
        <Link to="/">Home</Link>
        <Link to="/components">Components</Link>
    </div>;

export default HomePage;