import React from 'react';

import FocusBox from '../FocusBox/FocusBox';
import Spinner from '../../atoms/Spinner/Spinner';

type Props = {
    type?: 'sm' | 'md' | 'lg';
};

/**
 * Status: *finished*.
 * Category: FocusBox
 *
 * Like a FocusBox, but shown before the content is loaded.
 */
const FocusSpinner = ({ type }: Props) => (
  <FocusBox className="focus-spinner">
    <Spinner className="focus-spinner__spinner" type={type} />
  </FocusBox>
);

export default FocusSpinner;
