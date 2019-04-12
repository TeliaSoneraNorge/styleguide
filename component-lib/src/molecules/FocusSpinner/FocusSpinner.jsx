import React from 'react';
import PropTypes from 'prop-types';

import FocusBox from '../FocusBox/FocusBox';
import Spinner from '../../atoms/Spinner/Spinner';

/**
 * Status: *finished*.
 * Category: FocusBox
 *
 * Like a FocusBox, but shown before the content is loaded.
 */
const FocusSpinner = ({ type }) =>
    <FocusBox className="focus-spinner">
        <Spinner className="focus-spinner__spinner" type={type} />
    </FocusBox>;
FocusSpinner.propTypes = {
    type: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default FocusSpinner;
