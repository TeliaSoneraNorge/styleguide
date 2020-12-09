import React from 'react';
import cn from 'classnames';
import { ListStyleContext, ListStyle } from './utils';

export type ListItemProps = {
  label: React.ReactNode;
  decorator?: React.ReactChild;
  description?: string;
  caption?: string | React.ReactChild;
  onClick?: (e: React.MouseEvent<HTMLLIElement, MouseEvent> | React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  compact?: boolean;
  className?: string;
  /**
   * @default li
   */
  tag?: 'div' | 'span' | 'li';
} & ({ expandable: true; open: boolean } | { expandable?: false });

export const ListItem: React.FC<ListItemProps & ListStyle> = (props) => {
  const listStyle = React.useContext(ListStyleContext);
  const { decorator, label, description, caption, onClick, compact, className, expandable, ...listItemStyle } = props;
  const open = 'open' in props ? props.open : false;

  // Inherit List style from context, override with individual style from props.
  const { border, color, type } = { ...listStyle, ...listItemStyle };
  const Tag = props.tag ? props.tag : 'li';

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onClick && (e.key === ' ' || e.key === 'Enter')) {
      e.preventDefault();
      onClick(e as any);
    }
  };

  return (
    <Tag
      className={cn('telia-listItem', {
        'telia-listItem--underlined': border === 'underlined',
        'telia-listItem--shadow': border === 'shadow',
        'telia-listItem--card': type === 'card',
        'telia-listItem--dark': color === 'dark',
        'telia-listItem--medium': color === 'medium',
        'telia-listItem--noBG': color !== 'dark' && color !== 'medium',
      })}
    >
      <div
        className={cn(
          'telia-listItem__mainWrapper',
          { 'telia-listItem--compact': compact, 'telia-listItem--clickable': onClick },
          className
        )}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        tabIndex={onClick && 0}
        role={onClick && 'button'}
      >
        <div className="telia-listItem__main">
          {decorator && (
            <div className="telia-listItem__decorator" onClick={(e) => e.stopPropagation()}>
              {decorator}
            </div>
          )}
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
        </div>
        {!expandable && props.children}
      </div>
      {expandable && open && <div className="telia-listItem__expandedChildren">{props.children}</div>}
    </Tag>
  );
};
