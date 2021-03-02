import * as React from 'react';
import cn from 'classnames';
import { ListStyleContext, ListStyle } from './utils';

export type ListItemProps = {
  /**
   * @default true
   */
  label?: boolean;
  /**
   * @default true
   */
  decorator?: boolean;
  /**
   * @default true
   */
  description?: boolean;
  /**
   * @default false
   */
  caption?: boolean;
  compact?: boolean;
  tag?: 'div' | 'li';
} & ListStyle;

/**
 * A copy of ListResultCard without all the props and logic, but with the markup and css-classes.
 * Some props are still needed to mimic the layout of the ListResultCard.
 * Used to show a skeleton of the ListResultCard when loading data.
 */
export const ListItemSkeleton = (props: ListItemProps) => {
  const listStyle = React.useContext(ListStyleContext);
  const { label = true, decorator = true, description = true, caption, compact, ...listItemStyle } = props;

  // Inherit List style from context, override with individual style from props.
  const { border, color, type } = { ...listStyle, ...listItemStyle };

  const Tag = props.tag ?? 'li';

  return (
    <Tag
      className={cn('telia-listItem telia-listItem--skeleton ', {
        'telia-listItem__card': type === 'card',
        'telia-listItem__underlined': border === 'underlined',
        'telia-listItem__outlined': border === 'outlined',
        'telia-listItem__dark': color === 'dark',
        'telia-listItem__medium': color === 'medium',
        'telia-listItem__noBG': color !== 'dark' && color !== 'medium',
      })}
    >
      <div className={cn('telia-listItem--mainWrapper', { 'telia-listItem__compact': compact })}>
        <div className="telia-listItem--main">
          {decorator && (
            <div className="telia-listItem--decorator">
              <div>&nbsp;</div>
            </div>
          )}
          <div className="telia-listItem--content">
            <h3 className={cn('telia-listItem--name', { 'telia-listItem--name__dark': color === 'dark' })}>
              <div>&nbsp;</div>
            </h3>
            {description && (
              <div
                className={cn('telia-listItem--description', {
                  'telia-listItem--description__dark': color === 'dark',
                })}
              >
                <div>&nbsp;</div>
              </div>
            )}
          </div>
          {caption && (
            <div
              className={cn('telia-listItem--caption', {
                'telia-listItem--caption--text': typeof caption === 'string',
                'telia-listItem--caption__dark': color === 'dark',
              })}
            >
              <div>&nbsp;</div>
            </div>
          )}
        </div>
      </div>
    </Tag>
  );
};
