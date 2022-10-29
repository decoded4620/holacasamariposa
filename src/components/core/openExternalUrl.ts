import { ExternalUrl } from "./types";

/**
 * Global Function to open an external url
 * @param externalUrl the ExternalUrl descriptor to determine where and how to open the resource.
 */
export const openExternalUrl = (externalUrl: ExternalUrl) => {
  console.log(
    `Redirecting to ${externalUrl.url}, ${externalUrl.target}, preserving route: ${externalUrl.currentRoute}`
  );
  window.open(externalUrl.url, externalUrl.target);

  // When opening the URL in a new window, if a 'current route' is provided, then replace the window location with the old "current route"
  // This scenario is common when using a Route component to perform the exernal URL request, e.g. `MyExternalRoute`. To avoid having a blank page
  // the page is 'refreshed' in the background so the old current route will be present as if no route change took place.
  if (
    externalUrl.target === "_blank" &&
    externalUrl.currentRoute !== undefined
  ) {
    window.location.replace(externalUrl.currentRoute);
  }
};
