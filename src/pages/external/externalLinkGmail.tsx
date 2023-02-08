import { defaultCurrentPageTracker } from "../../app/current-page";
import { openExternalUrlWithTarget } from "../../components/core/openExternalUrl";

export default function ExternalLinkGmail() {
    openExternalUrlWithTarget(`mailto:hola.casa.mariposa@gmail.com?subject=Casa Mariposa Inquiry&body=Hello Heidi,`, defaultCurrentPageTracker.get());
    return null;
}