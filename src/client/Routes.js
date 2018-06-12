import React from 'react';
import { Route } from 'react-router-dom';

import ContentRatingWrapper from './components/ContentRatingWrapper';
import { PageFooter, PageHeader } from '../../component-lib/src/index';

import HomePage from './pages/HomePage';
import LayoutPage from './pages/LayoutPage';
import ComponentsPage from './pages/ComponentsPage';
import ComponentsByTypePage from './pages/ComponentsByTypePage';
import ContributingPage from './pages/ContributingPage';
import DownloadPage from './pages/DownloadPage';
import ImageAssetsPage from './pages/ImageAssetsPage';
import VersionsPage from './pages/VersionsPage';

import InformationArticleSample1 from './pages/InformationArticleSample1';
import InformationArticleSample2 from './pages/InformationArticleSample2';
import InformationArticleSample3 from './pages/InformationArticleSample3';
import InformationArticleSample4 from './pages/InformationArticleSample4';
import SubscriptionSamplePage from './pages/SubscriptionSamplePage';
import PebblesPage from './pages/PebblesPage';
import BoxGridSamplePage from './pages/BoxGridSamplePage';
import BlogSamplePage1 from './pages/BlogSamplePage1';
import BlogSamplePage2 from './pages/BlogSamplePage2';
import FormsSamplePage from './pages/FormsSamplePage';
import UsagePage from './pages/UsagePage';
import ModalDialogSamplePage from './pages/ModalDialogSamplePage';
import TabsSamplePage from './pages/TabsSamplePage';

const Routes = (props) =>
    <div>
        <PageHeader
            logoUrl="/"
            logoTitle="Telia logo"
            logoImageDesktopPath="/public/images/logo/logo.svg"
            logoImageDesktopPathInverted="/public/images/logo/logo-inverted.svg"
            menuLinks={[
                { text: 'Home', url: '/' },
                { text: 'Layout', url: '/layout' },
                { text: 'Components', url: '/components' },
                { text: 'Image Assets', url: '/image-assets' },
                { text: 'Contributing', url: '/contributing' },
                { text: 'Download', url: '/download' },
                { text: 'Versions', url: '/versions' }
            ]}
            isLoggedIn={true} />

        <Route exact path="/" component={HomePage} />
        <Route exact path="/layout" component={LayoutPage} />
        <Route exact path="/components" component={ComponentsPage} />
        <Route exact path="/components/:componentType" component={ComponentsByTypePage} />
        <Route exact path="/image-assets" component={ImageAssetsPage} />
        <Route exact path="/contributing" component={ContributingPage} />
        <Route exact path="/download" component={DownloadPage} />
        <Route exact path="/versions" component={VersionsPage} />

        <Route exact path="/information-article-1" component={InformationArticleSample1} />
        <Route exact path="/information-article-2" component={InformationArticleSample2} />
        <Route exact path="/information-article-3" component={InformationArticleSample3} />
        <Route exact path="/information-article-4" component={InformationArticleSample4} />
        <Route exact path="/pebbles-page" component={PebblesPage} />
        <Route exact path="/subscriptions" component={SubscriptionSamplePage} />
        <Route exact path="/box-grid" component={BoxGridSamplePage} />
        <Route exact path="/blog-1" component={BlogSamplePage1} />
        <Route exact path="/blog-2" component={BlogSamplePage2} />
        <Route exact path="/forms" component={FormsSamplePage} />
        <Route exact path="/usage" component={UsagePage} />
        <Route exact path="/modal-dialog" component={ModalDialogSamplePage} />
        <Route exact path="/tabs" component={TabsSamplePage} />

        <div className="container container--medium container--extra-margin-bottom">
            <ContentRatingWrapper />
        </div>

        <PageFooter
            links={[
                { text: 'Om Telia', url: '#' },
                { text: 'Telia butikker', url: '#' },
                { text: 'Presse', url: '#' },
                { text: 'Jobb i Telia', url: '#' }
            ]}
            specialLink={{ text: 'Personvern og Cookies', url: '#' }} />
    </div>;

export default Routes;