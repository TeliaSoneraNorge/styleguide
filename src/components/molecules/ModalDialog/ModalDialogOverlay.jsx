import React from 'react';
import classNames from 'classnames';

const ModalDialogOverlay = ({ onClick, active }) => (
    <div
        className={ classNames('modal-dialog', { 'modal-dialog--active': active })}
        onClick={onClick}>
            {this.props.children}
    </div>
);

export default ModalDialogOverlay;