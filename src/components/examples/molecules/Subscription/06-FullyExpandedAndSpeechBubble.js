import React, { useState } from 'react';
import { Button, Subscription } from '@telia/styleguide';

const features = {
  speechBubbleText: 'Kampanje 60 GB per md. i 2 md.',
  specialMessageText: 'Listen to as music as you want without using your data quota!',
  highlightedFeature: {
    iconName: 'ico_music',
    name: 'Music Freedom',
  },
  button: <Button text="Gå videre" kind="primary" onClick={() => {}} />,
};

const FullyExpandedAndSpeechBubble = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Subscription
      name="SMART Pluss"
      id="smartPluss2"
      dataAmount={6}
      dataUnit="GB"
      price={399}
      priceInfo={['pr. md', 'Ingen bindingstid.']}
      allPricesLink={{
        url: '#',
        text: 'Se alle priser',
      }}
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

export default FullyExpandedAndSpeechBubble;
