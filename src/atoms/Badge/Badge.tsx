import React from 'react';
import cn from 'classnames';

interface Common {
  status?: 'ok' | 'caution' | 'warning';
  color?: string;
  borderColor?: string;
  kind?: 'active' | 'default';
  className?: string;
}

interface Compact extends Common {
  size: 'compact';
}

interface Default extends Common {
  size?: 'default';
  text?: string;
}

export const Badge: React.FC<Compact | Default> = (props) => {
  return (
    <div
      className={cn(
        'telia-badge',
        {
          'telia-badge__compact': props.size === 'compact',
          'telia-badge__active': props.kind === 'active',
        },
        props.status ? `telia-badge__${props.status}` : null,
        props.className
      )}
      style={{
        backgroundColor: props.color,
        borderColor: props.borderColor,
      }}
    >
      {'text' in props && props.text && <div className="telia-badge--text">{props.text}</div>}
    </div>
  );
};
