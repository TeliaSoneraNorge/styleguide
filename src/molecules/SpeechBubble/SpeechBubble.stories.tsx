import React from 'react';
import { SpeechBubble } from './SpeechBubble';

export default {
  title: 'Component library/Molecules/SpeechBubble',
  component: SpeechBubble,
};

export const Default = () => (
  <div style={{ position: 'relative', margin: '6rem 3rem' }}>
    <SpeechBubble text="Hi, I'm a speech bubble" />
  </div>
);
