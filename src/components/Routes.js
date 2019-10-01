import React from 'react';
import { Route, withRouter, Link } from 'react-router-dom';

import { PageFooter, Menu } from '@telia/styleguide';
import AllIcons from 'component-lib-root/assets/allicons/AllIcons.js';

import HomePage from './pages/HomePage';
import LayoutPage from './pages/LayoutPage';
import ComponentsPage from './pages/ComponentsPage';
import ComponentsAtomicPage from './pages/ComponentsAtomicPage';
import ComponentsByTypePage from './pages/ComponentsByTypePage';
import ComponentsByCategoryPage from './pages/ComponentsByCategoryPage';
import ContributingPage from './pages/ContributingPage';
import DownloadPage from './pages/DownloadPage';
import ImageAssetsPage from './pages/ImageAssetsPage';
import StylePage from './pages/StylePage';
import VersionsPage from './pages/VersionsPage';

import InformationArticleSample1 from './pages/InformationArticleSample1';
import InformationArticleSample2 from './pages/InformationArticleSample2';
import InformationArticleSample3 from './pages/InformationArticleSample3';
import InformationArticleSample4 from './pages/InformationArticleSample4';
import InformationArticleSample5 from './pages/InformationArticleSample5';
import SubscriptionSamplePage from './pages/SubscriptionSamplePage';
import PebblesPage from './pages/PebblesPage';
import BoxGridSamplePage from './pages/BoxGridSamplePage';
import BlogSamplePage1 from './pages/BlogSamplePage1';
import BlogSamplePage2 from './pages/BlogSamplePage2';
import FormsSamplePage from './pages/FormsSamplePage';
import UsagePage from './pages/UsagePage';
import ModalDialogSamplePage from './pages/ModalDialogSamplePage';
import TabsSamplePage from './pages/TabsSamplePage';

const menuLinks = [
    {
        heading: { text: 'Styleguide', url: '/'},
        links: [
            { text: 'Layout', url: '/layout' },
            { text: 'Image Assets', url: '/image-assets'},
            { text: 'Contributing', url: '/contributing' },
            { text: 'Download/Install', url: '/download' },
            { text: 'Versions', url: '/versions' }
        ],
    },
    {
        heading: { text: 'Component Library', url: '/components' },
        links: [
            { text: 'Components', url: '/components' },
            { text: 'Components in atomic structure', url: '/components-atomic' },
        ]
    }
];

const calculateActiveIndex = pathname => pathname.includes('component') ? 1 : 0;
const calculateActiveLinkIndex = pathname => menuLinks.reduce(
    (result, topMenuItem, topIndex) => result !== null ? result : topMenuItem.links.reduce(
        (res, menuItem, contentIndex) => res !== null ? res : menuItem.url === pathname ? contentIndex : null, null), null);

const routerLinkTemplate = ({ url, ...otherProps }) =>
    <Link to={url} {...otherProps} />;

const Routes = ({ history }) => {
    return (
        <div>
            <AllIcons />

            <Menu
                logoUrl="/"
                logoTitle="Telia logo"
                linkTemplate={routerLinkTemplate}
                activeIndex={calculateActiveIndex(history.location.pathname)}
                activeLinkIndex={calculateActiveLinkIndex(history.location.pathname)}
                menuLinks={menuLinks}
                logoImageDesktopPath={require('../assets/images/logo/logo.svg')}
                logoImageInverseDesktopPath={require('../assets/images/logo/logo-inverted.svg')}
                lockBodyOnMenuOpen />

            <Route exact path="/" component={HomePage} />
            <Route exact path="/layout" component={LayoutPage} />
            <Route exact path="/components" component={ComponentsPage} />
            <Route exact path="/components-atomic" component={ComponentsAtomicPage} />
            <Route exact path="/components-atomic/:componentType" component={ComponentsByTypePage} />
            <Route exact path="/components/:componentCategory" component={ComponentsByCategoryPage} />
            <Route exact path="/image-assets" component={ImageAssetsPage} />
            <Route exact path="/contributing" component={ContributingPage} />
            <Route exact path="/download" component={DownloadPage} />
            <Route exact path="/versions" component={VersionsPage} />

            <Route exact path="/information-article-1" component={InformationArticleSample1} />
            <Route exact path="/information-article-2" component={InformationArticleSample2} />
            <Route exact path="/information-article-3" component={InformationArticleSample3} />
            <Route exact path="/information-article-4" component={InformationArticleSample4} />
            <Route exact path="/information-article-5" component={InformationArticleSample5} />
            <Route exact path="/pebbles-page" component={PebblesPage} />
            <Route exact path="/subscriptions" component={SubscriptionSamplePage} />
            <Route exact path="/box-grid" component={BoxGridSamplePage} />
            <Route exact path="/blog-1" component={BlogSamplePage1} />
            <Route exact path="/blog-2" component={BlogSamplePage2} />
            <Route exact path="/forms" component={FormsSamplePage} />
            <Route exact path="/usage" component={UsagePage} />
            <Route exact path="/modal-dialog" component={ModalDialogSamplePage} />
            <Route exact path="/style" component={StylePage} />
            <Route exact path="/tabs" component={TabsSamplePage} />

            <PageFooter
                links={[
                    { text: 'Om Telia', url: '#' },
                    { text: 'Telia butikker', url: '#' },
                    { text: 'Presse', url: '#' },
                    { text: 'Jobb i Telia', url: '#' }
                ]}
                specialLink={{ text: 'Personvern og Cookies', url: '#' }} />
        </div>
    );
};

export default withRouter(Routes);