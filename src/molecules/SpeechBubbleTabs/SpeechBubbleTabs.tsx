import React from 'react';
import cn from 'classnames';

type Tab = {
  id: string;
  name: string;
  disabled?: boolean;
};

type Props = {
  tabs?: Tab[];
  selectedTabId?: string;
  onClick: (id: string) => void;
};
export const SpeechBubbleTabs: React.FC<Props> = ({ tabs, selectedTabId, onClick }) => {
  return (
    <div className="telia-speech-bubble-tabs">
      {(tabs || []).map(({ id, name }) => (
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
