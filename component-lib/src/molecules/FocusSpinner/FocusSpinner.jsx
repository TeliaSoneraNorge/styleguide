import React from 'react';

import FocusBox from '../FocusBox/FocusBox';
import Spinner from '../../atoms/Spinner/Spinner';

const classNames = (additionalClassName, type) =>
    [ 'spinner', `spinner--${type}`, additionalClassName ]
        .filter(cls => !!cls)
        .join(' ');

/**
 * Status: *finished*.
 *
 * Like a FocusBox, but shown before the content is loaded.
 */
const FocusSpinner = ({ className }) =>
    <FocusBox className="focus-spinner">
        <Spinner className="focus-spinner__spinner" />
    </FocusBox>;

export default FocusSpinner;
