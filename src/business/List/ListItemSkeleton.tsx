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

  return (
    <li
      className={cn('telia-listItem telia-listItem--skeleton ', {
        'telia-listItem--compact': compact,
        'telia-listItem--card': type === 'card',
        'telia-listItem--underlined': border === 'underlined',
        'telia-listItem--shadow': border === 'shadow',
        'telia-listItem--dark': color === 'dark',
        'telia-listItem--medium': color === 'medium',
        'telia-listItem--noBG': color !== 'dark' && color !== 'medium',
      })}
    >
      <div className="telia-listItem__mainWrapper">
        <div className="telia-listItem__main">
          {decorator && (
            <div className="telia-listItem__decorator">
              <div>&nbsp;</div>
            </div>
          )}
          <div className="telia-listItem__content">
            <h3 className={cn('telia-listItem__name', { 'telia-listItem__name--dark': color === 'dark' })}>
              <div>&nbsp;</div>
            </h3>
            {description && (
              <div
                className={cn('telia-listItem__description', {
                  'telia-listItem__description--dark': color === 'dark',
                })}
              >
                <div>&nbsp;</div>
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
              <div>&nbsp;</div>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};
