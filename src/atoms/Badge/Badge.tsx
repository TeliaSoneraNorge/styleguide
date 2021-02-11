import React from 'react';
import cn from 'classnames';

interface Common {
  status?: 'ok' | 'caution' | 'warning';
  color?: string;
  borderColor?: string;
  kind?: 'active' | 'default';
  className?: string;
  /**
   * @default 'top-right'
   */
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  /**
   * If you eg. want to adjust the transform on the badge relative to its child.
   * See story for example
   */
  style?: React.CSSProperties;
}

interface Compact extends Common {
  size: 'compact';
}

interface Default extends Common {
  size?: 'default';
  text?: string;
}

export const Badge: React.FC<Compact | Default> = (props) => {
  const badge = (
    <div
      className={cn(
        'telia-badge',
        {
          'telia-badge__compact': props.size === 'compact',
          'telia-badge__active': props.kind === 'active',
        },
        props.status ? `telia-badge__${props.status}` : null,
        props.children ? (props.position ? `telia-badge__${props.position}` : `telia-badge__top-right`) : null,
        props.className
      )}
      style={{
        backgroundColor: props.color,
        borderColor: props.borderColor,
        ...props.style,
      }}
    >
      {'text' in props && props.text && <div className="telia-badge--text">{props.text}</div>}
    </div>
  );

  if (props.children) {
    return (
      <div className="telia-badge--root">
        {props.children}
        {badge}
      </div>
    );
  }
  return badge;
};
