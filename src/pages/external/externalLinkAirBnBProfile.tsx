import { defaultCurrentPageTracker } from "../../app/current-page";
import { openExternalUrlWithTarget } from "../../components/core/openExternalUrl";

export default function ExternalLinkAirBnBProfile() {
    openExternalUrlWithTarget(`https://www.airbnb.com/users/show/4635397`, defaultCurrentPageTracker.get());
    return null;
}