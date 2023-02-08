import { defaultCurrentPageTracker } from "../../app/current-page";
import { openExternalUrlWithTarget } from "../../components/core/openExternalUrl";

export default function ExternalLinkInstagramProfile() {
    openExternalUrlWithTarget(`https://www.instagram.com/hola.casa.mariposa/`, defaultCurrentPageTracker.get());
    return null;
}