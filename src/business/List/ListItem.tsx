import React from 'react';
import cn from 'classnames';
import { ListStyleContext, ListStyle } from './utils';

export type ListItemProps = {
  label: string;
  decorator?: React.ReactChild;
  description?: string;
  caption?: string | React.ReactChild;
  onClick?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  compact?: boolean;
} & ListStyle;

export const ListItem = (props: ListItemProps) => {
  const context = React.useContext(ListStyleContext);
  const { decorator, label, description, caption, onClick } = props;

  // Inherit List style from context, override with individual style from props.
  const { border, color, type, compact } = { ...context, ...props };

  return (
    <li
      className={cn('telia-listItem', {
        'telia-listItem--compact': compact,
        'telia-listItem--underlined': border === 'shadow',
        'telia-listItem--card': type === 'card',
        'telia-listItem--shadow': border === 'shadow',
        'telia-listItem--dark': color === 'dark',
        'telia-listItem--medium': color === 'medium',
        'telia-listItem--noBG': color !== 'dark' && color !== 'medium',
      })}
      onClick={onClick}
      onKeyDown={e => {
        if (onClick && (e.key === ' ' || e.key === 'Enter')) {
          e.preventDefault();
          onClick(e as any);
        }
      }}
      tabIndex={onClick && 0}
      role={onClick && 'button'}
    >
      {decorator && <div className="telia-listItem__decorator">{decorator}</div>}
      <div className="telia-listItem__content">
        <h3 className={cn('telia-listItem__name', { 'telia-listItem__name--dark': color === 'dark' })}>{label}</h3>
        {description && (
          <div
            className={cn('telia-listItem__description', {
              'telia-listItem__description--dark': color === 'dark',
            })}
          >
            {description}
          </div>
        )}
      </div>
      {caption && (
        <div
          className={cn('telia-listItem__caption', {
            'telia-listItem__caption--text': typeof caption === 'string',
            'telia-listItem__caption--dark': color === 'dark',
          })}
        >
          {caption}
        </div>
      )}
    </li>
  );
};
