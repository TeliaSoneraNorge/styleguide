import React, { useState } from 'react';

import Subscription from './Subscription';
import Container from '../../atoms/Container/Container';
import Button from '../../atoms/Button/Button';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import RadioButtonList from '../RadioButtonList/RadioButtonList';
import RadioButtonWithLabel from '../RadioButtonList/RadioButtonWithLabel';
import { InfiniteIcon } from '../../atoms/Icon/icons/InfiniteIcon';

export const StandaloneSubscription = () => (
  <Subscription
    name="SMART Foobar"
    id="smartFoobar"
    dataAmount={1}
    dataUnit="GB"
    price={249}
    priceInfo={['pr. md', 'Ingen bindingstid.']}
    color="green"
    isStandalone
  />
);

export const SmallSubscription = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Subscription
      name="SMART Mini"
      id="smartMini"
      dataAmount={1}
      dataUnit="GB"
      price={249}
      priceInfo={['pr. md', 'Ingen bindingstid.']}
      color="pink"
      size="small"
      isExpanded={isExpanded}
      onSelect={() => setIsExpanded(true)}
      onClose={() => setIsExpanded(false)}
    />
  );
};

export const DiscountedSubscription = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Subscription
      name="SMART Mini"
      id="smartMini"
      dataAmount={1}
      dataUnit="GB"
      price={249}
      discountedPrice={99}
      priceInfo={['pr. md', 'Ingen bindingstid.']}
      color="green"
      size="small"
      isExpanded={isExpanded}
      onSelect={() => setIsExpanded(true)}
      onClose={() => setIsExpanded(false)}
    />
  );
};

export const ThreeDigitsMBSubscription = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const features = {
    button: <Button text="Gå videre" kind="primary" onClick={() => {}} />,
  };

  return (
    <Subscription
      name="SMART Mini"
      id="smartMini"
      dataAmount={200}
      dataUnit="MB"
      price={99}
      priceInfo={['pr. md', 'Ingen bindingstid.']}
      color="light-orange"
      size="small"
      features={features}
      isExpanded={isExpanded}
      onSelect={() => setIsExpanded(true)}
      onClose={() => setIsExpanded(false)}
    />
  );
};

export const ShowingFeaturesAndSpeechBubble = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const features = {
    highlightedFeature: {
      iconName: 'ico_music',
      name: 'Music Freedom',
    },
    speechBubbleText: 'Kampanje 60 GB per md. i 2 md.',
    button: <Button text="Gå videre" kind="primary" onClick={() => {}} />,
  };

  return (
    <div className="subscription__container">
      <Subscription
        name="SMART Total"
        id="smartTotal2"
        dataAmount={40}
        dataUnit="GB"
        price={699}
        priceInfo={['pr. md', 'Ingen bindingstid.']}
        color="blue"
        size="medium"
        features={features}
        isShowingFeatures
        isExpanded={isExpanded}
        onSelect={() => setIsExpanded(true)}
        onClose={() => setIsExpanded(false)}
      />
    </div>
  );
};

export const FullyExpandedAndNoSpeechBubble = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const features = {
    specialMessageText: 'Listen to as music as you want without using your data quota!',
    highlightedFeature: {
      iconName: 'ico_music',
      name: 'Music Freedom',
    },
    button: <Button text="Gå videre" kind="primary" onClick={() => {}} />,
  };

  return (
    <Subscription
      name="SMART Pluss"
      id="smartPluss"
      dataAmount={6}
      dataUnit="GB"
      price={399}
      priceInfo={['pr. md', 'Ingen bindingstid.']}
      color="green"
      size="small"
      features={features}
      isExpanded={isExpanded}
      onSelect={() => setIsExpanded(true)}
      onClose={() => setIsExpanded(false)}
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
          websites give you text, they’re not sending the best. They’re not sending you, they’re sending words that have
          lots of problems and they’re bringing those problems with us. They’re bringing mistakes. They’re bringing
          misspellings. They’re typists… And some, I assume, are good words. I think the only card she has is the Lorem
          card.
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
  );
};

export const FullyExpandedAndSpeechBubble = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const features = {
    speechBubbleText: 'Kampanje 60 GB per md. i 2 md.',
    specialMessageText: 'Listen to as music as you want without using your data quota!',
    highlightedFeature: {
      iconName: 'ico_music',
      name: 'Music Freedom',
    },
    button: <Button text="Gå videre" kind="primary" onClick={() => {}} />,
  };

  return (
    <div className="subscription__container">
      <Subscription
        name="SMART Pluss"
        id="smartPluss2"
        dataAmount={6}
        dataUnit="GB"
        price={399}
        priceInfo={['pr. md', 'Ingen bindingstid.']}
        color="green"
        size="medium"
        features={features}
        buttonText="Gå videre"
        isShowingFeatures
        isExpanded={isExpanded}
        onSelect={() => setIsExpanded(true)}
        onClose={() => setIsExpanded(false)}
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
    </div>
  );
};

