import React from 'react';
import classNames from 'classnames';

const ModalDialogOverlay = ({ onClick, active, children }) => (
    <div className={ classNames('modal-dialog', { 'modal-dialog--active': active })}>
        {children}
    </div>
);

export default ModalDialogOverlay;