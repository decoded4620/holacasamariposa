import { defaultCurrentPageTracker } from "../../app/current-page";
import { openExternalUrlInNewWindow } from "../../components/core/openExternalUrl";

export default function ExternalLinkFBProfile() {
    openExternalUrlInNewWindow(`https://www.facebook.com/hola.casa.mariposa/`, defaultCurrentPageTracker.get());
    return null;
}