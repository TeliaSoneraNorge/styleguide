import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// import { default as Link } from '../../atoms/Link';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

/**
 * Status: *finished*
 * Category: Lists
 */

export const Link = ({ className, text, children, href, icon, iconPosition, target = '_self', ...rest }) => (
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

const List = ({ children, className, wrapByThree, wrapByFour, black, ...rest }) => {
  // Determine css classes to use based on the children.
  const childrenArray = React.Children.toArray(children);
  const hasBubbleLinks = childrenArray.find(it => it.type === List.Item && it.props.children.type === List.BubbleLink);
  const hasLinks =
    !hasBubbleLinks && childrenArray.find(it => it.type === List.Item && it.props.children.type === List.Link);
  return (
    <ul
      className={classnames('list', {
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

List.propTypes = {
  /** Additional classes. */
  className: PropTypes.string,
  /** Whenever this should wrap children by 3 per column. */
  wrapByThree: PropTypes.bool,
  /** Whenever this should wrap children by 4 per column. */
  wrapByFour: PropTypes.bool,
  /** Whenever should children be black. */
  black: PropTypes.bool,
};

const Item = ({ children, ...rest }) => (
  <li className="list__item" {...rest}>
    {children}
  </li>
);
List.Item = Item;

const ListLink = ({ children, className, ...rest }) => (
  <Link
    className={classnames('list__link', {
      [className]: className,
    })}
    {...rest}
    text={children}
  />
);
List.Link = ListLink;

const BubbleLink = ({ children, iconName, ...rest }) => (
  <List.Link {...rest}>
    <span className="list__link-bubble">
      <SvgIcon iconName={iconName} color="white" className="list__link-icon" />
    </span>
    <span className="list__link-text">{children}</span>
  </List.Link>
);
List.BubbleLink = BubbleLink;

List.BubbleLink.propTypes = {
  /** Url of an icon to use. */
  iconSvg: PropTypes.node,
};

export default List;
