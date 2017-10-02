import React from 'react';
import { Route } from 'react-router-dom';

import PageHeader from '../components/molecules/PageHeader/PageHeader';
import PageFooter from '../components/molecules/PageFooter/PageFooter';

import HomePage from './pages/HomePage';
import LayoutPage from './pages/LayoutPage';
import ComponentsPage from './pages/ComponentsPage';
import ComponentsByTypePage from './pages/ComponentsByTypePage';
import ContributingPage from './pages/ContributingPage';
import DownloadPage from './pages/DownloadPage';

import InformationArticleSample1 from './pages/InformationArticleSample1';
import InformationArticleSample2 from './pages/InformationArticleSample2';
import InformationArticleSample3 from './pages/InformationArticleSample3';
import InformationArticleSample4 from './pages/InformationArticleSample4';
import SubscriptionSamplePage from './pages/SubscriptionSamplePage';

const Routes = (props) =>
    <div>
        <PageHeader
            logoUrl="/"
            logoTitle="Telia logo"
            logoImageDesktopPath="/public/images/logo/logo_animated-transparent.gif"
            logoImageMobilePath="/public/images/logo/logo_mob.svg"
            menuLinks={[
                { text: "Home", url: "/" },
                { text: "Layout", url: "/layout" },
                { text: "Components", url: "/components" },
                { text: "Contributing", url: "/contributing" },
                { text: "Download", url: "/download" }
            ]}
            isLoggedIn={true}
            loggedInUserName={"Code Monkey"} />

        <Route exact path="/" component={HomePage} />
        <Route exact path="/layout" component={LayoutPage} />
        <Route exact path="/components" component={ComponentsPage} />
        <Route exact path="/components/:componentType" component={ComponentsByTypePage} />
        <Route exact path="/contributing" component={ContributingPage} />
        <Route exact path="/download" component={DownloadPage} />
        <Route exact path="/information-article-1" component={InformationArticleSample1} />
        <Route exact path="/information-article-2" component={InformationArticleSample2} />
        <Route exact path="/information-article-3" component={InformationArticleSample3} />
        <Route exact path="/information-article-4" component={InformationArticleSample4} />
        <Route exact path="/subscription" component={SubscriptionSamplePage} />

        <PageFooter
            links={[
                { text: "Om Telia", url: "#" },
                { text: "Telia butikker", url: "#" },
                { text: "Presse", url: "#" },
                { text: "Jobb i Telia", url: "#" }
            ]}
            specialLink={{ text: "Personvern og Cookies", url: "#" }} />
    </div>;

export default Routes;