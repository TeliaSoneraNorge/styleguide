import React from 'react';
import classnames from 'classnames';

type Props = {
  text: string;
  orientation?: 'bottom' | 'top';
};

export const SpeechBubble: React.FC<Props> = ({ text, orientation = 'bottom' }) => {
  return (
    <div
      className={classnames('speech-bubble', `speech-bubble__tip-${orientation}`)}
      dangerouslySetInnerHTML={{ __html: text }}
    ></div>
  );
};
