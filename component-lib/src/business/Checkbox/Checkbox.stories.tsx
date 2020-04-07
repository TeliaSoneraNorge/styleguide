import React from 'react';
import {Checkbox} from './Checkbox';

import { storiesOf } from '@storybook/react';

storiesOf('Business|Checkbox', module).add('default', () => {
    return (
        <React.Fragment>
            <ul>
                <li>
                    Unchecked <br />
                    <Checkbox />
                </li>
                <li>
                    Checked <br />
                    <Checkbox checked={true} />
                </li>
                <li>
                    Partial <br />
                    <Checkbox partial={true} />
                </li>
                <li>
                    Disabled <br />
                    <Checkbox disabled={true} />
                </li>
                <li>
                    Disabled and checked <br />
                    <Checkbox checked={true} disabled={true} />
                </li>
                <li>
                    Disabled and partial <br />
                    <Checkbox partial={true} disabled={true} />
                </li>
            </ul>
        </React.Fragment>
    )
})