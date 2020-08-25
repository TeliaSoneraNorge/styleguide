import React from 'react';

const KEY_TAB = 9;
export const focusableElementsSelector = `
    a[href],
    area[href],
    input:not([disabled]),
    select:not([disabled]),
    textarea:not([disabled]),
    button:not([disabled]),
    [tabindex="0"]
`;

/**
 * Status: *in progress*.
 * Category: Misc
 *
 * Prevents focusing outside the container with using TAB keys
 */
function FocusTrap({
  as,
  children,
  onKeyDown,
  ...otherProps
}: any, ref: any) {
  const Element = as;
  const handleKeyDown = (event: any) => {
    const focusableElements = ref.current.querySelectorAll(focusableElementsSelector);

    if (event.keyCode === KEY_TAB) {
      if (event.shiftKey) {
        if (document.activeElement === focusableElements[0]) {
          event.preventDefault();
          focusableElements[focusableElements.length - 1].focus();
        }
      } else if (document.activeElement === focusableElements[focusableElements.length - 1]) {
        event.preventDefault();
        focusableElements[0].focus();
      }
    }

    if (onKeyDown) onKeyDown(event);
  };

  return (
    <Element ref={ref} {...otherProps} onKeyDown={handleKeyDown}>
      {children}
    </Element>
  );
}

const FocusTrapWithForwardRef = React.forwardRef(FocusTrap);

export default FocusTrapWithForwardRef;
