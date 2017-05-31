import React from 'react';
import { Route } from 'react-router-dom';

import PageHeader from '../components/molecules/PageHeader/PageHeader';
import PageFooter from '../components/molecules/PageFooter/PageFooter';

import HomePage from './pages/HomePage';
import ComponentsPage from './pages/ComponentsPage';

const Routes = (props) =>
    <div>
        <PageHeader />

        <Route exact path="/" component={HomePage} />
        <Route exact path="/components" component={ComponentsPage} />

        <PageFooter />
    </div>;

export default Routes;