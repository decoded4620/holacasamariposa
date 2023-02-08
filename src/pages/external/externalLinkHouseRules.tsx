import { defaultCurrentPageTracker } from "../../app/current-page";
import { openExternalUrlWithTarget } from "../../components/core/openExternalUrl";


export interface HouseRulesProps {
    lang: string;
}
export default function ExternalLinkHouseRules(props: HouseRulesProps) {
    openExternalUrlWithTarget(`https://cdn-casamariposa.s3.us-east-2.amazonaws.com/house_rules_${props.lang}.pdf`, defaultCurrentPageTracker.get(), '_self');
    return null;
}