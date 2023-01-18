import { defaultCurrentPageTracker } from "../../app/current-page";
import { openExternalUrlInNewWindow } from "../../components/core/openExternalUrl";

export default function ExternalLinkInstagramProfile() {
    openExternalUrlInNewWindow(`https://www.instagram.com/hola.casa.mariposa/`, defaultCurrentPageTracker.get());
    return null;
}