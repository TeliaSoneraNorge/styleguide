import React from 'react';
// import PropTypes from 'prop-types';
import classnames from 'classnames';

import Link from '../Link';
import { LinkProps } from '../Link/Link';
// import SvgIcon from '../../atoms/SvgIcon/SvgIcon';
import { Icon, IconDefinition } from '../Icon';

/**
 * Status: *finished*
 * Category: Lists
 */


export interface ListProps {
  /**
   * Additional classes.
   */
  className?: string;

  /**
   * Whenever this should wrap children by 3 per column.
   */
  wrapByThree?: boolean;

  /**
   * Whenever this should wrap children by 4 per column.
   */
  wrapByFour?: boolean;

  /**
   * Whenever should children be black.
   */
  black?: boolean;

  /**
   * ...
   */
  children?: React.ReactNode;
}

export interface ItemProps {
  children?: any;
}

export interface BubbleLinkProps {
  children?: any;
  href: string;
  icon: IconDefinition;
}

export const List = (props: ListProps) => {

  const { children, className, wrapByThree, wrapByFour, black, ...rest } = props

  // Determine css classes to use based on the children.
  const childrenArray = React.Children.toArray(children);
  const hasBubbleLinks = childrenArray.find((item: any) => item.type === List.Item && item.props.children.type === List.BubbleLink);

  return (
    <ul
      className={classnames('list', {
        'className': className,
        'list--icon-text-links': hasBubbleLinks,
        // 'list--links': hasLinks,
        'list--black': black,
        'list--wrap list--wrap-by-three': wrapByThree,
        'list--wrap list--wrap-by-four': wrapByFour,
      })}
      {...rest}
    >
      {children}
    </ul>
  )
};

const Item = ({ children, ...rest }: ItemProps) => {

  const hasLinks =  children.props ? 
                      children.props.href ? true : false 
                    : false;

  return (
    <li className="list__item" {...rest}>
      {!hasLinks && <Icon icon="check-mark" style={{ position: 'relative', top: '.1rem'}} />}
      {children}
    </li>
  );
}
List.Item = Item;

const BubbleLink = ({ children, href, icon, ...rest }: BubbleLinkProps) => (
  <a href={href}>
    <span className="list__link-bubble">
      <Icon icon={icon} style={{ color: '#FFFFFF' }}  className="list__link-icon" />
    </span>
    <span className="list__link-text">{children}</span>
  </a>
);
List.BubbleLink = BubbleLink;


export default List;


/* const BubbleLink = ({ children, iconName, ...rest }) => (
  <List.Link {...rest}>
    <span className="list__link-bubble">
      <SvgIcon iconName={iconName} color="white" className="list__link-icon" />
    </span>
    <span className="list__link-text">{children}</span>
  </List.Link>
);
List.BubbleLink = BubbleLink;

type ChildrenProps = React.FC & {
  Item: React.ReactNode;
  Link: React.FC<LinkProps>;
  BubbleLink: React.FC<LinkProps & { iconName: string }>;
};

const ListLink = ({ children, className, ...rest }: ListLinkProps) => (
  <Link
    className={classnames('list__link', {
      'className': className,
    })}
    {...rest}
    text={children}
  />
);
List.Link = ListLink; */