import React from 'react';

import { FunkyTabs, Subscription } from '@telia/styleguide';

const underFemtenSubscriptionProps = [
  {
    name: 'SMART Barn',
    id: 'smartBarn200MB',
    dataAmount: 200,
    dataUnit: 'MB',
    price: 99,
    color: 'blue',
    size: 'small',
    specialMessageText: 'Hør så mye musikk du vil... uten å bruke av dataen din. Gjelder Spotify, Tidal og Beat.',
  },
  {
    name: 'SMART Barn',
    id: 'smartBarn1GB',
    dataAmount: 1,
    dataUnit: 'GB',
    price: 169,
    color: 'green',
    size: 'small',
    specialMessageText: 'Hør så mye musikk du vil... uten å bruke av dataen din. Gjelder Spotify, Tidal og Beat.',
  },
];

const underTjueAatteSubscriptionProps = [
  {
    name: 'SMART Ung',
    id: 'smartUng2GB',
    dataAmount: 2,
    dataUnit: 'GB',
    price: 249,
    color: 'pink',
    size: 'small',
    specialMessageText: 'Hør så mye musikk du vil... uten å bruke av dataen din. Gjelder Spotify, Tidal og Beat.',
  },
  {
    name: 'SMART Ung',
    id: 'smartUng5GB',
    dataAmount: 5,
    dataUnit: 'GB',
    price: 299,
    color: 'teal',
    size: 'small',
    specialMessageText: 'Hør så mye musikk du vil... uten å bruke av dataen din. Gjelder Spotify, Tidal og Beat.',
  },
];

const forAlleSubscriptionProps = [
  {
    name: 'SMART Total',
    id: 'smartTotal40GB',
    dataAmount: 40,
    dataUnit: 'GB',
    price: 699,
    color: 'blue',
    size: 'medium',
    isShowingFeatures: true,
    speechBubbleText: 'Kampanje 60 GB per md. i 2 md.',
    specialMessageText: 'Hør så mye musikk du vil... uten å bruke av dataen din. Gjelder Spotify, Tidal og Beat.',
    highlightedFeature: {
      iconName: 'ico_music',
      name: 'Music Freedom',
    },
  },
  {
    name: 'SMART Super',
    id: 'smartSuper15GB',
    dataAmount: 15,
    dataUnit: 'GB',
    price: 449,
    color: 'teal',
    size: 'medium',
    isShowingFeatures: true,
    speechBubbleText: 'Kampanje 60 GB per md. i 2 md.',
    specialMessageText: 'Hør så mye musikk du vil... uten å bruke av dataen din. Gjelder Spotify, Tidal og Beat.',
    highlightedFeature: {
      iconName: 'ico_music',
      name: 'Music Freedom',
    },
  },
  {
    name: 'SMART Pluss',
    id: 'smartPluss6GB',
    dataAmount: 6,
    dataUnit: 'GB',
    price: 399,
    color: 'green',
    size: 'medium',
    isShowingFeatures: true,
    speechBubbleText: 'Kampanje 60 GB per md. i 2 md.',
    specialMessageText: 'Hør så mye musikk du vil... uten å bruke av dataen din. Gjelder Spotify, Tidal og Beat.',
    highlightedFeature: {
      iconName: 'ico_music',
      name: 'Music Freedom',
    },
  },
  {
    name: 'SMART Basis',
    id: 'smartBasis3GB',
    dataAmount: 3,
    dataUnit: 'GB',
    price: 299,
    color: 'light-orange',
    size: 'small',
  },
  {
    name: 'SMART Mini',
    id: 'smartMini1GB',
    dataAmount: 1,
    dataUnit: 'GB',
    price: 249,
    color: 'pink',
    size: 'small',
  },
];

const kontantkortSubscriptionProps = [
  {
    name: 'Kontantkort',
    id: 'kontantkort',
    dataAmount: 200,
    dataUnit: 'MB',
    price: 99,
    color: 'pink',
    size: 'small',
    isExpanded: true,
    highlightedFeature: {
      iconName: 'ico_music',
      name: 'For deg som liker å betale på forhånd',
    },
  },
];

export default class SubscriptionSamplePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTabIndex: 1,
    };
  }
  onFunkyTabSelect(e, index) {
    e.preventDefault();
    this.setState({ selectedTabIndex: index });
  }
  render() {
    return (
      <div>
        <div className="center-align">
          <h1 className="heading heading--level-1">Subscription</h1>
        </div>

        <FunkyTabs
          uniqueId="subscription-tabs"
          onSelect={(e, index) => this.onFunkyTabSelect(e, index)}
          selectedIndex={this.state.selectedTabIndex}
        >
          <FunkyTabs.TabPanel
            heading="Under 15 år"
            imagePath={require('../../assets/images/under15.png')}
            url="/tabs/under-15"
          >
            <section className="box-grid container container--medium container--no-padding">
              {underFemtenSubscriptionProps.map(subscriptionProps => (
                <Subscription key={subscriptionProps.id} {...subscriptionProps} />
              ))}
            </section>
          </FunkyTabs.TabPanel>
          <FunkyTabs.TabPanel
            heading="Under 28 år"
            imagePath={require('../../assets/images/under28.png')}
            url="/tabs/under-28"
          >
            <section className="box-grid container container--medium container--no-padding">
              {underTjueAatteSubscriptionProps.map(subscriptionProps => (
                <Subscription key={subscriptionProps.id} {...subscriptionProps} />
              ))}
            </section>
          </FunkyTabs.TabPanel>
          <FunkyTabs.TabPanel
            heading="For alle"
            imagePath={require('../../assets/images/for-alle.png')}
            url="/tabs/for-alle"
          >
            <section className="box-grid container container--medium container--no-padding">
              {forAlleSubscriptionProps.map(subscriptionProps => (
                <Subscription key={subscriptionProps.id} {...subscriptionProps} />
              ))}
            </section>
          </FunkyTabs.TabPanel>
          <FunkyTabs.TabPanel
            heading="Kontantkort"
            imagePath={require('../../assets/images/kontantkort.png')}
            url="/tabs/kontantkort"
          >
            <section className="box-grid container container--medium container--no-padding">
              {kontantkortSubscriptionProps.map(subscriptionProps => (
                <Subscription key={subscriptionProps.id} {...subscriptionProps} />
              ))}
            </section>
          </FunkyTabs.TabPanel>
        </FunkyTabs>
      </div>
    );
  }
}
