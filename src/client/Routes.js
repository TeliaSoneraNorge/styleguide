import React from 'react';
import { Route } from 'react-router-dom';

import PageHeader from '../components/molecules/PageHeader/PageHeader';
import PageFooter from '../components/molecules/PageFooter/PageFooter';

import HomePage from './pages/HomePage';
import ComponentsPage from './pages/ComponentsPage';
import SiteNavigation from './components/SiteNavigation';

const Routes = (props) =>
    <div>
        <PageHeader />
        <SiteNavigation />

        <Route exact path="/" component={HomePage} />
        <Route exact path="/components" component={ComponentsPage} />

        <PageFooter />
    </div>;

export default Routes;