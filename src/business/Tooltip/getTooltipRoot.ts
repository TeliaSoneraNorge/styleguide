export const getTooltipRoot = () => {
  const className = 'telia-tooltip-root';

  const portalContainer = document.querySelectorAll<HTMLDivElement>(`div[class=${className}]`);
  if (portalContainer && portalContainer.length >= 1) {
    return portalContainer[0];
  } else {
    const element = document.createElement('div');
    element.className = className;
    document.body.appendChild(element);
    return element;
  }
};
