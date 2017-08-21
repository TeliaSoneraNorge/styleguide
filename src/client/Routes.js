import React from 'react';
import { Route } from 'react-router-dom';

import PageHeader from '../components/molecules/PageHeader/PageHeader';
import PageFooter from '../components/molecules/PageFooter/PageFooter';

import HomePage from './pages/HomePage';
import ComponentsPage from './pages/ComponentsPage';
import ComponentsByTypePage from './pages/ComponentsByTypePage';
import ContributingPage from './pages/ContributingPage';
import DownloadPage from './pages/DownloadPage';

import InformationArticleSample1 from './pages/InformationArticleSample1';

const Routes = (props) =>
    <div>
        <PageHeader
            logoUrl="/"
            logoTitle="Telia logo"
            logoImageDesktopPath="/public/icons/logo_desktop.svg"
            logoImageMobilePath="/public/icons/logo_mob.svg"
            menuLinks={[
                { text: "Home", url: "/", icon: "/public/icons/ico_mobile.svg" },
                { text: "Components", url: "/components", icon: "/public/icons/ico_wireless.svg" },
                { text: "Contributing", url: "/contributing", icon: "/public/icons/ico_edit.svg" },
                { text: "Download", url: "/download", icon: "/public/icons/ico_content.svg" }
            ]} />

        <Route exact path="/" component={HomePage} />
        <Route exact path="/components" component={ComponentsPage} />
        <Route exact path="/components/:componentType" component={ComponentsByTypePage} />
        <Route exact path="/contributing" component={ContributingPage} />
        <Route exact path="/download" component={DownloadPage} />
        <Route exact path="/information-article" component={InformationArticleSample1} />

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