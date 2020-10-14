import React from 'react';
import cn from 'classnames';
import { getStyleContext, ListStyleContext, ListStyle } from './utils';

export type BaseListItemProps = {
  label: string;
  decorator?: React.ReactChild;
  description?: string;
  caption?: string | React.ReactChild;
  onClick?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  compact?: boolean;
} & ListStyle;

export const BaseListItem = (props: BaseListItemProps) => {
  const context = React.useContext(ListStyleContext);
  const { decorator, label, description, caption, onClick } = props;

  // Allows setting style on the List component instead of individual list items.
  // See ContextProvider in utils.ts
  const { compact, underlined, card, shadow, dark, medium, none } = getStyleContext({ ...context, ...props });

  return (
    <li
      className={cn('telia-listItem', {
        'telia-listItem--compact': compact,
        'telia-listItem--underlined': underlined,
        'telia-listItem--card': card,
        'telia-listItem--shadow': shadow,
        'telia-listItem--dark': dark,
        'telia-listItem--medium': medium,
        'telia-listItem--noBG': none || (!dark && !medium),
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
        <h3 className={cn('telia-listItem__name', { 'telia-listItem__name--dark': dark })}>{label}</h3>
        {description && (
          <div className={cn('telia-listItem__description', { 'telia-listItem__description--dark': dark })}>
            {description}
          </div>
        )}
      </div>
      {caption && (
        <div
          className={cn('telia-listItem__caption', {
            'telia-listItem__caption--text': typeof caption === 'string',
            'telia-listItem__caption--dark': dark,
          })}
        >
          {caption}
        </div>
      )}
    </li>
  );
};
