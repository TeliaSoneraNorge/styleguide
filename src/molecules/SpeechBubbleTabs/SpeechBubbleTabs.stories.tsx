import React, { useState } from 'react';
import { SpeechBubbleTabs } from '../../index';

export default {
  title: 'Component library/Molecules/SpeechBubbleTabs',
  component: SpeechBubbleTabs,
};

const TABS = [
  { id: 'FWA', name: 'Bredbånd' },
  { id: 'FWA_TV', name: 'Bredbånd og TV' },
];

export const DefaultSpeechBubbleTabs = () => {
  const [selectedTabId, setSelectedTabId] = useState('FWA');

  const handleChangeTab = (id: string) => {
    setSelectedTabId(id);
  };

  return <SpeechBubbleTabs tabs={TABS} selectedTabId={selectedTabId} onClick={handleChangeTab} />;
};

export const SpeechBubbleTabsWithoutDefaultTab = () => {
  const [selectedTabId, setSelectedTabId] = useState<string | undefined>();

  const handleChangeTab = (id?: string) => {
    setSelectedTabId(id);
  };

  return <SpeechBubbleTabs tabs={TABS} selectedTabId={selectedTabId} onClick={handleChangeTab} />;
};

export const SpeechBubbleTabsOnLeft = () => {
  const [selectedTabId, setSelectedTabId] = useState('FWA');

  const handleChangeTab = (id: string) => {
    setSelectedTabId(id);
  };

  return <SpeechBubbleTabs position="left" tabs={TABS} selectedTabId={selectedTabId} onClick={handleChangeTab} />;
};

export const SpeechBubbleWithHiddenTriangle = () => {
  const [selectedTabId, setSelectedTabId] = useState('FWA');

  const handleChangeTab = (id: string) => {
    setSelectedTabId(id);
  };

  return <SpeechBubbleTabs tabs={TABS} selectedTabId={selectedTabId} onClick={handleChangeTab} showTriangle={false} />;
};
