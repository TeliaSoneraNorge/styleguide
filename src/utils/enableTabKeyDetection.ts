/**
 * In accordance with the new Telia Desing System,
 * we only want to display focus styles when the user is tabbing
 * (using the keyboard to navigate).
 *
 * We enable this by setting a classname on the body-element
 * that removes focus style.
 *
 * When the user starts tabbing, we remove the class in order
 * to apply focus style again.
 *
 * For your application to supprt this,
 * call the function at the root of your application.
 * Eg. in index.tsx
 */
export function enableTabKeyDetection() {
  function mouseDownHandler() {
    document.body.classList.add('telia-hide-focus');
    window.removeEventListener('mousedown', mouseDownHandler);
    window.addEventListener('keydown', tabKeyHandler);
  }

  function tabKeyHandler(e: KeyboardEvent) {
    if (e.key === 'Tab') {
      document.body.classList.remove('telia-hide-focus');
      window.removeEventListener('keydown', tabKeyHandler);
      window.addEventListener('mousedown', mouseDownHandler);
    }
  }

  document.body.classList.add('telia-hide-focus');
  window.addEventListener('keydown', tabKeyHandler);
}
