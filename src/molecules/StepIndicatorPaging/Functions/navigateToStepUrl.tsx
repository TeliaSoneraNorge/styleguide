export const navigateToStepUrl = (url: any) => {
  if (url && url.length > 0) {
    window.location.assign(url);
    return true;
  }
};
