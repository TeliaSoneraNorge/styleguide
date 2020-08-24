export const getModalRoot = () => {
  const className = 'Telia-styleguide-modal-root';

  const portalContainer = document.querySelectorAll<HTMLDivElement>(`div[class=${className}]`);
  if (portalContainer && !!portalContainer.length) {
    return portalContainer[0];
  } else {
    const element = document.createElement('div');
    element.className = className;
    document.body.appendChild(element);
    return element;
  }
};
