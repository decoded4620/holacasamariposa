import { defaultCurrentPageTracker } from "../../app/current-page";
import { openExternalUrlInNewWindow } from "../../components/core/openExternalUrl";

export default function ExternalLinkGmail() {
    openExternalUrlInNewWindow(`mailto:hola.casa.mariposa@gmail.com?subject=Casa Mariposa Inquiry&body=Hello Heidi,`, defaultCurrentPageTracker.get());
    return null;
}