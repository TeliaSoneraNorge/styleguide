import React from 'react';

import Subscription from '../../components/molecules/Subscription/Subscription';

const subscriptionPropsList = [
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

// 0) Currently, only content area 3 has some subscriptions, so add some other subscriptions to the other content areas
//    rename "subscriptionPropsList" to "forAlleSubscriptionProps" and create a new "kontantSubscriptionProps" etc etc
// 1) Make this an ES6 class, not a functional component
// 2) Set a default state (selected tab index = 0)
// 3) Add the "--selected" and "--open" classes if the selected state is  blah blah

const SubscriptionSamplePage = () =>
    <div>
        <div className="center-align">
            <h1 className="heading heading--level-1">Subscription</h1>
        </div>
        <div className="funky-tabs">
            <ul className="funky-tabs__tabs" role="tablist">
                <li className="funky-tabs__tab" id="tab-1" aria-selected="true" role="tab" aria-controls="tab-panel-1">
                    <a href="#">
                        <img className="funky-tabs__tab-image" src="/public/images/under15.png" />
                        <div className="funky-tabs__tab-text">
                            <span className="link">Under 15 år</span>
                        </div>
                    </a>
                </li>
                <li className="funky-tabs__tab" id="tab-2" aria-selected="false" role="tab" aria-controls="tab-panel-2">
                    <a href="#">
                        <img className="funky-tabs__tab-image" src="/public/images/under28.png" />
                        <div className="funky-tabs__tab-text">
                            <span className="link">Under 28 år</span>
                        </div>
                    </a>
                </li>
                <li className="funky-tabs__tab funky-tabs__tab--selected" id="tab-3" aria-selected="false" role="tab" aria-controls="tab-panel-3">
                    <a href="#">
                        <img className="funky-tabs__tab-image" src="/public/images/for-alle.png" />
                        <div className="funky-tabs__tab-text">
                            <span className="link"> For alle</span>
                        </div>
                    </a>
                </li>
                <li className="funky-tabs__tab" id="tab-4" aria-selected="false" role="tab" aria-controls="tab-panel-4">
                    <a href="#">
                        <img className="funky-tabs__tab-image" src="/public/images/under15.png" />
                        <div className="funky-tabs__tab-text">
                            <span className="link">Kontantkort</span>
                        </div>
                    </a>
                </li>
            </ul>
            <div className="funky-tabs__content" id="tab-panel-1" role="tabpanel" aria-labelledby="tab-1">
                <section className="main-content">
                    {subscriptionPropsList.map((subscriptionProps, i) =>
                        <Subscription key={i} {...subscriptionProps} />)}
                </section>
            </div>
            <div className="funky-tabs__content" id="tab-panel-2" role="tabpanel" aria-labelledby="tab-2">
                <section className="main-content">
                    This is the Funky Tabs component which consists of four tabs and four panels.
                    Each tab contains a link with an image and a text, and this link controls the associated panel's visibility.
                </section>
            </div>
            <div className="funky-tabs__content funky-tabs__content--open" id="tab-panel-3" role="tabpanel" aria-labelledby="tab-3">
                <section className="main-content">
                    {subscriptionPropsList.map((subscriptionProps, i) =>
                        <Subscription key={i} {...subscriptionProps} />)}
                </section>
            </div>
            <div className="funky-tabs__content" id="tab-panel-4" role="tabpanel" aria-labelledby="tab-4">
                <section className="main-content">
                    This is the Funky Tabs component which consists of four tabs and four panels.
                    Each tab contains a link with an image and a text, and this link controls the associated panel's visibility.
                </section>
            </div>
        </div>
    </div>;

export default SubscriptionSamplePage;