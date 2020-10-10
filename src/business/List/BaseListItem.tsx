import React from 'react';
import cn from 'classnames';

export type BaseListItemProps = {
  label: string;
  decorator?: React.ReactChild;
  description?: string;
  caption?: string | React.ReactChild;
  onClick?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
};

export type ListItemModifiers = {
  compact?: boolean;
  card?: boolean;
  underlined?: boolean;
  shadow?: boolean;
  dark?: boolean;
  flat?: boolean;
  none?: boolean;
};

export const ListStyleContext = React.createContext<ListItemModifiers>({});

function containsStyleProps(props: ListItemModifiers) {
  return ['compact', 'card', 'underlined', 'shadow', 'dark', 'flat', 'none'].reduce(
    (acc, curr) => acc || curr in props,
    false
  );
}

export const BaseListItem = (props: BaseListItemProps & ListItemModifiers) => {
  const context = React.useContext<ListItemModifiers>(ListStyleContext);

  // Allows setting style on the List component instead of individual list items.
  // See ContextProvider in List.tsx
  const { decorator, label, description, caption, onClick, compact, underlined, card, shadow, dark, flat, none } = {
    ...(containsStyleProps(props) ? props : { ...props, ...context }),
  };
  return (
    <li
      className={cn('telia-listItem', {
        'telia-listItem--compact': compact,
        'telia-listItem--underlined': underlined,
        'telia-listItem--card': card,
        'telia-listItem--shadow': shadow,
        'telia-listItem--dark': dark,
        'telia-listItem--flat': flat,
        'telia-listItem--noBG': none || (!dark && !flat),
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
