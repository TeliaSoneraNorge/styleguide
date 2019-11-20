import React, { ReactElement } from 'react';
import classnames from 'classnames';

interface Props {
  name?: string;
  hex?: string;
  textColor?: string;
  priority?: string;
  boxShadow?: boolean;
}

const Color: (props: Props) => ReactElement = ({ name, hex, textColor, priority, boxShadow }) => (
  <div className="sg-color">
    <span
      className={classnames(
        'sg-color__circle',
        priority === '1' ? 'sg-color__circle-large' : null,
        priority === '2' ? 'sg-color__circle-medium' : null,
        boxShadow ? 'sg-color__box-shadow' : null
      )}
      style={{ backgroundColor: hex }}
    ></span>
    <div style={{ textAlign: 'center' }} className="sg-color__name">
      {name}
    </div>
    <div style={{ textAlign: 'center' }} className="sg-color__hex">
      {hex}
    </div>
    <p
      className="sg-color__text-color-hint"
      style={{
        backgroundColor: hex,
        color: textColor,
        textAlign: 'center',
      }}
    >
      Text color
    </p>
  </div>
);

export default Color;
