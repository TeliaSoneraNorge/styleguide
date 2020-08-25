import React from 'react';
import classnames from 'classnames';

type Props = {
    className?: string;
    type?: 'sm' | 'md' | 'lg';
};

/**
 * Status: *in progress*.
 * Category: Loader
 *
 * Future work: Replace it with gif
 *
 */
const Spinner = ({ className, type = 'lg' }: Props) => (
  <div
    className={classnames('spinner', {
      // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
      [className]: className,
      [`spinner--${type}`]: type,
    })}
  >
    <div className="spinner__blade spinner__blade--0" />
    <div className="spinner__blade spinner__blade--1" />
    <div className="spinner__blade spinner__blade--2" />
    <div className="spinner__blade spinner__blade--3" />
    <div className="spinner__blade spinner__blade--4" />
    <div className="spinner__blade spinner__blade--5" />
    <div className="spinner__blade spinner__blade--6" />
    <div className="spinner__blade spinner__blade--7" />
    <div className="spinner__blade spinner__blade--8" />
    <div className="spinner__blade spinner__blade--9" />
    <div className="spinner__blade spinner__blade--10" />
    <div className="spinner__blade spinner__blade--11" />
    <div className="spinner__blade spinner__blade--12" />
    <div className="spinner__blade spinner__blade--13" />
  </div>
);

export default Spinner;
