import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Link } from '../../index';

/**
 * Status: *finished*
 */
const List = ({ children, className, wrapByThree, wrapByFour, black, ...rest }) => {
    // Determine css classes to use based on the children.
    const childrenArray = React.Children.toArray(children);
    const hasBubbleLinks = childrenArray.find(it => it.type === List.Item && it.props.children.type === List.BubbleLink);
    const hasLinks = !hasBubbleLinks && childrenArray.find(it => it.type === List.Item && it.props.children.type === List.Link);
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
            {...rest}>
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

List.Item = ({ children, ...rest }) => (<li className="list__item" {...rest}>{children}</li>);

List.Link = ({ children, className, ...rest }) => (
    <Link
        className={classnames('list__link', {
            [className]: className
        })}
        {...rest}
        text={children} />
);

List.BubbleLink = ({ children, iconSvg, ...rest }) => (
    <List.Link {...rest}>
        <span className="list__link-bubble">
            <i className="list__link-icon">{iconSvg}</i>
        </span>
        <span className="list__link-text">{children}</span>
    </List.Link>
);

List.BubbleLink.propTypes = {
    /** Url of an icon to use. */
    iconSvg: PropTypes.node,
};

export default List;