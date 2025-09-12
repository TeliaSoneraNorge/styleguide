export const optimizeImageUrl = (imageUrl: string) => {
  let optimizedUrl = imageUrl;
  if (imageUrl.includes('images.ctfassets.net')) {
    let fullUrl = imageUrl;
    if (fullUrl.startsWith('//')) {
      fullUrl = `https:${fullUrl}`;
    }
    const url = new URL(fullUrl);
    url.searchParams.set('w', '88');
    url.searchParams.set('h', '106');
    url.searchParams.set('fit', 'pad');
    url.searchParams.set('fm', 'webp');
    url.searchParams.set('q', '75');
    optimizedUrl = url.toString();
  }
  return optimizedUrl;
};
