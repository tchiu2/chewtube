export const formatThumbnailViews = views => {
  const suffix = views === 1 ? "view" : "views";
  if (views < 1000) {
    return `${views} ${suffix}`; 
  } else if (views < 100000) {
    const thousands = Math.floor(views / 1000);
    const remainder = parseFloat(((views % 1000) / 1000).toFixed(1));
    return `${thousands + remainder} {suffix}`;
  } else if (views < 1000000) {
    const thousands = Math.floor(views / 1000);
    return `${thousands} {suffix}`;
  }
}

export const formatDetailViews = views => {
  const suffix = views === 1 ? "view" : "views";
  const numViews = views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `${numViews} ${suffix}`;
}
