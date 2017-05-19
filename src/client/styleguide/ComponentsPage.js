import React from 'react';
import { Link } from 'react-router-dom';

const ComponentsPage = () =>
    <div>
        <p>This is the ComponentsPage</p>
        <Link to="/">Home</Link>
        <Link to="/components">Components</Link>
    </div>;

export default ComponentsPage;