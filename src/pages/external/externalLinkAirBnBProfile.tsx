import { defaultCurrentPageTracker } from "../../app/current-page";
import { ExternalUrl } from "../../components/core/types";
import { openExternalUrl } from "../../components/core/openExternalUrl";

export default function ExternalLinkAirBnBProfile() {
    // open the external url in a blank window, and then replace with the current
    // route so we preserve the page we're on without showing a blank react component.
    const externalUrl: ExternalUrl = {
        url: `https://www.airbnb.com/users/show/4635397`,
        target: '_blank',
        currentRoute: defaultCurrentPageTracker.get()
    };

    openExternalUrl(externalUrl);
    return null;
}