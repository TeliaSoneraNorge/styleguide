import React from 'react';
import { Tooltip } from '@telia/styleguide';

const ComplexContent = () => (
  <Tooltip isExpanded>
    <div>
      Tooltip content might be:
      <ul>
        <li>A simple text string</li>
        <li>A complex Node as in this example</li>
      </ul>
    </div>
  </Tooltip>
);

export default ComplexContent;
