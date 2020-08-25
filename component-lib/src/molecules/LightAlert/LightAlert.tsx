import React from 'react';
import classnames from 'classnames';
import { Icon } from '../../atoms/Icon/index';
import Heading from '../../atoms/Heading/Heading';
import { colors } from '../../utils/colors';

type Props = {
    title?: string;
    className?: string;
    noMargin?: boolean;
    children?: React.ReactNode;
};

/**
 * Status: *in progress*.
 * Category: Notifications
 */
const LightAlert = ({ title, children, className, noMargin }: Props) => (
  <div
    className={classnames('light-alert', {
      'light-alert--no-margin': noMargin,
      // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
      [className]: className,
    })}
    role="alert"
  >
    <div className="light-alert__content">
      <div className="light-alert__header-container">
        <Heading tag="h2" size="s" text={title} style={{ color: colors.black }} className="light-alert__heading" />
        {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'color' does not exist on type 'Intrinsic... Remove this comment to see the full error message */}
        <Icon icon="info" color={colors.black} className="light-alert__icon" role="presentation" alt="" />
      </div>
      <div className="light-alert__text-container">{children}</div>
    </div>
  </div>
);

export default LightAlert;
