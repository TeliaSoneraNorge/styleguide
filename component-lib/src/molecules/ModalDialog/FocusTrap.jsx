import React from 'react';

const KEY_TAB = 9;
export const focusableElementsSelector = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]';

function FocusTrap({ as, children, onKeyDown, ...otherProps }, ref) {
    const Element = as;
    const handleKeyDown = (event) => {
        const focusableElements = ref.current.querySelectorAll(focusableElementsSelector);

        if (event.keyCode === KEY_TAB) {
            if (event.shiftKey && document.activeElement === focusableElements[0]) {
                event.preventDefault();
                focusableElements[focusableElements.length - 1].focus();
            } else if (document.activeElement === focusableElements[focusableElements.length - 1]) {
                event.preventDefault();
                focusableElements[0].focus();
            }
        }

        if (onKeyDown) onKeyDown(event);
    }

    return (<Element ref={ref} {...otherProps} onKeyDown={handleKeyDown}>
        {children}
    </Element>)
}

const FocusTrapWithForwardRef = React.forwardRef(FocusTrap);

export default FocusTrapWithForwardRef;