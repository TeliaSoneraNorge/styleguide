import React from 'react';
import classnames from 'classnames';

type DescriptionListProps = {
    children?: React.ReactNode;
    wrapByTwo?: boolean;
};

/**
 * Status: *finished*
 * Category: Style
 */
// @ts-expect-error ts-migrate(2339) FIXME: Property 'className' does not exist on type 'Descr... Remove this comment to see the full error message
const DescriptionList = ({ children, wrapByTwo, className, ...rest }: DescriptionListProps) => {
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

const Dd = ({
  children,
  className,
  ...rest
}: any) => (
  <dd
    className={classnames('description-list__details', {
      [className]: className,
    })}
    {...rest}
  >
    {children}
  </dd>
);

DescriptionList.Dd = Dd;

const Dt = ({
  children,
  className,
  ...rest
}: any) => (
  <dt
    className={classnames('description-list__term', {
      [className]: className,
    })}
    {...rest}
  >
    {children}
  </dt>
);

DescriptionList.Dt = Dt;

export default DescriptionList;
