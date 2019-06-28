import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Status: *finished*
 * Category: Style
 */
const DescriptionList = ({ children, wrapByTwo, className, ...rest }) => {
  return (
    <dl
      className={classnames('description-list', {
        [className]: className,
        'description-list--wrap description-list--wrap-by-two': wrapByTwo,
      })}
      {...rest}
    >
      {children}
    </dl>
  );
};

DescriptionList.propTypes = {
  /** Pairs of Dt or Dd. */
  children: PropTypes.node,
  /** Whenever should each column contain only two pairs. */
  wrapByTwo: PropTypes.bool,
};

export const Dd = ({ children, className, ...rest }) => (
  <dd
    className={classnames('description-list__details', {
      [className]: className,
    })}
    {...rest}
  >
    {children}
  </dd>
);
export const Dt = ({ children, className, ...rest }) => (
  <dt
    className={classnames('description-list__term', {
      [className]: className,
    })}
    {...rest}
  >
    {children}
  </dt>
);

export default DescriptionList;
