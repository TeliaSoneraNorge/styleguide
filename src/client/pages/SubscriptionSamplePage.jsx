import React from 'react';

import Subscription from '../../components/molecules/Subscription/Subscription';
import FunkyTab from '../components/FunkyTab';
import FunkyPanel from '../components/FunkyPanel';

const underFemtenSubscriptionProps = [
    {
        "name": "SMART Barn",
        "id": "smartBarn200MB",
        "dataAmount": 200,
        "dataUnit": "MB",
        "price": 99,
        "color": "blue"
    },
    {
        "name": "SMART Barn",
        "id": "smartBarn1GB",
        "dataAmount": 1,
        "dataUnit": "GB",
        "price": 169,
        "color": "green"
    }
];

const underTjueAatteSubscriptionProps = [
    {
        "name": "SMART Ung",
        "id": "smartUng2GB",
        "dataAmount": 2,
        "dataUnit": "GB",
        "price": 249,
        "color": "pink"
    },
    {
        "name": "SMART Ung",
        "id": "smartUng5GB",
        "dataAmount": 5,
        "dataUnit": "GB",
        "price": 299,
        "color": "teal"
    }
];

const forAlleSubscriptionProps = [
    {
        "name": "SMART Mini",
        "id": "smartMini1GB",
        "dataAmount": 1,
        "dataUnit": "GB",
        "price": 249,
        "color": "pink"
    },
    {
        "name": "SMART Basis",
        "id": "smartBasis3GB",
        "dataAmount": 3,
        "dataUnit": "GB",
        "price": 299,
        "color": "light-orange"
    },
    {
        "name": "SMART Mini",
        "id": "smartMini2GB",
        "dataAmount": 2,
        "dataUnit": "GB",
        "price": 279,
        "color": "teal"
    },
    {
        "name": "SMART Basis",
        "id": "smartBasis3GB",
        "dataAmount": 3,
        "dataUnit": "GB",
        "price": 299,
        "color": "light-orange"
    },
    {
        "name": "SMART Pluss",
        "id": "smartPluss6GB",
        "dataAmount": 6,
        "dataUnit": "GB",
        "price": 399,
        "color": "green",
        "isExpanded": true
    },
    {
        "name": "SMART Super",
        "id": "smartSuper15GB",
        "dataAmount": 15,
        "dataUnit": "GB",
        "price": 449,
        "color": "teal",
        "isShowingFeatures": true
    },
    {
        "name": "SMART Total",
        "id": "smartTotal40GB",
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
        "id": "kontantkort2GB",
        "dataAmount": 2,
        "dataUnit": "GB",
        "price": 249,
        "color": "pink"
    },
    {
        "name": "Kontantkort",
        "id": "kontantkort5GB",
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
    handleClick(tabIndex) {
        this.setState({ selectedTabIndex: tabIndex });
    }
    render() {
        return (
            <div>
                <div className="center-align">
                    <h1 className="heading heading--level-1">Subscription</h1>
                </div>
                <div className="funky-tabs">
                    <ul className="funky-tabs__tabs" role="tablist">
                        <FunkyTab
                            tabIndex={1}
                            selectedTabIndex={this.state.selectedTabIndex}
                            tabText="Under 15 år"
                            tabIconPath="/public/images/under15.png"
                            onClick={this.handleClick.bind(this, 1)} />
                        <FunkyTab
                            tabIndex={2}
                            selectedTabIndex={this.state.selectedTabIndex}
                            tabText="Under 28 år"
                            tabIconPath="/public/images/under28.png"
                            onClick={this.handleClick.bind(this, 2)} />
                        <FunkyTab
                            tabIndex={3}
                            selectedTabIndex={this.state.selectedTabIndex}
                            tabText="For alle"
                            tabIconPath="/public/images/for-alle.png"
                            onClick={this.handleClick.bind(this, 3)} />
                        <FunkyTab
                            tabIndex={4}
                            selectedTabIndex={this.state.selectedTabIndex}
                            tabText="Kontantkort"
                            tabIconPath="/public/images/under15.png"
                            onClick={this.handleClick.bind(this, 4)} />
                    </ul>
                    <FunkyPanel
                        tabPanelIndex={1}
                        selectedTabIndex={this.state.selectedTabIndex}>
                        <section className="main-content subscription-wrapper">
                            {underFemtenSubscriptionProps.map((subscriptionProps, i) =>
                                <Subscription key={i} {...subscriptionProps} />)}
                        </section>
                    </FunkyPanel>
                    <FunkyPanel
                        tabPanelIndex={2}
                        selectedTabIndex={this.state.selectedTabIndex}>
                        <section className="main-content subscription-wrapper">
                            {underTjueAatteSubscriptionProps.map((subscriptionProps, i) =>
                                <Subscription key={i} {...subscriptionProps} />)}
                        </section>
                    </FunkyPanel>
                    <FunkyPanel
                        tabPanelIndex={3}
                        selectedTabIndex={this.state.selectedTabIndex}>
                        <section className="main-content subscription-wrapper">
                            {forAlleSubscriptionProps.map((subscriptionProps, i) =>
                                <Subscription key={i} {...subscriptionProps} />)}
                        </section>
                    </FunkyPanel>
                    <FunkyPanel
                        tabPanelIndex={4}
                        selectedTabIndex={this.state.selectedTabIndex}>
                        <section className="main-content subscription-wrapper">
                            {kontantkortSubscriptionProps.map((subscriptionProps, i) =>
                                <Subscription key={i} {...subscriptionProps} />)}
                        </section>
                    </FunkyPanel>
                </div>
            </div>
        );
    }
}