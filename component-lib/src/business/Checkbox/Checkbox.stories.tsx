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
                    Mixed <br />
                    <Checkbox mixed={true} />
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
                    Disabled and mixed <br />
                    <Checkbox mixed={true} disabled={true} />
                </li>
            </ul>
        </React.Fragment>
    )
})