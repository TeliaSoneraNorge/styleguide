import React from 'react';
import cn from 'classnames';
import { ListStyleContext, ListStyle } from './utils';
import { Icon } from '../../atoms/Icon';

export type ListItemProps = {
  title?: React.ReactNode;
  decorator?: React.ReactChild;
  description?: React.ReactChild;
  caption?: string | React.ReactChild;
  onClick?: React.MouseEventHandler;
  compact?: boolean;
  active?: boolean;
  selected?: boolean;
  className?: string;
  href?: string;
  /**
   * @default li
   */
  tag?: 'div' | 'span' | 'li';
  children?: React.ReactNode;
} & ({ expandable: true; open: boolean; expandedChildren: React.ReactNode } | { expandable?: false });

export const ListItem: React.FC<ListItemProps & ListStyle> = (props) => {
  const listStyle = React.useContext(ListStyleContext);
  const { decorator, title, description, caption, onClick, compact, className, expandable, ...listItemStyle } = props;
  const open = 'open' in props ? props.open : false;
  const selected = props.selected;
  // Inherit List style from context, override with individual style from props.
  const { border, color, type } = { ...listStyle, ...listItemStyle };

  const Tag = props.tag ? props.tag : 'li';
  const InnerTag = props.href ? 'a' : onClick ? 'button' : 'div';

  const hasProps = title || decorator || description || caption;

  return (
    <Tag
      className={cn('telia-listItem', {
        'telia-listItem--underlined': border === 'underlined',
        'telia-listItem--outlined': border === 'outlined',
        'telia-listItem--selected': border === 'selected',
        'telia-listItem--card': type === 'card',
        'telia-listItem--dark': color === 'dark',
        'telia-listItem--medium': color === 'medium',
        'telia-listItem--noBG': color !== 'dark' && color !== 'medium' && color !== 'white',
      })}
    >
      <InnerTag
        className={cn(
          'telia-listItem__mainWrapper',
          {
            'telia-listItem--compact': compact,
            'telia-listItem--clickable': onClick || props.href,
            'telia-listItem--active': props.active,
          },
          className
        )}
        onClick={onClick}
        href={props.href}
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
            {caption ? (
              <div
                className={cn('telia-listItem__caption', {
                  'telia-listItem__caption__text': typeof caption === 'string',
                  'telia-listItem__caption__dark': color === 'dark',
                })}
              >
                {caption}
              </div>
            ) : selected ? (
              <Icon icon="check-circle-filled" style={{ color: 'green' }} />
            ) : null}
          </div>
        )}
        {props.children}
      </InnerTag>
      {'expandedChildren' in props && (
        <div
          className={cn('telia-listItem__expandedChildren', {
            'telia-listItem__expandedChildren--expanded': open,
          })}
        >
          {props.expandedChildren}
        </div>
      )}
    </Tag>
  );
};
