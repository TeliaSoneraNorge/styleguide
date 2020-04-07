import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import Subscription from './Subscription';
import Container from '../../atoms/Container/Container';
import {
  allSubscriptions,
} from './consts';
import BoxGrid from '../BoxGrid/BoxGrid';

const SubscriptionForm = ({ postToUrl, id }) => (
  <div className="subscription__button-container">
    <form method="post" action={postToUrl}>
      <input type="hidden" name="offeringCode" value={id} />
      <button className="button button--primary">Bestill</button>
    </form>
  </div>
);

const SubscriptionGroupForm = ({ postToUrl, id }) => (
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

const feature = {
  highlightedFeature: {
    iconName: 'ico_data_freedom',
    name: 'Surf og stream uten å gå tom for data.',
  },
  button: <SubscriptionForm postToUrl="#" id="x" />,
};

const features = {
  highlightedFeature: {
    iconName: 'ico_data_freedom',
    name: 'Surf og stream uten å gå tom for data.',
    secondIconName: 'ico_group',
    secondName: 'Flere sammen gir lavere pris',
    secondSize: 'large',
  },
  button: <SubscriptionGroupForm postToUrl="#" id="x" />,
};

const featureMapper = {
  0: null,
  1: feature,
  2: features,
};

const stories = storiesOf('Component library|Molecules/Subscription', module);
stories.addWithJSX('Subscription', () => {
  const [selectedSubscription, setSelectedSubscription] = useState(null);

  return (
    <Container size="medium" noMargin noPadding>
    <BoxGrid>
        { allSubscriptions.map((sub) => (
            <Subscription
                key={sub.id}
                id={sub.id}
                name={sub.name}
                dataAmount={sub.dataAmount}
                dataUnit={sub.dataUnit}
                price={sub.price}
                priceInfo={sub.priceInfo}
                color={sub.color}
                size={sub.size}
                isExpanded={sub.id === selectedSubscription}
                isShowingFeatures={sub.isShowingFeatures}
                onClose={() => setSelectedSubscription(null)}
                onSelect={(e, subscriptionId) => setSelectedSubscription(subscriptionId)}
                scrollToOnOpen
                features={{
                    speechBubbleText: sub.speechBubbleText,
                    highlightedFeature: sub.highlightedFeature,
                    specialMessageText: sub.specialMessageText,
                }}
            >
            </Subscription>
        )) }
    </BoxGrid>
</Container>
  );
});

stories.addWithJSX('SubscriptionWithSelect', () => {
  const transferSubscriptions = [
    {
        name: "Telia",
        header: "Telia X",
        id: "SMART_X.REGULAR",
        dataAmount: 'X',
        dataUnit: "GB",
        price: 579,
        priceInfo: ['pr. md'],
        groupSubscriptionDiscount: 180,
        color: "purple",
        size: "small",
        hasGroupSubscriptionDiscount: true,
        teaserFeatures: ["Fri bruk av data"]
    },
    {
        name: "SMART",
        id: "SMART_20GB.REGULAR",
        dataAmount: 20,
        dataUnit: "GB",
        price: 529,
        priceInfo: ['pr. md'],
        color: "purple",
        size: "small",
        hasGroupSubscriptionDiscount: false,
        teaserFeatures: ["Music Freedom inkludert"]
    },
    {
        name: "SMART",
        id: "SMART_15GB.REGULAR",
        dataAmount: 15,
        dataUnit: "GB",
        price: 479,
        priceInfo: ['pr. md'],
        color: "purple",
        size: "small",
        hasGroupSubscriptionDiscount: false,
        teaserFeatures: ["Music Freedom inkludert"]
    },
    {
        name: "SMART",
        id: "SMART_10GB.REGULAR",
        dataAmount: 10,
        dataUnit: "GB",
        price: 429,
        priceInfo: ['pr. md'],
        color: "purple",
        size: "small",
        hasGroupSubscriptionDiscount: false,
        teaserFeatures: ["Music Freedom inkludert"]
    },
    {
        name: "SMART",
        id: "SMART_06GB.REGULAR",
        dataAmount: 6,
        dataUnit: "GB",
        price: 379,
        priceInfo: ['pr. md'],
        color: "purple",
        size: "small",
        hasGroupSubscriptionDiscount: false,
        teaserFeatures: []
    },
    {
        name: "SMART",
        id: "SMART_04GB.REGULAR",
        dataAmount: 4,
        dataUnit: "GB",
        price: 329,
        priceInfo: ['pr. md'],
        color: "purple",
        size: "small",
        hasGroupSubscriptionDiscount: false,
        teaserFeatures: []
    },
    {
        name: "SMART",
        id: "SMART_MINI_3.REGULAR",
        dataAmount: 2,
        dataUnit: "GB",
        price: 249,
        priceInfo: ['pr. md'],
        color: "purple",
        size: "small",
        hasGroupSubscriptionDiscount: false,
        teaserFeatures: []
    }
];

  const [selectedSubscription, setSelectedSubscription] = useState("SMART_X.REGULAR");

  const onSubscriptionSelect = (subscriptionId) => {
      setSelectedSubscription(subscriptionId);
  }

  return (
    <Container size="medium">
      {transferSubscriptions.map((sub) => (
          <div key={sub.id} className="tlo-summary__subscriptions__subscription-item">
              <Subscription {...sub} onSelect={(e, subscriptionId) => onSubscriptionSelect(subscriptionId)} isSelected={selectedSubscription === sub.id} />
          </div>
      ))}
    </Container>
  );
});