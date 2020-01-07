import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { text, number, select, array, boolean } from '@storybook/addon-knobs';

import Subscription from './Subscription';
import Container from '../../atoms/Container/Container';

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

const stories = storiesOf('Molecules|Subscription', module);
stories.addWithJSX('Subscription', () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const name = text('Name', 'Telia');
  const dataAmount = text('Data Amount', 'X');
  const dataUnit = text('Data Unit', 'GB');
  const price = number('Price', 579);
  const priceInfo = array('PriceInfo', ['pr. md']);
  const color = select('Color', ['purple', 'pink', 'light-orange', 'green', 'blue', 'teal', 'grey', 'black'], 'black');
  const size = select('Size', ['small', 'medium'], 'medium');
  const showFeatures = select('Number of features to show', [0, 1, 2], 0);
  const scrollToOnOpen = boolean('Scroll to on open', false);

  return (
    <Container size="medium">
      <Subscription
        name={name}
        id="smartMini"
        dataAmount={dataAmount}
        dataUnit={dataUnit}
        price={price}
        priceInfo={priceInfo}
        color={color}
        size={size}
        features={featureMapper[showFeatures]}
        isShowingFeatures={showFeatures > 0}
        isExpanded={isExpanded}
        onSelect={() => setIsExpanded(true)}
        onClose={() => setIsExpanded(false)}
        scrollToOnOpen={scrollToOnOpen}
      >
        <div className="rich-text">
          <h2 className="heading heading--level-2">Om abonnement</h2>
          <h3 className="heading heading--level-3">Skanning, texting og MMS</h3>
          <p>
            Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world
            has never seen. Does everybody know that pig named Lorem Ipsum? She&apos;s a disgusting pig, right?
          </p>
          <h3 className="heading heading--level-3">Data</h3>
          <p>
            I was going to say something extremely rough to Lorem Ipsum, to its family, and I said to myself, &quot;I
            can&apos;t do it. I just can&apos;t do it. It&apos;s inappropriate. It&apos;s not nice.&quot; When other
            websites give you text, they’re not sending the best. They’re not sending you, they’re sending words that
            have lots of problems and they’re bringing those problems with us. They’re bringing mistakes. They’re
            bringing misspellings. They’re typists… And some, I assume, are good words. I think the only card she has is
            the Lorem card.
          </p>
          <h3 className="heading heading--level-3">Utland</h3>
          <p>
            We have so many things that we have to do better... and certainly ipsum is one of them. Despite the constant
            negative ipsum covfefe. Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with
            other websites.
          </p>
          <ul className="list list--links">
            <li className="list__item">
              <a className="list__link" href="#" target="_self">
                Last ned abonnementsvilkår
              </a>
            </li>
          </ul>
        </div>
      </Subscription>
    </Container>
  );
});

stories.addWithJSX('SubscriptionWithSelect', () => {
  const showFeaturesInTeaser = boolean("ShowFeaturesInTeaser", true);
  const priceInfo = array('PriceInfo', ['pr. md']);
  const transferSubscriptions = [
    {
        name: "Telia",
        header: "Telia X",
        id: "SMART_X.REGULAR",
        dataAmount: 'X',
        dataUnit: "GB",
        price: 579,
        priceInfo,
        groupSubscriptionDiscount: 180,
        color: "purple",
        size: "small",
        hasUnlimitedData: true,
        hasMusicFreedom: false,
        hasGroupSubscriptionDiscount: true,
    },
    {
        name: "SMART",
        id: "SMART_20GB.REGULAR",
        dataAmount: 20,
        dataUnit: "GB",
        price: 529,
        priceInfo,
        color: "purple",
        size: "small",
        hasMusicFreedom: true,
        hasGroupSubscriptionDiscount: false,
    },
    {
        name: "SMART",
        id: "SMART_15GB.REGULAR",
        dataAmount: 15,
        dataUnit: "GB",
        price: 479,
        priceInfo,
        color: "purple",
        size: "small",
        hasMusicFreedom: true,
        hasGroupSubscriptionDiscount: false,
    },
    {
        name: "SMART",
        id: "SMART_10GB.REGULAR",
        dataAmount: 10,
        dataUnit: "GB",
        price: 429,
        priceInfo,
        color: "purple",
        size: "small",
        hasMusicFreedom: true,
        hasGroupSubscriptionDiscount: false,
    },
    {
        name: "SMART",
        id: "SMART_06GB.REGULAR",
        dataAmount: 6,
        dataUnit: "GB",
        price: 379,
        priceInfo,
        color: "purple",
        size: "small",
        hasMusicFreedom: false,
        hasGroupSubscriptionDiscount: false,
    },
    {
        name: "SMART",
        id: "SMART_04GB.REGULAR",
        dataAmount: 4,
        dataUnit: "GB",
        price: 329,
        priceInfo,
        color: "purple",
        size: "small",
        hasMusicFreedom: false,
        hasGroupSubscriptionDiscount: false,
    },
    {
        name: "SMART",
        id: "SMART_MINI_3.REGULAR",
        dataAmount: 2,
        dataUnit: "GB",
        price: 249,
        priceInfo,
        color: "purple",
        size: "small",
        hasMusicFreedom: false,
        hasGroupSubscriptionDiscount: false,
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
              <Subscription {...sub} onSelect={(e, subscriptionId) => onSubscriptionSelect(subscriptionId)} isSelected={selectedSubscription === sub.id} showFeaturesInTeaser={showFeaturesInTeaser} />
          </div>
      ))}
    </Container>
  );
});