import React from 'react';
import cn from 'classnames';

type BaseListItemProps = {
  itemName: string;
  decorator?: React.ReactChild;
  description?: string;
  caption?: string | React.ReactChild;
  onClick?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
};

type ListItemModifiers = {
  compact?: boolean;
  card?: boolean;
  underlined?: boolean;
  shadow?: boolean;
  dark?: boolean;
  flat?: boolean;
  none?: boolean;
};

function containsStyleProps(props: ListItemModifiers) {
  return ['compact', 'card', 'underlined', 'shadow', 'dark', 'flat', 'none'].reduce(
    (acc, curr) => acc || curr in props,
    false
  );
}

const BaseListItem = (props: BaseListItemProps & ListItemModifiers) => {
  const context = React.useContext<ListItemModifiers>(ListStyleContext);

  const { decorator, itemName, description, caption, onClick, compact, underlined, card, shadow, dark, flat, none } = {
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
    >
      {decorator && <div className="telia-listItem__decorator">{decorator}</div>}
      <div className="telia-listItem__mainContent">
        <h3 className={cn('telia-listItem__name', { 'telia-listItem__name--dark': dark })}>{itemName}</h3>
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

function propsWithStyle(
  props: ListItemProps | ListCardProps,
  style: ListItemStyle | ListCardStyle
): BaseListItemProps & ListItemModifiers {
  return { ...props, [style]: true };
}

type ListItemStyle = 'dark' | 'flat' | 'underlined' | 'none';
type ListItemProps = BaseListItemProps & {
  style?: ListItemStyle;
  compact?: boolean;
};

export const ListItem = ({ style, ...props }: ListItemProps) => (
  <BaseListItem {...propsWithStyle(props, style as ListItemStyle)} />
);

type ListCardStyle = 'dark' | 'flat' | 'shadow' | 'none';
type ListCardProps = BaseListItemProps & {
  style?: ListCardStyle;
  compact?: boolean;
};

export const ListCard = ({ style, ...props }: ListCardProps) => (
  <BaseListItem {...propsWithStyle(props, style || ('shadow' as ListCardStyle))} card={true} />
);

type ListItemElement = React.ReactElement<ListCardProps | ListItemProps>;

type ListProps = {
  children: ListItemElement | Array<ListItemElement>;
  type?: 'item' | 'card';
  style?: 'dark' | 'flat' | 'underlined' | 'shadow';
};

function listContext(styles: ListItemModifiers, props: ListProps): ListItemModifiers {
  const context: ListItemModifiers = { ...styles };
  if ('type' in props && props.type === 'card') context.card = true;
  if ('style' in props && props.style) context[props.style] = true;
  return context;
}

const ListStyleContext = React.createContext<ListItemModifiers>({});

export const List = ({ children, type, style }: ListProps) => (
  <ListStyleContext.Provider value={listContext({}, { children, type, style })}>
    <section className="telia-list">
      <ul className="telia-list__list">{children}</ul>
    </section>
  </ListStyleContext.Provider>
);

type ListHeadingProps = {
  title: string;
  compact?: boolean;
};
export const ListHeading = ({ title, compact }: ListHeadingProps) => (
  <li
    className={cn('telia-listItem', {
      'telia-listItem--compactHeading': compact,
      'telia-listItem--heading': !compact,
    })}
  >
    <h3 className="telia-listItem__name">{title}</h3>
  </li>
);
