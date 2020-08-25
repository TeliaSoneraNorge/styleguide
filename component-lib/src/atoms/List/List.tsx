import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// import { default as Link } from '../../atoms/Link';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

/**
 * Status: *finished*
 * Category: FormElements
 *
 * Standard color is black. Labels used with TextBoxWithLabel, TextAreaWithLabel and DropDownListWithLabel should appear on top of input element and be in grey color.
 */

export const Link = ({
  className,
  text,
  children,
  href,
  icon,
  iconPosition,
  target = '_self',
  ...rest
}: any) => (
  <a
    className={classnames('link', {
      [`link--with-icon link--${icon}`]: icon,
      [`link--icon-${iconPosition}`]: icon && iconPosition,
      [className]: className,
    })}
    href={href}
    target={target}
    {...rest}
  >
    {text}
    {children}
  </a>
);

type ListProps = {
    className?: string;
    wrapByThree?: boolean;
    wrapByFour?: boolean;
    black?: boolean;
};

// @ts-expect-error ts-migrate(2339) FIXME: Property 'children' does not exist on type 'ListPr... Remove this comment to see the full error message
const List = ({ children, className, wrapByThree, wrapByFour, black, ...rest }: ListProps) => {
  // Determine css classes to use based on the children.
  const childrenArray = React.Children.toArray(children);
  const hasBubbleLinks = childrenArray.find(it => it.type === List.Item && it.props.children.type === List.BubbleLink);
  const hasLinks =
    !hasBubbleLinks && childrenArray.find(it => it.type === List.Item && it.props.children.type === List.Link);
  return (
    <ul
      className={classnames('list', {
        // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
        [className]: className,
        'list--icon-text-links': hasBubbleLinks,
        'list--links': hasLinks,
        'list--black': black,
        'list--wrap list--wrap-by-three': wrapByThree,
        'list--wrap list--wrap-by-four': wrapByFour,
      })}
      {...rest}
    >
      {children}
    </ul>
  );
};

const Item = ({
  children,
  ...rest
}: any) => (
  <li className="list__item" {...rest}>
    {children}
  </li>
);
List.Item = Item;

const ListLink = ({
  children,
  className,
  ...rest
}: any) => (
  <Link
    className={classnames('list__link', {
      [className]: className,
    })}
    {...rest}
    text={children}
  />
);
List.Link = ListLink;

const BubbleLink = ({
  children,
  iconName,
  ...rest
}: any) => (
  <List.Link {...rest}>
    <span className="list__link-bubble">
      <SvgIcon iconName={iconName} color="white" className="list__link-icon" />
    </span>
    <span className="list__link-text">{children}</span>
  </List.Link>
);
List.BubbleLink = BubbleLink;

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type '({ ch... Remove this comment to see the full error message
List.BubbleLink.propTypes = {
  /** Url of an icon to use. */
  iconSvg: PropTypes.node,
};

export default List;
