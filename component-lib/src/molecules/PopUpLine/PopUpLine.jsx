import React from 'react';

/**
* Status: *in progress*.
 *
 * TODO:
 ** Add a dynamic example to the ModalDialogSamplePage; show information pop-up line after confirmed is clicked in a confirm modal dialog.
*/
const PopUpLine = ({ description, isConfirmationLine, confirmButtonText, cancelButtonText }) => (
    <div className="pop-up-line">
        <div className="pop-up-line__container container container--small">
            <div className="pop-up-line__description">{description}</div>
            {isConfirmationLine &&
                <div className="pop-up-line__buttons">
                    {confirmButtonText && <button className="button button--default">{confirmButtonText}</button>}
                    {cancelButtonText && <button className="button button--cancel">{cancelButtonText}</button>}
                </div>
            }
        </div>
    </div>
);

export default PopUpLine;