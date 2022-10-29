import React from "react";
import { defaultCurrentPageTracker, CurrentPageTracker } from "../app/current-page";
import { ExternalUrl } from "../components/core/types";
import { openExternalUrl } from "../components/core/openExternalUrl";


export interface RedirectPageProps {
    redirectUrl: string;
    target?:string;
    currentPageTracker: CurrentPageTracker;
}

export default class ExternalUrlRoute extends React.Component {
    constructor(public props: RedirectPageProps) {
        super(props);
    }

    render(): React.ReactNode {
        const extUrl: ExternalUrl = {
            url: this.props.redirectUrl,
            target: this.props.target ?? '_blank',
            currentRoute: this.props.currentPageTracker.get()
        }
       
        openExternalUrl(extUrl);
        return null;
    }
}