export const B2BCollapsed = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const feature = {
    iconName: 'ico_music',
    name: 'Music Freedom',
  };

  return (
    <Subscription
      name="SMART Bedrift"
      id="smart-bedrift-collapsed"
      dataAmount={40}
      dataUnit="GB"
      price={699}
      priceInfo={['pr. md', 'Ingen bindingstid.']}
      allPricesLink={{
        url: '#',
        text: 'Se alle priser',
      }}
      color="purple"
      size="small"
      highlightedFeature={feature}
      isExpanded={isExpanded}
      onSelect={() => setIsExpanded(true)}
      onClose={() => setIsExpanded(false)}
    />
  );
};

export const B2BCollapsedShowingFeaturesAndSpeechBubble = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const features = {
    speechBubbleText: 'Kampanje 60 GB per md. i 2 md.',
    specialMessageText: 'Listen to as music as you want without using your data quota!',
    highlightedFeature: {
      iconName: 'ico_music',
      name: 'Music Freedom',
    },
    button: <Button text="Gå videre" kind="primary" onClick={() => {}} />,
  };

  return (
    <div className="subscription__container">
      <Subscription
        name="SMART Bedrift"
        dataAmount={40}
        dataUnit="GB"
        price={699}
        priceInfo={['pr. md', 'Ingen bindingstid.']}
        allPricesLink={{
          url: '#',
          text: 'Se alle priser',
        }}
        id="smart-bedrift-expanded"
        color="purple"
        size="medium"
        features={features}
        isShowingFeatures
        isExpanded={isExpanded}
        onSelect={() => setIsExpanded(true)}
        onClose={() => setIsExpanded(false)}
      />
    </div>
  );
};

export const B2BExpandedNoSpeechBubble = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const features = {
    specialMessageText: 'Listen to as music as you want without using your data quota!',
    highlightedFeature: {
      iconName: 'ico_music',
      name: 'Music Freedom',
    },
    button: <Button text="Gå videre" kind="primary" onClick={() => {}} />,
  };

  return (
    <Subscription
      name="SMART Bedrift"
      id="smart-bedrift-expanded"
      dataAmount={40}
      dataUnit="GB"
      price={699}
      priceInfo={['pr. md', 'Ingen bindingstid.']}
      allPricesLink={{
        url: '#',
        text: 'Se alle priser',
      }}
      color="purple"
      size="medium"
      features={features}
      isShowingFeatures
      isExpanded={isExpanded}
      onSelect={() => setIsExpanded(true)}
      onClose={() => setIsExpanded(false)}
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
          websites give you text, they’re not sending the best. They’re not sending you, they’re sending words that have
          lots of problems and they’re bringing those problems with us. They’re bringing mistakes. They’re bringing
          misspellings. They’re typists… And some, I assume, are good words. I think the only card she has is the Lorem
          card.
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
  );
};

export const BroadbandCollapsed = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Subscription
      id="broadband-subscription-collapsed"
      dataAmount={40}
      dataUnit="GB"
      price={699}
      priceInfo={['pr. md', 'Ingen bindingstid.']}
      additionalInfo={{
        routerPrice: 'Ruter fra 499,-',
        binding: 'ved 12 mnd binding',
      }}
      color="blue"
      size="small"
      isBroadband
      isExpanded={isExpanded}
      onSelect={() => setIsExpanded(true)}
      onClose={() => setIsExpanded(false)}
    />
  );
};

