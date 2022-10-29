import { defaultCurrentPageTracker } from "../../app/current-page";
import { ExternalUrl } from "../../components/core/types";
import { openExternalUrl } from "../../components/core/openExternalUrl";

export default function ExternalLinkLinkedInProfile() {
    // open the external url in a blank window, and then replace with the current
    // route so we preserve the page we're on without showing a blank react component.
    const externalUrl: ExternalUrl = {
        url: `https://www.linkedin.com/in/heidiannsf/`,
        target: '_blank',
        currentRoute: defaultCurrentPageTracker.get()
    };

    openExternalUrl(externalUrl);
    return null;
}