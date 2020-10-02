import React from 'react';
import cn from 'classnames';

type BaseListItemProps = {
  itemName: string;
  decorator?: React.ReactChild;
  description?: string;
  caption?: string | React.ReactChild;
};

type ListItemModifiers = {
  compact?: boolean;
  card?: boolean;
  underlined?: boolean;
  shadow?: boolean;
  dark?: boolean;
  flat?: boolean;
};

const BaseListItem = (props: BaseListItemProps & ListItemModifiers) => {
  const context = React.useContext<ListItemModifiers>(ListStyleContext);

  const { decorator, itemName, description, caption, compact, underlined, card, shadow, dark, flat } = {
    ...context,
    ...props,
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
      })}
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

type ListItemStyle = 'dark' | 'flat' | 'underlined';
type ListItemProps = BaseListItemProps & {
  style?: ListItemStyle;
  compact?: boolean;
};

export const ListItem = ({ style, ...props }: ListItemProps) => (
  <BaseListItem {...propsWithStyle(props, style as ListItemStyle)} />
);

type ListCardStyle = 'dark' | 'flat' | 'shadow';
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
      <h2 className="telia-list__title">List title</h2>
      <ul className="telia-list__list">{children}</ul>
    </section>
  </ListStyleContext.Provider>
);
