import React from 'react';
import classnames from 'classnames';

type Props = {
  text: string;
  orientation?: 'bottom' | 'top';
  className?: string;
};

export const SpeechBubble: React.FC<Props> = ({ text, orientation = 'bottom', className = '' }) => {
  return (
    <div
      className={classnames('speech-bubble', `speech-bubble__tip-${orientation}`, { [className]: className })}
      dangerouslySetInnerHTML={{ __html: text }}
      key={text}
    ></div>
  );
};