export const BroadbandExpanded = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const features = {
    totalCalculation: { title: 'Minste totalpris', price: '8887,-', subtitles: ['med 12 mnd avtale'] },
    productList: [{ title: 'Abonnement', price: '699,-', subtitles: ['Per mnd'] }, { title: 'Ruter', price: '499,-' }],
    button: <Button text="Gå videre" kind="primary" onClick={() => {}} />,
  };

  return (
    <Subscription
      id="broadband-subscription-expanded"
      dataAmount={40}
      dataUnit="GB"
      price={699}
      priceInfo={['pr. md', 'Ingen bindingstid.']}
      additionalInfo={{
        routerPrice: 'Ruter fra 499,-',
        binding: 'ved 12 mnd binding',
      }}
      color="blue"
      size="small"
      speechBubbleText="Some campaign text"
      featureButtonText="Gå videre"
      isBroadband
      features={features}
      isExpanded={isExpanded}
      onSelect={() => setIsExpanded(true)}
      onClose={() => setIsExpanded(false)}
    >
      <RadioButtonList type="vertical" hasRichContent>
        <RadioButtonWithLabel hasRichContent value="0" name="radiobutton-broadband">
          <div style={{ display: 'inline-block', width: '80%' }}>
            <Heading level="3" text="Batteridrevet 4G-ruter" />
            <Paragraph>
              A longer description text here. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat,
              accumsan id imperdiet et, porttitor at sem.
            </Paragraph>
            <Heading level="2" text="499,-" className="heading--pebble subscription__price" />
            <Paragraph kind="fineprint">Forutsetter binding av abonnement i 12mnd</Paragraph>
          </div>
          <img
            style={{ display: 'inline-block', float: 'right', width: '20%' }}
            src={require('../../stories/assets/router1.jpg')}
          />
        </RadioButtonWithLabel>
        <RadioButtonWithLabel hasRichContent value="1" name="radiobutton-broadband">
          <div style={{ display: 'inline-block', width: '80%' }}>
            <Heading level="3" text="Markedets kraftigste 4G-ruter" />
            <Paragraph>
              Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at
              sem.
            </Paragraph>
            <Heading level="2" text="499,-" className="heading--pebble subscription__price" />
            <Paragraph kind="fineprint">Forutsetter binding av abonnement i 12mnd</Paragraph>
          </div>
          <img
            style={{ display: 'inline-block', float: 'right', width: '20%' }}
            src={require('../../stories/assets/router2.png')}
          />
        </RadioButtonWithLabel>
        <RadioButtonWithLabel hasRichContent value="2" name="radiobutton-broadband">
          <Heading level="3" text="Jeg ønsker ikke å kjøpe ruter" />
        </RadioButtonWithLabel>
      </RadioButtonList>
      <div className="rich-text">
        <h3 className="heading heading--level-3">Data</h3>
        <p>
          I was going to say something extremely rough to Lorem Ipsum, to its family, and I said to myself, &quot;I
          can&apos;t do it. I just can&apos;t do it. It&apos;s inappropriate. It&apos;s not nice.&quot; When other
          websites give you text, they’re not sending the best. They’re not sending you, they’re sending words that have
          lots of problems and they’re bringing those problems with us. They’re bringing mistakes. They’re bringing
          misspellings. They’re typists… And some, I assume, are good words. I think the only card she has is the Lorem
          card.
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
  );
};

export const ScrollToOnOpen = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Subscription
      name="SMART Mini"
      id="smartMini"
      dataAmount={1}
      dataUnit="GB"
      price={249}
      priceInfo={['pr. md', 'Ingen bindingstid.']}
      color="pink"
      size="small"
      isExpanded={isExpanded}
      onSelect={() => setIsExpanded(true)}
      onClose={() => setIsExpanded(false)}
      scrollToOnOpen
    />
  );
};

export const ShowingTwoFeaturesAndNoDataUnit = () => {
  const [isExpanded, setIsExpanded] = useState(false);

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

  const features = {
    highlightedFeature: {
      iconName: 'ico_data_freedom',
      name: 'Ubegrenset data',
      secondIconName: 'ico_group',
      secondName: 'Samler du fler, sparer du mer.',
      secondSize: 'large',
    },
    button: <SubscriptionGroupForm postToUrl="#" id="x" />,
  };

  return (
    <Subscription
      name="Telia X"
      id="x"
      dataAmount="∞"
      dataAmountIcon={<InfiniteIcon />}
      dataUnit=""
      price={579}
      priceInfo={['per md.', 'Ingen bindingstid']}
      color="black"
      size="medium"
      features={features}
      isShowingFeatures
      isExpanded={isExpanded}
      onSelect={() => setIsExpanded(true)}
      onClose={() => setIsExpanded(false)}
      scrollToOnOpen
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
          websites give you text, they’re not sending the best. They’re not sending you, they’re sending words that have
          lots of problems and they’re bringing those problems with us. They’re bringing mistakes. They’re bringing
          misspellings. They’re typists… And some, I assume, are good words. I think the only card she has is the Lorem
          card.
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
  );
};

export default {
  title: 'Component library/Molecules/Subscription',
  component: StandaloneSubscription,
};

