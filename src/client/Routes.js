import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './components/HomePage';
import ComponentsPage from './components/ComponentsPage';

const Routes = (props) =>
    <div>
        <Header />

        <Route exact path="/" component={HomePage} />
        <Route exact path="/components" component={ComponentsPage} />

        <Footer />
    </div>;

export default Routes;