import React from 'react';

type Props = {
  text: string;
};

export const SpeechBubble: React.FC<Props> = ({ text }) => {
  return <div className="speech-bubble" dangerouslySetInnerHTML={{ __html: text }}></div>;
};
