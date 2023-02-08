import { defaultCurrentPageTracker } from "../../app/current-page";
import { openExternalUrlWithTarget } from "../../components/core/openExternalUrl";

export default function ExternalLinkFBProfile() {
    openExternalUrlWithTarget(`https://www.facebook.com/hola.casa.mariposa/`, defaultCurrentPageTracker.get());
    return null;
}