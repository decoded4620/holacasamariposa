import { defaultCurrentPageTracker } from "../../app/current-page";
import { openExternalUrlInNewWindow } from "../../components/core/openExternalUrl";

export default function ExternalLinkLinkedInProfile() {
    openExternalUrlInNewWindow(`https://www.linkedin.com/in/heidiannsf/`, defaultCurrentPageTracker.get());
    return null;
}