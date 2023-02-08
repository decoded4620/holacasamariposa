import { defaultCurrentPageTracker } from "../../app/current-page";
import { openExternalUrlWithTarget } from "../../components/core/openExternalUrl";

export default function ExternalLinkLinkedInProfile() {
    openExternalUrlWithTarget(`https://www.linkedin.com/in/heidiannsf/`, defaultCurrentPageTracker.get());
    return null;
}