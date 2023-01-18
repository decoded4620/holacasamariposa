import { defaultCurrentPageTracker } from "../../app/current-page";
import { openExternalUrlInNewWindow } from "../../components/core/openExternalUrl";

export default function ExternalLinkAirBnBProfile() {
    openExternalUrlInNewWindow(`https://www.airbnb.com/users/show/4635397`, defaultCurrentPageTracker.get());
    return null;
}