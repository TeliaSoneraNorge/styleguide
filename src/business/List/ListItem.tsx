import React from 'react';
import cn from 'classnames';
import { ListStyleContext, ListStyle } from './utils';

export type ListItemProps = {
  title?: React.ReactNode;
  decorator?: React.ReactChild;
  description?: React.ReactChild;
  caption?: string | React.ReactChild;
  onClick?: React.MouseEventHandler;
  compact?: boolean;
  className?: string;
  /**
   * @default li
   */
  tag?: 'div' | 'span' | 'li';
} & ({ expandable: true; open: boolean; expandedChildren: React.ReactNode } | { expandable?: false });

export const ListItem: React.FC<ListItemProps & ListStyle> = (props) => {
  const listStyle = React.useContext(ListStyleContext);
  const { decorator, title, description, caption, onClick, compact, className, expandable, ...listItemStyle } = props;
  const open = 'open' in props ? props.open : false;

  // Inherit List style from context, override with individual style from props.
  const { border, color, type } = { ...listStyle, ...listItemStyle };
  const Tag = props.tag ? props.tag : 'li';
  const InnerTag = onClick ? 'button' : 'div';

  const hasProps = title || decorator || description || caption;

  return (
    <Tag
      className={cn('telia-listItem', {
        'telia-listItem__underlined': border === 'underlined',
        'telia-listItem__outlined': border === 'outlined',
        'telia-listItem__card': type === 'card',
        'telia-listItem__dark': color === 'dark',
        'telia-listItem__medium': color === 'medium',
        'telia-listItem__noBG': color !== 'dark' && color !== 'medium' && color !== 'white',
      })}
    >
      <InnerTag
        className={cn(
          'telia-listItem--mainWrapper',
          {
            'telia-listItem__compact': compact,
            'telia-listItem__clickable': onClick,
          },
          className
        )}
        onClick={onClick}
        role={onClick && 'button'}
      >
        {hasProps && (
          <div className="telia-listItem--main">
            {decorator && (
              <div className="telia-listItem--decorator" onClick={(e) => e.stopPropagation()}>
                {decorator}
              </div>
            )}
            <div className="telia-listItem--content">
              {title && (
                <h3 className={cn('telia-listItem--name', { 'telia-listItem--name__dark': color === 'dark' })}>
                  {title}
                </h3>
              )}
              {description && (
                <div
                  className={cn('telia-listItem--description', {
                    'telia-listItem--description__dark': color === 'dark',
                  })}
                >
                  {description}
                </div>
              )}
            </div>
            {caption && (
              <div
                className={cn('telia-listItem--caption', {
                  'telia-listItem--caption__text': typeof caption === 'string',
                  'telia-listItem--caption__dark': color === 'dark',
                })}
              >
                {caption}
              </div>
            )}
          </div>
        )}
        {props.children}
      </InnerTag>
      {'expandedChildren' in props && (
        <div
          className={cn('telia-listItem--expandedChildren', {
            'telia-listItem--expandedChildren__expanded': open,
          })}
        >
          {props.expandedChildren}
        </div>
      )}
    </Tag>
  );
};
