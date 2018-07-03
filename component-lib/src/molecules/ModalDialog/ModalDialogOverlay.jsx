import React from 'react';
import classNames from 'classnames';

const ModalDialogOverlay = ({ active, children, ...rest }) => (
    <div className={classNames('modal-dialog', { 'modal-dialog--active': active })} {...rest}>
        {children}
    </div>
);

export default ModalDialogOverlay;