import React from 'react';
import { storiesOf } from '@storybook/react';

import { Toggle } from '../../src/business/Toggle';

storiesOf('Business|Toggle', module)
    .add('default', () => <Toggle checked={false} />)
    .add('checked', () => <Toggle checked={true} />);
