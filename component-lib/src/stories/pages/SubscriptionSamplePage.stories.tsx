import React, { useState } from 'react';

import { FunkyTabs, Subscription } from '../../index';

import img from '../sampleImages';

export default {
  title: 'Examples/Pages',
};

const SubscriptionGroupForm = ({ postToUrl, id }: { postToUrl: any; id: any }) => (
  <div className="subscription__button-container">
    <form method="post" action={postToUrl}>
      <input type="hidden" name="offeringCode" value={id} />
      <button className="button button--primary">Bestill for en</button>
    </form>
    <a
      className="button button--secondary subscription__group-subs-button"
      href="#/components/subscription#subscription-info"
    >
      Flere sammen?
    </a>
  </div>
);

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
    priceInfo: ['pr. md', 'Ingen bindingstid.'],
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
    priceInfo: ['pr. md', 'Ingen bindingstid.'],
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
    priceInfo: ['pr. md', 'Ingen bindingstid.'],
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
    priceInfo: ['pr. md', 'Ingen bindingstid.'],
  },
];

const forAlleSubscriptionProps = [
  {
    name: 'Telia',
    id: 'x',
    dataAmount: 'X',
    dataUnit: 'GB',
    price: 579,
    color: 'black',
    size: 'medium',
    isShowingFeatures: true,
    speechBubbleText: 'Kampanje 60 GB per md. i 2 md.',
    specialMessageText: 'Hør så mye musikk du vil... uten å bruke av dataen din. Gjelder Spotify, Tidal og Beat.',
    features: {
      highlightedFeature: {
        iconName: 'ico_data_freedom',
        name: 'Surf og stream uten å gå tom for data.',
        secondIconName: 'ico_group',
        secondName: 'Flere sammen gir lavere pris',
        secondSize: 'large',
      },
      button: <SubscriptionGroupForm postToUrl="#" id="x" />,
    },
    priceInfo: ['pr. md', 'Ingen bindingstid.'],
  },
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
    priceInfo: ['pr. md', 'Ingen bindingstid.'],
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
    priceInfo: ['pr. md', 'Ingen bindingstid.'],
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
    priceInfo: ['pr. md', 'Ingen bindingstid.'],
  },
  {
    name: 'SMART Basis',
    id: 'smartBasis3GB',
    dataAmount: 3,
    dataUnit: 'GB',
    price: 299,
    color: 'light-orange',
    size: 'small',
    priceInfo: ['pr. md', 'Ingen bindingstid.'],
  },
  {
    name: 'SMART Mini',
    id: 'smartMini1GB',
    dataAmount: 1,
    dataUnit: 'GB',
    price: 249,
    color: 'pink',
    size: 'small',
    priceInfo: ['pr. md', 'Ingen bindingstid.'],
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
    priceInfo: ['pr. md', 'Ingen bindingstid.'],
  },
];

export function SubscriptionSamplePage() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(1);
  const [selectedSubscription, setSelectedSubscription] = useState<any>(null);

  function onFunkyTabSelect(e: any, index: any) {
    e.preventDefault();
    setSelectedTabIndex(index);
  }

  const isExpanded = (subscription: any) => subscription === selectedSubscription;

  return (
    <div>
      <div className="center-align">
        <h1 className="heading heading--level-1">Subscription</h1>
      </div>

      <FunkyTabs
        uniqueId="subscription-tabs"
        onSelect={(e, index) => onFunkyTabSelect(e, index)}
        selectedIndex={selectedTabIndex}
      >
        <FunkyTabs.TabPanel heading="Under 15 år" imagePath={img.under15} url="/tabs/under-15">
          <section className="box-grid container container--medium container--no-padding">
            {underFemtenSubscriptionProps.map(subscriptionProps => (
              <Subscription
                key={subscriptionProps.id}
                {...subscriptionProps}
                scrollToOnOpen
                isExpanded={isExpanded(subscriptionProps.id)}
                onClose={() => setSelectedSubscription(null)}
                onSelect={() => setSelectedSubscription(subscriptionProps.id)}
              />
            ))}
          </section>
        </FunkyTabs.TabPanel>
        <FunkyTabs.TabPanel heading="Under 28 år" imagePath={img.under28} url="/tabs/under-28">
          <section className="box-grid container container--medium container--no-padding">
            {underTjueAatteSubscriptionProps.map(subscriptionProps => (
              <Subscription
                key={subscriptionProps.id}
                {...subscriptionProps}
                scrollToOnOpen
                isExpanded={isExpanded(subscriptionProps.id)}
                onClose={() => setSelectedSubscription(null)}
                onSelect={() => setSelectedSubscription(subscriptionProps.id)}
              />
            ))}
          </section>
        </FunkyTabs.TabPanel>
        <FunkyTabs.TabPanel heading="For alle" imagePath={img.forAlle} url="/tabs/for-alle">
          <section className="box-grid container container--medium container--no-padding">
            {forAlleSubscriptionProps.map(subscriptionProps => (
              <Subscription
                key={subscriptionProps.id}
                {...subscriptionProps}
                scrollToOnOpen
                isExpanded={isExpanded(subscriptionProps.id)}
                onClose={() => setSelectedSubscription(null)}
                onSelect={() => setSelectedSubscription(subscriptionProps.id)}
              />
            ))}
          </section>
        </FunkyTabs.TabPanel>
        <FunkyTabs.TabPanel heading="Kontantkort" imagePath={img.kontantkort} url="/tabs/kontantkort">
          <section className="box-grid container container--medium container--no-padding">
            {kontantkortSubscriptionProps.map(subscriptionProps => (
              <Subscription
                key={subscriptionProps.id}
                {...subscriptionProps}
                scrollToOnOpen
                isExpanded={isExpanded(subscriptionProps.id)}
                onClose={() => setSelectedSubscription(null)}
                onSelect={() => setSelectedSubscription(subscriptionProps.id)}
              />
            ))}
          </section>
        </FunkyTabs.TabPanel>
      </FunkyTabs>
    </div>
  );
}
