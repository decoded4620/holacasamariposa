import React from "react";
import { NavigateFunction } from "react-router-dom";
import { I18NData_IPage } from "../components/core/i18n/types";
import ApplicationContext, { defaultApplicationCtx, ReactApplicationContext } from "./application-ctx";

export interface BasePageProps {
    pageRoute:string;
    maxMobileViewWidth:number;
    pageTranslations?: I18NData_IPage;
    navigate: NavigateFunction;
}

/**
 * Page Functionality for all Site Content Pages. These page objects
 * require having a PageManagerContext set in order for each route to announce itself for tracking purpose.
 */
export default abstract class BasePage extends React.Component {
    static contextType = ReactApplicationContext;

    protected appCtx: ApplicationContext = defaultApplicationCtx;


    constructor(public props: BasePageProps) {
        super(props);
    }

    componentDidMount() {
        this.appCtx = this.context as ApplicationContext;

        // ensure we store the current page so the sitePageManager can track it.
        this.appCtx.currentPageTracker.set(this.props.pageRoute);
        this.appCtx.currentPageProps = {
            topContentHeight: this.getTopContentHeight(),
        };
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        this.appCtx.currentPageProps = {
            topContentHeight: this.getTopContentHeight(),
        };
    }



    public abstract getTopContentHeight(): number;

    public abstract render(): React.ReactNode;
}