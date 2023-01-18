import { defaultCurrentPageTracker } from "../../app/current-page";
import { openExternalUrlInNewWindow } from "../../components/core/openExternalUrl";

export default function ExternalLinkGmail() {
    openExternalUrlInNewWindow(`mailto:hola.casa.mariposa@gmail.com`, defaultCurrentPageTracker.get());
    return null;
}