export const subscriptionWithSelect = () => {
  const transferSubscriptions = [
    {
      name: 'Telia',
      header: 'Telia X',
      id: 'SMART_X.REGULAR',
      dataAmount: 'X',
      dataUnit: 'GB',
      price: 579,
      priceInfo: ['pr. md'],
      groupSubscriptionDiscount: 180,
      color: 'purple',
      size: 'small',
      hasGroupSubscriptionDiscount: true,
      teaserFeatures: ['Fri bruk av data'],
    },
    {
      name: 'SMART',
      id: 'SMART_20GB.REGULAR',
      dataAmount: 20,
      dataUnit: 'GB',
      price: 529,
      priceInfo: ['pr. md'],
      color: 'purple',
      size: 'small',
      hasGroupSubscriptionDiscount: false,
      teaserFeatures: ['Music Freedom inkludert'],
    },
    {
      name: 'SMART',
      id: 'SMART_15GB.REGULAR',
      dataAmount: 15,
      dataUnit: 'GB',
      price: 479,
      priceInfo: ['pr. md'],
      color: 'purple',
      size: 'small',
      hasGroupSubscriptionDiscount: false,
      teaserFeatures: ['Music Freedom inkludert'],
    },
    {
      name: 'SMART',
      id: 'SMART_10GB.REGULAR',
      dataAmount: 10,
      dataUnit: 'GB',
      price: 429,
      priceInfo: ['pr. md'],
      color: 'purple',
      size: 'small',
      hasGroupSubscriptionDiscount: false,
      teaserFeatures: ['Music Freedom inkludert'],
    },
    {
      name: 'SMART',
      id: 'SMART_06GB.REGULAR',
      dataAmount: 6,
      dataUnit: 'GB',
      price: 379,
      priceInfo: ['pr. md'],
      color: 'purple',
      size: 'small',
      hasGroupSubscriptionDiscount: false,
      teaserFeatures: [],
    },
    {
      name: 'SMART',
      id: 'SMART_04GB.REGULAR',
      dataAmount: 4,
      dataUnit: 'GB',
      price: 329,
      priceInfo: ['pr. md'],
      color: 'purple',
      size: 'small',
      hasGroupSubscriptionDiscount: false,
      teaserFeatures: [],
    },
    {
      name: 'SMART',
      id: 'SMART_MINI_3.REGULAR',
      dataAmount: 2,
      dataUnit: 'GB',
      price: 249,
      priceInfo: ['pr. md'],
      color: 'purple',
      size: 'small',
      hasGroupSubscriptionDiscount: false,
      teaserFeatures: [],
    },
  ];

  const [selectedSubscription, setSelectedSubscription] = useState('SMART_X.REGULAR');

  const onSubscriptionSelect = subscriptionId => {
    setSelectedSubscription(subscriptionId);
  };

  return (
    <Container size="medium">
      {transferSubscriptions.map(sub => (
        <div key={sub.id} className="tlo-summary__subscriptions__subscription-item">
          <Subscription
            {...sub}
            onSelect={(e, subscriptionId) => onSubscriptionSelect(subscriptionId)}
            isSelected={selectedSubscription === sub.id}
          />
        </div>
      ))}
    </Container>
  );
};

export const subscriptionWithExtraData = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const features = {
    highlightedFeature: {
      iconName: 'ico_music',
      name: 'Music Freedom',
    },
    button: <Button text="Gå videre" kind="primary" onClick={() => {}} />,
  };

  return (
    <div className="subscription__container">
      <Subscription
        name="SMART Total"
        id="smartTotal2"
        dataAmount={40}
        dataUnit="GB"
        price={699}
        priceInfo={['pr. md', 'Ingen bindingstid.']}
        color="blue"
        size="medium"
        features={features}
        isShowingFeatures
        isExpanded={isExpanded}
        onSelect={() => setIsExpanded(true)}
        onClose={() => setIsExpanded(false)}
        extraDataAmount={5}
        extraDataUnit="GB"
      />
    </div>
  );
};

export const DiscountedSubscriptionWithExtraData = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Subscription
      name="SMART Mini"
      id="smartMini"
      dataAmount={40}
      dataUnit="GB"
      price={699}
      discountedPrice={349.5}
      priceInfo={['pr. md i 3 måneder', 'Ingen bindingstid.']}
      color="green"
      size="small"
      isExpanded={isExpanded}
      onSelect={() => setIsExpanded(true)}
      onClose={() => setIsExpanded(false)}
      extraDataAmount={5}
      extraDataUnit="GB"
    />
  );
};
