import React from 'react';
import cn from 'classnames';
import { ListStyleContext, ListStyle } from './utils';

export type ListItemProps = {
  title?: React.ReactNode;
  decorator?: React.ReactChild;
  description?: React.ReactChild;
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
  const { decorator, title, description, caption, onClick, compact, className, expandable, ...listItemStyle } = props;
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

  const hasProps = title || decorator || description || caption;

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
        {hasProps && (
          <div className="telia-listItem__main">
            {decorator && (
              <div className="telia-listItem__decorator" onClick={(e) => e.stopPropagation()}>
                {decorator}
              </div>
            )}
            <div className="telia-listItem__content">
              {title && (
                <h3 className={cn('telia-listItem__name', { 'telia-listItem__name--dark': color === 'dark' })}>
                  {title}
                </h3>
              )}
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
        )}
        {!expandable && props.children}
      </div>
      <div
        className={cn('telia-listItem__expandedChildren', {
          'telia-listItem__expandedChildren--expanded': expandable && open,
        })}
      >
        {props.children}
      </div>
    </Tag>
  );
};
