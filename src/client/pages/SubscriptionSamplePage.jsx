import React from 'react';

import Subscription from '../../components/molecules/Subscription/Subscription';

const underFemtenSubscriptionProps = [
    {
        "name": "SMART Barn",
        "dataAmount": 200,
        "dataUnit": "MB",
        "price": 99,
        "color": "blue"
    },
    {
        "name": "SMART Barn",
        "dataAmount": 1,
        "dataUnit": "GB",
        "price": 169,
        "color": "green"
    }
];

const underTjueAatteSubscriptionProps = [
    {
        "name": "SMART Ung",
        "dataAmount": 2,
        "dataUnit": "GB",
        "price": 249,
        "color": "pink"
    },
    {
        "name": "SMART Ung",
        "dataAmount": 5,
        "dataUnit": "GB",
        "price": 299,
        "color": "teal"
    }
];

const forAlleSubscriptionProps = [
    {
        "name": "SMART Mini",
        "dataAmount": 1,
        "dataUnit": "GB",
        "price": 249,
        "color": "pink"
    },
    {
        "name": "SMART Basis",
        "dataAmount": 3,
        "dataUnit": "GB",
        "price": 299,
        "color": "light-orange"
    },
    {
        "name": "SMART Mini",
        "dataAmount": 1,
        "dataUnit": "GB",
        "price": 249,
        "color": "pink"
    },
    {
        "name": "SMART Basis",
        "dataAmount": 3,
        "dataUnit": "GB",
        "price": 299,
        "color": "light-orange"
    },
    {
        "name": "SMART Pluss",
        "dataAmount": 6,
        "dataUnit": "GB",
        "price": 399,
        "color": "green",
        "isExpanded": true
    },
    {
        "name": "SMART Super",
        "dataAmount": 15,
        "dataUnit": "GB",
        "price": 449,
        "color": "teal",
        "isShowingFeatures": true
    },
    {
        "name": "SMART Total",
        "dataAmount": 40,
        "dataUnit": "GB",
        "price": 699,
        "color": "blue",
        "isShowingFeatures": true
    }
];

const kontantkortSubscriptionProps = [
    {
        "name": "Kontantkort",
        "dataAmount": 2,
        "dataUnit": "GB",
        "price": 249,
        "color": "pink"
    },
    {
        "name": "Kontantkort",
        "dataAmount": 5,
        "dataUnit": "GB",
        "price": 299,
        "color": "teal"
    }
];

export default class SubscriptionSamplePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTabIndex: 1
        };

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(tabIndex, e) {
        var closingTab = document.getElementById("tab-"+this.state.selectedTabIndex);
        var openingTab = e.currentTarget;

        if(closingTab === openingTab) {
            return;
        }

        this.closeTabPanel(closingTab);
        this.openTabPanel(openingTab);

        this.setState( {selectedTabIndex: tabIndex} );
    }
    closeTabPanel(closingTab) {
        closingTab.classList.toggle("funky-tabs__tab--selected");
        closingTab.setAttribute('aria-selected', false);
        var closingPanel = document.getElementById(closingTab.getAttribute("aria-controls"));
        closingPanel.classList.toggle("funky-tabs__panel--open");
        closingPanel.setAttribute('aria-expanded', false);
    }
    openTabPanel(openingTab) {
        openingTab.classList.toggle("funky-tabs__tab--selected");
        openingTab.setAttribute('aria-selected', true);
        var openingPanel = document.getElementById(openingTab.getAttribute("aria-controls"));
        openingPanel.classList.toggle("funky-tabs__panel--open");
        openingPanel.setAttribute('aria-expanded', true);
    }
    render() {
        return(
            <div>
                <div className="center-align">
                    <h1 className="heading heading--level-1">Subscription</h1>
                </div>
                <div className="funky-tabs">
                    <ul className="funky-tabs__tabs" role="tablist">
                        <li className="funky-tabs__tab funky-tabs__tab--selected" id="tab-1" onClick={this.handleClick.bind(this, 1)} aria-selected="true" role="tab" aria-controls="tab-panel-1">
                            <a href="#">
                                <img className="funky-tabs__tab-image" src="/public/images/under15.png" />
                                <div className="funky-tabs__tab-text">
                                    <span className="link">Under 15 år</span>
                                </div>
                            </a>
                        </li>
                        <li className="funky-tabs__tab" id="tab-2" onClick={this.handleClick.bind(this, 2)} aria-selected="false" role="tab" aria-controls="tab-panel-2">
                            <a href="#">
                                <img className="funky-tabs__tab-image" src="/public/images/under28.png" />
                                <div className="funky-tabs__tab-text">
                                    <span className="link">Under 28 år</span>
                                </div>
                            </a>
                        </li>
                        <li className="funky-tabs__tab" id="tab-3" onClick={this.handleClick.bind(this, 3)} aria-selected="false" role="tab" aria-controls="tab-panel-3">
                            <a href="#">
                                <img className="funky-tabs__tab-image" src="/public/images/for-alle.png" />
                                <div className="funky-tabs__tab-text">
                                    <span className="link"> For alle</span>
                                </div>
                            </a>
                        </li>
                        <li className="funky-tabs__tab" id="tab-4" onClick={this.handleClick.bind(this, 4)} aria-selected="false" role="tab" aria-controls="tab-panel-4">
                            <a href="#">
                                <img className="funky-tabs__tab-image" src="/public/images/under15.png" />
                                <div className="funky-tabs__tab-text">
                                    <span className="link">Kontantkort</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div className="funky-tabs__panel funky-tabs__panel--open" id="tab-panel-1" role="tabpanel" aria-labelledby="tab-1" aria-expanded="true">
                        <section className="main-content subscription-wrapper">
                            {underFemtenSubscriptionProps.map((subscriptionProps, i) =>
                                <Subscription key={i} {...subscriptionProps} />)}
                        </section>
                    </div>
                    <div className="funky-tabs__panel" id="tab-panel-2" role="tabpanel" aria-labelledby="tab-2" aria-expanded="false">
                        <section className="main-content subscription-wrapper">
                            {underTjueAatteSubscriptionProps.map((subscriptionProps, i) =>
                                <Subscription key={i} {...subscriptionProps} />)}
                        </section>
                    </div>
                    <div className="funky-tabs__panel" id="tab-panel-3" role="tabpanel" aria-labelledby="tab-3" aria-expanded="false">
                        <section className="main-content subscription-wrapper">
                            {forAlleSubscriptionProps.map((subscriptionProps, i) =>
                                <Subscription key={i} {...subscriptionProps} />)}
                        </section>
                    </div>
                    <div className="funky-tabs__panel" id="tab-panel-4" role="tabpanel" aria-labelledby="tab-4" aria-expanded="false">
                        <section className="main-content subscription-wrapper">
                            {kontantkortSubscriptionProps.map((subscriptionProps, i) =>
                                <Subscription key={i} {...subscriptionProps} />)}
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}