import React from 'react';
import cn from 'classnames';

type Tab = {
  id: string;
  name: string;
  disabled?: boolean;
};

type Props = {
  position?: string;
  tabs?: Tab[];
  selectedTabId?: string;
  onClick: (id: string) => void;
};

export const SpeechBubbleTabs: React.FC<Props> = ({ position, tabs, selectedTabId, onClick }) => {
  const containerClassName = cn('telia-speech-bubble-tabs', {
    'telia-speech-bubble-tabs--center': !position || position === 'center',
    'telia-speech-bubble-tabs--left': position === 'left',
  });

  return (
    <div className={containerClassName}>
      {tabs?.map(({ id, name }) => (
        <button
          className={cn('telia-speech-bubble-tabs__tab', {
            'telia-speech-bubble-tabs__tab--selected': selectedTabId === id,
          })}
          key={id}
          onClick={() => onClick(id)}
        >
          <span>{name}</span>
        </button>
      ))}
    </div>
  );
};
