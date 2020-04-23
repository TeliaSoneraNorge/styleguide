import * as React from 'react';
import classnames from 'classnames';

import Heading from '../../atoms/Heading';
import Button from '../../atoms/Button/Button';

const Menu = ({ children, className, ...rest }) => (
  <>
    <Button text="Default button" icon="map" />
    <Heading
      className={classnames('alert-text', {
        [className]: className,
      })}
      level={2}
      text={children}
      {...rest}
    />
  </>
);

export default Menu;
